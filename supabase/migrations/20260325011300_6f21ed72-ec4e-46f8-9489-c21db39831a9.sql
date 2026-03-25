-- Drop the single_row constraint so lock rows (id=2) can be inserted
ALTER TABLE public.threat_cache DROP CONSTRAINT single_row;

-- Create rate_limits table for database-backed rate limiting
CREATE TABLE public.rate_limits (
  ip_address text NOT NULL,
  endpoint text NOT NULL,
  request_time timestamp with time zone NOT NULL DEFAULT now(),
  PRIMARY KEY (ip_address, endpoint, request_time)
);

-- Enable RLS
ALTER TABLE public.rate_limits ENABLE ROW LEVEL SECURITY;

-- Only service_role can read/write rate_limits
CREATE POLICY "Service role only" ON public.rate_limits FOR ALL TO service_role USING (true) WITH CHECK (true);

-- Create index for efficient cleanup and lookups
CREATE INDEX idx_rate_limits_lookup ON public.rate_limits (ip_address, endpoint, request_time DESC);

-- Create a function to check and record rate limit
CREATE OR REPLACE FUNCTION public.check_rate_limit(
  p_ip text,
  p_endpoint text,
  p_window_seconds int DEFAULT 60,
  p_max_requests int DEFAULT 10
)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  recent_count int;
BEGIN
  -- Clean old entries for this IP/endpoint
  DELETE FROM public.rate_limits 
  WHERE ip_address = p_ip AND endpoint = p_endpoint 
    AND request_time < now() - (p_window_seconds || ' seconds')::interval;
  
  -- Count recent requests
  SELECT count(*) INTO recent_count
  FROM public.rate_limits
  WHERE ip_address = p_ip AND endpoint = p_endpoint
    AND request_time > now() - (p_window_seconds || ' seconds')::interval;
  
  -- If under limit, record and allow
  IF recent_count < p_max_requests THEN
    INSERT INTO public.rate_limits (ip_address, endpoint) VALUES (p_ip, p_endpoint);
    RETURN false; -- not limited
  END IF;
  
  RETURN true; -- rate limited
END;
$$;