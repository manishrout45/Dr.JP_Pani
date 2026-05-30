import React from "react";
import { ShieldPlus, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
    image: "/assets/images/ServiceImg-4.webp",
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full bg-[#f6f2f4] py-16 lg:py-20 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-5 lg:px-6">

        {/* TOP */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-[720px] mx-auto"
        >

          {/* SUBTITLE */}
          <div className="flex items-center justify-center gap-2 mb-3">
            <ShieldPlus size={16} className="text-[#e8479e]" />
            <span className="uppercase tracking-wide text-[#e8479e] font-semibold text-[13px]">
              Our Services
            </span>
          </div>

          {/* TITLE */}
          <h2 className="text-[#43204a] font-bold leading-[1.1] text-[32px] sm:text-[42px] lg:text-[52px]">
            Specialized Women’s
            <br />
            Healthcare Services
          </h2>

          {/* 👇 ADDED PARAGRAPH UNDER HEADING */}
          <p className="mt-5 text-gray-600 text-[15px] leading-[1.7]">
            Experience world-class care with advanced medical technology and compassionate experts dedicated to women’s health and wellness, offering{" "}
            <span className="font-bold text-[#43204a]">
              all gynecology services under one roof
            </span>{" "}
            for complete and convenient care.
          </p>

        </motion.div>

        {/* SERVICES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-14">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="group rounded-[20px] overflow-hidden bg-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#43204a] flex flex-col"
            >

              {/* IMAGE */}
              <div className="h-[220px] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 flex flex-col flex-1">

                <div className="flex-1">
                  <h3 className="text-[20px] font-bold text-[#43204a] leading-[1.3] transition-all duration-300 group-hover:text-white min-h-[55px]">
                    {service.title}
                  </h3>

                  <p className="mt-3 leading-[1.7] text-[15px] text-gray-500 transition-all duration-300 group-hover:text-white/80 min-h-[110px]">
                    {service.description}
                  </p>
                </div>

                      <Link
                        to={`/services/${service.slug}`}
                        className="mt-5 text-[#e8479e] font-semibold flex items-center gap-2 transition-colors duration-300 group-hover:text-white"
                        >
                        View Details <ArrowRight size={16} />
                        </Link>
              </div>

            </motion.div>
          ))}
        </div>

        {/* BOTTOM */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-col lg:flex-row items-center justify-between gap-4"
        >

          <div className="w-full lg:flex-1 bg-white rounded-full px-6 py-4 text-[#43204a] text-[16px] font-medium">
            Compassionate care for women at every stage of life.
          </div>

        <Link to="/services">
          <button className="h-[56px] px-10 rounded-full bg-[#43204a] hover:bg-[#5a2c62] transition-all text-white text-[16px] font-semibold whitespace-nowrap">
            View All Services
          </button>
        </Link>
        </motion.div>

      </div>
    </section>
  );
}