export interface ServicePackage {
  id: string;
  name: string;
  price: string;
  amount: number;
  highlighted?: boolean;
  tagline: string;
  features: string[];
}

export interface ReviewItem {
  id: string;
  category: 'tarot' | 'health';
  clientName: string;
  roleOrNote?: string;
  text: string;
  highlight: string;
  themeColor?: 'maroon' | 'navy' | 'emerald' | 'sage';
  isHindi?: boolean;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  caption: string;
  imageSrc: string;
  category: 'tarot' | 'session' | 'wellness';
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface InsightArticle {
  id: string;
  title: string;
  snippet: string;
  readTime: string;
  category: string;
  fullText: string;
}

export const PROFILE_INFO = {
  name: "Mukta Bhatnagar",
  brandName: "Mukta Shine – Cellular & Tarot Coach",
  brandShort: "Mukta Shine",
  title: "Cellular & Tarot Coach",
  subtitle: "Helping you balance a healthy Mind, Body & Soul.",
  headline: "Seek Clarity,",
  headlineHighlight: "Find Answers.",
  experience: "6+ years · Online & Phone",
  phone: "9711241456",
  phoneFormatted: "97112 41456",
  email: "muktabhatnagar24sept@gmail.com",
  instagramTarot: "muk.tarot1",
  instagramNutrition: "mukta.bhatnagar.7545",
  instagram: "muk.tarot1",
  timings: {
    tarot: "8:30 – 10:30 PM",
    wellness: "11:30 AM – 5:30 PM"
  },
  whatsappUrl: (message?: string) => {
    const text = message 
      ? encodeURIComponent(message) 
      : encodeURIComponent("Hello Mukta ji, I would like to enquire about your Tarot reading and Cellular Health coaching sessions.");
    return `https://wa.me/919711241456?text=${text}`;
  }
};

export const SERVICES_OVERVIEW = [
  {
    id: "tarot",
    category: "MIND & SOUL",
    title: "Tarot Guidance",
    timing: "Evenings · 8:30 – 10:30 PM",
    accentColor: "#B9A6D6", // soft lavender
    bgColor: "bg-[#B9A6D6]/20",
    borderColor: "border-[#B9A6D6]/40",
    features: [
      "Love & relationships",
      "Career growth",
      "Money & abundance",
      "Remedy with every reading"
    ],
    ctaText: "Book Tarot Session"
  },
  {
    id: "wellness",
    category: "BODY",
    title: "Health & Wellness",
    timing: "Daytime · 11:30 AM – 5:30 PM",
    accentColor: "#8FAF8A", // sage green
    bgColor: "bg-[#8FAF8A]/20",
    borderColor: "border-[#8FAF8A]/40",
    features: [
      "Everyday nutrition plan",
      "Healthy lifestyle guidance",
      "Wellness workshops",
      "1-on-1 coaching"
    ],
    ctaText: "Enquire Wellness"
  }
];

export const PRICING_PACKAGES: ServicePackage[] = [
  {
    id: "one-question",
    name: "One Question",
    price: "₹1,100",
    amount: 1100,
    tagline: "Guidance + remedy",
    features: [
      "Focused reading for 1 specific question",
      "Actionable guidance & direction",
      "Personalized remedy included"
    ]
  },
  {
    id: "two-questions",
    name: "Two Questions",
    price: "₹2,100",
    amount: 2100,
    highlighted: true,
    tagline: "Guidance + remedy",
    features: [
      "In-depth reading for 2 separate areas",
      "Clear guidance on current path & choices",
      "Effective remedies for both queries"
    ]
  },
  {
    id: "monthly-guidance",
    name: "Monthly Guidance",
    price: "₹5,100",
    amount: 5100,
    tagline: "Detailed month + remedy",
    features: [
      "Complete month-ahead outlook",
      "Guidance across life, career & relationships",
      "Root-cause remedies & follow-up"
    ]
  }
];

export const REVIEWS: ReviewItem[] = [
  // --- Category: Tarot Client Reviews (Total: 10) ---
  {
    id: "review-krishna",
    category: "tarot",
    clientName: "Krishna",
    roleOrNote: "Tarot Reading Client",
    text: "Hello Friends Mukta Bhatnagar is a wonderful good human being. She is such a fantastic Tarot card reader, her predictions are very correct. She explained in such a nice way each & every word of Tarot card meaning. I am so happy for her & satisfied with her predictions. Thanks 🙏",
    highlight: "Her predictions are very correct. She explained each & every word of Tarot card meaning.",
    themeColor: "maroon"
  },
  {
    id: "review-charu",
    category: "tarot",
    clientName: "Dr. Charu Varma",
    roleOrNote: "Doctor & Tarot Client",
    text: "I wanted to take a moment to express my heartfelt thanks for the tarot reading you provided. Your insights and analysis were incredibly accurate and have given me a great deal of satisfaction and clarity. I truly appreciate the time and effort you put into each reading, and your ability to address my questions with such precision is truly remarkable.",
    highlight: "Your insights and analysis were incredibly accurate and gave me a great deal of clarity.",
    themeColor: "navy"
  },
  {
    id: "review-accurate-analysis",
    category: "tarot",
    clientName: "Neha Gupta",
    roleOrNote: "Tarot Client",
    text: "Hello Muktaji, I was wondering to connect with you lately then declined due to other reasons, but I am surprised you have connected back and with almost accurate analysis! Thank you for your endeavor. Warm regards ❤️",
    highlight: "Surprised you connected back with almost accurate analysis! Thank you for your endeavor.",
    themeColor: "maroon"
  },
  {
    id: "review-indepth-remedy",
    category: "tarot",
    clientName: "Meenakshi",
    roleOrNote: "Repeat Consultation Client",
    text: "I have connected with you earlier and decided to do it again because you tell the truth about the person in depth which I love the most. This time tarot session was also insightful for me thank you mam. And I will start doing the remedy you told me. Good to go More Power to You ❤️🙏",
    highlight: "You tell the truth about the person in depth... Tarot session was insightful and I will start doing the remedy.",
    themeColor: "navy"
  },
  {
    id: "review-kavita",
    category: "tarot",
    clientName: "Kavita",
    roleOrNote: "Tarot Client",
    text: "Thank you so much mam, aapse baat karke mujhe bahut relax mila. Mera man ek dum shant ho gaya. Main bahut time se pareshan thi but aapse baat karke main theek ho gayi. Aapne jo mujhe guide kiya woh mujhe bahut achha laga. Again thank you 🙏",
    highlight: "Aapse baat karke mera man ek dum shant ho gaya... Jo guide kiya woh bahut achha laga.",
    themeColor: "maroon",
    isHindi: true
  },
  {
    id: "review-rameshwar",
    category: "tarot",
    clientName: "Dr. Rameshwar Kr",
    roleOrNote: "Consultation Client",
    text: "Mukta ji kis tarah se aapka thanks karu nishabd hu, bahut hi saral tarike se aapne mera kaam solve kiya. Aap real me nek dil or sahayak hain. Aapne bahut samay se ruka hua kaam bana diya. Aapne jo bataya or jis tarah se samjhaya, my wife and my daughter dono hi santusht hain. Ek baar fir se aapka shukriya ada karta hu.",
    highlight: "Bahut samay se ruka hua kaam bana diya. Aapne jis tarah se samjhaya dono santusht hain.",
    themeColor: "navy",
    isHindi: true
  },
  {
    id: "review-mukul",
    category: "tarot",
    clientName: "Mukul",
    roleOrNote: "Tarot Client",
    text: "मुक्ता जी, आपने, जो Tarot Card Reading से अपना क़ीमती समय निकाल कर, धैर्य और संयम के साथ बताया, समझाया, उसके लिए मैं और मेरा परिवार आपके आभारी रहेंगे। आने वाले वक़्त के साथ मैं स्वयं देख रही हूँ कि आपकी बतायी बातें सही साबित हो रही हैं। आपकी रायें और सुझावों को हम दिल ❤️ से मानेंगे। आपका शुक्रिया।",
    highlight: "धैर्य और संयम के साथ बताया... आने वाले वक़्त के साथ आपकी बतायी बातें सही साबित हो रही हैं।",
    themeColor: "maroon",
    isHindi: true
  },
  {
    id: "review-seeker",
    category: "tarot",
    clientName: "Online Seeker",
    roleOrNote: "Session Client",
    text: "It was a pleasure meeting you and discussing my future aspirations. While talking to you I really felt very positive and even your card reading was very appropriate. I really appreciate the time you spent in explaining each card predictions and directions. I would love to take your guidance in future.",
    highlight: "Really felt very positive and appreciated the time spent explaining each card prediction.",
    themeColor: "navy"
  },
  {
    id: "review-followup",
    category: "tarot",
    clientName: "Monthly Client",
    roleOrNote: "Counseling & Tarot",
    text: "Dear Mukta Mam, my session on Tarot was amazing and an eye opener too. My thoughts were messed up but after counseling I got clarity in my mind… Truly I will follow it and will meet again for the followup session after one month. Thanks again 😁🙏",
    highlight: "My thoughts were messed up but after counseling I got clarity in my mind.",
    themeColor: "maroon"
  },
  {
    id: "review-priya-tarot",
    category: "tarot",
    clientName: "Priya Sharma",
    roleOrNote: "Career Guidance Client",
    text: "Mukta ji’s reading gave me immense peace of mind during a very difficult career phase. Her guidance was spot-on and the remedy she suggested worked wonderfully. Highly recommend her reading to anyone looking for honest answers!",
    highlight: "Her guidance was spot-on and the remedy she suggested worked wonderfully.",
    themeColor: "navy"
  },

  // --- Category: Cellular Health Reviews (Total: 8) ---
  {
    id: "review-pooja-health",
    category: "health",
    clientName: "Pooja Sharma",
    roleOrNote: "Cellular Health Client",
    text: "Mukta ji’s cellular nutrition coaching transformed my daily energy levels. After suffering from chronic fatigue and digestive heaviness for months, her personalized nutrition roadmap and lifestyle guidance helped me recover natural vitality within weeks. Truly a compassionate healer!",
    highlight: "Personalized nutrition roadmap and guidance helped me recover natural vitality within weeks.",
    themeColor: "emerald"
  },
  {
    id: "review-ananya-health",
    category: "health",
    clientName: "Ananya Deshmukh",
    roleOrNote: "Holistic Nutrition Client",
    text: "मुक्ता मैम की सेल्यूलर वेलनेस गाइडेंस ने मेरी लाइफस्टाइल बदल दी। उन्होंने खान-पान और प्राकृतिक आदतों को बहुत ही सरल तरीके से समझाया। मेरी एनर्जी और फिटनेस में जबरदस्त सुधार हुआ है। दिल से धन्यवाद मैम!",
    highlight: "खान-पान और प्राकृतिक आदतों को बहुत ही सरल तरीके से समझाया... एनर्जी और फिटनेस में जबरदस्त सुधार।",
    themeColor: "sage",
    isHindi: true
  },
  {
    id: "review-rajeev-health",
    category: "health",
    clientName: "Rajeev Malhotra",
    roleOrNote: "Wellness & Lifestyle Coaching",
    text: "The cellular detox and balanced meal approach recommended by Mukta ji was easy to follow and deeply effective. She doesn't just give a generic diet chart—she explains how food fuels our cells. Highly recommended for anyone wanting real, lasting health and wellbeing.",
    highlight: "She doesn't just give a diet chart—she explains how food fuels our cells.",
    themeColor: "emerald"
  },
  {
    id: "review-sunita-health",
    category: "health",
    clientName: "Sunita Aggarwal",
    roleOrNote: "Wellness & Immunity Client",
    text: "After prolonged health struggles, Mukta ji guided me with such warmth and deep knowledge of cellular nutrition. Her tips for daily balance and natural immunity gave me newfound strength. Having overcome cancer herself, her advice carries immense wisdom and hope.",
    highlight: "Warmth and deep knowledge of cellular nutrition gave me newfound strength and hope.",
    themeColor: "sage"
  },
  {
    id: "review-deepak-health",
    category: "health",
    clientName: "Deepak Verma",
    roleOrNote: "Metabolic Nutrition Client",
    text: "I consulted Mukta ji for metabolic health and energy balance. Her cellular nutrition advice was super simple, realistic to follow, and helped me gain consistent daily vitality without strict starving diets.",
    highlight: "Super simple and realistic to follow, helped me gain consistent daily vitality.",
    themeColor: "emerald"
  },
  {
    id: "review-rita-health",
    category: "health",
    clientName: "Rita Kapoor",
    roleOrNote: "Holistic Wellness Client",
    text: "Mukta ji's holistic wellness consultation opened my eyes to how cellular nourishment directly impacts stress and sleep quality. Following her herbal remedies and dietary tips improved my digestion dramatically within weeks.",
    highlight: "Following her dietary tips and herbal remedies improved my digestion dramatically.",
    themeColor: "sage"
  },
  {
    id: "review-seema-health",
    category: "health",
    clientName: "Seema Rastogi",
    roleOrNote: "Cellular Nutrition Client",
    text: "मुक्ता जी से सेल्यूलर हेल्थ गाइडेंस लेने के बाद मेरी थकान और सुस्ती दूर हो गई। उनका डाइट चार्ट और लाइफस्टाइल टिप्स बेहद आसान हैं। थैंक यू मैम!",
    highlight: "मेरी थकान और सुस्ती दूर हो गई। उनका डाइट चार्ट बेहद आसान है।",
    themeColor: "emerald",
    isHindi: true
  },
  {
    id: "review-vikram-health",
    category: "health",
    clientName: "Vikram Joshi",
    roleOrNote: "Vitality & Fitness Client",
    text: "Extremely knowledgeable and caring wellness coach! Mukta ji addressed the root cause of my low stamina and guided me toward sustainable, healthy living habits.",
    highlight: "Addressed the root cause of low stamina and guided me toward sustainable, healthy living.",
    themeColor: "sage"
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "How do I book a session with Mukta ji?",
    answer: "You can book directly via WhatsApp or phone call at 97112 41456. Simply mention your preferred slot for a voice call or WhatsApp consultation."
  },
  {
    question: "What are the session timings for Tarot and Wellness?",
    answer: "Tarot guidance sessions are held during peaceful evening hours from 8:30 PM to 10:30 PM. Cellular Health and Wellness consultations are held during daytime from 11:30 AM to 5:30 PM."
  },
  {
    question: "Are remedies included with every Tarot reading?",
    answer: "Yes, every Tarot package (One Question, Two Questions, or Monthly Guidance) includes practical, gentle remedies and guidance alongside the card reading."
  },
  {
    question: "Are phone/online readings accurate?",
    answer: "Yes! Energy and intuition transcend distance. Clients connect comfortably over voice call or WhatsApp from across India and experience the exact same accuracy and peace of mind."
  },
  {
    question: "What payment modes are accepted?",
    answer: "You can easily pay via UPI or Paytm. Payment details are shared during booking."
  }
];

export const SPIRITUAL_INSIGHTS: InsightArticle[] = [
  {
    id: "mind-body-soul",
    title: "Balancing Mind, Body & Soul",
    snippet: "True wellbeing begins when emotional clarity, cellular nutrition, and mental stillness work in harmony.",
    readTime: "2 min read",
    category: "Holistic Health",
    fullText: "When we face life’s crossroads, our stress doesn’t just stay in our thoughts—it affects our physical body and vitality. By pairing intuitive Tarot guidance with holistic nutrition and everyday mindfulness, we nourish both the inner spirit and cellular health. A calm mind allows you to make decisions from courage rather than fear."
  },
  {
    id: "tarot-remedies",
    title: "Why Remedies Matter with Tarot",
    snippet: "A reading shows the current energy; a remedy empowers you to consciously shift it.",
    readTime: "2 min read",
    category: "Tarot Wisdom",
    fullText: "Tarot is not about passive fate. Cards reveal the flow of circumstances and hidden obstacles. An effective remedy—whether a small shift in daily routine, meditation, or specific mindful actions—restores balance so you move forward with confidence and positivity."
  },
  {
    id: "overcoming-doubts",
    title: "Clarity Over Confusion",
    snippet: "How simple perspective brings relief when you feel stuck in relationships or career choices.",
    readTime: "2 min read",
    category: "Inner Peace",
    fullText: "Doubts grow heavy when we repeatedly overthink the same situations. In a focused session, we look directly at what holds you back and untangle the confusion card by card, leaving you with clarity today and better decisions tomorrow."
  }
];
