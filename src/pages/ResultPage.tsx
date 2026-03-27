import { useLocation, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle, ShieldAlert, CheckCircle, BookOpen,
  ChevronLeft, Eye, Zap, Phone, Lightbulb, HelpCircle, Loader2,
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import FollowUpChat from "@/components/FollowUpChat";

interface AnalysisResult {
  title: string;
  term: string;
  sections: { key: string; title: string; items: string[] }[];
}

const sectionMeta: Record<string, { icon: React.ReactNode; color: string }> = {
  what_happening: { icon: <HelpCircle className="h-5 w-5" />, color: "text-primary" },
  red_flags: { icon: <AlertTriangle className="h-5 w-5" />, color: "text-warning" },
  why_dangerous: { icon: <ShieldAlert className="h-5 w-5" />, color: "text-destructive" },
  what_to_do: { icon: <CheckCircle className="h-5 w-5" />, color: "text-safe" },
  where_report: { icon: <Phone className="h-5 w-5" />, color: "text-primary" },
  prevention: { icon: <Lightbulb className="h-5 w-5" />, color: "text-safe" },
};

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = (location.state as { problem?: string })?.problem || "";
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!query) {
      navigate("/", { replace: true });
      return;
    }

    const fetchAnalysis = async () => {
      setLoading(true);
      setError(null);
      try {
        const { data, error: fnError } = await supabase.functions.invoke("analyze-problem", {
          body: { problem: query },
        });
        if (fnError) throw fnError;
        if (data?.error) throw new Error(data.error);
        setAnalysis(data);
      } catch (e) {
        console.error("Analysis error:", e);
        setError("Could not analyze your problem right now. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchAnalysis();
  }, [query, navigate]);

  return (
    <div className="container max-w-2xl py-8">
      <Link
        to="/"
        className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
      >
        <ChevronLeft className="h-4 w-4" /> Back to Home
      </Link>

      {/* User query */}
      {query && (
        <div className="mb-6 rounded-lg border border-border bg-secondary/50 p-4">
          <p className="text-xs font-medium text-muted-foreground mb-1">Your concern:</p>
          <p className="font-body text-sm text-foreground">"{query}"</p>
        </div>
      )}

      {loading && (
        <div className="flex flex-col items-center justify-center py-16 gap-4">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-sm text-muted-foreground">Analyzing your problem...</p>
        </div>
      )}

      {error && (
        <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-6 text-center">
          <AlertTriangle className="mx-auto h-8 w-8 text-destructive mb-3" />
          <p className="text-sm text-destructive font-medium">{error}</p>
        </div>
      )}

      {analysis && !loading && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Title */}
          <div className="mb-2 flex items-start gap-3">
            <Eye className="mt-1 h-6 w-6 shrink-0 text-warning" />
            <div>
              <h1 className="font-display text-2xl font-bold text-foreground">{analysis.title}</h1>
              <p className="mt-1 text-sm text-muted-foreground">
                This is often called <span className="font-semibold text-primary">{analysis.term}</span>
              </p>
            </div>
          </div>

          {/* Sections */}
          <div className="mt-8 space-y-4">
            {analysis.sections.map((s, i) => {
              const meta = sectionMeta[s.key] || { icon: <HelpCircle className="h-5 w-5" />, color: "text-primary" };
              return (
                <motion.div
                  key={s.key}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-lg border border-border bg-card p-5 shadow-card"
                >
                  <div className={`flex items-center gap-2 mb-3 ${meta.color}`}>
                    {meta.icon}
                    <h3 className="font-display text-base font-bold">{s.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {s.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-border" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

          {/* Learn more link */}
          <div className="mt-8 rounded-lg border border-border bg-card p-5 shadow-card">
            <div className="flex items-center gap-2 text-primary mb-2">
              <BookOpen className="h-5 w-5" />
              <h3 className="font-display text-base font-bold">Learn More</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Want to understand more about this type of threat and how to protect yourself?
            </p>
            <Link
              to="/learn"
              className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
            >
              Explore our learning guides <Zap className="h-3.5 w-3.5" />
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ResultPage;
