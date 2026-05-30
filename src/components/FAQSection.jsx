// FAQSection.jsx

import React, { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question:
        "What services does Dr. Jaya Prakash Pani provide?",
      answer:
        "Dr. Jaya Prakash Pani specializes in gynecology, obstetrics, high-risk pregnancy care, infertility treatment, PCOS management, menstrual disorders, menopause care, prenatal and postnatal care, and advanced laparoscopic gynecologic procedures.",
    },
    {
      question:
        "Does Dr. Pani provide high-risk pregnancy management?",
      answer:
        "Yes, Dr. Pani has extensive experience in managing high-risk pregnancies with personalized treatment plans, advanced monitoring, and compassionate maternal care.",
    },
    {
      question:
        "Where is Dr. Jaya Prakash Pani currently consulting?",
      answer:
        "Dr. Jaya Prakash Pani currently consults at Apollo Hospitals, Bhubaneswar, and also serves patients at Gynocare, his dedicated women’s healthcare clinic in Bhubaneswar.",
    },
    {
      question:
        "How can I book an appointment with Dr. Pani?",
      answer:
        "You can easily book an appointment by calling the clinic directly, visiting the hospital, or filling out the appointment form available on the website.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(
      activeIndex === index ? null : index
    );
  };

  return (
    <section className="w-full bg-white py-16 px-6 md:px-10 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="w-full"
        >
          <img
            src="/assets/images/FAQImg.webp"
            alt="Dr JP Pani"
            className="w-full h-full object-cover rounded-[26px]"
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.2 }}
        >

          {/* HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-[#3d1b47] text-3xl md:text-4xl lg:text-[48px] font-bold leading-tight"
          >
            Frequently Asked Questions
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-500 text-base md:text-lg leading-8 mt-4 max-w-2xl"
          >
            Find answers to the most common questions
            about women’s healthcare services,
            pregnancy care, fertility treatment, and
            appointments with Dr. Jaya Prakash Pani.
          </motion.p>

          {/* FAQ LIST */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-10"
          >

            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="border-b border-gray-300"
              >

                {/* QUESTION */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between py-6 text-left gap-5"
                >
                  <span className="text-[#2f1738] text-lg md:text-[20px] font-medium leading-[1.5]">
                    {faq.question}
                  </span>

                  {activeIndex === index ? (
                    <ChevronDown
                      size={22}
                      className="text-gray-400 flex-shrink-0"
                    />
                  ) : (
                    <ChevronRight
                      size={22}
                      className="text-gray-400 flex-shrink-0"
                    />
                  )}
                </button>

                {/* ANSWER */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeIndex === index
                      ? "max-h-52 pb-5"
                      : "max-h-0"
                  }`}
                >
                  <p className="text-gray-500 text-sm md:text-base leading-7 pr-8">
                    {faq.answer}
                  </p>
                </div>

              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;