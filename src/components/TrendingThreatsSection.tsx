import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  TrendingUp, AlertTriangle, RefreshCw, Loader2, ChevronRight, Radio,
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";

interface Threat {
  rank: number;
  name: string;
  description: string;
  risk_level: string;
  trend: string;
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

const TrendingThreatsSection = () => {
  const [data, setData] = useState<ThreatData | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchThreats = async (force = false) => {
    if (force) setRefreshing(true); else setLoading(true);
    setError(null);
    try {
      const { data: result, error: fnError } = await supabase.functions.invoke(
        "trending-threats",
        { body: force ? { force: true } : {} },
      );
      if (fnError) throw fnError;
      if (result?.error) throw new Error(result.error);
      setData(result);
    } catch (e) {
      console.error("Trending threats error:", e);
      setError("Could not load live threats.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchThreats();
    // Auto-refresh every hour while page is open
    const id = setInterval(() => fetchThreats(true), 60 * 60 * 1000);
    return () => clearInterval(id);
  }, []);

  const top = data?.threats?.slice(0, 5) ?? [];

  return (
    <section className="container">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mx-auto max-w-2xl"
      >
        <div className="overflow-hidden rounded-xl border-2 border-destructive/30 bg-gradient-to-br from-destructive/10 via-card to-card shadow-elevated">
          {/* Header */}
          <div className="flex items-start justify-between gap-3 border-b border-destructive/20 bg-destructive/5 p-5">
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-destructive/15">
                <TrendingUp className="h-6 w-6 text-destructive" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="font-display text-xl font-bold text-foreground">
                    Trending Threats
                  </h2>
                  <span className="inline-flex items-center gap-1 rounded-full bg-destructive/15 px-2 py-0.5 text-[10px] font-bold uppercase text-destructive">
                    <Radio className="h-3 w-3 animate-pulse" /> Live
                  </span>
                </div>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  Real cyber attacks happening right now — updated hourly.
                </p>
              </div>
            </div>
            <button
              onClick={() => fetchThreats(true)}
              disabled={refreshing || loading}
              className="rounded-lg border border-border bg-card p-2 text-muted-foreground transition-colors hover:text-foreground disabled:opacity-50"
              aria-label="Refresh threats"
            >
              <RefreshCw className={`h-4 w-4 ${refreshing ? "animate-spin" : ""}`} />
            </button>
          </div>

          {/* Body */}
          <div className="p-4">
            {loading && (
              <div className="flex items-center justify-center gap-2 py-8 text-sm text-muted-foreground">
                <Loader2 className="h-4 w-4 animate-spin" /> Fetching latest threats...
              </div>
            )}

            {error && !loading && (
              <div className="flex items-center gap-2 rounded-md border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive">
                <AlertTriangle className="h-4 w-4" /> {error}
              </div>
            )}

            {!loading && !error && top.length > 0 && (
              <ul className="divide-y divide-border">
                {top.map((t) => (
                  <li key={t.rank} className="flex items-start gap-3 py-3">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-secondary font-display text-xs font-bold text-foreground">
                      {t.rank}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="font-display text-sm font-bold text-foreground">
                          {t.name}
                        </p>
                        <span className={`rounded-full border px-1.5 py-0.5 text-[10px] font-bold ${riskColor[t.risk_level] || ""}`}>
                          {t.risk_level}
                        </span>
                      </div>
                      <p className="mt-0.5 line-clamp-2 text-xs text-muted-foreground">
                        {t.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            <Link
              to="/trending"
              className="mt-3 flex items-center justify-between rounded-lg bg-destructive px-4 py-3 font-display text-sm font-semibold text-destructive-foreground transition-colors hover:bg-destructive/90"
            >
              See all trending threats
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default TrendingThreatsSection;
