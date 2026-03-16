import {
  Fish, MessageSquare, Phone, Key, Briefcase, CreditCard, Headphones,
  Bug, Eye, Lock, Smartphone, QrCode, UserX, Fingerprint, Users,
  MessageCircle, Shield, Wifi,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ThreatInfo {
  id: string;
  name: string;
  icon: LucideIcon;
  meaning: string;
  example: string;
  warningSignsTitle: string;
  warningSigns: string[];
  whatToDo: string[];
  howToStaySafe: string[];
}

export const threats: ThreatInfo[] = [
  {
    id: "phishing",
    name: "Phishing",
    icon: Fish,
    meaning: "Fake emails or websites that try to steal your personal information by pretending to be from trusted companies.",
    example: "You receive an email that looks like it's from your bank saying 'Your account has been locked. Click here to verify.' The link takes you to a fake website.",
    warningSignsTitle: "Warning Signs",
    warningSigns: ["Urgent or threatening language", "Suspicious sender email address", "Links that look slightly wrong", "Asks for personal or financial info"],
    whatToDo: ["Do not click any links", "Report the email as spam", "Contact the company directly through their official website"],
    howToStaySafe: ["Always verify the sender's address", "Never click links in unexpected emails", "Use official apps or type the website address yourself"],
  },
  {
    id: "smishing",
    name: "Smishing",
    icon: MessageSquare,
    meaning: "Scam text messages (SMS) that try to trick you into clicking bad links or sharing personal details.",
    example: "You get a text saying 'Your package delivery failed. Click here to reschedule.' The link leads to a fake site asking for your address and card details.",
    warningSignsTitle: "Warning Signs",
    warningSigns: ["Messages from unknown numbers", "Links in text messages", "Claims about packages or prizes you didn't expect", "Urgent tone"],
    whatToDo: ["Don't click the link", "Delete the message", "Block the number", "Report to your mobile provider"],
    howToStaySafe: ["Never click links in texts from unknown senders", "Verify delivery status through the official courier website", "Don't reply to suspicious texts"],
  },
  {
    id: "vishing",
    name: "Vishing",
    icon: Phone,
    meaning: "Voice phishing — scam phone calls where someone pretends to be from your bank, government, or a tech company to steal your information.",
    example: "Someone calls you saying they are from your bank's fraud department and asks you to confirm your account number, PIN, or OTP to 'secure your account.'",
    warningSignsTitle: "Warning Signs",
    warningSigns: ["Caller asks for OTP, PIN, or passwords", "Threatening language about account closure", "Caller ID looks official but feels suspicious", "Pressure to act immediately"],
    whatToDo: ["Hang up immediately", "Call your bank using their official number", "Report the scam number to cybercrime helpline"],
    howToStaySafe: ["Never share OTP, PIN, or passwords on calls", "Banks will never ask for these details", "Verify by calling back on official numbers"],
  },
  {
    id: "otp-scam",
    name: "OTP Scams",
    icon: Key,
    meaning: "Scammers trick you into sharing your One-Time Password (OTP) to access your accounts or steal money.",
    example: "Someone messages you saying 'I accidentally sent an OTP to your number, can you share it?' That OTP is actually for accessing YOUR account.",
    warningSignsTitle: "Warning Signs",
    warningSigns: ["Someone asks you to share an OTP", "Unexpected OTP on your phone", "Requests disguised as help or emergencies"],
    whatToDo: ["Never share OTP with anyone", "Check which service sent the OTP", "Change passwords if you shared it", "Contact your bank immediately"],
    howToStaySafe: ["OTPs are for your eyes only", "No legitimate service will ever ask for your OTP", "Enable additional security on your accounts"],
  },
  {
    id: "fake-jobs",
    name: "Fake Job Scams",
    icon: Briefcase,
    meaning: "Scammers post fake job offers to steal your personal details or money through fake registration fees.",
    example: "You see a job post on social media offering high pay for easy work. They ask you to pay a 'registration fee' or share your ID documents to apply.",
    warningSignsTitle: "Warning Signs",
    warningSigns: ["Too-good-to-be-true salary", "Asks for money upfront", "Unprofessional communication", "No company details or website"],
    whatToDo: ["Stop communication", "Never pay for a job", "Report the listing to the platform", "File a cybercrime complaint"],
    howToStaySafe: ["Research the company thoroughly", "Apply through official job portals", "Never pay to get a job", "Verify with the company directly"],
  },
  {
    id: "payment-scams",
    name: "UPI / Payment Scams",
    icon: CreditCard,
    meaning: "Scammers trick you into sending money or approving payment requests through UPI, digital wallets, or payment apps.",
    example: "Someone sends you a 'collect request' on a payment app saying it's a refund, but it actually takes money from your account when you approve it.",
    warningSignsTitle: "Warning Signs",
    warningSigns: ["Unexpected payment requests", "Being asked to 'receive' money by entering PIN", "Requests from unknown contacts", "QR codes for 'receiving' money"],
    whatToDo: ["Decline unknown payment requests", "Never enter UPI PIN to receive money", "Report to your bank", "File cybercrime complaint"],
    howToStaySafe: ["You never need to enter PIN to receive money", "Only pay people you trust", "Verify payment requests before acting"],
  },
  {
    id: "fake-support",
    name: "Fake Customer Care",
    icon: Headphones,
    meaning: "Scammers create fake customer support numbers that appear in search results. When you call, they steal your information.",
    example: "You search for your bank's customer care number on Google. The top result is actually a scammer's number. They ask for your account details to 'help' you.",
    warningSignsTitle: "Warning Signs",
    warningSigns: ["Customer care numbers found on random websites", "Asks to install remote access apps", "Requests for sensitive information", "Asks you to make a 'test transaction'"],
    whatToDo: ["Hang up immediately", "Find the real number from the company's official app or website", "Report the fake number"],
    howToStaySafe: ["Only use numbers from official websites or apps", "Never install remote access apps", "Never share screen with strangers"],
  },
  {
    id: "malware",
    name: "Malware",
    icon: Bug,
    meaning: "Malicious software that gets installed on your device to steal data, damage files, or spy on you. It includes viruses, trojans, and worms.",
    example: "You download a free game from an unofficial website. It installs hidden software that steals your passwords and sends them to hackers.",
    warningSignsTitle: "Warning Signs",
    warningSigns: ["Device running unusually slow", "Pop-up ads appearing", "Apps you didn't install", "Battery draining fast", "Unusual data usage"],
    whatToDo: ["Run antivirus scan", "Uninstall suspicious apps", "Change important passwords", "Factory reset if necessary"],
    howToStaySafe: ["Only download from official app stores", "Keep your device updated", "Use trusted antivirus software", "Don't click suspicious links"],
  },
  {
    id: "spyware",
    name: "Spyware",
    icon: Eye,
    meaning: "Hidden software that secretly watches what you do on your device — your messages, calls, passwords, and location.",
    example: "Someone installs a 'tracking app' on your phone without your knowledge. They can now read your messages and see your location.",
    warningSignsTitle: "Warning Signs",
    warningSigns: ["Battery draining fast", "Phone feels warm even when not in use", "Strange sounds during calls", "Unknown apps in settings"],
    whatToDo: ["Run a security scan", "Check for unknown apps with unusual permissions", "Factory reset the device", "Change all passwords"],
    howToStaySafe: ["Keep your phone locked", "Don't leave your device unattended", "Review app permissions regularly", "Use trusted security apps"],
  },
  {
    id: "ransomware",
    name: "Ransomware",
    icon: Lock,
    meaning: "A type of malware that locks your files or device and demands money (ransom) to unlock them.",
    example: "You open an email attachment and suddenly all your files are encrypted. A message appears demanding payment in cryptocurrency to get your files back.",
    warningSignsTitle: "Warning Signs",
    warningSigns: ["Files suddenly can't be opened", "New file extensions on your documents", "Ransom message on screen", "Device becomes unusable"],
    whatToDo: ["Do not pay the ransom", "Disconnect from the internet", "Report to cybercrime authorities", "Seek professional help for recovery"],
    howToStaySafe: ["Backup important files regularly", "Don't open unknown email attachments", "Keep software updated", "Use reliable antivirus"],
  },
  {
    id: "fake-apps",
    name: "Fake Apps",
    icon: Smartphone,
    meaning: "Apps that look like real popular apps but are designed to steal your data or money.",
    example: "You download what looks like a popular banking app but it's a copy. When you log in, the scammers capture your username and password.",
    warningSignsTitle: "Warning Signs",
    warningSigns: ["App not from official store", "Very few downloads or reviews", "Asks for too many permissions", "Developer name looks wrong", "Spelling errors in the app"],
    whatToDo: ["Uninstall immediately", "Change passwords for accounts you used", "Run a security scan", "Report the app to the store"],
    howToStaySafe: ["Only download from official stores", "Check the developer name", "Read reviews before downloading", "Look at download counts"],
  },
  {
    id: "qr-scams",
    name: "QR Code Scams",
    icon: QrCode,
    meaning: "Scammers use fake QR codes to redirect you to malicious websites or trick you into making payments.",
    example: "Someone in a marketplace shows you a QR code to 'receive' your payment, but scanning it actually sends money from your account.",
    warningSignsTitle: "Warning Signs",
    warningSigns: ["QR code for 'receiving' money", "QR stickers placed over original ones", "QR codes in unexpected places", "Redirects to unfamiliar websites"],
    whatToDo: ["Don't scan unknown QR codes", "If scanned, don't enter any details", "Report to cybercrime helpline"],
    howToStaySafe: ["Verify QR codes before scanning", "Use trusted QR scanner apps", "Never scan QR codes to receive money"],
  },
  {
    id: "account-hacking",
    name: "Account Hacking",
    icon: UserX,
    meaning: "When someone gains unauthorized access to your online accounts like email, social media, or banking.",
    example: "You suddenly can't log into your Instagram account. Your friends tell you the account is posting strange links and messages.",
    warningSignsTitle: "Warning Signs",
    warningSigns: ["Can't log into your account", "Password changed without your action", "Unknown login alerts", "Friends report strange activity"],
    whatToDo: ["Use 'Forgot Password' to recover", "Contact the platform's support", "Check and secure linked accounts", "Report to cybercrime if needed"],
    howToStaySafe: ["Use strong, unique passwords", "Enable two-factor authentication", "Don't share passwords", "Log out from shared devices"],
  },
  {
    id: "identity-theft",
    name: "Identity Theft",
    icon: Fingerprint,
    meaning: "When someone steals your personal information (like your name, ID number, or photos) and pretends to be you.",
    example: "Someone uses your ID documents to open a bank account or take a loan in your name without your knowledge.",
    warningSignsTitle: "Warning Signs",
    warningSigns: ["Bills or statements for accounts you didn't open", "Calls about debts you don't owe", "Rejected loan applications unexpectedly", "Unknown accounts in your name"],
    whatToDo: ["File a police report", "Contact affected banks or services", "Place fraud alerts on your accounts", "Report to cybercrime helpline"],
    howToStaySafe: ["Don't share personal documents carelessly", "Shred physical documents", "Monitor your accounts regularly", "Be careful what you share online"],
  },
  {
    id: "impersonation",
    name: "Impersonation",
    icon: Users,
    meaning: "When someone creates fake profiles pretending to be you or someone you trust to scam others.",
    example: "A scammer creates a fake Facebook profile with your photo and name, then messages your friends asking for money.",
    warningSignsTitle: "Warning Signs",
    warningSigns: ["Friends ask about messages you didn't send", "Duplicate profiles of you online", "People say you contacted them but you didn't"],
    whatToDo: ["Report the fake profile to the platform", "Alert your contacts", "File a cybercrime report", "Document evidence with screenshots"],
    howToStaySafe: ["Keep personal photos private", "Review privacy settings", "Search for your name online periodically", "Limit personal info on public profiles"],
  },
  {
    id: "cyberbullying",
    name: "Cyberbullying",
    icon: MessageCircle,
    meaning: "Repeated harassment, threats, or humiliation of someone through digital platforms like social media, messaging apps, or online games.",
    example: "Someone repeatedly posts hurtful comments about you, shares embarrassing photos, or sends threatening messages through social media.",
    warningSignsTitle: "Warning Signs",
    warningSigns: ["Repeated mean messages", "Embarrassing content shared without consent", "Threats or intimidation", "Being excluded from online groups deliberately"],
    whatToDo: ["Don't respond to the bully", "Save evidence", "Block and report", "Talk to someone you trust", "Report to cybercrime if threats are involved"],
    howToStaySafe: ["Keep profiles private", "Think before sharing online", "Report harmful behavior", "Support others being bullied"],
  },
  {
    id: "blackmail",
    name: "Online Blackmail",
    icon: Shield,
    meaning: "When someone threatens to share your private photos, videos, or information unless you pay them or do what they want.",
    example: "Someone you met online threatens to share your private photos with your family unless you send them money.",
    warningSignsTitle: "Warning Signs",
    warningSigns: ["Threats to share private content", "Demands for money", "Pressure to keep it secret", "Escalating demands"],
    whatToDo: ["Do not pay", "Do not delete evidence", "Block the person", "Report to police immediately", "Contact cybercrime helpline"],
    howToStaySafe: ["Be cautious sharing private content online", "Don't send intimate content to strangers", "Use strong privacy settings", "Remember: it's a crime and help is available"],
  },
  {
    id: "wifi-risks",
    name: "Public Wi-Fi Risks",
    icon: Wifi,
    meaning: "Using free public Wi-Fi (like at cafes or airports) can let hackers see what you're doing online and steal your information.",
    example: "You log into your bank account while using free airport Wi-Fi. A hacker on the same network captures your login details.",
    warningSignsTitle: "Warning Signs",
    warningSigns: ["Wi-Fi that doesn't need a password", "Network names that mimic real businesses", "Unusual pop-ups when connecting", "Slow or unstable connection"],
    whatToDo: ["Disconnect immediately if you suspect a problem", "Change passwords for accounts you accessed", "Monitor your accounts for unusual activity"],
    howToStaySafe: ["Avoid banking on public Wi-Fi", "Use a VPN if you must use public Wi-Fi", "Turn off auto-connect for Wi-Fi", "Use mobile data for sensitive tasks"],
  },
];

export interface SafetyPractice {
  title: string;
  description: string;
  tips: string[];
}

export const safetyPractices: SafetyPractice[] = [
  { title: "Use Strong Passwords", description: "A strong password is long, unique, and hard to guess.", tips: ["Use at least 12 characters", "Mix uppercase, lowercase, numbers, and symbols", "Avoid using names, birthdays, or common words", "Use a different password for each account"] },
  { title: "Turn On Two-Factor Authentication", description: "Two-factor authentication (2FA) adds an extra layer of security. Even if someone knows your password, they need a second code to log in.", tips: ["Enable 2FA on email, banking, and social media", "Use an authenticator app instead of SMS when possible", "Keep backup codes in a safe place"] },
  { title: "Never Share OTPs", description: "An OTP (One-Time Password) is a secret code sent to verify your identity. No legitimate company will ever ask you for it.", tips: ["Never share OTP on phone calls", "Ignore requests even if they claim to be from your bank", "If you shared an OTP by mistake, contact your bank immediately"] },
  { title: "Avoid Clicking Unknown Links", description: "Links in messages, emails, or social media can lead to fake websites designed to steal your information.", tips: ["Don't click links from unknown senders", "Hover over links to see the real URL", "Type the website address manually instead of clicking", "Check for HTTPS and correct spelling in URLs"] },
  { title: "Keep Everything Updated", description: "Software updates fix security holes that hackers can exploit.", tips: ["Turn on automatic updates for your phone and computer", "Update apps regularly from official stores", "Don't ignore update notifications"] },
  { title: "Use Official Apps Only", description: "Only download apps from trusted sources like Google Play Store or Apple App Store.", tips: ["Check the app developer name", "Read reviews and check download counts", "Be cautious of apps that ask for too many permissions"] },
  { title: "Be Careful on Public Wi-Fi", description: "Public Wi-Fi networks are not secure. Anyone on the same network could potentially see your activity.", tips: ["Avoid logging into bank accounts on public Wi-Fi", "Use a VPN for extra protection", "Turn off Wi-Fi when not in use", "Use mobile data for sensitive tasks"] },
  { title: "Check Sender Details", description: "Scammers often impersonate trusted organizations. Always verify who is contacting you.", tips: ["Check email addresses carefully for small differences", "Verify phone numbers through official websites", "Be suspicious of unexpected contacts", "When in doubt, contact the organization directly"] },
  { title: "Review App Permissions", description: "Apps sometimes ask for permissions they don't need, which could compromise your privacy.", tips: ["Check what permissions apps have on your phone", "Remove unnecessary permissions", "Be cautious of apps asking for camera, microphone, or contacts access without clear reason"] },
  { title: "Backup Important Data", description: "Regular backups ensure you don't lose important files to ransomware, device failure, or accidents.", tips: ["Use cloud backup services", "Keep a local backup on an external drive", "Set up automatic backups", "Test your backups periodically"] },
];

export interface AdvancedConcept {
  title: string;
  simpleExplanation: string;
  whyItMatters: string;
}

export const advancedConcepts: AdvancedConcept[] = [
  { title: "Two-Factor Authentication", simpleExplanation: "A security method that requires two different ways to prove it's really you — like a password plus a code sent to your phone.", whyItMatters: "Even if someone steals your password, they still can't get into your account without the second code." },
  { title: "Password Managers", simpleExplanation: "An app that safely stores all your passwords so you only need to remember one master password.", whyItMatters: "Helps you use strong, unique passwords for every account without memorizing them all." },
  { title: "Encryption", simpleExplanation: "A way of scrambling your data so only authorized people can read it — like putting your message in a locked box.", whyItMatters: "Protects your messages, files, and personal information from being read by hackers." },
  { title: "Secure Browsing", simpleExplanation: "Using the internet safely by checking for HTTPS, avoiding suspicious sites, and using private/incognito mode when needed.", whyItMatters: "Reduces the risk of your data being stolen while you browse the web." },
  { title: "Digital Footprint", simpleExplanation: "Everything you do online leaves a trail — your posts, searches, likes, and account activity. This trail is your digital footprint.", whyItMatters: "Anyone can use your digital footprint to learn about you. Being mindful helps protect your privacy." },
  { title: "Privacy Settings", simpleExplanation: "Controls on apps and websites that let you decide who can see your information, posts, and activity.", whyItMatters: "Properly configured privacy settings limit what strangers can find out about you." },
  { title: "Safe Downloads", simpleExplanation: "Only downloading files and apps from trusted, official sources to avoid installing harmful software.", whyItMatters: "Malicious downloads are one of the most common ways devices get infected." },
  { title: "Social Engineering", simpleExplanation: "Tricks that manipulate people into giving away confidential information — it targets the human, not the computer.", whyItMatters: "Even the best technology can't protect you if you're tricked into giving access." },
  { title: "Data Breaches", simpleExplanation: "When a company's security is broken and hackers steal user data like emails, passwords, and personal details.", whyItMatters: "Your information could be exposed even if you did nothing wrong. Unique passwords and 2FA help minimize the damage." },
  { title: "Device Protection", simpleExplanation: "Keeping your phone, laptop, and other devices safe with passwords, updates, antivirus, and physical security.", whyItMatters: "Your devices hold your entire digital life — protecting them is protecting yourself." },
];

export interface FrameworkConcept {
  title: string;
  simpleExplanation: string;
  keyPoints: string[];
}

export const frameworkConcepts: FrameworkConcept[] = [
  {
    title: "NIST Cybersecurity Framework",
    simpleExplanation: "A simple safety plan that helps people and organizations follow five steps: Identify risks, Protect yourself, Detect problems, Respond to incidents, and Recover.",
    keyPoints: ["Identify what's important to protect", "Put protection measures in place", "Set up ways to detect problems", "Have a plan to respond", "Know how to recover and get back to normal"],
  },
  {
    title: "Zero Trust",
    simpleExplanation: "Do not automatically trust any device, user, or request. Always verify before granting access — even if the request seems to come from inside your organization.",
    keyPoints: ["Never trust, always verify", "Limit access to only what's needed", "Assume a breach could happen", "Verify every user and device"],
  },
  {
    title: "Home Lab Learning",
    simpleExplanation: "A safe, personal learning setup where people practice and explore cybersecurity tools in a controlled environment — like a science lab, but for learning digital safety.",
    keyPoints: ["Practice without real-world risk", "Learn tools and techniques safely", "Build skills at your own pace", "Great for beginners and professionals"],
  },
  {
    title: "Risk Awareness",
    simpleExplanation: "Understanding what could go wrong and how likely it is. Being risk-aware means knowing your weak points and taking steps to address them.",
    keyPoints: ["Know what assets are valuable", "Understand potential threats", "Assess how vulnerable you are", "Take steps to reduce risk"],
  },
  {
    title: "Threat Detection Basics",
    simpleExplanation: "The ability to notice when something unusual or dangerous is happening on your devices or accounts — like a security alarm for your digital life.",
    keyPoints: ["Watch for unusual account activity", "Use security alerts and notifications", "Monitor your devices for strange behavior", "Keep antivirus software active"],
  },
  {
    title: "Incident Reporting Basics",
    simpleExplanation: "When something bad happens online, knowing who to tell and how to report it is crucial. Quick reporting can stop more damage and help catch criminals.",
    keyPoints: ["Report to the platform (social media, bank, etc.)", "File a complaint with cybercrime authorities", "Save evidence before reporting", "Act quickly — time matters"],
  },
];
