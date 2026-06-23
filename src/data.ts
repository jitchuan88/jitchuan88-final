import { HeroSlide, Capability, WhyChooseItem, BrandPartner, SolutionCategory } from './types';
import bgNaval from './assets/images/naval_vessel_operations_1781783674796.jpg';
import bgAerospace from './assets/images/aerospace_electronics_1781783691785.jpg';

import logoHabia from './assets/images/habia_cable_logo_1781854960727.jpg';
import logoOxley from './assets/images/oxley_logo_1781854976103.jpg';
import logoEaton from './assets/images/eaton_logo_1781854991282.jpg';
import logoITW from './assets/images/itw_gse_logo_1781855005198.jpg';
import logoBosch from './assets/images/bosch_logo_1781855017752.jpg';
import logoDEF from './assets/images/def_marine_logo_1781855031089.jpg';
import logoShorelink from './assets/images/shorelink_logo_1781855052754.jpg';
import logoMarinelec from './assets/images/marinelec_logo_1781855065628.jpg';
import logoFortinet from './assets/images/fortinet_logo_1781855075575.jpg';
import logoKrempel from './assets/images/krempel_logo_1781855088039.jpg';
import logoEetarp from './assets/images/eetarp_logo_1781855099388.jpg';
import logoEnerSys from './assets/images/enersys_logo_1781855110987.jpg';

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    title: "Naval & Defense Systems",
    subtitle: "Complete lifecycle support and critical systems engineering for elite naval fleet vessels including Formidable-class, Endurance-class, and responsive rescue units.",
    bgImage: bgNaval,
    topic: "Naval Operations"
  },
  {
    id: 2,
    title: "Aerospace & Mission-Critical Cabling",
    subtitle: "Premium material integration, high-screening electromagnetic shielding, and extreme military-standard wiring for harsh-environment aerospace operations.",
    bgImage: bgAerospace,
    topic: "Aerospace Electronics"
  }
];

export const CAPABILITIES: Capability[] = [
  {
    id: 1,
    title: "Design & Manufacturing",
    description: "Custom, ruggedized defense and engineering solutions tailored to extreme operational requirements."
  },
  {
    id: 2,
    title: "System Integration",
    description: "Seamless execution and installation for turnkey project delivery."
  },
  {
    id: 3,
    title: "Regional Distribution",
    description: "Providing the Asian market with direct access to market-leading technologies through deep-rooted strategic partnerships."
  },
  {
    id: 4,
    title: "Spare Management & Warehousing",
    description: "Dedicated supply chain support to ensure long-term operational readiness."
  },
  {
    id: 5,
    title: "Enterprise IT & Platform Security",
    description: "Integrating advanced enterprise information technology and robust cyber resilience solutioning."
  }
].sort((a, b) => a.title.localeCompare(b.title));

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    id: 1,
    badge: "1981",
    title: "Established Heritage",
    description: "Driving engineering innovation and distribution value since 1981."
  },
  {
    id: 2,
    badge: "Trusted",
    title: "Defense & Maritime Trusted",
    description: "Decades of experience executing turnkey implementations for elite defense and commercial organizations."
  },
  {
    id: 3,
    badge: "Exclusive",
    title: "Strategic Agency Alliances",
    description: "Serving as the sole or exclusive market partner for world-class global technology brands."
  }
];

export const BRAND_PARTNERS: BrandPartner[] = [
  { name: "Habia Cable", logoText: "Habia Cable", description: "Premium military naval cabling infrastructure", logo: logoHabia },
  { name: "Oxley", logoText: "Oxley", description: "Mil-grade tactical cockpit & deck status lighting", logo: logoOxley },
  { name: "Eaton", logoText: "Eaton", description: "Naval uninterruptible power systems (UPS)", logo: logoEaton },
  { name: "ITW GSE", logoText: "ITW GSE", description: "Specialized 28V DC aviation ground power systems", logo: logoITW },
  { name: "Bosch", logoText: "Bosch", description: "High-tier optical surveillance & analytics", logo: logoBosch },
  { name: "DEF Marine", logoText: "DEF Marine", description: "Advanced false-alarm free marine fire detection", logo: logoDEF },
  { name: "Shorelink", logoText: "Shorelink", description: "Fixed and telescopic cable management systems", logo: logoShorelink },
  { name: "Marinelec Technologies", logoText: "Marinelec", description: "High-spec marine alarms and safety systems", logo: logoMarinelec },
  { name: "Fortinet", logoText: "Fortinet", description: "Advanced enterprise IT cyber resilience", logo: logoFortinet },
  { name: "Krempel", logoText: "Krempel", description: "Electrical insulation materials", logo: logoKrempel },
  { name: "Eetarp", logoText: "Eetarp", description: "Power quality and insulation monitoring solutions", logo: logoEetarp },
  { name: "EnerSys", logoText: "EnerSys", description: "Industrial batteries and energy storage solutions", logo: logoEnerSys }
];

export const SOLUTION_CATEGORIES: SolutionCategory[] = [
  {
    id: 'power-systems',
    title: "Power Systems & Electrical Infrastructure",
    description: "This category groups everything related to generating, managing, storing, and transmitting energy. It moves from core power generation down to the cables and management systems that deliver it.",
    items: [
      {
        name: "Mission-Critical Power (Eaton Uninterruptible Power Supply)",
        marketPosition: "Exclusive Eaton agent for naval power requirements",
        trackRecord: "Turnkey delivery of 45 ruggedized units (ranging 8-30 KVA) onboard naval fleet platforms.",
        keyFeatures: [
          "Slim design: Engineered specifically to overcome severe physical spatial restrictions onboard vessels.",
          "Modular concept: Segmented components prevent total system failures and facilitate fast drawdown/turnaround times.",
          "Marine Excellence: High-reliability marine certification outputting clean energy with very low harmonic noise."
        ]
      },
      {
        name: "Aviation Ground Power",
        marketPosition: "Exclusive ITW GSE Agent",
        description: "World-class 28V DC solid-state aviation ground power converters designed to support active flight decks.",
        trackRecord: "Exclusive ITW GSE agent for Military Solutions"
      },
      {
        name: "Transformer Manufacturing (Marine Transformers & Safety)",
        marketPosition: "Design and build customized marine transformers",
        trackRecord: "Undertook turnkey implementation across active Military Vessels.",
        capabilities: [
          "Bespoke engineering, thermal cooling configurations, custom enclosures, and specialized electrical safety margins built exactly to individual navy specifications."
        ]
      },
      {
        name: "DC Charger with Battery Management System (BMS)",
        marketPosition: "Turnkey Implementation",
        description: "Highly rugged battery charging assets with real-time temperature monitoring, active cell balancing, and advanced safety diagnostics.",
        trackRecord: "Turnkey implementation for Military Vessels"
      },
      {
        name: "Defense Standard (Def-Std 61-12) Cables",
        marketPosition: "Exclusive Habia Cable’s distributor",
        keyApplications: [
          "Defense, marine, nuclear, industrial, transport, telecom, control & instrumentation systems."
        ],
        technicalRange: "Scales smoothly from low-amplitude signal wires up to specialized High power distribution lines.",
        keyCharacteristics: [
          "Halogen-Free",
          "Low-Smoke",
          "Lightweight & Compact",
          "High screening EMC coverage"
        ]
      },
      {
        name: "Raw Materials & Spare Management & Warehousing",
        description: "Premium supply channels for high-grade Enamel Copper optimized for heavy transformer and industrial winding applications."
      },
      {
        name: "Cable Management Systems (CMS)",
        marketPosition: "Shorelink Partnership",
        description: "Design and execution of state-of-the-art cable handling solutions supporting maritime port and naval base operations.",
        trackRecord: "Partnership with Shorelink for the design and turnkey implementation of CMS in Naval Bases & Ports.",
        keyCharacteristics: [
          "Telescopic CMS",
          "Mobile CMS",
          "Fixed CMS"
        ]
      }
    ]
  },
  {
    id: 'physical-security',
    title: "Physical Security & Life Safety Systems",
    description: "This category consolidates all solutions designed to protect physical assets, vessels, and human life from environmental hazards and physical threats.",
    items: [
      {
        name: "Fire Detection System (FDS)",
        marketPosition: "Exclusive DEF Marine & Marinelec agent",
        description: "Military solutions delivering newer detector technology designed specifically to prevent fault alarms across complex ship layouts.",
        trackRecord: "Undertook turnkey implementation across Military Vessels."
      },
      {
        name: "Auto Fire Suppression Device",
        marketPosition: "Bespoke Design & Build",
        description: "Customized fire suppression devices in flexible tube forms to fit exact customer physical requirements. Available in specifications including 8mm OD (side) and 18mm OD (rear).",
        trackRecord: "Design and build customized fire suppression device (tube form) to meet customer’s requirements."
      },
      {
        name: "Integrated Surveillance & Safety (Bosch CCTV & Fire Detection)",
        marketPosition: "Exclusive Bosch agent for Singapore Navy.",
        description: "Advanced security systems integrated with high-performance video analytics and automated fire detection capabilities.",
        trackRecord: "Undertook turnkey implementation across Military Vessels.",
        keyFeatures: [
          "Active Assist: The video analytics cameras serve as an additional supportive monitor in the control room for extremely fast, automated alarm triggers compared to standard fire detectors (this is not a substitution of the FDS)."
        ]
      },
      {
        name: "Low Location Lighting (LLL) System",
        marketPosition: "Trade Mark Number: 40201820006P",
        description: "Photoluminescent escape path indications fully compliant with registered trademark guidelines.",
        trackRecord: "Undertook turnkey implementation across Military Vessels."
      }
    ]
  },
  {
    id: 'vessel-automation-predictive',
    title: "Vessel Automation & Predictive Maintenance",
    description: "This category focuses on the intelligent systems, automated controls, and diagnostic tools used to monitor, manage, and maintain the health of the fleet.",
    items: [
      {
        name: "Customize Control and Monitoring system",
        marketPosition: "Bespoke Control Systems",
        description: "Bespoke control and monitoring integrations engineered with high-integrity diagnostics to secure ships, crafts, and harbor-side platforms.",
        trackRecord: "• Wired shipyard central Fire and Flooding control and monitoring system\n• Wireless (RF) crafts' Fire and Flooding control and monitoring system"
      },
      {
        name: "Thermographic Inspection Service",
        marketPosition: "On-conditional monitoring system (OCMS)",
        description: "Advanced non-invasive thermal profiling and predictive inspection services built to identify latent defects and thermal patterns in live hardware.",
        keyFeatures: [
          "Detect electrical switchboard components and cables' health",
          "Detect fluids choke with temperature changes",
          "Detect battery body thermal changes"
        ]
      },
      {
        name: "Insulation Resistance Monitoring",
        marketPosition: "Continuous Electrical Safety",
        description: "A vital diagnostic process that continuously measures the health of wire and cable coatings in ungrounded (IT) systems. It identifies degradation, moisture, or thermal damage before a short circuit can occur.",
        trackRecord: "Undertook turnkey implementation across Military Vessels."
      }
    ]
  },
  {
    id: 'tactical-operations-logistics',
    title: "Tactical Operations, Logistics & Crew Readiness",
    description: "This category groups the specialized hardware deployed for active missions, rapid base setups, and the simulation systems used to train the personnel operating them.",
    items: [
      {
        name: "Naval & Military Lighting Systems",
        marketPosition: "Exclusive Oxley Agent for Asia",
        keyProducts: [
          "Infrared covert lighting designed for stealth operations.",
          "LED Deck Status and Edge lighting solutions.",
          "Integrated test equipment purpose-built to validate Oxley systems."
        ],
        keyFeatures: [
          "Stringent Test Procedures: Rugged and highly reliable layout optimized for hyper-harsh aerospace and oceanic states."
        ],
        keyCharacteristics: [
          "Line Up Light",
          "Deck Status Light",
          "Deck Edge Light"
        ]
      },
      {
        name: "PLC based Simulator training Lab",
        description: "Comprehensive software-in-the-loop and hardware-in-the-loop training installations coupled with custom controls emulation.",
        trackRecord: "2025/26 Project for Shipboard  platform systems simulator"
      },
      {
        name: "Maritime Logistics (WaterBladder)",
        description: "Flexible water and fuel storage solutions designed for rapid base deployment and high-capacity maritime logistics.",
        keyFeatures: [
          "High capacity: 10m³ Water Pillow capacity.",
          "Integrated Equipment: Equipped with booster systems and diesel-driven pump carts.",
          "Lifecycle Support: Offers full maintenance and specialized containerized storage support."
        ],
        keyCharacteristics: [
          "water transfer system (4kw)",
          "water booster system (2kw)",
          "petrol driven pump (5 HP)"
        ]
      }
    ]
  },
  {
    id: 'cyber-security',
    title: "Cybersecurity & Information Governance",
    description: "This category is entirely dedicated to protecting digital networks and ensuring regulatory compliance, separating it cleanly from the physical/hardware divisions.",
    items: [
      {
        name: "Licensed Cybersecurity Services",
        marketPosition: "Licensed Penetration Testing Service Provider",
        description: "Penetration Testing Service Licence and are authorized under the Cybersecurity Act 2018.",
        services: [
          {
            name: "CISO-as-a-Service",
            marketPosition: "Cyber Essentials Certification",
            description: "Focuses on helping organizations achieve the CSA’s \"Cyber Essentials\" certification through health checkups and hygiene gap remediation."
          },
          {
            name: "DPO-as-a-Service",
            marketPosition: "PDPA Compliance & MSF DSI",
            description: "Assists organizations in meeting Data Protection Officer (DPO) obligations under the Personal Data Protection Act (PDPA) and adhering to MSF \"Data Security Instructions\" (DSI)."
          },
          {
            name: "Data Security-as-a-Service (MOH)",
            marketPosition: "Health Information Bill Alignment",
            description: "Specifically tailored to help healthcare organizations comply with the Health Information Bill (HIB) and MOH cybersecurity guidelines."
          }
        ]
      },
      {
        name: "Fortinet Network Security",
        marketPosition: "Enterprise Security Solutions",
        description: "Fortigate Firewall and FortiAnalyser.",
        technology: "Next-Generation Firewall (NGFW) and security analytics platforms designed in robust architectures to secure workloads, enable secure remote work, and deliver continuous visibility across the corporate infrastructure."
      }
    ]
  }
].sort((a, b) => a.title.localeCompare(b.title)).map(category => ({
  ...category,
  items: [...category.items].sort((a, b) => a.name.localeCompare(b.name))
}));
