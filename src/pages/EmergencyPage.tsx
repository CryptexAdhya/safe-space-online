import { motion } from "framer-motion";
import { Phone, Globe, MapPin, CreditCard, ChevronLeft, AlertTriangle, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const emergencyContacts = [
  {
    icon: Phone,
    title: "Cybercrime Helpline",
    detail: "1930",
    description: "National cybercrime helpline number. Available 24/7 for reporting cyber fraud and getting immediate assistance.",
    action: "tel:1930",
    actionLabel: "Call Now",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Globe,
    title: "Cybercrime Reporting Portal",
    detail: "cybercrime.gov.in",
    description: "Official government website for filing online complaints about cybercrime incidents.",
    action: "https://cybercrime.gov.in",
    actionLabel: "Visit Website",
    color: "text-safe",
    bg: "bg-safe/10",
  },
  {
    icon: MapPin,
    title: "Visit Nearest Police Station",
    detail: "For serious cases",
    description: "For financial fraud, blackmail, account takeover, threats, or identity theft, visit your nearest police station with all evidence.",
    color: "text-warning",
    bg: "bg-warning/10",
  },
];

const bankingSteps = [
  "Call your bank's official helpline immediately",
  "Request to block your debit/credit card",
  "Freeze your account if unauthorized transactions occurred",
  "File a dispute for fraudulent transactions",
  "Change your internet banking password",
  "Visit the bank branch with your ID and file a written complaint",
];

const seriousCases = [
  "Financial fraud or unauthorized transactions",
  "Online blackmail or extortion",
  "Account takeover or identity theft",
  "Threats of violence or harassment",
  "Child exploitation or abuse",
  "Ransomware attack on your device",
];

const EmergencyPage = () => (
  <div className="container max-w-2xl py-8">
    <Link
      to="/"
      className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
    >
      <ChevronLeft className="h-4 w-4" /> Back to Home
    </Link>

    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
      <div className="mb-2 flex items-center gap-2">
        <Shield className="h-7 w-7 text-destructive" />
        <h1 className="font-display text-3xl font-bold text-foreground">Emergency Help</h1>
      </div>
      <p className="mb-8 text-base text-muted-foreground">
        If you're facing a serious cyber issue, take action immediately. Here's how to get help.
      </p>

      {/* Emergency contacts */}
      <div className="space-y-4 mb-8">
        {emergencyContacts.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="rounded-xl border border-border bg-card p-5 shadow-card"
          >
            <div className="flex items-start gap-4">
              <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${c.bg}`}>
                <c.icon className={`h-5 w-5 ${c.color}`} />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-base font-bold text-foreground">{c.title}</h3>
                <p className={`text-lg font-bold ${c.color}`}>{c.detail}</p>
                <p className="mt-1 text-sm text-muted-foreground">{c.description}</p>
                {c.action && (
                  <a
                    href={c.action}
                    target={c.action.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    {c.actionLabel}
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Serious cases */}
      <div className="rounded-xl border border-warning/30 bg-warning/5 p-5 mb-6">
        <div className="flex items-center gap-2 mb-3">
          <AlertTriangle className="h-5 w-5 text-warning" />
          <h2 className="font-display text-base font-bold text-foreground">When to Go to the Police</h2>
        </div>
        <p className="text-sm text-muted-foreground mb-3">
          Visit your nearest police station immediately if you are dealing with:
        </p>
        <ul className="space-y-1.5">
          {seriousCases.map((c, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" /> {c}
            </li>
          ))}
        </ul>
      </div>

      {/* Banking */}
      <div className="rounded-xl border border-border bg-card p-5 shadow-card">
        <div className="flex items-center gap-2 mb-3">
          <CreditCard className="h-5 w-5 text-primary" />
          <h2 className="font-display text-base font-bold text-foreground">Banking Emergency Steps</h2>
        </div>
        <p className="text-sm text-muted-foreground mb-3">
          If your bank details, card, or UPI were compromised, follow these steps immediately:
        </p>
        <ol className="space-y-2">
          {bankingSteps.map((s, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                {i + 1}
              </span>
              {s}
            </li>
          ))}
        </ol>
      </div>

      {/* Note */}
      <p className="mt-6 text-center text-xs text-muted-foreground">
        Contact information shown is for India. Your region may have different helpline numbers and reporting portals.
      </p>
    </motion.div>
  </div>
);

export default EmergencyPage;
