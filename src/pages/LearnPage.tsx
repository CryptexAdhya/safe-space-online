import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Shield, Cpu, Layers, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Link } from "react-router-dom";
import { threats, safetyPractices, advancedConcepts, frameworkConcepts } from "@/data/learnData";
import type { ThreatInfo } from "@/data/learnData";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const tabs = [
  { id: "intro", label: "Introduction", icon: BookOpen },
  { id: "threats", label: "Scams & Threats", icon: Shield },
  { id: "safety", label: "Safety Tips", icon: Shield },
  { id: "advanced", label: "Advanced", icon: Cpu },
  { id: "frameworks", label: "Frameworks", icon: Layers },
] as const;

type TabId = (typeof tabs)[number]["id"];

const ThreatDetail = ({ threat, onClose }: { threat: ThreatInfo; onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 8 }}
    className="rounded-xl border border-border bg-card p-6 shadow-elevated"
  >
    <div className="flex items-start justify-between mb-4">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
          <threat.icon className="h-5 w-5 text-primary" />
        </div>
        <h3 className="font-display text-xl font-bold text-foreground">{threat.name}</h3>
      </div>
      <button onClick={onClose} className="rounded-lg p-1 text-muted-foreground hover:bg-secondary">
        <X className="h-5 w-5" />
      </button>
    </div>

    <p className="text-sm text-muted-foreground mb-4">{threat.meaning}</p>

    <div className="space-y-4">
      <div className="rounded-lg bg-secondary/50 p-4">
        <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Real-Life Example</h4>
        <p className="text-sm text-foreground italic">"{threat.example}"</p>
      </div>

      <div>
        <h4 className="text-xs font-bold uppercase tracking-wider text-warning mb-2">⚠️ Warning Signs</h4>
        <ul className="space-y-1">
          {threat.warningSigns.map((s, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" /> {s}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-xs font-bold uppercase tracking-wider text-safe mb-2">✅ What To Do</h4>
        <ul className="space-y-1">
          {threat.whatToDo.map((s, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-safe" /> {s}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-2">🛡️ How To Stay Safe</h4>
        <ul className="space-y-1">
          {threat.howToStaySafe.map((s, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" /> {s}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </motion.div>
);

const LearnPage = () => {
  const [activeTab, setActiveTab] = useState<TabId>("intro");
  const [selectedThreat, setSelectedThreat] = useState<ThreatInfo | null>(null);

  return (
    <div className="container max-w-3xl py-8">
      <Link
        to="/"
        className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
      >
        <ChevronLeft className="h-4 w-4" /> Back to Home
      </Link>

      <h1 className="mb-2 font-display text-3xl font-bold text-foreground">
        Learn Cybersecurity
      </h1>
      <p className="mb-8 text-base text-muted-foreground">
        Simple, beginner-friendly lessons to help you stay safe online.
      </p>

      {/* Tab navigation */}
      <div className="mb-8 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => { setActiveTab(t.id); setSelectedThreat(null); }}
            className={`flex shrink-0 items-center gap-1.5 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
              activeTab === t.id
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            <t.icon className="h-4 w-4" />
            {t.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <AnimatePresence mode="wait">
        {activeTab === "intro" && (
          <motion.div key="intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <h2 className="font-display text-xl font-bold text-foreground mb-3">What is Cybersecurity?</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Cybersecurity means <strong>staying safe while using phones, apps, websites, email, and social media</strong>. Just like you lock your doors at home, cybersecurity is about locking your digital life to keep bad people out.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <h2 className="font-display text-xl font-bold text-foreground mb-3">Why Does It Matter?</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  "We use the internet for banking, shopping, and communication every day",
                  "Hackers and scammers are getting smarter and more creative",
                  "One mistake can lead to loss of money, privacy, or identity",
                  "Learning basic safety habits can protect you and your family",
                  "You don't need to be a tech expert — simple awareness goes a long way",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-safe" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}

        {activeTab === "threats" && (
          <motion.div key="threats" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <AnimatePresence mode="wait">
              {selectedThreat ? (
                <ThreatDetail key="detail" threat={selectedThreat} onClose={() => setSelectedThreat(null)} />
              ) : (
                <motion.div key="grid" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid gap-3 sm:grid-cols-2">
                  {threats.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setSelectedThreat(t)}
                      className="group flex items-start gap-3 rounded-lg border border-border bg-card p-4 text-left shadow-card transition-all hover:shadow-elevated hover:border-primary/30"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <t.icon className="h-4.5 w-4.5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                          {t.name}
                        </h3>
                        <p className="mt-0.5 line-clamp-2 text-xs text-muted-foreground">{t.meaning}</p>
                      </div>
                      <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground/50 group-hover:text-primary transition-colors" />
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}

        {activeTab === "safety" && (
          <motion.div key="safety" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Accordion type="single" collapsible className="space-y-2">
              {safetyPractices.map((p, i) => (
                <AccordionItem key={i} value={`safety-${i}`} className="rounded-lg border border-border bg-card px-5 shadow-card">
                  <AccordionTrigger className="py-4 text-left font-display text-sm font-bold text-foreground hover:no-underline">
                    {p.title}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <p className="text-sm text-muted-foreground mb-3">{p.description}</p>
                    <ul className="space-y-1.5">
                      {p.tips.map((tip, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-safe" /> {tip}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        )}

        {activeTab === "advanced" && (
          <motion.div key="advanced" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-3">
            {advancedConcepts.map((c, i) => (
              <div key={i} className="rounded-lg border border-border bg-card p-5 shadow-card">
                <h3 className="font-display text-sm font-bold text-foreground mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{c.simpleExplanation}</p>
                <p className="text-xs text-primary font-medium">💡 Why it matters: {c.whyItMatters}</p>
              </div>
            ))}
          </motion.div>
        )}

        {activeTab === "frameworks" && (
          <motion.div key="frameworks" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Accordion type="single" collapsible className="space-y-2">
              {frameworkConcepts.map((f, i) => (
                <AccordionItem key={i} value={`fw-${i}`} className="rounded-lg border border-border bg-card px-5 shadow-card">
                  <AccordionTrigger className="py-4 text-left font-display text-sm font-bold text-foreground hover:no-underline">
                    {f.title}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <p className="text-sm text-muted-foreground mb-3">{f.simpleExplanation}</p>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Key Points</h4>
                    <ul className="space-y-1.5">
                      {f.keyPoints.map((kp, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" /> {kp}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LearnPage;
