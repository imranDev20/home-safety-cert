import { HiEnvelope, HiMapPin, HiPhone } from "react-icons/hi2";
import { FaTwitter, FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";

export const DRAWER_WIDTH = 240;

export const NAV_LINKS = ["Home", "About", "Services", "Pricing", "Contact"];

export const SOCIALS = [
  { id: 1, name: "Facebook", icon: FaFacebookF, href: "https://facebook.com" },
  { id: 2, name: "Twitter", icon: FaTwitter, href: "https://facebook.com" },
  { id: 3, name: "YouTube", icon: FaYoutube, href: "https://facebook.com" },
  { id: 4, name: "Instagram", icon: FaInstagram, href: "https://facebook.com" },
];

export const INFO = {
  address: {
    id: 1,
    type: "text",
    text: "London, Great Britain, UK",
    icon: HiMapPin,
  },
  email: {
    id: 2,
    type: "link-email",
    text: "hello@homesafetycert.co.uk",
    icon: HiEnvelope,
  },
  phone: {
    id: 3,
    type: "link-phone",
    text: "020 3488 4929",
    icon: HiPhone,
  },
  workingHours: {
    id: 3,
    type: "text",
    text: "Mon - Fri: 08:00 - 18:00",
    icon: HiPhone,
  },
};

export const FAQS = [
  {
    id: 1,
    ques: "What safety certifications do you offer?",
    ans: "At Home Safety Cert, we offer a range of safety certifications for landlords and estate agents. Our services include Gas Safety Certificate (CP12), Electrical certification or periodic inspection, Energy Performance Certificate (EPC), PAT testing, Emergency Light Certificate, Fire Alarm Certificate, Fire Risk Assessment, and full compliance services for HMO landlords.",
  },
  {
    id: 2,
    ques: "How long does it take to complete a safety certification?",
    ans: "The duration of a safety certification inspection depends on the type of certification required and the size of the property. Typically, it takes between 1-3 hours to complete a certification inspection.",
  },
  {
    id: 3,
    ques: "What is the cost of a safety certification?",
    ans: "The cost of a safety certification depends on the type of certification required and the size of the property. We provide bespoke quotes tailored to your specific requirements. Please contact us for a free, no-obligation quote.",
  },
  {
    id: 4,
    ques: "Do I need a safety certification for every property I own?",
    ans: "If you rent out a property, you are required by law to obtain safety certifications for certain aspects of the property, such as gas and electricity. Please contact us to discuss your specific requirements and obligations.",
  },
  {
    id: 5,
    ques: "What happens if I don't get a safety certification?",
    ans: "Failure to obtain safety certifications for your rental property can result in fines and legal action. Additionally, it can compromise the safety of your tenants and impact your insurance claims. We strongly recommend obtaining safety certifications to ensure compliance and peace of mind.",
  },
  {
    id: 6,
    ques: "How do I book a safety certification with Home Safety Cert?",
    ans: "You can book a safety certification with us by phone, email, or through our website. Our friendly team will guide you through the process and answer any questions you may have.",
  },
  {
    id: 7,
    ques: "What happens during a safety certification inspection?",
    ans: "During a safety certification inspection, our expert tradespeople will inspect and test the relevant aspects of your property to ensure compliance with legal requirements. We will provide you with a comprehensive report outlining the findings and any necessary actions required.",
  },
  {
    id: 8,
    ques: "How often do I need to renew my safety certification?",
    ans: "The frequency of safety certification renewals varies depending on the type of certification and local regulations. We will provide you with guidance on when your certification is due for renewal.",
  },
  {
    id: 9,
    ques: "What if I have a problem with my safety certification?",
    ans: "If you have any issues with your safety certification, please contact us immediately. Our team will work with you to resolve any problems and ensure your compliance and safety.",
  },
  {
    id: 10,
    ques: "Are your tradespeople qualified and insured?",
    ans: "Yes, all of our tradespeople are qualified and registered with UK official registration bodies. Additionally, they are insured for liability and professional indemnity to ensure your peace of mind.",
  },
];

export const OTHER_PAGES = [
  "Privacy Policy",
  "Terms & Condition",
  "Acceptable Use Policy",
  "Cookie Policy",
];
