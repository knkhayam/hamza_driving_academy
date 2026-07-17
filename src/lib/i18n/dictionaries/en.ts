import { siteConfig } from "../../config";

export type Dictionary = typeof en;

export const en = {
  meta: {
    homeTitle: `Driving Lessons in ${siteConfig.city} | ${siteConfig.name}`,
    homeDescription: `${siteConfig.name} offers automatic and manual driving lessons in ${siteConfig.city}. Experienced instructor, flexible lessons, and test preparation. Call ${siteConfig.phone}.`,
    aboutTitle: `About ${siteConfig.name} | Driving Instructor in ${siteConfig.city}`,
    aboutDescription: `Meet ${siteConfig.instructorName}, your DVSA-ready driving instructor in ${siteConfig.city} with ${siteConfig.experienceYears}+ years of experience.`,
    lessonsTitle: `Automatic & Manual Driving Lessons in ${siteConfig.city}`,
    lessonsDescription: `Practical training, test preparation, and flexible lesson times from 6am to 9pm with ${siteConfig.name}.`,
    contactTitle: `Contact ${siteConfig.name} | Book Driving Lessons`,
    contactDescription: `Call or WhatsApp ${siteConfig.phone} to book driving lessons in ${siteConfig.city}. Open ${siteConfig.openingHours}.`,
    areasTitle: `Driving Lessons Near You | Areas Covered in ${siteConfig.city}`,
    areasDescription: `${siteConfig.name} covers ${siteConfig.city} and surrounding areas including Littleover, Mickleover, Normanton and more.`,
  },
  nav: {
    home: "Home",
    about: "About",
    lessons: "Lessons",
    areas: "Areas Covered",
    contact: "Contact",
    book: "Book a Lesson",
  },
  common: {
    call: "Call Now",
    whatsapp: "WhatsApp",
    learnMore: "Learn more",
    viewAreas: "View areas covered",
    openMaps: "Open in Google Maps",
    limitedSlots: "Limited slots — book today",
  },
  home: {
    brandSupport: "Safe Driving. Better Future.",
    headline: "Your journey to success starts here",
    subhead: `${siteConfig.name} — automatic and manual lessons in ${siteConfig.city}. Learn, practice, pass, drive.`,
    featuresTitle: "Why learners choose us",
    featuresLead: "Friendly coaching built around your pace and goals.",
    features: [
      {
        title: "Experienced instructors",
        text: `${siteConfig.experienceYears}+ years helping new drivers build real confidence on the road.`,
      },
      {
        title: "Practical training",
        text: "On-road skills that prepare you for everyday driving, not just the test.",
      },
      {
        title: "Test preparation",
        text: "Structured mock tests and clear feedback so you know exactly what to improve.",
      },
      {
        title: "Friendly approach",
        text: "Patient, calm lessons that reduce nerves and keep progress steady.",
      },
      {
        title: "Flexible lessons",
        text: `Book around your life — available ${siteConfig.openingHours}.`,
      },
    ],
    pathTitle: "Learn. Practice. Pass. Drive.",
    pathLead: "A simple path from first lesson to full freedom.",
    pathSteps: [
      { label: "Learn", text: "Master the controls and road awareness" },
      { label: "Practice", text: "Build muscle memory with guided routes" },
      { label: "Pass", text: "Arrive test-ready with confidence" },
      { label: "Drive", text: "Enjoy new skills and new freedom" },
    ],
    reviewsTitle: "What learners say",
    reviewsLead: "Read verified feedback on our Google Business profile.",
    reviewsEmpty:
      "See our latest Google reviews — ratings and comments update on Google Maps.",
    reviewsCountLabel: "Google reviews",
    viewGoogleReviews: "Read Google reviews",
    ctaTitle: "Drive with confidence",
    ctaLead: `Join ${siteConfig.name} — where good drivers are made.`,
  },
  about: {
    title: "About us",
    lead: `${siteConfig.tagline}`,
    body: `${siteConfig.name} is based in ${siteConfig.city} and focused on one thing: helping you become a safe, confident driver. Whether you prefer automatic or manual, lessons are tailored to your experience and goals.`,
    instructorTitle: `Meet ${siteConfig.instructorName}`,
    instructorBody: `With ${siteConfig.experienceYears}+ years of instructing experience, ${siteConfig.instructorName} brings a calm, practical teaching style — clear explanations, honest feedback, and lessons that fit around your schedule.`,
    valuesTitle: "What we stand for",
    values: [
      {
        title: "Safety first",
        text: "Good habits early mean safer driving for life.",
      },
      {
        title: "Clear progress",
        text: "You always know what you are working on next.",
      },
      {
        title: "Respectful coaching",
        text: "No pressure — just supportive, professional training.",
      },
    ],
  },
  lessons: {
    title: "Driving lessons",
    lead: "Automatic and manual lessons available — book around your day.",
    intro: `From first-time learners to refresher drivers, ${siteConfig.name} covers the skills you need for everyday driving and your practical test.`,
    typesTitle: "Lesson types",
    types: [
      {
        title: "Automatic lessons",
        text: "Focus on observation, junctions, and smooth control without clutch work.",
      },
      {
        title: "Manual lessons",
        text: "Build clutch control, gear changes, and hill starts with patient coaching.",
      },
      {
        title: "Test preparation",
        text: "Mock tests, manoeuvres, and independent driving practice before your exam.",
      },
      {
        title: "Refresher lessons",
        text: "Rebuild confidence after a break or settle into UK roads as a new resident.",
      },
    ],
    hoursTitle: "Lesson hours",
    hoursBody: `Open ${siteConfig.openingHours} — early mornings and evenings available so you can train around work or study.`,
    pricingNote: "Pricing depends on lesson length and package. Call or WhatsApp for a quote and available slots.",
  },
  contact: {
    title: "Contact us",
    lead: "Ready to book? Call or message — we reply quickly.",
    phoneLabel: "Phone",
    whatsappLabel: "WhatsApp",
    emailLabel: "Email",
    addressLabel: "Address",
    hoursLabel: "Opening hours",
    cityLabel: "City",
    formHint: "Prefer messaging? Use WhatsApp with your preferred times and we’ll confirm a slot.",
  },
  areas: {
    title: "Areas covered",
    lead: `Driving lessons across ${siteConfig.city} and nearby neighbourhoods.`,
    intro: "We pick up across these areas. If you are nearby and unsure, get in touch — we may still be able to help.",
    ctaLead: "Not sure if we cover your street? Ask on WhatsApp.",
  },
  footer: {
    tagline: "Safe driving. Better future.",
    rights: `© ${new Date().getFullYear()} ${siteConfig.name}. All rights reserved.`,
    privacy: "This site does not use tracking cookies.",
  },
  cookie: {
    message:
      "This website is static and does not use tracking cookies. We only store your language preference locally if you change it.",
    accept: "Got it",
  },
};
