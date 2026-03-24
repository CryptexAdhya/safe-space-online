import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp, AlertTriangle, Shield, ChevronRight, ChevronDown, ChevronUp,
  Loader2, RefreshCw, Users, Globe, Eye,
} from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";

interface Threat {
  rank: number;
  name: string;
  description: string;
  real_world_example: string;
  how_it_works: string;
  warning_signs: string[];
  what_to_do: string[];
  risk_level: string;
  trend: string;
  affected_countries: string[];
  victims_profile: string;
}

interface ThreatData {
  last_updated: string;
  threats: Threat[];
}

const riskColor: Record<string, string> = {
  "Very High": "text-destructive bg-destructive/10 border-destructive/20",
  "High": "text-warning bg-warning/10 border-warning/20",
  "Medium": "text-primary bg-primary/10 border-primary/20",
};

const trendBadge: Record<string, string> = {
  "Rising Fast": "bg-destructive/10 text-destructive",
  "Rising": "bg-warning/10 text-warning",
  "Most Common": "bg-destructive/10 text-destructive",
  "Very Common": "bg-primary/10 text-primary",
};

const ThreatCard = ({ threat, index }: { threat: Threat; index: number }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
      className="rounded-lg border border-border bg-card shadow-card overflow-hidden"
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-5 text-left"
      >
        <div className="flex items-start gap-4">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary font-display text-sm font-bold text-foreground">
            #{threat.rank}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <h3 className="font-display text-base font-bold text-foreground">
                {threat.name}
              </h3>
              <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${trendBadge[threat.trend] || "bg-muted text-muted-foreground"}`}>
                {threat.trend}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">{threat.description}</p>
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <span className={`rounded-full border px-2 py-0.5 text-[11px] font-bold ${riskColor[threat.risk_level] || ""}`}>
                {threat.risk_level} Risk
              </span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Users className="h-3 w-3" /> {threat.victims_profile}
              </span>
            </div>
          </div>
          <div className="shrink-0 mt-1 text-muted-foreground">
            {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </div>
        </div>
      </button>

      {expanded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="border-t border-border px-5 pb-5 pt-4 space-y-4"
        >
          {/* Real-world example */}
          <div className="rounded-md border border-destructive/20 bg-destructive/5 p-3">
            <p className="text-xs font-bold text-destructive mb-1 flex items-center gap-1">
              <Globe className="h-3 w-3" /> Real-World Incident
            </p>
            <p className="text-sm text-foreground">{threat.real_world_example}</p>
          </div>

          {/* How it works */}
          <div>
            <p className="text-xs font-bold text-foreground mb-1.5 flex items-center gap-1">
              <Eye className="h-3 w-3 text-primary" /> How It Works
            </p>
            <p className="text-sm text-muted-foreground">{threat.how_it_works}</p>
          </div>

          {/* Warning signs */}
          <div>
            <p className="text-xs font-bold text-warning mb-1.5 flex items-center gap-1">
              <AlertTriangle className="h-3 w-3" /> Warning Signs
            </p>
            <ul className="space-y-1">
              {threat.warning_signs.map((sign, j) => (
                <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" />
                  {sign}
                </li>
              ))}
            </ul>
          </div>

          {/* What to do */}
          <div>
            <p className="text-xs font-bold text-safe mb-1.5 flex items-center gap-1">
              <Shield className="h-3 w-3" /> What To Do
            </p>
            <ul className="space-y-1">
              {threat.what_to_do.map((action, j) => (
                <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-safe" />
                  {action}
                </li>
              ))}
            </ul>
          </div>

          {/* Affected regions */}
          <div className="flex flex-wrap gap-1.5">
            {threat.affected_countries.map((c) => (
              <span key={c} className="rounded-full bg-secondary px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
                {c}
              </span>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

const TrendingThreatsPage = () => {
  const [data, setData] = useState<ThreatData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchThreats = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data: result, error: fnError } = await supabase.functions.invoke("trending-threats");
      if (fnError) throw fnError;
      if (result?.error) throw new Error(result.error);
      setData(result);
    } catch (e) {
      console.error("Trending threats error:", e);
      setError("Could not load trending threats. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchThreats();
  }, []);

  return (
    <div className="container max-w-3xl py-8 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="mb-8 text-center">
          <div className="mb-3 flex items-center justify-center gap-2">
            <TrendingUp className="h-7 w-7 text-destructive" />
          </div>
          <h1 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            Trending Cyber Threats
          </h1>
          <p className="mt-2 text-base text-muted-foreground">
            Real-world cybercrimes happening right now. Updated with the latest incidents and data.
          </p>
          {data?.last_updated && (
            <p className="mt-1 text-xs text-muted-foreground">
              Last updated: {data.last_updated}
            </p>
          )}
        </div>

        {/* Alert banner */}
        <div className="mb-6 rounded-lg border border-warning/30 bg-warning/5 p-4 flex items-start gap-3">
          <AlertTriangle className="h-5 w-5 text-warning mt-0.5 shrink-0" />
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Live threat intelligence.</span> These are real cybercrimes actively affecting people worldwide. Tap any threat to see real incidents, warning signs, and what to do.
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="text-sm text-muted-foreground">Fetching latest threat intelligence...</p>
          </div>
        )}

        {/* Error */}
        {error && !loading && (
          <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-8 text-center">
            <AlertTriangle className="mx-auto h-8 w-8 text-destructive mb-3" />
            <p className="text-sm text-destructive font-medium mb-4">{error}</p>
            <Button onClick={fetchThreats} variant="outline" className="gap-2">
              <RefreshCw className="h-4 w-4" /> Try Again
            </Button>
          </div>
        )}

        {/* Threats list */}
        {data && !loading && (
          <>
            <div className="space-y-3">
              {data.threats.map((threat, i) => (
                <ThreatCard key={threat.rank} threat={threat} index={i} />
              ))}
            </div>

            {/* Refresh */}
            <div className="mt-6 text-center">
              <Button onClick={fetchThreats} variant="outline" size="sm" className="gap-2">
                <RefreshCw className="h-3.5 w-3.5" /> Refresh Threats
              </Button>
            </div>
          </>
        )}

        {/* Bottom CTAs */}
        <div className="mt-10 space-y-3">
          <Link
            to="/"
            className="group flex items-center justify-between rounded-lg border border-border bg-card p-5 shadow-card transition-all hover:border-primary/30 hover:shadow-elevated"
          >
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-primary" />
              <div>
                <p className="font-display text-sm font-bold text-foreground">Facing a problem right now?</p>
                <p className="text-xs text-muted-foreground">Describe it and get instant AI help</p>
              </div>
            </div>
            <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/learn"
            className="group flex items-center justify-between rounded-lg border border-border bg-card p-5 shadow-card transition-all hover:border-primary/30 hover:shadow-elevated"
          >
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-safe" />
              <div>
                <p className="font-display text-sm font-bold text-foreground">Learn how to stay safe</p>
                <p className="text-xs text-muted-foreground">Beginner-friendly cybersecurity lessons</p>
              </div>
            </div>
            <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default TrendingThreatsPage;
