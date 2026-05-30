import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, Phone, MapPin, FileText } from "lucide-react";
import ContactSection from "../components/ContactSection";

export default function Contact() {

  const scrollToMap = () => {
    const mapSection = document.getElementById("clinic-map");
    if (mapSection) {
      mapSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToForm = () => {
    const formSection = document.getElementById("contact-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="w-full overflow-hidden">

        {/* HERO */}
        <div className="relative h-[420px] sm:h-[500px] md:h-[580px] w-full">

          <img
            src="/assets/images/PagesHeroImg.png"
            alt="Contact Banner"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-[#f5ebe8]/60"></div>

          <div className="relative z-10 h-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 flex items-center">

            <div className="max-w-[600px] pt-12 sm:pt-16 md:pt-20">

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-[34px] sm:text-[50px] md:text-[70px] lg:text-[85px] leading-tight font-bold text-[#35123f] mb-6 sm:mb-8"
              >
                Contact Us
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center gap-3 sm:gap-4 bg-pink-500 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full shadow-lg"
              >
                <Link
                to="/"
                className="text-white text-[14px] sm:text-[16px] font-medium"
                >
                Home
                </Link>

                <ChevronRight size={18} className="text-white stroke-[3]" />

                <span className="text-white text-[14px] sm:text-[16px] font-medium">
                  Contact Us
                </span>
              </motion.div>

            </div>
          </div>
        </div>

        {/* SECTION */}
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-12 sm:py-16">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >

            {/* TIMINGS */}
            <div className="bg-gradient-to-br from-white to-pink-50 border border-pink-100 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300">

              <h2 className="text-2xl font-bold text-[#35123f] mb-5">
                Clinic Timings
              </h2>

              <div className="space-y-4 text-gray-600 text-sm sm:text-base">
                <p className="flex justify-between">
                  <span>Monday - Saturday</span>
                  <b>10:00 AM – 2:00 PM</b>
                </p>
                <p className="flex justify-between">
                  <span>Evening</span>
                  <b>5:00 PM – 8:00 PM</b>
                </p>
                <p className="flex justify-between text-pink-600 font-medium">
                  <span>Sunday</span>
                  <b>Emergency Only</b>
                </p>
              </div>

            </div>

            {/* BOOKING */}
            <div className="bg-gradient-to-br from-white to-pink-50 border border-pink-100 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300">

              <h2 className="text-2xl font-bold text-[#35123f] mb-6">
                How to Book Appointment
              </h2>

              <div className="space-y-7">

                {/* CALL */}
                <div className="flex items-center justify-between gap-4">

                  <div className="flex items-start gap-3">
                    <Phone className="text-pink-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-[#35123f]">
                        Call Appointment
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Instant booking via call
                      </p>
                    </div>
                  </div>

                  <a
                    href="tel:+918984430093"
                    className="bg-pink-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-pink-600 transition"
                  >
                    Call Now
                  </a>

                </div>

                {/* VISIT */}
                <div className="flex items-center justify-between gap-4">

                  <div className="flex items-start gap-3">
                    <MapPin className="text-pink-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-[#35123f]">
                        Visit Clinic
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Get directions instantly
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={scrollToMap}
                    className="border border-pink-500 text-pink-600 px-4 py-2 rounded-full font-semibold hover:bg-pink-500 hover:text-white transition"
                  >
                    View Map
                  </button>

                </div>

                {/* FORM */}
                <div className="flex items-center justify-between gap-4">

                  <div className="flex items-start gap-3">
                    <FileText className="text-pink-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-[#35123f]">
                        Website Form
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Submit appointment request
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={scrollToForm}
                    className="bg-[#35123f] text-white px-4 py-2 rounded-full font-semibold hover:bg-pink-600 transition"
                  >
                    Open Form
                  </button>

                </div>

              </div>
            </div>

          </motion.div>
        </div>

      </section>

      <ContactSection />
    </>
  );
}