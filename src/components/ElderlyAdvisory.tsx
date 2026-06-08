import { motion } from "framer-motion";
import { ShieldCheck, Users, PhoneCall } from "lucide-react";

const messages: { lang: string; text: string[] }[] = [
  {
    lang: "English",
    text: [
      "Do not share your OTP or ATM PIN with anyone, even if they say they are from the bank.",
      "If you get a strange call or message, do not panic. Ask a trusted family member to check first.",
      "For help, call the cybercrime helpline 1930 or ask a young family member to report on cybercrime.gov.in.",
    ],
  },
  {
    lang: "తెలుగు (Telugu)",
    text: [
      "OTP లేదా ATM PIN ఎవరికీ ఇవ్వకండి — బ్యాంక్ నుండి అని చెప్పినా సరే.",
      "అనుమానాస్పద కాల్ లేదా మెసేజ్ వస్తే ఆందోళన పడకండి. ముందు నమ్మకమైన కుటుంబ సభ్యుని అడగండి.",
      "సహాయం కోసం 1930 నంబర్‌కు కాల్ చేయండి లేదా cybercrime.gov.in లో నివేదించమని యువ సభ్యుని కోరండి.",
    ],
  },
  {
    lang: "தமிழ் (Tamil)",
    text: [
      "உங்கள் OTP அல்லது ATM PIN யாருக்கும் சொல்லாதீர்கள் — வங்கி என்று சொன்னாலும் கூட.",
      "சந்தேகமான கால் அல்லது மெசேஜ் வந்தால் பதட்டப்பட வேண்டாம். நம்பகமான குடும்ப உறுப்பினரிடம் கேளுங்கள்.",
      "உதவிக்கு 1930 எண்ணை அழைக்கவும் அல்லது cybercrime.gov.in இல் புகார் செய்ய இளம் உறுப்பினரிடம் கேளுங்கள்.",
    ],
  },
  {
    lang: "മലയാളം (Malayalam)",
    text: [
      "നിങ്ങളുടെ OTP യും ATM PIN ഉം ആരോടും പറയരുത് — ബാങ്കിൽ നിന്നാണെന്ന് പറഞ്ഞാലും.",
      "സംശയകരമായ കാൾ അല്ലെങ്കിൽ മെസേജ് വന്നാൽ ഭയപ്പെടേണ്ട. വിശ്വസനീയമായ കുടുംബാംഗത്തോട് ചോദിക്കൂ.",
      "സഹായത്തിന് 1930 വിളിക്കുക അല്ലെങ്കിൽ cybercrime.gov.in ൽ റിപ്പോർട്ട് ചെയ്യാൻ പറയുക.",
    ],
  },
  {
    lang: "मराठी (Marathi)",
    text: [
      "तुमचा OTP किंवा ATM PIN कुणालाही देऊ नका — बँकेतून आहे म्हटले तरी नाही.",
      "संशयास्पद फोन किंवा मेसेज आला तर घाबरू नका. आधी विश्वासू कुटुंब सदस्याला विचारा.",
      "मदतीसाठी 1930 या क्रमांकावर फोन करा किंवा cybercrime.gov.in वर तक्रार करायला सांगा.",
    ],
  },
  {
    lang: "हिन्दी (Hindi)",
    text: [
      "अपना OTP या ATM PIN किसी को न दें — चाहे वे बैंक से होने का दावा करें।",
      "कोई संदिग्ध कॉल या मैसेज आए तो घबराएँ नहीं। पहले किसी भरोसेमंद परिवार के सदस्य से पूछें।",
      "मदद के लिए 1930 हेल्पलाइन पर कॉल करें या cybercrime.gov.in पर रिपोर्ट करवाएँ।",
    ],
  },
  {
    lang: "ಕನ್ನಡ (Kannada)",
    text: [
      "ನಿಮ್ಮ OTP ಅಥವಾ ATM PIN ಅನ್ನು ಯಾರಿಗೂ ಹೇಳಬೇಡಿ — ಬ್ಯಾಂಕ್‌ನಿಂದ ಎಂದರೂ ಸಹ.",
      "ಸಂದೇಹಾಸ್ಪದ ಕರೆ ಅಥವಾ ಸಂದೇಶ ಬಂದರೆ ಗಾಬರಿಯಾಗಬೇಡಿ. ನಂಬಿಕೆಯ ಕುಟುಂಬ ಸದಸ್ಯರನ್ನು ಕೇಳಿ.",
      "ಸಹಾಯಕ್ಕಾಗಿ 1930 ಗೆ ಕರೆ ಮಾಡಿ ಅಥವಾ cybercrime.gov.in ನಲ್ಲಿ ದೂರು ನೀಡಲು ಹೇಳಿ.",
    ],
  },
];

const ElderlyAdvisory = () => {
  return (
    <section className="container">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mx-auto max-w-2xl"
      >
        <div className="overflow-hidden rounded-xl border-2 border-safe/30 bg-safe/5 shadow-card">
          {/* Header */}
          <div className="flex items-start gap-3 border-b border-safe/20 bg-safe/10 p-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-safe/20">
              <Users className="h-6 w-6 text-safe" />
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-foreground md:text-2xl">
                For Elderly People (Senior Citizens)
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Simple safety advice in your language. Share this with your parents and grandparents.
              </p>
            </div>
          </div>

          {/* Body */}
          <div className="space-y-4 p-5">
            {messages.map((m, i) => (
              <div
                key={m.lang}
                className={`rounded-lg border border-border bg-card p-4 ${
                  i === 0 ? "border-safe/30 bg-safe/5" : ""
                }`}
              >
                <h3 className="mb-2 flex items-center gap-2 font-display text-sm font-bold text-safe">
                  <ShieldCheck className="h-4 w-4" /> {m.lang}
                </h3>
                <ul className="space-y-1.5 text-[15px] leading-relaxed text-foreground md:text-base">
                  {m.text.map((line, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-safe" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <a
              href="tel:1930"
              className="flex items-center justify-center gap-2 rounded-lg bg-safe px-4 py-3 font-display text-base font-semibold text-safe-foreground transition-colors hover:bg-safe/90"
            >
              <PhoneCall className="h-4 w-4" /> Call Cybercrime Helpline 1930
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ElderlyAdvisory;
