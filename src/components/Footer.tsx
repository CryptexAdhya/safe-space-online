import { Shield, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-card mt-auto">
    <div className="container py-8">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="flex items-center gap-2 font-display text-sm font-semibold text-foreground">
          <Shield className="h-4 w-4 text-primary" />
          CyberSafe Guide
        </div>
        <p className="max-w-md text-sm text-muted-foreground">
          Helping everyday internet users stay safe online. Learn, protect, and report cyber threats in simple language.
        </p>
        <div className="flex gap-4 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
          <Link to="/learn" className="text-muted-foreground hover:text-primary transition-colors">Learn</Link>
          <Link to="/emergency" className="text-muted-foreground hover:text-primary transition-colors">Emergency</Link>
        </div>
        <p className="flex items-center gap-1 text-xs text-muted-foreground">
          Made with <Heart className="h-3 w-3 text-destructive" /> for a safer internet
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
