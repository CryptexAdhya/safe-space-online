import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, Shield, BookOpen, ChevronRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/data/faqData";

const placeholders = [
  "Someone asked me for my OTP",
  "My Instagram account was hacked",
  "I clicked a suspicious link",
  "I lost money to an online scam",
  "Someone is threatening me online",
];

const Index = () => {
  const [problem, setProblem] = useState("");
  const [placeholderIdx, setPlaceholderIdx] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!problem.trim()) return;
    navigate('/result', { state: { problem: problem.trim() } });
  };

  return (
    <div className="flex flex-col gap-12 pb-16">
      {/* HERO */}
      <section className="container pt-8 md:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl"
        >
          <div className="mb-6 flex items-center justify-center gap-2">
            <ShieldCheck className="h-8 w-8 text-primary" />
          </div>
          <h1 className="mb-3 text-center font-display text-3xl font-bold leading-tight text-foreground md:text-4xl">
            Describe Your Problem
          </h1>
          <p className="mb-8 text-center text-base text-muted-foreground md:text-lg">
            Tell us what happened online, and we'll help you understand it.
          </p>

          {/* Input Card */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-hero">
            <textarea
              value={problem}
              onChange={(e) => setProblem(e.target.value)}
              placeholder={placeholders[placeholderIdx]}
              onFocus={() => setPlaceholderIdx((i) => (i + 1) % placeholders.length)}
              rows={4}
              className="w-full resize-none rounded-lg border border-input bg-background px-4 py-3 font-body text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
            <Button
              onClick={handleSubmit}
              className="mt-4 w-full gap-2 rounded-lg bg-primary py-6 font-display text-base font-semibold text-primary-foreground hover:bg-primary/90"
              disabled={!problem.trim()}
            >
              <Search className="h-4 w-4" />
              Check My Problem
            </Button>

            {/* Example chips */}
            <div className="mt-4 flex flex-wrap gap-2">
              {placeholders.map((p) => (
                <button
                  key={p}
                  onClick={() => setProblem(p)}
                  className="rounded-full border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mx-auto max-w-2xl"
        >
          <h2 className="mb-6 font-display text-2xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-2">
            {faqData.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-lg border border-border bg-card px-5 shadow-card"
              >
                <AccordionTrigger className="py-4 text-left font-body text-sm font-semibold text-foreground hover:no-underline md:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </section>

      {/* LEARN MORE */}
      <section className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mx-auto max-w-2xl"
        >
          <div
            onClick={() => navigate("/learn")}
            className="group cursor-pointer rounded-xl border border-border bg-card p-6 shadow-card transition-all hover:shadow-elevated hover:border-primary/30"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-safe/10">
                <BookOpen className="h-6 w-6 text-safe" />
              </div>
              <div className="flex-1">
                <h2 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  Learn More About Cybersecurity
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Beginner-friendly lessons on scams, online safety, and how to protect yourself and your loved ones.
                </p>
                <div className="mt-3 flex items-center gap-1 text-sm font-semibold text-primary">
                  Start Learning <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </div>

          {/* Emergency CTA */}
          <div
            onClick={() => navigate("/emergency")}
            className="group mt-4 cursor-pointer rounded-xl border border-warning/30 bg-warning/5 p-6 transition-all hover:shadow-card"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-warning/10">
                <Shield className="h-6 w-6 text-warning" />
              </div>
              <div className="flex-1">
                <h2 className="font-display text-lg font-bold text-foreground">
                  Need Emergency Help?
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Get helpline numbers, report cybercrime, and find immediate support.
                </p>
                <div className="mt-3 flex items-center gap-1 text-sm font-semibold text-warning">
                  Get Help Now <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;
