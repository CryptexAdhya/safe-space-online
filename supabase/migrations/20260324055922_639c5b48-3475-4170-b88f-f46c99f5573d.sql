CREATE TABLE public.threat_cache (
  id integer PRIMARY KEY DEFAULT 1,
  data jsonb NOT NULL,
  fetched_at timestamp with time zone NOT NULL DEFAULT now(),
  CONSTRAINT single_row CHECK (id = 1)
);

ALTER TABLE public.threat_cache ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read" ON public.threat_cache FOR SELECT TO anon, authenticated USING (true);
