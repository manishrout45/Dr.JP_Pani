import React from "react";
import {
  Play,
  CalendarDays,
  HeartPulse,
} from "lucide-react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#f8f5f6]">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center h-full"
        style={{
          backgroundImage:
            "url('/assets/images/HeroImg2.png')",
        }}
      >
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f8d7e8]/95 via-[#f8d7e8]/65 to-transparent"></div>
      </div>

      {/* RIGHT SIDE INFO */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="hidden xl:flex absolute right-0 top-0 h-full w-[90px] bg-white/40 backdrop-blur-sm border-l border-gray-200 flex-col items-center justify-center gap-32 z-20"
      >

        {/* WOMEN HEALTH */}
        <div className="flex flex-col items-center justify-center gap-5 rotate-90">
          <HeartPulse
            size={24}
            className="text-[#db3f9f] shrink-0"
          />

          <span className="whitespace-nowrap text-[#43204a] text-[12px] tracking-[3px] font-semibold">
            WOMEN’S HEALTH
          </span>
        </div>

        {/* APPOINTMENTS */}
        <div className="flex flex-col items-center justify-center gap-5 rotate-90">
          <CalendarDays
            size={24}
            className="text-[#db3f9f] shrink-0"
          />

          <span className="whitespace-nowrap text-[#43204a] text-[12px] tracking-[3px] font-semibold">
            APPOINTMENTS
          </span>
        </div>
      </motion.div>

      {/* LEFT VERTICAL TEXT */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="hidden xl:flex absolute left-0 top-0 h-full w-[70px] items-center justify-center z-20"
      >
        <span className="-rotate-90 whitespace-nowrap text-[#43204a] text-[12px] tracking-[2px] font-medium">
          TRUSTED GYNECOLOGY & MATERNITY CARE
        </span>
      </motion.div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-[1300px] mx-auto min-h-screen flex items-center px-5 sm:px-8 lg:px-14 pt-28 pb-14">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-[580px] lg:ml-4 xl:ml-8"
          >

            {/* SUBTITLE */}
            <p className="text-[#dc3f9c] uppercase font-bold tracking-wide text-[12px] sm:text-sm mb-3">
              Dr. JP Pani • MBBS, MD (O&G), CIMP, FICS (USA), FIAMS
            </p>

            {/* TITLE */}
            <h1 className="text-[#43204a] font-bold leading-[1.05] text-[34px] sm:text-[48px] lg:text-[52px]">
              Expert Care for
              <br />
              Every Woman at
              <br />
              Every Stage
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-5 text-gray-600 leading-[1.9] text-[15px] sm:text-[16px] max-w-[540px]">
              Dr. Jaya Prakash Pani is a trusted
              Gynecologist & Obstetrician in Bhubaneswar,
              providing compassionate care in pregnancy,
              infertility, PCOS treatment, women’s wellness,
              and <b> advanced gynecological endoscopic procedures.</b>
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap items-center gap-4 mt-8">

              {/* BOOK BUTTON */}
              <Link to="/contact">
                <button className="h-[54px] px-8 rounded-full bg-[#dc3f9c] hover:bg-[#c93188] transition-all text-white text-[15px] font-medium flex items-center gap-2">
                  Book Appointment

                  <CalendarDays size={18} />
                </button>
              </Link>

              {/* LEARN MORE */}
                  <Link to="/about" className="flex items-center gap-3 group">
                    <div className="w-11 h-11 rounded-full border-2 border-[#dc3f9c] flex items-center justify-center group-hover:bg-[#dc3f9c] transition-all">
                      <Play
                        size={15}
                        fill="currentColor"
                        className="text-[#dc3f9c] group-hover:text-white ml-0.5"
                      />
                    </div>

                    <span className="text-[#43204a] text-[15px] font-medium">
                      Learn More
                    </span>
                  </Link>
            </div>
          </motion.div>

          {/* RIGHT SPACE */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
}