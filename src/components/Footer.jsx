import React from "react";
import {
  Facebook,
  Instagram,
  Phone,
  MapPin,
  Globe,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#4b2953] pt-10 lg:pt-14">

      {/* BACKGROUND OVERLAY */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="/assets/images/FooterbgImg.avif"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* MAIN WRAPPER */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-3 sm:px-5 lg:px-8">

        {/* MAIN FOOTER CARD */}
        <div className="bg-[#f7f5f5] rounded-[22px] lg:rounded-[30px] overflow-hidden">

          {/* GRID */}
          <div className="grid grid-cols-1 xl:grid-cols-[1.05fr_1fr]">

            {/* LEFT SIDE */}
            <div className="relative px-5 sm:px-8 md:px-10 lg:px-12 pt-8 sm:pt-10 lg:pt-12 pb-28 md:pb-32 lg:pb-14 min-h-auto lg:min-h-[430px]">

              {/* LOGO */}
              <div className="flex items-center">
                <img
                  src="/assets/images/logo/Logo.png"
                  alt="Dr. Jaya Prakash Pani"
                  className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain"
                />
              </div>

              {/* CONTACT INFO */}
              <div className="mt-8 sm:mt-10 space-y-5 max-w-[360px]">

                {/* ADDRESS */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#f0dce9] flex items-center justify-center shrink-0">
                    <MapPin
                      size={18}
                      className="text-[#db3f9f]"
                    />
                  </div>

                  <p className="text-[#43204a] text-[14px] sm:text-[15px] leading-[1.8]">
                    M5/23, GYNOCARE,
                    <br />
                    Acharya Vihar,
                    <br />
                    Bhubaneswar, Odisha 751013
                  </p>
                </div>

                {/* PHONE */}
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#f0dce9] flex items-center justify-center shrink-0">
                      <Phone
                        size={18}
                        className="text-[#db3f9f]"
                      />
                    </div>

                    {/* NUMBERS */}
                    <div className="flex flex-col">
                      <a
                        href="tel:08599009063"
                        className="text-[#43204a] text-[14px] sm:text-[15px] hover:text-[#db3f9f] transition-all"
                      >
                        +91 85990 09063
                      </a>

                      <a
                        href="tel:08984430093"
                        className="text-[#43204a] text-[14px] sm:text-[15px] hover:text-[#db3f9f] transition-all mt-1"
                      >
                        +91 89844 30093
                      </a>
                    </div>
                  </div>
              </div>

              {/* SOCIAL */}
              <div className="mt-8 flex items-center gap-3">

                {/* FACEBOOK */}
                <a
                  href="https://www.facebook.com/drjppanigynec/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#eceaea] hover:bg-[#db3f9f] hover:text-white transition-all text-[#43204a] flex items-center justify-center"
                >
                  <Facebook size={20} />
                </a>

                {/* INSTAGRAM */}
                <a
                  href="https://www.instagram.com/drjppanigynec/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#eceaea] hover:bg-[#db3f9f] hover:text-white transition-all text-[#43204a] flex items-center justify-center"
                >
                  <Instagram size={20} />
                </a>

                {/* GOOGLE BUSINESS */}
                <a
                  href="https://share.google/EPCS5hiMTbI1mmnx3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#eceaea] hover:bg-[#db3f9f] hover:text-white transition-all text-[#43204a] flex items-center justify-center"
                >
                  <Globe size={20} />
                </a>
              </div>

              {/* FOOTER IMAGE */}
              <div className="hidden md:block absolute bottom-0 right-0 lg:-right-4">
                <img
                  src="/assets/images/FooterImg.png"
                  alt="Mother"
                  className="w-[180px] md:w-[230px] lg:w-[320px] object-contain"
                />
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="px-5 sm:px-8 md:px-10 lg:px-12 py-8 sm:py-10 lg:py-12 border-t xl:border-t-0 xl:border-l border-gray-200">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

                {/* SERVICES */}
                <div>
                  <h3 className="text-[#db3f9f] uppercase text-[15px] sm:text-[16px] font-bold mb-5 sm:mb-6">
                    Services
                  </h3>

                  <ul className="space-y-3 sm:space-y-4">
                    <li>
                      <Link
                        to="/services/high-risk-pregnancy-care"
                        className="text-[#43204a] text-[15px] sm:text-[16px] hover:text-[#db3f9f] transition-all"
                      >
                        High-Risk Pregnancy Care
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/services/infertility-pcos-treatment"
                        className="text-[#43204a] text-[15px] sm:text-[16px] hover:text-[#db3f9f] transition-all"
                      >
                        Infertility & PCOS Treatment
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/services/prenatal-postnatal-care"
                        className="text-[#43204a] text-[15px] sm:text-[16px] hover:text-[#db3f9f] transition-all"
                      >
                        Prenatal & Postnatal Care
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/services/advanced-gynecologic-surgery"
                        className="text-[#43204a] text-[15px] sm:text-[16px] hover:text-[#db3f9f] transition-all"
                      >
                        Advanced Gynecologic Surgery
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/services/pre-pregnancy-counselling"
                        className="text-[#43204a] text-[15px] sm:text-[16px] hover:text-[#db3f9f] transition-all"
                      >
                        Pre-Pregnancy Counselling
                      </Link>
                    </li>

                    
                  </ul>
                </div>

                {/* QUICK LINKS */}
                <div>
                  <h3 className="text-[#db3f9f] uppercase text-[15px] sm:text-[16px] font-bold mb-5 sm:mb-6">
                    Quick Links
                  </h3>

                  <ul className="space-y-3 sm:space-y-4">

                    <li>
                      <Link
                        to="/about"
                        className="text-[#43204a] text-[15px] sm:text-[16px] hover:text-[#db3f9f] transition-all"
                      >
                        About Us
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/services"
                        className="text-[#43204a] text-[15px] sm:text-[16px] hover:text-[#db3f9f] transition-all"
                      >
                        Services
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/reviews"
                        className="text-[#43204a] text-[15px] sm:text-[16px] hover:text-[#db3f9f] transition-all"
                      >
                        Reviews
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/contact"
                        className="text-[#43204a] text-[15px] sm:text-[16px] hover:text-[#db3f9f] transition-all"
                      >
                        Contact Us
                      </Link>
                    </li>

                  </ul>
                </div>
              </div>

              {/* COPYRIGHT */}
              <div className="mt-10 sm:mt-12 pt-5 sm:pt-6 border-t border-gray-300">
                <p className="text-center text-[#5f4d64] text-[13px] sm:text-[15px] leading-[1.8]">
                  © Copyright By 2026{" "}
                  <span className="text-[#db3f9f]">
                    Dr. JP Pani
                  </span>{" "}
                  All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* LOCATION SECTION */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center px-2 sm:px-4 lg:px-8 py-12 lg:py-16">

          {/* LEFT */}
          <div>
            <h2 className="text-white text-[30px] sm:text-[42px] lg:text-[52px] leading-[1.1] font-bold max-w-[720px]">
              Visit Our Women’s Healthcare Clinic in Bhubaneswar
            </h2>

            <p className="text-[#d6cbd8] text-[15px] sm:text-[16px] mt-4 max-w-[580px] leading-[1.9]">
              Dr. J. P. Pani provides expert gynecology, obstetrics,
              infertility, high-risk pregnancy, and women’s wellness
              care with a compassionate, patient-first approach and
              over 20 years of clinical experience.
            </p>
          </div>

          {/* RIGHT */}
          <div>
            <div
              id="clinic-map"
              className="overflow-hidden rounded-[22px] lg:rounded-[28px] border border-white/10 h-[260px] sm:h-[320px] lg:h-[360px] shadow-2xl"
            >
              <iframe
                title="Gynocare Location"
                src="https://www.google.com/maps?q=M5/23,GYNOCARE,Acharya%20Vihar,Bhubaneswar,Odisha%20751013&output=embed"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}