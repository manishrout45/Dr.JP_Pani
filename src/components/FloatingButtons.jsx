import React, { useEffect, useState } from "react";
import { Phone, ChevronUp } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingButtons() {
  const [showScroll, setShowScroll] =
    useState(false);

  // SHOW BUTTON AFTER SCROLL
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  // SCROLL TO TOP
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* LEFT FLOATING BUTTONS */}
      <div className="hidden lg:flex fixed bottom-5 left-4 z-40 flex-col gap-4">

        {/* WHATSAPP BUTTON */}
        <a
          href="https://wa.me/918599009063"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-[#25D366] hover:scale-105 transition-all text-white flex items-center justify-center shadow-lg"
        >
          <FaWhatsapp size={24} />
        </a>

        {/* CALL BUTTON */}
        <a
          href="tel:+91918599009063"
          className="w-12 h-12 rounded-full bg-[#df4a9f] hover:scale-105 transition-all text-white flex items-center justify-center shadow-lg"
        >
          <Phone size={20} />
        </a>
      </div>

      {/* SCROLL TO TOP BUTTON */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-5 right-4 z-40 w-12 h-12 rounded-full bg-[#43204a] hover:bg-[#df4a9f] text-white flex items-center justify-center shadow-lg transition-all duration-300 ${
          showScroll
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5 pointer-events-none"
        }`}
      >
        <ChevronUp size={22} />
      </button>
    </>
  );
}