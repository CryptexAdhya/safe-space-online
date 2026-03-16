export interface FAQ {
  question: string;
  answer: string;
}

export const faqData: FAQ[] = [
  {
    question: "I clicked a suspicious link. What should I do?",
    answer:
      "Don't panic. Close the page immediately. Do not enter any personal information. Clear your browser history and cache. Run a virus scan on your device. Change passwords for important accounts. If you entered any details, contact your bank or the service involved right away.",
  },
  {
    question: "I shared my OTP with someone. What should I do now?",
    answer:
      "Contact your bank or the service immediately to block any unauthorized transactions. Change your passwords. Enable two-factor authentication if not already active. Report the incident to the cybercrime helpline. Remember: no legitimate company will ever ask for your OTP.",
  },
  {
    question: "My social media account got hacked. What should I do?",
    answer:
      "Try to reset your password immediately using the 'Forgot Password' option. If you can't access your account, use the platform's recovery options. Report the hack to the platform. Let your contacts know so they don't fall for any messages from the hacker. Enable two-factor authentication on all your accounts.",
  },
  {
    question: "I lost money in an online scam. What can I do?",
    answer:
      "Contact your bank immediately to try to reverse the transaction. File a complaint on the official cybercrime reporting website. Save all evidence like screenshots, messages, and transaction records. File a police report at your nearest station. The sooner you act, the better the chance of recovery.",
  },
  {
    question: "Someone is blackmailing me online. What should I do?",
    answer:
      "Do not pay or respond to the blackmailer. Save all evidence including messages, emails, and screenshots. Block the person on all platforms. Report to the cybercrime helpline and file a police report. This is a serious crime and you are not alone — help is available.",
  },
  {
    question: "I installed a suspicious app. Is my phone at risk?",
    answer:
      "Uninstall the app immediately. Run a security scan with a trusted antivirus app. Check your accounts for any unauthorized activity. Change passwords for important accounts. If the app asked for permissions like camera, contacts, or storage, review what data it may have accessed.",
  },
  {
    question: "I got a call asking for my bank details. Was it a scam?",
    answer:
      "Most likely, yes. Banks never call asking for your PIN, password, CVV, or OTP. Hang up and call your bank directly using the number on their official website. Never share sensitive details over the phone. Report the number to the cybercrime helpline.",
  },
  {
    question: "How do I know if a message or email is fake?",
    answer:
      "Look for spelling and grammar mistakes. Check the sender's email address or phone number carefully. Be suspicious of urgent language like 'Act now!' or 'Your account will be closed.' Don't click on links in unexpected messages. When in doubt, contact the company directly through their official website or app.",
  },
];
