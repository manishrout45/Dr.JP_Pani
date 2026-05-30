import React, { useEffect, useState } from "react";
import {
  Menu,
  X,
  ChevronRight,
  CalendarDays,
  Facebook,
  Instagram,
} from "lucide-react";

import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // SERVICES DROPDOWN STATES
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] =
    useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  // NAVIGATION ITEMS
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Reviews", path: "/reviews" },
    { name: "Contact Us", path: "/contact" },
  ];

  // SERVICES
  const serviceItems = [
    {
      name: "High-Risk Pregnancy Care",
      path: "/services/high-risk-pregnancy-care",
    },
    {
      name: "Infertility & PCOS Treatment",
      path: "/services/infertility-pcos-treatment",
    },
    {
      name: "Prenatal & Postnatal Care",
      path: "/services/prenatal-postnatal-care",
    },
    {
      name: "Advanced Gynecologic Surgery",
      path: "/services/advanced-gynecologic-surgery",
    },
    {
      name: "Pre-Pregnancy Couple Counselling",
      path: "/services/pre-pregnancy-counselling",
    },
    {
      name: "Routine Pregnancy Check-Up",
      path: "/services/routine-pregnancy-checkup",
    },
    {
      name: "Women's Vaccination Services",
      path: "/services/womens-vaccination",
    },
    {
      name: "Ultrasonography",
      path: "/services/ultrasonography",
    },
  ];

  return (
    <>
      {/* OVERLAY */}
      <div
        onClick={() => setMobileOpen(false)}
        className={`fixed inset-0 bg-black/40 z-40 transition-all duration-300 ${
          mobileOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white shadow-md py-2.5"
            : "bg-transparent py-3 md:py-6 px-3 sm:px-6 lg:px-10"
        }`}
      >
        <div className="max-w-[1380px] mx-auto px-2 sm:px-4 lg:px-5">
          {/* DESKTOP NAVBAR */}
          <div
            className={`hidden md:flex items-center justify-between transition-all duration-500 ${
              scrolled
                ? "bg-white rounded-none px-0 py-0"
                : "bg-white/95 backdrop-blur-md rounded-full px-4 lg:px-5 py-2"
            }`}
          >
            {/* LEFT */}
            <div className="flex items-center">
              {/* LOGO */}
              <div
                className={`pr-4 lg:pr-7 mr-4 lg:mr-7 border-r border-gray-200 transition-all duration-500 ${
                  scrolled ? "py-2.5" : "py-0"
                }`}
              >
                <Link
                  to="/"
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <img
                    src="/assets/images/logo/Logo.png"
                    alt="Dr. JP Pani"
                    className="w-32 h-14 object-contain"
                  />
                </Link>
              </div>

              {/* NAV LINKS */}
              <nav className="flex items-center gap-3 lg:gap-6 xl:gap-8">
                {navItems.map((item, index) => (
                  <div
                    key={index}
                    className="relative"
                    onMouseEnter={() =>
                      item.name === "Services" &&
                      setServicesOpen(true)
                    }
                    onMouseLeave={() =>
                      item.name === "Services" &&
                      setServicesOpen(false)
                    }
                  >
                    <Link
                      to={item.path}
                      className={`relative flex items-center gap-1.5 text-[13px] lg:text-[15px] font-medium transition-all pb-2 ${
                        location.pathname === item.path
                          ? "text-[#db3f9f]"
                          : "text-[#43204a] hover:text-[#db3f9f]"
                      }`}
                    >
                      {item.name}

                      {item.name === "Services" && (
                        <ChevronRight
                          size={14}
                          className={`transition-transform duration-300 ${
                            servicesOpen ? "rotate-90" : ""
                          }`}
                        />
                      )}

                      <span
                        className={`absolute left-0 -bottom-[2px] h-[2.5px] rounded-full bg-[#db3f9f] transition-all duration-300 ${
                          location.pathname === item.path
                            ? "w-full opacity-100"
                            : "w-0 opacity-0"
                        }`}
                      ></span>
                    </Link>

                    {/* SERVICES DROPDOWN */}
                    {item.name === "Services" && (
                      <div
                        className={`absolute top-full left-0 mt-4 w-[320px] max-h-[420px] overflow-y-auto scrollbar-hide bg-white rounded-2xl shadow-xl border border-pink-100 transition-all duration-300 origin-top z-50 ${
                          servicesOpen
                            ? "opacity-100 visible translate-y-0"
                            : "opacity-0 invisible -translate-y-2"
                        }`}
                      >
                        {serviceItems.map((service, i) => (
                          <Link
                            key={i}
                            to={service.path}
                            className="block w-full text-left px-5 py-4 text-[14px] text-[#43204a] hover:bg-pink-50 hover:text-[#db3f9f] transition-all border-b last:border-b-0 border-gray-100"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-2 lg:gap-3">
              {/* SOCIAL */}
              <div className="hidden lg:flex items-center gap-2">
                <a
                  href="https://www.facebook.com/drjppanigynec/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gray-200 hover:bg-[#db3f9f] hover:text-white hover:border-[#db3f9f] transition-all text-[#43204a] flex items-center justify-center"
                >
                  <Facebook size={17} />
                </a>

                <a
                  href="https://www.instagram.com/drjppanigynec/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gray-200 hover:bg-[#db3f9f] hover:text-white hover:border-[#db3f9f] transition-all text-[#43204a] flex items-center justify-center"
                >
                  <Instagram size={17} />
                </a>
              </div>

              {/* BUTTON */}
              <Link to="/contact">
                <button className="h-[46px] px-4 rounded-full bg-[#d83d97] hover:bg-[#c62d87] transition-all text-white text-[12px] lg:text-[15px] font-medium flex items-center gap-2">
                  <CalendarDays size={17} />
                  APPOINTMENT
                </button>
              </Link>
            </div>
          </div>

          {/* MOBILE NAVBAR */}
          <div className="md:hidden flex items-center justify-between bg-white rounded-3xl  px-4 py-2">
            {/* LOGO */}
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/assets/images/logo/Logo.png"
                alt="Dr. JP Pani"
                className="w-28 h-12 object-contain"
              />
            </Link>

            {/* RIGHT */}
            <div className="flex items-center gap-3">
              <button className="hidden xs:flex h-[40px] px-4 rounded-full bg-[#d83d97] text-white text-[13px] font-medium items-center gap-2">
                <CalendarDays size={15} />
                Book
              </button>

              <button
                onClick={() => setMobileOpen(true)}
                className="w-10 h-10 rounded-xl bg-[#4b1f4e] flex items-center justify-center text-white"
              >
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed top-0 left-0 h-full w-[85%] sm:w-[360px] bg-white z-50 transition-all duration-500 overflow-y-auto ${
          mobileOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >
        {/* TOP */}
        <div className="p-5 border-b border-gray-200 flex items-center justify-between">
          {/* LOGO */}
          <Link to="/" onClick={() => setMobileOpen(false)}>
            <img
              src="/assets/images/logo/Logo.png"
              alt="Dr. JP Pani"
              className="w-32 h-12 object-contain"
            />
          </Link>

          <button
            onClick={() => setMobileOpen(false)}
            className="w-10 h-10 rounded-lg bg-[#4b1f4e] text-white flex items-center justify-center"
          >
            <X size={19} />
          </button>
        </div>

        {/* MENU */}
        <div className="px-5 py-4">
          <div className="space-y-1">
            {navItems.map((item, index) => (
              <div key={index}>
                <div
                  className={`border-b py-4 flex items-center justify-between transition-all ${
                    location.pathname === item.path
                      ? "border-[#db3f9f]"
                      : "border-gray-200"
                  }`}
                >
                  <Link
                    to={item.path}
                    onClick={() => {
                      if (item.name !== "Services") {
                        setMobileOpen(false);
                      }
                    }}
                    className={`relative text-[16px] font-medium transition-all ${
                      location.pathname === item.path
                        ? "text-[#db3f9f]"
                        : "text-[#43204a] hover:text-[#db3f9f]"
                    }`}
                  >
                    {item.name}

                    {location.pathname === item.path && (
                      <span className="absolute -bottom-2 left-0 w-8 h-[2.5px] rounded-full bg-[#db3f9f]"></span>
                    )}
                  </Link>

                  {/* MOBILE SERVICES BUTTON */}
                  {item.name === "Services" && (
                    <button
                      onClick={() =>
                        setMobileServicesOpen(
                          !mobileServicesOpen
                        )
                      }
                      className="w-9 h-9 rounded-md bg-[#4b1f4e] text-white flex items-center justify-center"
                    >
                      <ChevronRight
                        size={17}
                        className={`transition-transform duration-300 ${
                          mobileServicesOpen
                            ? "rotate-90"
                            : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {/* MOBILE SERVICES DROPDOWN */}
                {item.name === "Services" && (
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      mobileServicesOpen
                        ? "max-h-[500px] opacity-100 mt-3"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="space-y-2 pl-2 pb-3">
                      {serviceItems.map((service, i) => (
                        <Link
                          key={i}
                          to={service.path}
                          onClick={() =>
                            setMobileOpen(false)
                          }
                          className="block text-[14px] text-[#43204a] hover:text-[#db3f9f] transition-all py-1"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* APPOINTMENT BUTTON */}
          <Link to="/contact">
            <button className="mt-7 w-full h-[50px] rounded-full bg-[#d83d97] hover:bg-[#c62d87] transition-all text-white text-[14px] font-medium flex items-center justify-center gap-2">
              <CalendarDays size={17} />
              APPOINTMENT
            </button>
          </Link>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-3 mt-7">
            <a
              href="https://www.facebook.com/drjppanigynec/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-gray-300 rounded-lg text-[#43204a] hover:bg-[#db3f9f] hover:text-white hover:border-[#db3f9f] transition-all flex items-center justify-center"
            >
              <Facebook size={18} />
            </a>

            <a
              href="https://www.instagram.com/drjppanigynec/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-gray-300 rounded-lg text-[#43204a] hover:bg-[#db3f9f] hover:text-white hover:border-[#db3f9f] transition-all flex items-center justify-center"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}