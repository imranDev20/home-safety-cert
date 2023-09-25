import { HiEnvelope, HiMapPin, HiPhone } from "react-icons/hi2";
import { FaTwitter, FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import {
  BulbIcon,
  EnergyIcon,
  ExitIcon,
  FireAlarmIcon,
  FireRiskIcon,
  FlameIcon,
  HmoIcon,
  PatIcon,
} from "@/app/_components/common/icons";
import { FaMapMarkerAlt, FaRegClock, FaRegEnvelope } from "react-icons/fa";
import { Faq, Service } from "@/types/misc";

export const DRAWER_WIDTH = 240;

export const NAV_LINKS = ["Home", "About", "Services", "Pricing", "Contact"];

export const SOCIALS = [
  { id: 1, name: "Facebook", icon: FaFacebookF, href: "https://facebook.com" },
  { id: 2, name: "Twitter", icon: FaTwitter, href: "https://facebook.com" },
  { id: 3, name: "YouTube", icon: FaYoutube, href: "https://facebook.com" },
  { id: 4, name: "Instagram", icon: FaInstagram, href: "https://facebook.com" },
];

const ADDRESS = "London, Great Britain, UK";
const EMAIL = "hello@homesafetycert.co.uk";
const PHONE = "020 3488 4929";
const WORKING_HOURS = "Mon - Fri: 08:00 - 18:00";

export const INFO = {
  address: {
    id: 1,
    type: "text",
    text: ADDRESS,
    icon: HiMapPin,
  },
  email: {
    id: 2,
    type: "link-email",
    text: EMAIL,
    icon: HiEnvelope,
  },
  phone: {
    id: 3,
    type: "link-phone",
    text: PHONE,
    icon: HiPhone,
  },
  workingHours: {
    id: 3,
    type: "text",
    text: WORKING_HOURS,
    icon: HiPhone,
  },
};

export const CONTACT_PAGE_INFO = [
  {
    id: 1,
    Icon: FaRegEnvelope,
    title: "Email Address",
    info: EMAIL,
  },
  {
    id: 2,
    Icon: FaMapMarkerAlt,
    title: "Our Address",
    info: ADDRESS,
  },
  {
    id: 3,
    Icon: FaRegClock,
    title: "Open Hours",
    info: WORKING_HOURS,
  },
];

export const FAQS: Faq[] = [
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

export const OTHER_PAGES: string[] = [
  "Privacy Policy",
  "Terms & Condition",
  "Acceptable Use Policy",
  "Cookie Policy",
];

export const SERVICES: Service[] = [
  {
    id: 1,
    name: "Gas Safety Certificate",
    Icon: FlameIcon,
    description:
      "Stay safe and compliant with our gas safety certificate for your home",
    startingPrice: 60,
    packages: [
      "Gas meter",
      "Pipe work",
      "Gas Appliance (Boiler, Cooker or Fireplace)",
      "Boiler service & check-up",
      "CO alarm & detector",
      "Cooker installation & leak check",
      "Boiler",
    ],
    detailedPackages: [
      {
        name: "Gas meter+Pipe work",
        price: 60,
      },
      {
        name: "Gas meter+Pipe work+ 1 Gas appliance (Boiler, Cooker or Fireplace)",
        price: 70,
      },
      {
        name: "Gas meter+Pipe work+ 2 Gas appliance (Boiler, Cooker or Fireplace)",
        price: 80,
      },
      {
        name: "Gas meter+Pipe work+ 3 Gas appliance (Boiler, Cooker or Fireplace)",
        price: 90,
      },
    ],

    additionalPackage: [
      {
        name: "Boiler service & check-up ( Less than 5 years old boilers)",
        price: 90,
      },
      {
        name: "Boiler service & check‑up ( Less than 10 years old boilers)",
        price: 130,
      },
      {
        name: "Boiler service & check‑up ( Over 10 years old boilers)",
        price: 180,
      },
      {
        name: "CO alarm & detector (Battery Powered)- Supply & installation",
        price: 60,
      },
      {
        name: "CO alarm & detector (Mains powered)- Supply & installation",
        price: 140,
      },
      { name: "Cooker installation & leak check", price: 120 },
      {
        name: "Boiler installation (Supply, installation & certification)- Complete Job",
        price: 0,
      },
    ],
  },
  {
    id: 2,
    name: "Electric Certificate (EICR)",
    Icon: BulbIcon,
    description: "Ensure electrical safety with our EICR certification.",
    startingPrice: 150,
    packages: [
      "Studio property",
      "1 to 5 or more Bedrooms property",
      "Consumer unit supply",
      "Consumer unit installation",
      "Consumer unit certification",
    ],
    detailedPackages: [
      { name: "One Bedroom/Studio property", price: 120 },
      {
        name: "Two Bedrooms property",
        price: 140,
      },
      {
        name: "Three Bedrooms property",
        price: 160,
      },
      {
        name: "Four Bedrooms property",
        price: 180,
      },
      {
        name: "Five or more Bedrooms property",
        price: 200,
      },
      {
        name: "Additional consumer unit at the same address (each)",
        price: 80,
      },
    ],
    additionalPackage: [
      {
        name: "Consumer Unit - Supply, Installation & Certification ( Complete Job)",
        price: 0,
      },
    ],
  },
  {
    id: 3,
    name: "EPC",
    Icon: EnergyIcon,
    description:
      "Measure your property's energy efficiency with our EPC certification",
    startingPrice: 70,
    packages: ["Studio property", "1 to 5 or more bedroom property"],
    detailedPackages: [
      { name: "One Bedroom/Studio property", price: 60 },
      { name: "Two Bedrooms property", price: 70 },
      { name: "Three Bedrooms property", price: 80 },
      { name: "Four Bedrooms property", price: 90 },
      {
        name: "Five or more Bedrooms property",
        price: 100,
      },
    ],
  },
  {
    id: 4,
    name: "PAT",
    Icon: PatIcon,
    description:
      "Get peace of mind with our reliable PAT testing certification.",
    startingPrice: 80,
    packages: ["Testing", "Certifications"],
    detailedPackages: [
      { name: "PAT testing & Certification (1-10 appliances)", price: 80 },
      { name: "PAT testing & Certification (1-15 appliances)", price: 100 },
      { name: "PAT testing & Certification (1-20 appliances)", price: 120 },
    ],
  },
  {
    id: 5,
    name: "Emergency Light Certification",
    Icon: ExitIcon,
    description: "Expert certification for fully functional emergency lights.",
    startingPrice: 130,
    packages: ["Supply", "Installation", "Certification"],
    detailedPackages: [
      {
        name: "Emergency Light Certification (up to 8 units)",
        price: 130,
      },
      {
        name: "Emergency Light Certification (up to 12 units)",
        price: 170,
      },
    ],
    additionalPackage: [
      {
        name: "Emergency Light - Installation, Supply & installation (each unit)",
        price: 100,
      },
    ],
  },
  {
    id: 6,
    name: "Fire Alarm Certificate",
    Icon: FireAlarmIcon,
    description: "Get reliable certification for your fire alarm system.",
    startingPrice: 130,
    packages: [
      "Certification",
      "Smoke detector",
      "Heat detector",
      "Fire Alarm system",
    ],
    detailedPackages: [
      { name: "Fire Alarm Certification (up to 8 units)", price: 130 },
      { name: "Fire Alarm Certification (up to 12 units)", price: 170 },
    ],

    additionalPackage: [
      {
        name: "Smoke detector (Battery Powered)- Supply & installation (each unit)",
        price: 60,
      },
      {
        name: "Heat detector (Battery Powered)- Supply & installation (each unit)",
        price: 60,
      },
      {
        name: "Smoke detector detector (Mains powered)- Supply & installation (each unit)",
        price: 90,
      },
      {
        name: "Heat detector detector (Mains powered)- Supply & installation (each unit)",
        price: 90,
      },
      {
        name: "Fire Alarm system - Supply, Installation & Certification (HMO Properties)",
        price: 0,
      },
    ],
  },
  {
    id: 7,
    name: "Fire Risk Assessment",
    Icon: FireRiskIcon,
    description: "Minimize fire risks with our expert assessments.",
    startingPrice: 250,
    packages: [
      "Certification",
      "Smoke detector",
      "Heat detector",
      "Fire Alarm system",
    ],
    detailedPackages: [
      { name: "Fire Alarm Certification (up to 8 units)", price: 130 },
      {
        name: "Fire Alarm Certification (up to 12 units)",
        price: 170,
      },
    ],
    additionalPackage: [
      {
        name: "Smoke detector (Battery Powered)- Supply & installation (each unit)",
        price: 60,
      },
      {
        name: "Heat detector (Battery Powered)- Supply & installation (each unit)",
        price: 60,
      },
      {
        name: "Smoke detector detector (Mains powered)- Supply & installation (each unit)",
        price: 90,
      },
      {
        name: "Heat detector detector (Mains powered)- Supply & installation (each unit)",
        price: 90,
      },
      {
        name: "Fire Alarm system - Supply, Installation & Certification (HMO Properties)",
        price: 0,
      },
    ],
  },
  {
    id: 8,
    name: "HMO",
    Icon: HmoIcon,
    description: "Comprehensive HMO inspections for maximum safety.",
    startingPrice: 0,
    packages: [
      "Gas Safety Certificate",
      "Electric Certificate",
      "PAT Certificate",
      "EPC Certificate",
      "Emergency Light Certification",
      "Fire Alarm Certification",
      "Fire Risk Assessment",
    ],

    detailedPackages: [
      { name: "Gas Safety Certificate (2 Gas Appliances)", price: 80 },
      {
        name: "Electric Certificate (4/5 Bedrooms)",
        price: 180,
      },
      {
        name: "PAT Certificate (10 Appliances)",
        price: 80,
      },
      { name: "EPC Certificate (4/5 Bedrooms)", price: 90 },
      { name: "Emergency Light Certification (up to 8 units)", price: 130 },
      { name: "Fire Alarm Certification (up to 8 units)", price: 130 },
      { name: "Fire Risk Assessment (4/6 Bedrooms)", price: 350 },
    ],
  },
];
