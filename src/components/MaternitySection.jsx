import React, { useState } from "react";
import {
  Baby,
  HeartPulse,
  ScanLine,
  BabyIcon,
  Stethoscope,
  Activity,
  Check,
  ArrowRight,
} from "lucide-react";

import { motion } from "framer-motion";

const tabs = [
  {
    id: 1,
    title: "Pregnancy Care",
    icon: Baby,
    image:
      "https://img.magnific.com/premium-photo/pregnant-woman-medical-checkup-with-doctor-listening-babys-heartbeat-using-stethoscope_986810-2645.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
    heading:
      "Comprehensive Pregnancy Care for Mothers",
    description:
      "Dr. Jaya Prakash Pani provides expert prenatal care with personalized monitoring, nutritional guidance, and compassionate support throughout every stage of pregnancy.",
    points: [
      "Regular Prenatal Checkups",
      "High-Risk Pregnancy Monitoring",
      "Nutrition & Lifestyle Guidance",
      "Fetal Growth Assessments",
      "Safe Delivery Planning",
    ],
  },
  {
    id: 2,
    title: "Women Wellness",
    icon: HeartPulse,
    image:
      "https://img.magnific.com/free-photo/dermatologist-female-patient-interacting-with-each-other_107420-65458.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
    heading:
      "Advanced Women’s Healthcare & Wellness",
    description:
      "Dedicated gynecological care focused on women’s overall health, hormonal balance, and preventive wellness at every age.",
    points: [
      "Routine Gynecological Checkups",
      "Menstrual Disorder Treatment",
      "PCOS & Hormonal Care",
      "Menopause Management",
      "Adolescent Gynecology",
    ],
  },
  {
    id: 3,
    title: "Ultrasound Care",
    icon: ScanLine,
    image:
      "/assets/images/MaternityImg-3.webp",
    heading:
      "Advanced Prenatal Ultrasound & Scanning",
    description:
      "Detailed pregnancy scans and fetal monitoring services to ensure healthy baby development and maternal wellbeing.",
    points: [
      "Pregnancy Ultrasound Scans",
      "Early Pregnancy Detection",
      "Heartbeat Monitoring",
      "Fetal Growth Tracking",
      "Specialist Consultation",
    ],
  },
  {
    id: 4,
    title: "Safe Delivery",
    icon: BabyIcon,
    image:
      "https://img.magnific.com/free-photo/pregnant-woman-holding-greeting-card_58466-11218.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
    heading:
      "Safe & Comfortable Delivery Experience",
    description:
      "Expert obstetric care for normal delivery and cesarean section with complete maternal and newborn support.",
    points: [
      "Normal Delivery Care",
      "Cesarean Section Support",
      "24/7 Emergency Assistance",
      "Modern Delivery Facilities",
      "Post-Delivery Recovery Care",
    ],
  },
  {
    id: 5,
    title: "Fertility Care",
    icon: Stethoscope,
    image:
      "https://img.magnific.com/premium-photo/excited-indian-couple-holding-positive-pregnancy-test-while-sitting-couch-home-loving-husband_116547-78629.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
    heading:
      "Personalized Fertility & Infertility Treatment",
    description:
      "Comprehensive fertility counseling and infertility treatment designed to support couples on their parenthood journey.",
    points: [
      "Infertility Evaluation",
      "Fertility Counseling",
      "Ovulation Monitoring",
      "PCOS Fertility Support",
      "Personalized Treatment Plans",
    ],
  },
  {
    id: 6,
    title: "Laparoscopy",
    icon: Activity,
    image:
      "https://img.magnific.com/free-photo/ordinary-busy-day-surgeon_329181-19717.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
    heading:
      "Advanced Laparoscopic Gynecologic Procedures",
    description:
      "Modern minimally invasive gynecological surgeries for faster recovery, improved comfort, and effective treatment outcomes.",
    points: [
      "Minimally Invasive Procedures",
      "Fibroid & Cyst Treatment",
      "Faster Recovery Support",
      "Advanced Surgical Care",
      "Comprehensive Follow-Up",
    ],
  },
];

export default function MaternitySection() {
  const [activeTab, setActiveTab] = useState(
    tabs[0]
  );

  return (
    <section className="w-full bg-[#f7f4f6] py-10 lg:py-14 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-6">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
        >
          <h2 className="text-[#43204a] font-bold leading-[1.08] text-[28px] sm:text-[42px] lg:text-[52px]">
            Complete Care for
            <br />
            Every Woman’s Journey
          </h2>
        </motion.div>

        {/* TABS */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 bg-white rounded-[22px] overflow-hidden border border-[#ece5ea]"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
            {tabs.map((tab, index) => {
              const Icon = tab.icon;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab)}
                  className={`h-[82px] px-4 flex items-center justify-center gap-2.5 transition-all duration-300 border-[#ece5ea] ${
                    index !== tabs.length - 1
                      ? "xl:border-r"
                      : ""
                  } ${
                    activeTab.id === tab.id
                      ? "bg-[#dd479f] text-white"
                      : "bg-white text-[#43204a] hover:bg-[#fdf0f7]"
                  }`}
                >
                  <Icon
                    size={26}
                    strokeWidth={1.8}
                  />

                  <span className="text-[15px] font-semibold text-left leading-snug">
                    {tab.title}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-12">

          {/* LEFT CONTENT */}
          <motion.div
            key={activeTab.id}
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-[560px]"
          >

            <h3 className="text-[#43204a] font-bold leading-[1.15] text-[26px] lg:text-[40px]">
              {activeTab.heading}
            </h3>

            <p className="mt-4 text-gray-600 text-[15px] leading-[1.8]">
              {activeTab.description}
            </p>

            {/* POINTS */}
            <div className="mt-7 space-y-4">
              {activeTab.points.map(
                (point, index) => (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      x: -30,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    className="flex items-start gap-3"
                  >
                    <Check
                      size={18}
                      className="text-[#dd479f] mt-1 stroke-[3]"
                    />

                    <span className="text-[#43204a] text-[16px] font-medium leading-[1.6]">
                      {point}
                    </span>
                  </motion.div>
                )
              )}
            </div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            key={activeTab.image}
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative"
          >
            <div className="rounded-[24px] overflow-hidden">
              <img
                src={activeTab.image}
                alt={activeTab.title}
                className="w-full h-[400px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}