import type { Dictionary } from "./en";
import { siteConfig } from "../../config";

export const ur: Dictionary = {
  meta: {
    homeTitle: `${siteConfig.city} میں ڈرائیونگ اسباق | ${siteConfig.name}`,
    homeDescription: `${siteConfig.name} ${siteConfig.city} میں آٹومیٹک اور مینوئل ڈرائیونگ اسباق پیش کرتا ہے۔ تجربہ کار انسٹرکٹر، لچکدار اوقات۔ فون: ${siteConfig.phone}۔`,
    aboutTitle: `${siteConfig.name} کے بارے میں | ${siteConfig.city} ڈرائیونگ انسٹرکٹر`,
    aboutDescription: `${siteConfig.instructorName} سے ملیں — ${siteConfig.city} میں ${siteConfig.experienceYears}+ سال کے تجربے کے ساتھ۔`,
    lessonsTitle: `${siteConfig.city} میں آٹومیٹک اور مینوئل ڈرائیونگ اسباق`,
    lessonsDescription: `عملی تربیت، ٹیسٹ کی تیاری، اور لچکدار اوقات ${siteConfig.openingHours} — ${siteConfig.name}۔`,
    contactTitle: `${siteConfig.name} سے رابطہ | اسباق بک کریں`,
    contactDescription: `اسباق بک کرنے کے لیے ${siteConfig.phone} پر کال یا واٹس ایپ کریں۔ اوقات: ${siteConfig.openingHours}۔`,
    areasTitle: `آپ کے قریب ڈرائیونگ اسباق | ${siteConfig.city} کے علاقے`,
    areasDescription: `${siteConfig.name} ${siteConfig.city} اور آس پاس کے علاقوں میں اسباق دیتا ہے، بشمول Littleover، Mickleover اور Normanton۔`,
  },
  nav: {
    home: "ہوم",
    about: "ہمارے بارے میں",
    lessons: "اسباق",
    areas: "علاقے",
    contact: "رابطہ",
    book: "سبق بک کریں",
  },
  common: {
    call: "ابھی کال کریں",
    whatsapp: "واٹس ایپ",
    learnMore: "مزید جانیں",
    viewAreas: "علاقے دیکھیں",
    openMaps: "گوگل میپس میں کھولیں",
    limitedSlots: "محدود سیٹیں — آج ہی بک کریں",
  },
  home: {
    brandSupport: "محفوظ ڈرائیونگ۔ بہتر مستقبل۔",
    headline: "کامیابی کا سفر یہاں سے شروع ہوتا ہے",
    subhead: `${siteConfig.name} — ${siteConfig.city} میں آٹومیٹک اور مینوئل اسباق۔ سیکھیں، مشق کریں، پاس کریں، چلائیں۔`,
    featuresTitle: "سیکھنے والے ہمیں کیوں پسند کرتے ہیں",
    featuresLead: "آپ کی رفتار اور اہداف کے مطابق دوستانہ تربیت۔",
    features: [
      {
        title: "تجربہ کار انسٹرکٹرز",
        text: `${siteConfig.experienceYears}+ سال کا تجربہ — نئے ڈرائیورز میں اعتماد پیدا کرنا۔`,
      },
      {
        title: "عملی تربیت",
        text: "روزمرہ کی ڈرائیونگ کے لیے حقیقی مہارتیں، صرف ٹیسٹ نہیں۔",
      },
      {
        title: "ٹیسٹ کی تیاری",
        text: "موک ٹیسٹ اور واضح فیڈبیک تاکہ آپ بہتری جانیں۔",
      },
      {
        title: "دوستانہ انداز",
        text: "صبر اور پرسکون اسباق جو گھبراہٹ کم کریں۔",
      },
      {
        title: "لچکدار اسباق",
        text: `اپنی زندگی کے مطابق بک کریں — دستیاب ${siteConfig.openingHours}۔`,
      },
    ],
    pathTitle: "سیکھیں۔ مشق کریں۔ پاس کریں۔ چلائیں۔",
    pathLead: "پہلے سبق سے آزادی تک کا سادہ راستہ۔",
    pathSteps: [
      { label: "سیکھیں", text: "کنٹرولز اور روڈ آگاہی میں مہارت" },
      { label: "مشق", text: "رہنمائی والے راستوں پر مہارت بنائیں" },
      { label: "پاس", text: "اعتماد کے ساتھ ٹیسٹ کے لیے تیار" },
      { label: "ڈرائیو", text: "نئی مہارت اور نئی آزادی سے لطف اٹھائیں" },
    ],
    reviewsTitle: "سیکھنے والے کیا کہتے ہیں",
    reviewsLead: "ہمارے گوگل بزنس پروفائل پر تصدیق شدہ رائے پڑھیں۔",
    reviewsEmpty:
      "ہماری تازہ ترین گوگل ریویوز دیکھیں — ریٹنگز اور تبصرے گوگل میپس پر اپ ڈیٹ ہوتے ہیں۔",
    reviewsCountLabel: "گوگل ریویوز",
    viewGoogleReviews: "گوگل ریویوز پڑھیں",
    ctaTitle: "اعتماد کے ساتھ ڈرائیو کریں",
    ctaLead: `${siteConfig.name} میں شامل ہوں — جہاں اچھے ڈرائیور بنتے ہیں۔`,
  },
  about: {
    title: "ہمارے بارے میں",
    lead: siteConfig.tagline,
    body: `${siteConfig.name} ${siteConfig.city} میں واقع ہے اور ایک ہی مقصد رکھتا ہے: آپ کو محفوظ اور پراعتماد ڈرائیور بنانا۔ آٹومیٹک یا مینوئل — اسباق آپ کے تجربے کے مطابق۔`,
    instructorTitle: `${siteConfig.instructorName} سے ملیں`,
    instructorBody: `${siteConfig.experienceYears}+ سال کے تجربے کے ساتھ، ${siteConfig.instructorName} پرسکون اور عملی انداز میں پڑھاتے ہیں — واضح وضاحت، ایماندار فیڈبیک، اور آپ کے شیڈول کے مطابق اسباق۔`,
    valuesTitle: "ہماری اقدار",
    values: [
      {
        title: "سب سے پہلے حفاظت",
        text: "اچھی عادتیں زندگی بھر کی محفوظ ڈرائیونگ بناتی ہیں۔",
      },
      {
        title: "واضح پیش رفت",
        text: "آپ ہمیشہ جانتے ہیں کہ اگلا قدم کیا ہے۔",
      },
      {
        title: "احترام والی تربیت",
        text: "دباؤ نہیں — صرف معاون اور پیشہ ورانہ تربیت۔",
      },
    ],
  },
  lessons: {
    title: "ڈرائیونگ اسباق",
    lead: "آٹومیٹک اور مینوئل اسباق دستیاب — اپنے دن کے مطابق بک کریں۔",
    intro: `پہلی بار سیکھنے والوں سے ریفریشر تک، ${siteConfig.name} روزمرہ ڈرائیونگ اور عملی ٹیسٹ کے لیے مہارتیں سکھاتا ہے۔`,
    typesTitle: "اسباق کی اقسام",
    types: [
      {
        title: "آٹومیٹک اسباق",
        text: "کلچ کے بغیر مشاہدہ، جنکشنز اور ہموار کنٹرول پر توجہ۔",
      },
      {
        title: "مینوئل اسباق",
        text: "کلچ کنٹرول، گیئر تبدیلی اور ہل سٹارٹ صبر سے سیکھیں۔",
      },
      {
        title: "ٹیسٹ کی تیاری",
        text: "موک ٹیسٹ، مینوورز اور آزاد ڈرائیونگ کی مشق۔",
      },
      {
        title: "ریفریشر اسباق",
        text: "وقفے کے بعد اعتماد بحال کریں یا UK سڑکوں سے مانوس ہوں۔",
      },
    ],
    hoursTitle: "اسباق کے اوقات",
    hoursBody: `کھلا ${siteConfig.openingHours} — صبح سویرے اور شام دستیاب تاکہ کام یا پڑھائی کے ساتھ تربیت ہو سکے۔`,
    pricingNote: "قیمت سبق کی مدت اور پیکیج پر منحصر ہے۔ کوٹ اور دستیاب اوقات کے لیے کال یا واٹس ایپ کریں۔",
  },
  contact: {
    title: "رابطہ کریں",
    lead: "بک کرنے کے لیے تیار؟ کال یا میسج کریں — ہم جلد جواب دیتے ہیں۔",
    phoneLabel: "فون",
    whatsappLabel: "واٹس ایپ",
    emailLabel: "ای میل",
    addressLabel: "پتہ",
    hoursLabel: "کھلنے کے اوقات",
    cityLabel: "شہر",
    formHint: "میسج پسند ہے؟ واٹس ایپ پر اپنے پسندیدہ اوقات بھیجیں، ہم سلاٹ کی تصدیق کریں گے۔",
  },
  areas: {
    title: "علاقے جن میں ہم آتے ہیں",
    lead: `${siteConfig.city} اور قریبی علاقوں میں ڈرائیونگ اسباق۔`,
    intro: "ہم ان علاقوں سے پک اپ کرتے ہیں۔ اگر قریب ہیں تو رابطہ کریں — ہم مدد کر سکتے ہیں۔",
    ctaLead: "یقین نہیں کہ آپ کا علاقہ شامل ہے؟ واٹس ایپ پر پوچھیں۔",
  },
  footer: {
    tagline: "محفوظ ڈرائیونگ۔ بہتر مستقبل۔",
    rights: `© ${new Date().getFullYear()} ${siteConfig.name}۔ جملہ حقوق محفوظ۔`,
    privacy: "یہ سائٹ ٹریکنگ کوکیز استعمال نہیں کرتی۔",
  },
  cookie: {
    message:
      "یہ ویب سائٹ جامد ہے اور ٹریکنگ کوکیز استعمال نہیں کرتی۔ زبان تبدیل کرنے پر صرف مقامی ترجیح محفوظ ہو سکتی ہے۔",
    accept: "سمجھ گیا",
  },
};
