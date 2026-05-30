import React, { useState } from "react";
import {
  ShieldPlus,
  User,
  Mail,
  Phone,
  CalendarDays,
  ArrowRight,
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
  });

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // WHATSAPP SUBMIT
  const handleWhatsApp = () => {
    const { name, email, phone, date } =
      formData;

    const message = `
🌸 Appointment Request 🌸

👤 Name: ${name}
📧 Email: ${email}
📞 Phone: ${phone}
📅 Preferred Date: ${date}
    `;

    // YOUR WHATSAPP NUMBER
    const whatsappNumber = "918984430093";

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section id="contact-form" className="relative w-full overflow-hidden py-14 lg:py-20">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="/assets/images/ContactImg.jpg"
          alt="Mother and baby"
          className="w-full h-full object-cover grayscale"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-[#f6f2f4]/0"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-7 lg:px-10">
        <div className="max-w-[980px]">

          {/* SUBTITLE */}
          <div className="flex items-center gap-2 mb-3">
            <ShieldPlus
              size={15}
              className="text-[#df4a9f]"
            />

            <span className="uppercase tracking-wide text-[#df4a9f] font-semibold text-[12px]">
              Make Appointment
            </span>
          </div>

          {/* TITLE */}
          <h2 className="text-[#43204a] font-bold leading-[1.05] text-[30px] sm:text-[40px] lg:text-[52px]">
            Make An{" "}
            <span className="text-[#df4a9f]">
              Appointment
            </span>
          </h2>

          {/* FORM */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">

            {/* NAME */}
            <div className="h-[62px] rounded-full border-2 border-[#cfc1cd] bg-white/70 backdrop-blur-sm px-6 flex items-center justify-between">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                style={{ fontSize: "13px" }}
                className="w-full bg-transparent outline-none text-[#7d6b81] placeholder-[#7d6b81]"
              />

              <User
                size={20}
                className="text-[#df4a9f]"
              />
            </div>

            {/* EMAIL */}
            <div className="h-[62px] rounded-full border-2 border-[#cfc1cd] bg-white/70 backdrop-blur-sm px-6 flex items-center justify-between">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                style={{ fontSize: "13px" }}
                className="w-full bg-transparent outline-none text-[#7d6b81] placeholder-[#7d6b81]"
              />

              <Mail
                size={20}
                className="text-[#df4a9f]"
              />
            </div>

            {/* PHONE */}
            <div className="h-[62px] rounded-full border-2 border-[#cfc1cd] bg-white/70 backdrop-blur-sm px-6 flex items-center justify-between">
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                style={{ fontSize: "13px" }}
                className="w-full bg-transparent outline-none text-[#7d6b81] placeholder-[#7d6b81]"
              />

              <Phone
                size={20}
                className="text-[#df4a9f]"
              />
            </div>

            {/* DATE */}
            <div className="h-[62px] rounded-full border-2 border-[#cfc1cd] bg-white/70 backdrop-blur-sm px-6 flex items-center justify-between">
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                style={{ fontSize: "13px" }}
                className="w-full bg-transparent outline-none text-[#7d6b81]"
              />

              <CalendarDays
                size={20}
                className="text-[#df4a9f]"
              />
            </div>

            {/* BUTTON */}
            <button
              onClick={handleWhatsApp}
              className="h-[62px] rounded-full bg-[#d9439f] hover:bg-[#c5368e] transition-all text-white text-[15px] font-semibold flex items-center justify-center gap-2"
            >
              Appointment

              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}