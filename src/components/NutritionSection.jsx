import React from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const careTips = [
  "High-Risk Pregnancy Care",
  "Infertility & Fertility Counseling",
  "PCOS & Hormonal Disorder Treatment",
  "Prenatal & Postnatal Care",
  "Menstrual Disorder Management",
  "Adolescent Gynecology Care",
  "Menopause Health Support",
  "Laparoscopic Gynecologic Procedures",
];

const floatingItems = [
  {
    title: "Pregnancy Care",
    image:
      "/assets/images/Icons/mother.png",
    className:
      "top-8 left-0 sm:left-6 lg:left-12",
  },
  {
    title: "Women Wellness",
    image:
      "/assets/images/Icons/beauty.png",
    className:
      "top-0 left-[34%]",
  },
  {
    title: "Fertility Care",
    image:
      "/assets/images/Icons/lab.png",
    className:
      "top-3 right-[16%] sm:right-[18%]",
  },
  {
    title: "Gynecology Care",
    image:
      "/assets/images/Icons/gynecology.png",
    className:
      "top-24 sm:top-28 right-0 sm:right-2",
  },
];

export default function NutritionSection() {
  return (
    <section className="w-full bg-white overflow-hidden py-10 sm:py-12 lg:py-16">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-5 lg:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
            className="relative w-full max-w-[620px] mx-auto"
          >

            {/* MAIN IMAGE */}
            <div className="relative z-10">
              <img
                src="/assets/images/NutritionImg.png"
                alt="Dr JP Pani"
                className="
                  w-full
                  max-w-[300px]
                  sm:max-w-[420px]
                  md:max-w-[500px]
                  lg:max-w-[560px]
                  mx-auto
                "
              />
            </div>

            {/* FLOATING CIRCLES */}
            {floatingItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.7, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                className={`absolute ${item.className} z-20`}
              >
                <div
                  className="
                    w-[78px]
                    h-[78px]
                    sm:w-[95px]
                    sm:h-[95px]
                    md:w-[105px]
                    md:h-[105px]
                    lg:w-[115px]
                    lg:h-[115px]
                    bg-white
                    rounded-full
                    shadow-[0_18px_50px_rgba(219,63,159,0.22)]
                    border
                    border-pink-100
                    flex
                    flex-col
                    items-center
                    justify-center
                    text-center
                    p-2
                    sm:p-3
                    backdrop-blur-sm
                  "
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                      w-7 h-7
                      sm:w-10 sm:h-10
                      md:w-11 md:h-11
                      lg:w-12 lg:h-12
                      object-contain
                    "
                  />

                  <p
                    className="
                      mt-1 sm:mt-2
                      text-[#43204a]
                      text-[9px]
                      sm:text-[11px]
                      md:text-[12px]
                      lg:text-[14px]
                      font-medium
                      leading-snug
                    "
                  >
                    {item.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
            className="max-w-[560px] mx-auto lg:mx-0"
          >

            {/* TITLE */}
            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
              className="
                text-[#43204a]
                font-bold
                leading-[1.08]
                text-[28px]
                sm:text-[38px]
                md:text-[44px]
                lg:text-[52px]
                text-center
                lg:text-left
              "
            >
              Comprehensive
              <br />
              Women’s Healthcare with Dr. J P Pani
            </motion.h2>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
              className="
                mt-5 sm:mt-6
                text-gray-600
                text-[14px]
                sm:text-[15px]
                leading-[1.9]
                text-center
                lg:text-left
              "
            >
              Dr. Jaya Prakash Pani provides advanced
              gynecological and obstetric care with a
              compassionate, patient-first approach.
              From pregnancy care to fertility
              treatment and women’s wellness, every
              service is designed to support women at
              every stage of life.
            </motion.p>

            {/* LIST */}
            <motion.div
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.3,
              }}
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-y-4
                gap-x-6
                sm:gap-x-8
                mt-7 sm:mt-8
              "
            >
              {careTips.map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                  }}
                  className="flex items-center gap-3"
                >
                  <Check
                    size={18}
                    className="text-[#df4a9f] stroke-[3] shrink-0"
                  />

                  <span
                    className="
                      text-[#43204a]
                      text-[14px]
                      sm:text-[15px]
                      font-medium
                      leading-[1.6]
                    "
                  >
                    {tip}
                  </span>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}