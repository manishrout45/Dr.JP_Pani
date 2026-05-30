import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ShieldPlus,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
} from "lucide-react";

import ContactSection from "../components/ContactSection";
import MaternitySection from "../components/MaternitySection";
import NutritionSection from "../components/NutritionSection";

const services = [
  {
    slug: "high-risk-pregnancy-care",
    title: "High-Risk Pregnancy Care",
    description:
      "Expert monitoring and personalized treatment for safe and healthy pregnancies.",
    image: "/assets/images/ServiceImg-1.webp",
  },
  {
    slug: "infertility-pcos-treatment",
    title: "Infertility & PCOS Treatment",
    description:
      "Advanced fertility counseling and complete care for PCOS and hormonal disorders.",
    image: "/assets/images/ServiceImg-2.webp",
  },
  {
    slug: "prenatal-postnatal-care",
    title: "Prenatal & Postnatal Care",
    description:
      "Comprehensive mother and baby care before and after childbirth.",
    image: "/assets/images/ServiceImg-3.webp",
  },
  {
    slug: "advanced-gynecologic-surgery",
    title: "Advanced Gynecologic Surgery",
    description:
      "Modern laparoscopic and minimally invasive gynecological procedures.",
    image: "https://img.magnific.com/free-photo/operations-rooms_1122-791.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
  },
  {
    slug: "pre-pregnancy-counselling",
    title: "Pre-Pregnancy Couple Counselling",
    description:
      "Personalized guidance and health planning for couples preparing for a healthy pregnancy.",
    image: "https://img.magnific.com/premium-photo/pregnancy-gynecology-medicine-health-care-people-concept-gynecologist-doctor-with-prescription-pregnant-woman-meeting-hospital_380164-136562.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
  },
  {
    slug: "routine-pregnancy-checkup",
    title: "Routine Pregnancy Check-Up",
    description:
      "Regular antenatal monitoring and assessments to ensure maternal and fetal well-being.",
    image: "https://img.magnific.com/premium-photo/hospital-pregnant-woman-doctor-with-information-checkup-appointment-visit-tummy-growth-healthcare-patient-obstetrician-with-checklist-pregnancy-monitor-wellness-face-mask_590464-474582.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
  },
  {
    slug: "womens-vaccination",
    title: "Women's Vaccination Services",
    description:
      "Comprehensive vaccination support including Cervical Cancer (HPV) vaccination and other recommended immunizations.",
    image: "https://img.magnific.com/premium-photo/female-doctor-with-syringe-vaccinating-patient_380164-274084.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
  },
  {
    slug: "ultrasonography",
    title: "Ultrasonography",
    description:
      "Advanced ultrasound imaging for pregnancy monitoring and gynecological evaluation.",
    image: "https://img.magnific.com/premium-photo/doctor-performing-ultrasound_13339-30285.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
  },
];

export default function Services() {
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const intervalRef = useRef(null);

  // RESPONSIVE
  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    updateSlides();

    window.addEventListener("resize", updateSlides);

    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  // PERFECT LOOP ARRAY
  const clonedServices = [
    ...services,
    ...services.slice(0, slidesPerView),
  ];

  // NEXT
  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  // PREV
  const prevSlide = () => {
    if (currentIndex === 0) {
      setTransitionEnabled(false);
      setCurrentIndex(services.length - 1);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransitionEnabled(true);
        });
      });
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // AUTO SLIDE
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(intervalRef.current);
  }, []);

  // RESET WITHOUT GAP
  useEffect(() => {
    if (currentIndex >= services.length) {
      setTimeout(() => {
        setTransitionEnabled(false);
        setCurrentIndex(0);

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setTransitionEnabled(true);
          });
        });
      }, 700);
    }
  }, [currentIndex, services.length]);

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
            <div className="max-w-[600px] pt-12 sm:pt-16 md:pt-20">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[34px] sm:text-[50px] md:text-[70px] lg:text-[85px] font-bold text-[#35123f] mb-6"
              >
                Services Us
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-3 bg-pink-500 px-6 py-3 rounded-full shadow-lg"
              >
                <Link
                  to="/"
                  className="text-white text-[14px] font-medium"
                >
                  Home
                </Link>

                <ChevronRight
                  size={18}
                  className="text-white stroke-[3]"
                />

                <span className="text-white text-[14px] font-medium">
                  Services Us
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="w-full bg-white py-16 lg:py-24 overflow-hidden">
        <div className="max-w-[1320px] mx-auto px-5 lg:px-6 flex flex-col lg:flex-row gap-10 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-[32%]"
          >
            <div className="flex items-center gap-2 mb-3">
              <ShieldPlus size={16} className="text-[#e8479e]" />

              <span className="uppercase tracking-wide text-[#e8479e] font-semibold text-[13px]">
                Our Services
              </span>
            </div>

            <h2 className="text-[#43204a] font-bold leading-[1.1] text-[32px] sm:text-[40px]">
              Specialized Women’s <br />
              Healthcare Services
            </h2>

            <p className="mt-5 text-gray-600 leading-[1.7] text-[14px]">
              Experience world-class care with advanced medical technology and
              compassionate experts dedicated to women’s health and wellness,
              offering <b>all gynecology services under one roof</b> for
              complete and convenient care.
            </p>

            <div className="flex items-center gap-4 mt-8">
              <button
                onClick={prevSlide}
                className="w-11 h-11 rounded-full bg-[#e8479e] shadow-md flex items-center justify-center hover:bg-[#43204a] hover:text-white transition"
              >
                <ArrowLeft size={18} />
              </button>

              <button
                onClick={nextSlide}
                className="w-11 h-11 rounded-full bg-[#e8479e] shadow-md flex items-center justify-center hover:bg-[#43204a] hover:text-white transition"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>

          {/* RIGHT SLIDER */}
          <div className="w-full lg:w-[68%] overflow-hidden">
            <div
              className={`flex ${
                transitionEnabled
                  ? "transition-transform duration-700 ease-in-out"
                  : ""
              }`}
              style={{
                width: `${(clonedServices.length * 100) / slidesPerView}%`,
                transform: `translateX(-${
                  currentIndex * (100 / clonedServices.length)
                }%)`,
              }}
            >
              {clonedServices.map((service, i) => (
                <div
                  key={i}
                  className="px-3 flex-shrink-0"
                  style={{
                    width: `${100 / clonedServices.length}%`,
                  }}
                >
                  <div className="group h-[460px] bg-[#f6f2f4] rounded-[22px] shadow-md overflow-hidden hover:bg-[#43204a] flex flex-col transition-all duration-300">
                    {/* IMAGE */}
                    <div className="h-[240px] w-full overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-[20px] font-bold text-[#43204a] transition-colors duration-300 group-hover:text-white">
                        {service.title}
                      </h3>

                      <p className="mt-3 text-gray-600 text-[14px] leading-[1.6] flex-1 transition-colors duration-300 group-hover:text-white/80">
                        {service.description}
                      </p>

                      <Link
                        to={`/services/${service.slug}`}
                        className="mt-5 text-[#e8479e] font-semibold flex items-center gap-2 transition-colors duration-300 group-hover:text-white"
                      >
                        View Details
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <MaternitySection />
      <NutritionSection />
      <ContactSection />
    </>
  );
}