import { useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  AlertTriangle, ShieldAlert, CheckCircle, BookOpen,
  ChevronLeft, Eye, Zap, Phone, Lightbulb, HelpCircle,
} from "lucide-react";

interface AnalysisSection {
  icon: React.ReactNode;
  title: string;
  content: string[];
  color: string;
}

const getAnalysis = (query: string): { title: string; term: string; sections: AnalysisSection[] } => {
  const q = query.toLowerCase();

  let title = "Potential Cyber Threat Detected";
  let term = "Online Scam";

  if (q.includes("otp")) {
    title = "This looks like an OTP Scam";
    term = "Vishing / OTP Fraud";
  } else if (q.includes("hack") || q.includes("account")) {
    title = "Your account may be compromised";
    term = "Account Hacking";
  } else if (q.includes("link") || q.includes("click")) {
    title = "You may have encountered a phishing link";
    term = "Phishing";
  } else if (q.includes("money") || q.includes("scam") || q.includes("payment")) {
    title = "This sounds like a financial scam";
    term = "Financial Fraud";
  } else if (q.includes("threat") || q.includes("blackmail")) {
    title = "This may be online blackmail or cyber extortion";
    term = "Cyber Extortion / Blackmail";
  }

  const sections: AnalysisSection[] = [
    {
      icon: <HelpCircle className="h-5 w-5" />,
      title: "What May Be Happening",
      content: [
        "Someone may be trying to trick you into giving away personal information or money.",
        "This is a common tactic used by cybercriminals to exploit trust and urgency.",
      ],
      color: "text-primary",
    },
    {
      icon: <AlertTriangle className="h-5 w-5" />,
      title: "Red Flags to Watch For",
      content: [
        "Urgent or threatening language designed to make you act fast",
        "Requests for OTP, passwords, bank details, or personal information",
        "Unknown callers, senders, or suspicious links",
        "Offers that seem too good to be true",
      ],
      color: "text-warning",
    },
    {
      icon: <ShieldAlert className="h-5 w-5" />,
      title: "Why This Is Dangerous",
      content: [
        "Your personal or financial information could be stolen",
        "You could lose money or access to important accounts",
        "Your identity could be used for further fraud",
      ],
      color: "text-destructive",
    },
    {
      icon: <CheckCircle className="h-5 w-5" />,
      title: "What To Do Right Now",
      content: [
        "Do not share any more information with the person",
        "Change your passwords for all important accounts",
        "Contact your bank if financial details were shared",
        "Enable two-factor authentication on your accounts",
        "Save evidence like screenshots and messages",
      ],
      color: "text-safe",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Where To Report",
      content: [
        "Call the national cybercrime helpline (1930 in India)",
        "File a complaint at the cybercrime reporting portal",
        "Visit your nearest police station for serious cases",
        "Report the person or number on the platform you were contacted through",
      ],
      color: "text-primary",
    },
    {
      icon: <Lightbulb className="h-5 w-5" />,
      title: "Prevention Tips",
      content: [
        "Never share OTP, passwords, or PINs with anyone",
        "Always verify callers through official channels",
        "Do not click links from unknown sources",
        "Use strong, unique passwords for each account",
        "Keep your devices and apps updated",
      ],
      color: "text-safe",
    },
  ];

  return { title, term, sections };
};

const ResultPage = () => {
  const [params] = useSearchParams();
  const query = params.get("q") || "";
  const { title, term, sections } = getAnalysis(query);

  return (
    <div className="container max-w-2xl py-8">
      <Link
        to="/"
        className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
      >
        <ChevronLeft className="h-4 w-4" /> Back to Home
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* User query */}
        <div className="mb-6 rounded-lg border border-border bg-secondary/50 p-4">
          <p className="text-xs font-medium text-muted-foreground mb-1">Your concern:</p>
          <p className="font-body text-sm text-foreground">"{query}"</p>
        </div>

        {/* Title */}
        <div className="mb-2 flex items-start gap-3">
          <Eye className="mt-1 h-6 w-6 shrink-0 text-warning" />
          <div>
            <h1 className="font-display text-2xl font-bold text-foreground">{title}</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              This is often called <span className="font-semibold text-primary">{term}</span>
            </p>
          </div>
        </div>

        {/* Sections */}
        <div className="mt-8 space-y-4">
          {sections.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="rounded-lg border border-border bg-card p-5 shadow-card"
            >
              <div className={`flex items-center gap-2 mb-3 ${s.color}`}>
                {s.icon}
                <h3 className="font-display text-base font-bold">{s.title}</h3>
              </div>
              <ul className="space-y-2">
                {s.content.map((c, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-border" />
                    {c}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
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
    </div>
  );
};

export default ResultPage;
