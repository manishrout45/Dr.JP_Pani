import React, { useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";

import {
  ShieldPlus,
  Check,
  Clock3,
  HeartPulse,
  ChevronRight,
  Stethoscope,
  ClipboardList,
  FileText,
  HeartHandshake,
  Activity,
  Baby,
  Syringe,
  Microscope,
  Scan,
  BadgeCheck,
  PhoneCall,
} from "lucide-react";
import { motion } from "framer-motion";

const servicesData = {
  "high-risk-pregnancy-care": {
    title: "High-Risk Pregnancy Care",
    description:
      "Expert monitoring and personalized treatment for safe and healthy pregnancies.",
    longDescription:
      "Complete high-risk pregnancy management with advanced monitoring, expert consultations, and specialized maternal care for safer pregnancies.",
    heroImage: "/assets/images/ServiceImg-1.webp",
    overview:
      "High-risk pregnancies need closer monitoring to reduce complications for mother and baby. Our team creates a personalized care plan with frequent checkups, advanced scans, and timely interventions.",
    idealFor: [
      "High BP / preeclampsia risk",
      "Gestational diabetes",
      "Thyroid disorders",
      "Previous C-section / miscarriage history",
      "Multiple pregnancy (twins/triplets)",
      "Low placenta / bleeding issues",
      "Age-related pregnancy concerns",
    ],
    process: [
      {
        title: "Detailed Risk Assessment",
        desc: "Review medical history, lab reports, vitals, and pregnancy scans to identify risks early.",
        icon: ClipboardList,
      },
      {
        title: "Personalized Monitoring Plan",
        desc: "Scheduled visits, BP/sugar tracking, fetal growth monitoring, and nutrition guidance.",
        icon: Activity,
      },
      {
        title: "Advanced Diagnostics",
        desc: "Targeted scans, Doppler studies, NST/CTG, and required blood/urine investigations.",
        icon: Scan,
      },
      {
        title: "Delivery Planning",
        desc: "Safe delivery plan with hospital coordination, emergency readiness, and newborn support.",
        icon: Baby,
      },
    ],
    whatYouGet: [
      "Specialist consultation + detailed counseling",
      "Regular monitoring (mother + baby)",
      "Diet & lifestyle plan based on condition",
      "Emergency guidance & priority appointments",
      "Clear delivery plan and post-delivery follow-up",
    ],
    faqs: [
      {
        q: "How often will I need checkups?",
        a: "It depends on your risk category. Many high-risk cases need visits every 2–4 weeks early, then more frequently in the third trimester.",
      },
      {
        q: "Can high-risk pregnancies be normal deliveries?",
        a: "Many can be normal deliveries, but the final decision depends on mother and baby’s condition, scan reports, and clinical findings.",
      },
      {
        q: "What should I carry to the first visit?",
        a: "Bring previous medical records, scan reports, current medications, and any lab tests already done. This helps us plan faster and more accurately.",
      },
    ],
  },

  "infertility-pcos-treatment": {
    title: "Infertility & PCOS Treatment",
    description:
      "Advanced fertility counseling and complete care for PCOS and hormonal disorders.",
    longDescription:
      "Personalized fertility treatments and hormonal disorder management using modern medical techniques and compassionate care.",
    heroImage: "/assets/images/ServiceImg-2.webp",
    overview:
      "We focus on identifying the root cause of infertility and PCOS, correcting hormonal imbalance, improving ovulation, and supporting healthy conception with a step-by-step approach.",
    idealFor: [
      "Irregular periods / delayed cycles",
      "PCOS / PCOD symptoms",
      "Hormonal imbalance",
      "Weight-related fertility issues",
      "Failed conception for 6–12 months",
      "Thyroid / prolactin issues",
      "Endometriosis / fibroids (suspected)",
    ],
    process: [
      {
        title: "Fertility Evaluation",
        desc: "Hormone profile, ultrasound, ovulation tracking, and partner evaluation as required.",
        icon: Microscope,
      },
      {
        title: "PCOS & Lifestyle Management",
        desc: "Diet plan, activity routine, insulin resistance management, and cycle regulation.",
        icon: HeartHandshake,
      },
      {
        title: "Ovulation Induction & Monitoring",
        desc: "Medication support with ultrasound monitoring to ensure safe and effective ovulation.",
        icon: Activity,
      },
      {
        title: "Advanced Options (If Needed)",
        desc: "IUI/IVF referral guidance, laparoscopy evaluation, and specialist collaboration when required.",
        icon: BadgeCheck,
      },
    ],
    whatYouGet: [
      "Personalized fertility roadmap",
      "PCOS lifestyle + medical support",
      "Ovulation monitoring & safe dosing",
      "Hormone correction plan",
      "Counseling for both partners",
    ],
    faqs: [
      {
        q: "Can PCOS be cured permanently?",
        a: "PCOS can be well controlled with lifestyle and medical support. Many women conceive successfully with the right plan and follow-up.",
      },
      {
        q: "When should I consult for infertility?",
        a: "If trying for 12 months (or 6 months if age is above 35) without success, consult for evaluation and planning.",
      },
      {
        q: "Do both partners need testing?",
        a: "Yes, in many cases. Fertility is a couple’s health issue, so evaluating both partners helps find the cause faster and avoids delays.",
      },
    ],
  },

  "prenatal-postnatal-care": {
    title: "Prenatal & Postnatal Care",
    description:
      "Comprehensive mother and baby care before and after childbirth.",
    longDescription:
      "Full prenatal and postnatal healthcare support including regular checkups, nutrition guidance, and mother-baby wellness programs.",
    heroImage: "/assets/images/ServiceImg-3.webp",
    overview:
      "From the first trimester to postpartum recovery, we provide complete care with checkups, scans, nutrition guidance, and newborn wellness support.",
    idealFor: [
      "First-time mothers",
      "Routine pregnancy monitoring",
      "Nutrition & supplement planning",
      "Post-delivery recovery and breastfeeding support",
      "Newborn wellness guidance",
    ],
    process: [
      {
        title: "Routine Antenatal Checkups",
        desc: "Monthly/bi-weekly visits, vitals, symptom assessment, and growth monitoring.",
        icon: ClipboardList,
      },
      {
        title: "Scans & Lab Investigations",
        desc: "NT scan, anomaly scan, growth scan and routine pregnancy lab tests.",
        icon: Scan,
      },
      {
        title: "Nutrition & Wellness Guidance",
        desc: "Diet chart, supplement planning, exercise and lifestyle counseling.",
        icon: HeartHandshake,
      },
      {
        title: "Postnatal Follow-Up",
        desc: "Recovery monitoring, lactation support, mental wellness, and family planning guidance.",
        icon: HeartPulse,
      },
    ],
    whatYouGet: [
      "Trimester-wise care plan",
      "Scan/test scheduling support",
      "Nutrition + supplement plan",
      "Postnatal recovery guidance",
      "Newborn care counseling",
    ],
    faqs: [
      {
        q: "When should prenatal care start?",
        a: "Ideally as soon as pregnancy is confirmed. Early checkups help plan scans, supplements, and lifestyle guidance on time.",
      },
      {
        q: "Do you provide postnatal counseling?",
        a: "Yes. We guide recovery, breastfeeding, mental wellness support, and safe family planning options.",
      },
      {
        q: "What is included in postnatal visits?",
        a: "Recovery review, wound/healing assessment (if any), bleeding and pain evaluation, breastfeeding guidance, and overall wellness support.",
      },
    ],
  },

  "advanced-gynecologic-surgery": {
    title: "Advanced Gynecologic Surgery",
    description:
      "Modern laparoscopic and minimally invasive gynecological procedures.",
    longDescription:
      "Advanced minimally invasive gynecologic surgeries with faster recovery, reduced pain, smaller incisions, and expert surgical care.",
    heroImage:
      "https://img.magnific.com/free-photo/operations-rooms_1122-791.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
    overview:
      "We perform minimally invasive gynecologic procedures with modern techniques to reduce pain, scarring, and hospital stay—while ensuring patient safety and better outcomes.",
    idealFor: [
      "Fibroids / ovarian cysts",
      "Endometriosis",
      "Abnormal uterine bleeding",
      "Uterine prolapse (selected cases)",
      "PCOS-related cyst complications",
      "Diagnostic laparoscopy needs",
    ],
    process: [
      {
        title: "Pre-Surgery Evaluation",
        desc: "Detailed diagnosis, imaging, fitness assessment, and clear explanation of procedure.",
        icon: FileText,
      },
      {
        title: "Minimally Invasive Procedure",
        desc: "Laparoscopy/hysteroscopy where appropriate with advanced surgical safety protocols.",
        icon: Stethoscope,
      },
      {
        title: "Faster Recovery Protocol",
        desc: "Pain management, early mobilization, and post-op monitoring for quick discharge.",
        icon: HeartPulse,
      },
      {
        title: "Post-Op Follow Up",
        desc: "Wound check, report discussion, medicine plan, and long-term prevention guidance.",
        icon: BadgeCheck,
      },
    ],
    whatYouGet: [
      "Minimally invasive options (where suitable)",
      "Lower pain and smaller incisions",
      "Quick recovery plan",
      "Clear post-op care instructions",
      "Follow-up and report explanation",
    ],
    faqs: [
      {
        q: "Is laparoscopy safe?",
        a: "Yes, when performed by experienced specialists with proper evaluation and protocols. We explain benefits and risks clearly before surgery.",
      },
      {
        q: "How long is recovery?",
        a: "Many patients recover faster compared to open surgery. Exact recovery depends on the procedure type and individual health condition.",
      },
      {
        q: "Will I need hospital admission?",
        a: "Most procedures need short admission for monitoring. Some may be day-care based depending on surgery type and stability.",
      },
    ],
  },

  "pre-pregnancy-counselling": {
    title: "Pre-Pregnancy Couple Counselling",
    description:
      "Personalized guidance and health planning for couples preparing for a healthy pregnancy.",
    longDescription:
      "Comprehensive pre-conception counselling including fertility assessment, medical evaluation, lifestyle modification, nutritional planning, and personalized guidance to optimize pregnancy outcomes.",
    heroImage:
      "https://img.magnific.com/premium-photo/pregnancy-gynecology-medicine-health-care-people-concept-gynecologist-doctor-with-prescription-pregnant-woman-meeting-hospital_380164-136562.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
    overview:
      "Pre-pregnancy counselling helps couples improve health before conception by correcting deficiencies, managing medical conditions, and planning a safe pregnancy journey.",
    idealFor: [
      "Planning first pregnancy",
      "History of miscarriage / complications",
      "Diabetes/BP/thyroid management before conception",
      "Lifestyle optimization and nutrition",
      "Fertility planning and cycle tracking",
    ],
    process: [
      {
        title: "Health & Fertility Review",
        desc: "Medical history, cycle review, BMI assessment and lifestyle evaluation.",
        icon: ClipboardList,
      },
      {
        title: "Tests & Deficiency Screening",
        desc: "Blood tests, thyroid, sugar, hemoglobin, vitamin levels as required.",
        icon: Microscope,
      },
      {
        title: "Nutrition & Supplement Plan",
        desc: "Folic acid guidance, diet chart, weight management plan if needed.",
        icon: HeartHandshake,
      },
      {
        title: "Conception Planning",
        desc: "Ovulation tracking guidance and timeline planning for better outcomes.",
        icon: BadgeCheck,
      },
    ],
    whatYouGet: [
      "Pre-conception checklist",
      "Lifestyle + nutrition roadmap",
      "Necessary test guidance",
      "Supplement planning",
      "Couple counselling support",
    ],
    faqs: [
      {
        q: "When should we start counselling before pregnancy?",
        a: "Ideally 2–3 months before trying, so we can optimize health and start supplements early.",
      },
      {
        q: "Do we need tests even if we feel healthy?",
        a: "Basic screening is helpful because many deficiencies (thyroid, anemia, vitamin D, sugar imbalance) can be silent but affect pregnancy outcomes.",
      },
      {
        q: "What supplements are commonly advised?",
        a: "Folic acid is commonly recommended before conception. Other supplements depend on your reports and health status.",
      },
    ],
  },

  "routine-pregnancy-checkup": {
    title: "Routine Pregnancy Check-Up",
    description:
      "Regular antenatal monitoring and assessments to ensure maternal and fetal well-being.",
    longDescription:
      "Routine antenatal care with scheduled check-ups, maternal health monitoring, fetal growth assessment, pregnancy counselling, and expert supervision throughout every stage of pregnancy.",
    heroImage:
      "https://img.magnific.com/premium-photo/hospital-pregnant-woman-doctor-with-information-checkup-appointment-visit-tummy-growth-healthcare-patient-obstetrician-with-checklist-pregnancy-monitor-wellness-face-mask_590464-474582.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
    overview:
      "Routine antenatal checkups ensure a healthy pregnancy by monitoring vitals, baby’s growth, scan schedules, and addressing symptoms early.",
    idealFor: [
      "Regular pregnancy monitoring",
      "Trimester-wise checkups",
      "Managing minor pregnancy symptoms",
      "Scan/test scheduling guidance",
    ],
    process: [
      {
        title: "Vitals & Symptom Review",
        desc: "BP, weight, swelling, baby movement guidance and symptom assessment.",
        icon: ClipboardList,
      },
      {
        title: "Baby Growth Monitoring",
        desc: "Fundal height checks, fetal heart rate monitoring, scan referrals as needed.",
        icon: Baby,
      },
      {
        title: "Reports & Counseling",
        desc: "Explain test reports, medicine guidance, diet and lifestyle advice.",
        icon: FileText,
      },
      {
        title: "Follow-Up Plan",
        desc: "Next visit schedule and trimester checklist so nothing is missed.",
        icon: BadgeCheck,
      },
    ],
    whatYouGet: [
      "Complete antenatal monitoring",
      "Trimester checklist + counseling",
      "Scan/test timeline planning",
      "Diet/supplement advice",
      "Doctor guidance for symptoms",
    ],
    faqs: [
      {
        q: "How often should routine checkups be done?",
        a: "Usually monthly until 28 weeks, then every 2 weeks until 36 weeks, and weekly after that—depending on your condition.",
      },
      {
        q: "Do routine visits include scan guidance?",
        a: "Yes. We guide you on trimester-wise scans and the best time window so you don’t miss important screening.",
      },
      {
        q: "What if I have minor pain or discomfort?",
        a: "We assess symptoms and guide safe remedies. For warning signs like heavy bleeding, severe pain, or reduced movements, urgent evaluation is advised.",
      },
    ],
  },

  "womens-vaccination": {
    title: "Women's Vaccination Services",
    description:
      "Comprehensive vaccination support including Cervical Cancer (HPV) vaccination and other recommended immunizations.",
    longDescription:
      "Preventive vaccination services for women, including HPV (Cervical Cancer) vaccination, pregnancy-related vaccines, and other recommended immunizations for long-term health protection.",
    heroImage:
      "https://img.magnific.com/premium-photo/female-doctor-with-syringe-vaccinating-patient_380164-274084.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
    overview:
      "We provide safe, guided vaccination services for women—HPV vaccination, pregnancy vaccines, and age-appropriate preventive immunization planning.",
    idealFor: [
      "HPV (cervical cancer prevention)",
      "Pre-pregnancy vaccination planning",
      "Pregnancy-related vaccines (as advised)",
      "Adult booster vaccines (as recommended)",
    ],
    process: [
      {
        title: "Vaccine Eligibility & Counseling",
        desc: "Age, medical history, and requirement-based vaccine counselling.",
        icon: HeartHandshake,
      },
      {
        title: "Safe Administration",
        desc: "Proper screening, safe injection practices, and post-vaccine observation.",
        icon: Syringe,
      },
      {
        title: "Schedule & Reminders",
        desc: "Dose scheduling support and follow-up reminders for next shots.",
        icon: BadgeCheck,
      },
      {
        title: "Aftercare Guidance",
        desc: "Side-effect guidance, precautions, and when to contact doctor.",
        icon: PhoneCall,
      },
    ],
    whatYouGet: [
      "HPV vaccination counselling + dose plan",
      "Pregnancy vaccine guidance",
      "Safe administration with monitoring",
      "Record maintenance and reminders",
      "Aftercare and support",
    ],
    faqs: [
      {
        q: "Is HPV vaccine safe?",
        a: "HPV vaccines are widely used globally and are considered safe for eligible age groups. We guide based on your health profile.",
      },
      {
        q: "Can I take vaccines during pregnancy?",
        a: "Some vaccines are recommended in pregnancy while others are avoided. We guide you based on trimester, medical history, and current guidelines.",
      },
      {
        q: "Will you remind me for next dose?",
        a: "Yes. We help you follow the schedule and ensure you don’t miss the next dose window.",
      },
    ],
  },

  ultrasonography: {
    title: "Ultrasonography",
    description:
      "Advanced ultrasound imaging for pregnancy monitoring and gynecological evaluation.",
    longDescription:
      "Modern ultrasonography services for pregnancy scans, fetal monitoring, pelvic imaging, reproductive health assessment, and accurate gynecological diagnosis.",
    heroImage:
      "https://img.magnific.com/premium-photo/doctor-performing-ultrasound_13339-30285.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
    overview:
      "Accurate ultrasound imaging helps monitor pregnancy growth, detect concerns early, and evaluate gynecologic health with clear reporting and guidance.",
    idealFor: [
      "Pregnancy scans (NT, anomaly, growth)",
      "Pelvic ultrasound evaluation",
      "Ovarian cysts/fibroid monitoring",
      "Fertility evaluation scans",
      "Abdominal/pelvic pain diagnosis",
    ],
    process: [
      {
        title: "Consultation & Scan Selection",
        desc: "Select appropriate scan type based on week, symptoms, or clinical need.",
        icon: ClipboardList,
      },
      {
        title: "High-Quality Imaging",
        desc: "Modern equipment for accurate measurements and clear visualization.",
        icon: Scan,
      },
      {
        title: "Report & Explanation",
        desc: "Clear report + doctor explanation of findings and next steps.",
        icon: FileText,
      },
      {
        title: "Follow-Up Support",
        desc: "Guidance for next scan timing or treatment plan if required.",
        icon: BadgeCheck,
      },
    ],
    whatYouGet: [
      "Accurate scans with clear reporting",
      "Trimester-wise pregnancy scan guidance",
      "Pelvic imaging and evaluation",
      "Doctor explanation of results",
      "Follow-up plan support",
    ],
    faqs: [
      {
        q: "Which scans are important during pregnancy?",
        a: "Commonly NT scan (1st trimester), anomaly scan (2nd trimester), and growth scans (3rd trimester). Your doctor will guide based on your case.",
      },
      {
        q: "Do I need to come with a full bladder?",
        a: "For some pelvic scans, a full bladder gives better visibility. We will tell you the correct preparation when you book.",
      },
      {
        q: "Will I get the report immediately?",
        a: "Most reports are provided the same day. If any additional review is needed, we will inform you clearly.",
      },
    ],
  },
};

const defaultFeatures = [
  "Expert doctor consultation",
  "Clear report explanation",
  "Personalized care plan",
  "Follow-up guidance",
  "Emergency support guidance",
  "Patient-first approach",
];

const galleryImages = [
  "/assets/images/ServiceImg-1.webp",
  "/assets/images/ServiceImg-2.webp",
  "/assets/images/ServiceImg-3.webp",
  "/assets/images/ServiceImg-4.webp",
  "https://img.magnific.com/free-photo/gynecologist-performing-ultrasound-consultation_23-2149353018.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
  "https://img.magnific.com/free-photo/charming-female-doctor-holding-uterus-anatomy-model_651396-3102.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
  "https://img.magnific.com/premium-photo/gynecologist-shows-patient-work-training-model-female-reproductive-system_151013-27640.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
  "https://img.magnific.com/premium-photo/doctor-looks-hologram-female-uterus-checks-test-result-ovarian-disease-ectopic-pregnancy-painful-periods-surgery-innovative-technologies-medicine-future_99433-6550.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
  "https://img.magnific.com/premium-photo/pregnant-woman-visits-gynecologist_136615-8.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
];

function SectionTitle({ icon: Icon, label, title }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-2">
        <Icon size={16} className="text-[#e8479e]" />
        <span className="uppercase tracking-wide text-[#e8479e] font-semibold text-[13px]">
          {label}
        </span>
      </div>
      <h3 className="text-[26px] sm:text-[28px] font-bold text-[#43204a]">
        {title}
      </h3>
    </div>
  );
}

function FAQItem({ q, a }) {
  return (
    <div className="rounded-[18px] bg-[#f6f2f4] p-5">
      <p className="font-bold text-[#43204a]">{q}</p>
      <p className="text-gray-600 text-[14px] mt-2 leading-[1.8]">{a}</p>
    </div>
  );
}

export default function ServicesDetails() {
  const { slug } = useParams();
  const serviceTitleRef = useRef(null);
    useEffect(() => {
    setTimeout(() => {
      const y =
        serviceTitleRef.current.getBoundingClientRect().top +
        window.pageYOffset -
        120;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }, 100);
  }, [slug]);
  const service = servicesData[slug] || servicesData["high-risk-pregnancy-care"];
  const FeatureList = service.whatYouGet?.length ? service.whatYouGet : defaultFeatures;

  return (
    <>
      {/* HERO */}
      <section className="w-full overflow-hidden">
        <div className="relative h-[420px] sm:h-[500px] md:h-[580px] w-full">
          <img
            src="/assets/images/PagesHeroImg.png"
            alt="Services Banner"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#f5ebe8]/60"></div>

          <div className="relative z-10 h-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 flex items-center">
            <div className="max-w-[640px] pt-12 sm:pt-16 md:pt-20">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[34px] sm:text-[50px] md:text-[70px] lg:text-[85px] font-bold text-[#35123f] mb-6"
              >
                Service Details
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-3 bg-pink-500 px-6 py-3 rounded-full shadow-lg"
              > 
                <Link to="/" className="text-white text-[14px] font-medium">
                  Home
                </Link>
                <ChevronRight size={18} className="text-white stroke-[3]" />
                <span className="text-white text-[14px] font-medium">
                  Services Details
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f6f2f4] py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-6">
          {/* TOP SECTION */}
          <motion.div
            ref={serviceTitleRef}
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-[24px] p-5 lg:p-7"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* IMAGE */}
              <div className="overflow-hidden rounded-[18px] h-[300px] lg:h-[360px]">
                <img
                  src={service.heroImage}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CONTENT */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <ShieldPlus size={16} className="text-[#e8479e]" />
                  <span className="uppercase tracking-wide text-[#e8479e] font-semibold text-[13px]">
                    Service Details
                  </span>
                </div>

                <h2 className="text-[32px] sm:text-[40px] font-bold text-[#43204a] leading-[1.1]">
                  {service.title}
                </h2>

                <p className="mt-5 text-gray-600 text-[15px] leading-[1.8]">
                  {service.description}
                </p>

                <p className="mt-5 text-gray-600 text-[15px] leading-[1.8]">
                  {service.longDescription}
                </p>

                {/* Overview */}
                <div className="mt-6 bg-[#f6f2f4] rounded-[18px] p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <FileText size={16} className="text-[#e8479e]" />
                    <span className="text-[#43204a] font-semibold text-[14px]">
                      Overview
                    </span>
                  </div>
                  <p className="text-gray-600 text-[14px] leading-[1.8]">
                    {service.overview}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ✅ UPDATED: RESPONSIVE / WELL-PLACED INFO SECTIONS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mt-12 lg:mt-14">
            {/* LEFT CARD */}
            <motion.div
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-[24px] p-6 lg:p-7 shadow-sm"
            >
              <SectionTitle
                icon={ClipboardList}
                label="Who it's for"
                title="Ideal For"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(service.idealFor || []).map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 rounded-[16px] bg-[#f6f2f4] p-4"
                  >
                    <div className="min-w-[26px] h-[26px] rounded-full bg-white flex items-center justify-center">
                      <Check size={14} className="text-[#e8479e]" />
                    </div>

                    <span className="text-[14px] sm:text-[15px] text-[#43204a] leading-[1.6]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT CARD */}
            <motion.div
              initial={{ opacity: 0, x: 70 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-[24px] p-6 lg:p-7 shadow-sm"
            >
              <SectionTitle
                icon={HeartHandshake}
                label="What you get"
                title="Benefits & Support"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {FeatureList.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 rounded-[16px] bg-[#f6f2f4] p-4"
                  >
                    <div className="min-w-[26px] h-[26px] rounded-full bg-white flex items-center justify-center">
                      <Check size={14} className="text-[#e8479e]" />
                    </div>

                    <span className="text-[14px] sm:text-[15px] text-[#43204a] leading-[1.6]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* PROCESS + FAQ */}
          <div className="mt-16">
            <motion.div
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="bg-white rounded-[24px] p-6 lg:p-8"
            >
              <SectionTitle
                icon={Stethoscope}
                label="Treatment flow"
                title="Steps in Treatment"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {(service.process || []).map((step, idx) => {
                  const Icon = step.icon || Clock3;
                  return (
                    <div
                      key={idx}
                      className="rounded-[18px] border border-[#f0e6ec] p-5 hover:shadow-md transition"
                    >
                      <div className="flex items-start gap-4">
                        <div className="min-w-[52px] h-[52px] rounded-full bg-[#e8479e] flex items-center justify-center text-white">
                          <Icon size={24} />
                        </div>

                        <div>
                          <h4 className="font-bold text-[#43204a] text-[18px]">
                            {step.title}
                          </h4>
                          <p className="text-gray-600 text-[14px] mt-1 leading-[1.7]">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* ✅ FAQs (NORMAL DESIGN) */}
                {service.faqs?.length ? (
                  <div className="mt-10">
                    <SectionTitle icon={FileText} label="Common questions" title="FAQs" />

                    <div className="space-y-4">
                      {service.faqs.map((f, i) => (
                        <div
                          key={i}
                          className="bg-[#f6f2f4] rounded-[18px] p-5 sm:p-6"
                        >
                          <div className="flex items-start gap-3">
                            <div className="min-w-[28px] h-[28px] rounded-full bg-white flex items-center justify-center mt-[2px]">
                              <ChevronRight size={16} className="text-[#e8479e] stroke-[3]" />
                            </div>

                            <div>
                              <h4 className="text-[#43204a] font-bold text-[16px] sm:text-[17px] leading-[1.4]">
                                {f.q}
                              </h4>

                              <p className="text-gray-600 text-[14px] sm:text-[15px] mt-2 leading-[1.8]">
                                {f.a}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}
            </motion.div>
          </div>

          {/* GALLERY */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              md:grid-cols-3
              gap-4
              sm:gap-5
              mt-12
              sm:mt-16
            "
          >
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className="
                  rounded-[18px]
                  overflow-hidden
                  h-[240px]
                  sm:h-[220px]
                  md:h-[220px]
                  lg:h-[250px]
                "
              >
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="
                    w-full
                    h-full
                    object-cover
                    hover:scale-105
                    transition-transform
                    duration-500
                  "
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}