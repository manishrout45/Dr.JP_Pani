// AboutSection.jsx

import React from "react";
import {
  ShieldCheck,
  Check,
  PhoneCall,
  BadgePlus,
} from "lucide-react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

const AboutSection = () => {
  const leftItems = [
    "High-Risk Pregnancy Management",
    "Infertility & Fertility Counseling",
    "PCOS & Menstrual Disorder Care",
  ];

  const rightItems = [
    "Prenatal & Postnatal Care",
    "Laparoscopic Gynecologic Procedures",
    "Adolescent & Menopause Care",
  ];

  return (
    <section className="w-full bg-white py-12 px-6 md:px-10 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

        {/* LEFT SIDE */}
          <div className="w-full flex flex-col">

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.9,
                ease: "easeOut",
              }}
              className="w-full"
            >
              <img
                src="/assets/images/Dr-JPpani.png"
                alt="Dr. Jaya Prakash Pani"
                className="
                  w-full
                  h-auto
                  object-cover
                  rounded-[28px]
                "
              />
            </motion.div>

            {/* Achievements (NO OVERLAP FIX) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: 0.45,
              }}
              className="
                -mt-4
                space-y-5
                bg-[#fff7fb]
                border border-pink-100
                rounded-3xl
                p-5
                sm:p-6
                shadow-sm
              "
            >

              {/* Title */}
              <div className="flex items-center gap-2">
                <div className="relative flex items-center justify-center">
                  <span className="absolute inline-flex h-3.5 w-3.5 rounded-full bg-pink-400 opacity-75 animate-ping"></span>
                  <span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-pink-600"></span>
                </div>

                <h3 className="text-[#3d1b47] font-bold text-[18px] sm:text-[20px]">
                  Key Achievements
                </h3>
              </div>

              {/* Achievement 1 */}
              <div className="flex items-start gap-3">
                <Check className="text-pink-500 mt-1 shrink-0" size={18} />
                <p className="text-gray-600 leading-5 text-[14px] sm:text-[15px] md:text-[16px]">
                  First <b>Robotic Gynec Surgeon of Odisha</b>, performing one of the highest numbers of robotic gynecological surgeries in the state.
                </p>
              </div>

              {/* Achievement 2 */}
              <div className="flex items-start gap-3">
                <Check className="text-pink-500 mt-1 shrink-0" size={18} />
                <p className="text-gray-600 leading-5 text-[14px] sm:text-[15px] md:text-[16px]">
                  Successfully performed laparoscopic removal of a <b>21 cm fibroid weighing 5.5 kg</b>, one of the first surgeries of its kind in Eastern India.
                </p>
              </div>

              {/* Achievement 3 */}
              <div className="flex items-start gap-3">
                <Check className="text-pink-500 mt-1 shrink-0" size={18} />
                <p className="text-gray-600 leading-5 text-[14px] sm:text-[15px] md:text-[16px]">
                  First to perform <b>Laparoscopic Hysterectomy (TLH)</b> in a post kidney-transplanted patient.
                </p>
              </div>

            </motion.div>

          </div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
          className="
            bg-[#fffafb]
            border border-pink-100
            rounded-[32px]

            p-6
            sm:p-8
            lg:p-10

            shadow-[0_10px_40px_rgba(0,0,0,0.04)]
          "
        >

          {/* Top Label */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
            className="
              flex
              items-center
              gap-2
              text-pink-500
              font-semibold
              uppercase
              tracking-wide
              mb-4
            "
          >
            <ShieldCheck size={17} />

            <span className="text-sm md:text-base">
              About Doctor
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="
              text-[#3d1b47]
              font-bold
              leading-[1.1]

              text-[28px]
              sm:text-[36px]
              md:text-[42px]
              lg:text-[46px]

              max-w-[320px]
              sm:max-w-[500px]
              lg:max-w-[650px]
            "
          >
            Dr. Jaya Prakash Pani{" "}

            <span
              className="
                text-pink-500
                inline-block
                mt-2
                font-bold

                text-[24px]
                sm:text-[26px]
                md:text-[28px]
                lg:text-[30px]
              "
            >
              MBBS, MD (O&G), CIMP, FICS (USA), FIAMS
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
            className="
              text-gray-500
              text-[15px]
              md:text-[17px]
              leading-8
              mt-5
              max-w-full
            "
          >
            Dr. Jaya Prakash Pani is a renowned
            Gynecologist & Obstetrician in
            Bhubaneswar, Odisha, with extensive
            experience in women’s healthcare,
            high-risk pregnancy management,
            infertility treatment, PCOS care,
            menstrual disorders, menopause
            management, and{" "}
            <b>advanced laparoscopic gynecological surgeries.</b>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: 0.4,
            }}
            className="
              text-gray-500
              text-[15px]
              md:text-[17px]
              leading-8
              mt-4
              max-w-full
            "
          >
            Known for his compassionate and
            patient-first approach, he provides
            personalized care for women at every
            stage of life. He currently consults
            at Apollo Hospitals, Bhubaneswar, and
            is the founder of Gynocare, a dedicated
            women’s healthcare clinic in Bhubaneswar.
          </motion.p>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
            }}
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              gap-5
              mt-8
            "
          >

            {/* Left Features */}
            <div className="space-y-4">
              {leftItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                  }}
                  className="flex items-center gap-3"
                >
                  <Check
                    className="text-pink-500"
                    size={18}
                  />

                  <span className="text-[#3d1b47] text-[15px] md:text-[16px] font-medium">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Right Features */}
            <div className="space-y-4">
              {rightItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                  }}
                  className="flex items-center gap-3"
                >
                  <Check
                    className="text-pink-500"
                    size={18}
                  />

                  <span className="text-[#3d1b47] text-[15px] md:text-[16px] font-medium">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.6,
            }}
            className="
              flex
              flex-col
              sm:flex-row
              sm:items-center
              gap-7
              mt-10
            "
          >

            {/* Button */}
            <Link
              to="/about"
              className="
                bg-pink-500
                hover:bg-pink-600
                transition-all
                duration-300
                text-white
                px-7
                py-3
                rounded-full
                text-[16px]
                font-semibold
                w-fit
                shadow-lg
                shadow-pink-200/50
                inline-block
              "
            >
              About Doctor →
            </Link>

            {/* Contact Info */}
            <div className="flex items-center gap-4">

              {/* Icon */}
              <div className="w-14 h-14 rounded-full border-2 border-[#3d1b47] flex items-center justify-center bg-white">
                <div className="relative">
                  <PhoneCall
                    className="text-[#3d1b47]"
                    size={24}
                  />

                  <BadgePlus
                    className="absolute -top-2 -right-2 text-pink-500 bg-white rounded-full"
                    size={15}
                  />
                </div>
              </div>

              {/* Text */}
              <div>
                <p className="text-gray-500 text-sm">
                  Contact us
                </p>

                <h4 className="text-[#3d1b47] text-xl font-bold">
                  +91 89844 30093
                </h4>
              </div>

            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;