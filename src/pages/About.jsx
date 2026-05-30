import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import AboutSection from "../components/AboutSection";
import StatsSection from "../components/StatsSection";
import FAQSection from "../components/FAQSection";
import PregnancyTimeline from "../components/PregnancyTimeline";
export default function About() {
  return (
    <>
    <section className="w-full overflow-hidden">
      {/* HERO SECTION */}
<div className="relative h-[420px] sm:h-[500px] md:h-[580px] w-full">

  {/* BACKGROUND IMAGE */}
  <img
    src="/assets/images/PagesHeroImg.png"
    alt="About Banner"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* LIGHT OVERLAY */}
  <div className="absolute inset-0 bg-[#f5ebe8]/55"></div>

  {/* CONTENT */}
  <div className="relative z-10 h-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 flex items-center">

    <div className="max-w-[600px] pt-12 sm:pt-16 md:pt-20">

      {/* HEADING */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
          text-[34px]
          sm:text-[50px]
          md:text-[70px]
          lg:text-[85px]
          leading-tight
          font-bold
          text-[#35123f]
          mb-6 sm:mb-8 md:mb-10
        "
      >
        About Us
      </motion.h1>

      {/* BREADCRUMB */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="
          inline-flex
          items-center
          gap-3 sm:gap-4
          bg-[#df409e]
          px-6 sm:px-8 md:px-10
          py-3 sm:py-4 md:py-5
          rounded-full
        "
      >
        <Link
          to="/"
          className="text-white text-[14px] sm:text-[16px] font-medium"
        >
          Home
        </Link>

        <ChevronRight
          size={18}
          className="text-white stroke-[3]"
        />

        <span className="text-white text-[14px] sm:text-[16px] md:text-[18px] font-medium">
          About Us
        </span>
      </motion.div>

    </div>
  </div>
</div>

    </section>

    <AboutSection />
    <StatsSection />
    <PregnancyTimeline />
    <FAQSection />
    </>
  );
}