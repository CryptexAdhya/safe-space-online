import { motion } from "framer-motion";
import { TrendingUp, AlertTriangle, Shield, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const trendingThreats = [
  {
    rank: 1,
    name: "AI-Powered Phishing",
    description: "Scammers now use AI to write perfect fake emails and messages that look exactly like real ones from banks, companies, or even your friends.",
    example: "You get an email from your 'bank' with perfect grammar and your real name, asking you to verify your account through a fake link.",
    risk: "Very High",
    trend: "Rising Fast",
  },
  {
    rank: 2,
    name: "UPI / Digital Payment Fraud",
    description: "Fraudsters trick people into sending money through UPI apps by pretending to be customer support, sellers, or sending fake payment requests.",
    example: "Someone calls pretending to be from your payment app and asks you to click a 'refund' link — which actually takes money from your account.",
    risk: "Very High",
    trend: "Most Common",
  },
  {
    rank: 3,
    name: "Deepfake Video & Voice Scams",
    description: "Criminals use AI to create fake videos or clone someone's voice to trick people into sending money or sharing private information.",
    example: "You get a video call from someone who looks and sounds like your boss, asking you to urgently transfer money.",
    risk: "High",
    trend: "Rising Fast",
  },
  {
    rank: 4,
    name: "Fake Job & Work-From-Home Scams",
    description: "Scammers post fake job offers on social media or messaging apps, asking victims to pay registration fees or share personal details.",
    example: "You see a job ad offering ₹50,000/month for simple data entry. After 'joining,' they ask you to pay for training materials.",
    risk: "High",
    trend: "Very Common",
  },
  {
    rank: 5,
    name: "QR Code Scams",
    description: "Fraudsters share QR codes claiming you'll receive money, but scanning the code actually sends money from your account.",
    example: "A buyer on a marketplace says they'll pay you via QR code, but the code is actually a payment request that debits your account.",
    risk: "High",
    trend: "Rising",
  },
  {
    rank: 6,
    name: "Investment & Crypto Fraud",
    description: "Fake trading apps and crypto platforms promise huge returns. Victims invest real money into platforms that are completely fake.",
    example: "You're added to a WhatsApp group showing 'live trading profits.' You invest, see fake gains, but can never withdraw your money.",
    risk: "Very High",
    trend: "Very Common",
  },
  {
    rank: 7,
    name: "Social Media Impersonation",
    description: "Scammers create fake profiles of real people to trick their friends and family into sending money or sharing private info.",
    example: "Your friend's 'new account' messages you saying they're in trouble and need money urgently — but it's a scammer.",
    risk: "Medium",
    trend: "Very Common",
  },
  {
    rank: 8,
    name: "Ransomware Attacks",
    description: "Hackers lock your files or entire device and demand payment to unlock them. This now targets individuals, not just companies.",
    example: "You download a free software from an unknown site. Suddenly all your photos and documents are locked with a ransom note.",
    risk: "Very High",
    trend: "Rising",
  },
  {
    rank: 9,
    name: "Fake Customer Care Numbers",
    description: "When you search for customer support online, scammers have placed fake numbers that appear in search results.",
    example: "You Google your bank's helpline and call the first number — a scammer answers and asks for your card details to 'help' you.",
    risk: "High",
    trend: "Very Common",
  },
  {
    rank: 10,
    name: "Sextortion & Online Blackmail",
    description: "Criminals trick people into sharing private photos or videos, then threaten to share them unless the victim pays.",
    example: "Someone you met online asks for private photos. Later, they threaten to share them with your contacts unless you pay.",
    risk: "Very High",
    trend: "Rising",
  },
  {
    rank: 11,
    name: "SIM Swap Fraud",
    description: "Fraudsters convince your mobile company to transfer your phone number to their SIM, giving them access to your OTPs and accounts.",
    example: "Your phone suddenly has no signal. Meanwhile, the scammer is receiving your OTPs and draining your bank account.",
    risk: "Very High",
    trend: "Rising",
  },
  {
    rank: 12,
    name: "Fake Loan & Insurance Apps",
    description: "Fraudulent apps offer instant loans but steal personal data, contacts, and photos — then use them for blackmail.",
    example: "You download a loan app. It accesses your contacts and photos. After borrowing, they harass you and your contacts for repayment.",
    risk: "Very High",
    trend: "Very Common",
  },
];

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

const TrendingThreatsPage = () => {
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
            The most common and fastest-rising cybercrimes happening right now. Stay informed, stay safe.
          </p>
        </div>

        {/* Alert banner */}
        <div className="mb-8 rounded-lg border border-warning/30 bg-warning/5 p-4 flex items-start gap-3">
          <AlertTriangle className="h-5 w-5 text-warning mt-0.5 shrink-0" />
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Stay alert!</span> These threats are actively affecting thousands of people every day. Learning about them is the first step to protecting yourself and your family.
          </p>
        </div>

        {/* Threats list */}
        <div className="space-y-4">
          {trendingThreats.map((threat, i) => (
            <motion.div
              key={threat.rank}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              className="rounded-lg border border-border bg-card p-5 shadow-card"
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

                  <p className="text-sm text-muted-foreground mb-3">
                    {threat.description}
                  </p>

                  <div className="rounded-md border border-border bg-secondary/50 p-3 mb-3">
                    <p className="text-xs font-medium text-muted-foreground mb-1">Real-life example:</p>
                    <p className="text-sm text-foreground">{threat.example}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">Risk Level:</span>
                    <span className={`rounded-full border px-2 py-0.5 text-[11px] font-bold ${riskColor[threat.risk] || ""}`}>
                      {threat.risk}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

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
