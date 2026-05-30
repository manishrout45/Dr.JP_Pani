import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  Star,
  QrCode,
  ExternalLink,
} from "lucide-react";
import Testimonial from "../components/Testimonial";

export default function Reviews() {

  // Replace with your actual Google Review link
  const googleReviewLink =
    "https://g.page/r/CW3kqygS6p2kEBM/review";

  return (
    <>
      <section className="w-full overflow-hidden">

        {/* HERO */}
        <div className="relative h-[420px] sm:h-[500px] md:h-[580px] w-full">

          <img
            src="/assets/images/PagesHeroImg.png"
            alt="Reviews Banner"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-[#f5ebe8]/60"></div>

          <div className="relative z-10 h-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 flex items-center">

            <div className="max-w-[600px] pt-12 sm:pt-16 md:pt-20">

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
                  mb-6 sm:mb-8
                "
              >
                Review Us on Google
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="
                  inline-flex
                  items-center
                  gap-3 sm:gap-4
                  bg-pink-500
                  px-6 sm:px-8 md:px-10
                  py-3 sm:py-4 md:py-5
                  rounded-full
                  shadow-lg
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

                <span className="text-white text-[14px] sm:text-[16px] font-medium">
                  Reviews
                </span>
              </motion.div>

            </div>
          </div>
        </div>

        {/* GOOGLE REVIEW CTA SECTION */}
        <section className="py-14 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="
                relative
                overflow-hidden
                rounded-[32px]
                border border-pink-100
                bg-gradient-to-br from-[#fff7fb] via-white to-pink-50
                p-6 sm:p-8 lg:p-12
                shadow-[0_15px_50px_rgba(0,0,0,0.05)]
              "
            >

              {/* Background Blur */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-pink-200/30 blur-3xl rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-52 h-52 bg-pink-100/40 blur-3xl rounded-full"></div>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                {/* LEFT CONTENT */}
                <div>

                  {/* TOP TAG */}
                  <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-semibold mb-5">
                    <Star size={16} className="fill-pink-500 text-pink-500" />
                    Patient Feedback Matters
                  </div>

                  {/* HEADING */}
                  <h2
                    className="
                      text-[30px]
                      sm:text-[38px]
                      lg:text-[52px]
                      leading-tight
                      font-extrabold
                      text-[#35123f]
                    "
                  >
                    Share Your Experience
                    <span className="text-pink-500"> on Google</span>
                  </h2>

                  {/* DESCRIPTION */}
                  <p
                    className="
                      text-gray-600
                      text-[15px]
                      sm:text-[16px]
                      lg:text-[17px]
                      leading-8
                      mt-5
                      max-w-[650px]
                    "
                  >
                    Your valuable feedback helps other patients
                    trust and connect with our healthcare services.
                    If you had a positive experience, please take
                    a moment to leave a review on Google.
                  </p>

                  {/* FEATURES */}
                  <div className="mt-7 space-y-4">

                    <div className="flex items-start gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-pink-500 mt-2"></div>

                      <p className="text-gray-700 text-[15px] sm:text-[16px]">
                        Help other patients discover trusted care.
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-pink-500 mt-2"></div>

                      <p className="text-gray-700 text-[15px] sm:text-[16px]">
                        Your reviews motivate us to serve better.
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-pink-500 mt-2"></div>

                      <p className="text-gray-700 text-[15px] sm:text-[16px]">
                        Quick and simple review process through Google.
                      </p>
                    </div>

                  </div>

                  {/* BUTTON */}
                  <div className="mt-8">

                    <a
                      href={googleReviewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        items-center
                        gap-3
                        bg-pink-500
                        hover:bg-pink-600
                        text-white
                        px-7
                        py-4
                        rounded-full
                        text-[15px]
                        sm:text-[16px]
                        font-semibold
                        transition-all
                        duration-300
                        shadow-lg
                        shadow-pink-200/60
                      "
                    >
                      Leave a Google Review

                      <ExternalLink size={18} />
                    </a>

                  </div>

                </div>

                {/* QR CODE CARD */}
                <div className="flex justify-center lg:justify-end">

                  <div
                    className="
                      bg-white
                      border border-pink-100
                      rounded-[30px]
                      p-6 sm:p-8
                      shadow-xl
                      w-full
                      max-w-[380px]
                      text-center
                    "
                  >

                    {/* ICON */}
                    <div className="flex justify-center mb-5">

                      <div className="w-16 h-16 rounded-2xl bg-pink-100 flex items-center justify-center">
                        <QrCode
                          size={32}
                          className="text-pink-500"
                        />
                      </div>

                    </div>

                    {/* TITLE */}
                    <h3 className="text-2xl font-bold text-[#35123f]">
                      Scan QR Code
                    </h3>

                    <p className="text-gray-500 mt-3 text-sm sm:text-base leading-7">
                      Scan this QR code using your phone camera
                      to instantly open the Google Review page.
                    </p>

                    {/* QR IMAGE */}
                    <div
                      className="
                        mt-7
                        bg-[#fff7fb]
                        rounded-2xl
                        p-5
                        border border-pink-100
                      "
                    >

                      {/* Replace with your actual QR image */}
                      <img
                        src="/assets/images/qr-code.png"
                        alt="Google Review QR"
                        className="
                          w-full
                          max-w-[220px]
                          mx-auto
                          object-contain
                        "
                      />

                    </div>

                    {/* SMALL TEXT */}
                    <p className="text-xs text-gray-400 mt-5">
                      Thank you for your trust & support.
                    </p>

                  </div>

                </div>

              </div>

            </motion.div>
          </div>
        </section>
      </section>

      <Testimonial />
    </>
  );
}