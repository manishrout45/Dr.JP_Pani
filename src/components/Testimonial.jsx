import React, { useEffect, useRef, useState } from "react";
import {
  Star,
  ArrowUpRight,
  ShieldCheck,
  Play,
  X,
  Maximize2,
} from "lucide-react";

export default function Testimonial() {
  const testimonials = [
    {
      id: 1,
      image:
        "/assets/images/Testimonial/SushreeAbhajotiSahoo.png",
      name: "Sushree Abhajoti Sahoo",
      role: "Mother",
      title: "Smooth & Safe Pregnancy Journey",
      desc: "Thank you Dr. JP Pani sir for making my divine pregnancy journey so smooth and safe. Your care, guidance, expertise throughout this beautiful pregnancy journey made me feel safe and confident in every step from the first sonography to holding the tiny miracle. Thank you 🙏 once again sir.",
    },

    {
      id: 2,
      image:
        "/assets/images/Testimonial/BhagyashreeRout.png",
      name: "Bhagyashree Rout",
      role: "Mother",
      title: "Wonderful Pregnancy & Delivery Care",
      desc: "Thank you to Dr. JP Pani sir for the wonderful care during my pregnancy and the safe delivery of my baby boy. Your professionalism, kindness, and constant reassurance made all the difference. Highly recommended.",
    },

    {
      id: 3,
      image:
        "/assets/images/Testimonial/DebasmitaMishra.png",
      name: "Debasmita Mishra",
      role: "Patient",
      title: "Kind & Patient Consultation",
      desc: "Doctor was very kind and patient during the consultation. He listened carefully, explained everything clearly, and the treatment worked well. I felt comfortable throughout the consultation and I’m very satisfied and highly recommended.",
    },

    {
      id: 4,
      image:
        "/assets/images/Testimonial/SandhyaRaniGuru.png",
      name: "Sandhya Rani Guru",
      role: "Surgery Patient",
      title: "Successful Surgery & Fast Recovery",
      desc: "Extremely grateful to Dr Jay Prakash Pani for his proper diagnosis and skilled procedure of Cysectomy and TLH. I had a smooth surgery and recovering fast. Highly recommended.",
    },

    {
      id: 5,
      image:
        "/assets/images/Testimonial/SANCHITAMANDAL.png",
      name: "SANCHITA MANDAL",
      role: "Laparoscopic Surgery Patient",
      title: "Expert Laparoscopic Care",
      desc: "I had my laparoscopic surgery done by Dr. J P Pani at Apollo Hospital and I’m truly grateful. He is genuine, patient, and takes time to listen and explain everything clearly. The surgery and recovery went smoothly because of his expertise and care. Highly recommend! I will always remain grateful to him 🙏",
    },

    {
      id: 6,
      image:
        "/assets/images/Testimonial/PranatiDash.png",
      name: "Pranati Dash",
      role: "Patient Family",
      title: "Best Gynecologist & Laparoscopy Surgeon",
      desc: "Had great experience with Dr J.P.Pani sir, he is the best gynaecologist Laparoscopy surgeon, blessed with magical hands. He did his best for my mom. Thank you so much sir. 🙏🏼❤️",
    },
  ];

  const [current, setCurrent] = useState(0);

  // ✅ FULLSCREEN VIDEO STATE
  const [fullscreenVideo, setFullscreenVideo] = useState(null);

  // ✅ VIDEO REFS
  const videoRefs = useRef([]);

  // AUTO SLIDE
  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(slider);
  }, [testimonials.length]);

  // ✅ PAUSE OTHER VIDEOS WHEN ONE PLAYS
  const handleVideoPlay = (index) => {
    videoRefs.current.forEach((video, i) => {
      if (video && i !== index) {
        video.pause();
      }
    });
  };

  // ✅ OPEN FULLSCREEN MODAL
  const openFullscreen = (videoSrc, index) => {
    handleVideoPlay(index);

    if (videoRefs.current[index]) {
      videoRefs.current[index].pause();
    }

    setFullscreenVideo(videoSrc);
  };

  // ✅ CLOSE FULLSCREEN
  const closeFullscreen = () => {
    setFullscreenVideo(null);
  };

  return (
    <>
      <section className="w-full bg-[#f7f4f6] py-14 md:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* TOP */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-12">

            {/* LEFT */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck
                  size={16}
                  className="text-[#db3f9f]"
                />

                <span className="uppercase tracking-wide text-[#db3f9f] font-semibold text-[12px]">
                  Google Reviews
                </span>
              </div>

              <h2 className="text-[34px] sm:text-[48px] md:text-[52px] leading-[1.05] font-bold text-[#3d1846] max-w-[650px]">
                What our patients
                <br />
                say about us
              </h2>
            </div>

            {/* RIGHT */}
            <div className="flex justify-start lg:justify-end">
              <button className="w-14 h-14 rounded-full bg-[#db3f9f] hover:bg-[#c92f8d] transition-all flex items-center justify-center text-white">
                <ArrowUpRight size={24} />
              </button>
            </div>
          </div>

          {/* SLIDER */}
          <div className="relative overflow-hidden">

            <div
              className="flex transition-all duration-700 ease-in-out"
              style={{
                transform: `translateX(-${current * 100}%)`,
              }}
            >
              {testimonials.map((item, index) => (
                <div
                  key={index}
                  className="min-w-full"
                >
                  <div className="grid lg:grid-cols-2 gap-6 items-stretch">

                    {/* CARD 1 */}
                    <div className="grid sm:grid-cols-[44%_56%] bg-white rounded-[24px] overflow-hidden min-h-[420px] h-full">

                      {/* PROFILE */}
                      <div className="relative h-[280px] sm:h-full overflow-hidden bg-[#f7f4f6] flex items-center justify-center p-6">

                        <div className="w-full h-full rounded-[28px] bg-gradient-to-br from-[#db3f9f] via-[#c92f8d] to-[#7f3f98] flex flex-col items-center justify-center text-white shadow-[0_20px_60px_rgba(219,63,159,0.25)] relative overflow-hidden">

                          <div className="absolute w-40 h-40 bg-white/10 rounded-full -top-10 -left-10"></div>

                          <div className="absolute w-52 h-52 bg-white/10 rounded-full -bottom-20 -right-16"></div>

                          <div className="w-28 h-28 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-[42px] font-bold tracking-wide shadow-lg">
                            {item.name
                              .split(" ")
                              .map((word) => word[0])
                              .slice(0, 2)
                              .join("")}
                          </div>

                          <h3 className="mt-6 text-[24px] font-bold text-center px-4">
                            {item.name}
                          </h3>

                          <p className="mt-2 text-white/80 text-[15px]">
                            {item.role}
                          </p>

                          <div className="absolute bottom-5 right-6 text-[80px] leading-none text-white/10 font-serif">
                            ”
                          </div>
                        </div>
                      </div>

                      {/* CONTENT */}
                      <div className="p-6 lg:p-7 flex flex-col justify-between h-full">

                        <div>

                          <div className="flex items-center flex-wrap gap-2 mb-3">

                            <div className="flex items-center gap-[2px] shrink-0">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  size={15}
                                  className="text-[#f4be2c] fill-[#f4be2c]"
                                />
                              ))}
                            </div>

                            <h3 className="text-[#3d1846] font-bold text-[18px] leading-none">
                              {item.title}
                            </h3>
                          </div>

                          <p className="text-gray-500 leading-[1.9] text-[14px]">
                            {item.desc}
                          </p>
                        </div>

                        <div className="flex items-center justify-between mt-7">

                          <div className="flex items-center gap-3">
                            <img
                              src={item.image}
                              alt=""
                              className="w-12 h-12 rounded-full object-cover"
                            />

                            <div>
                              <h4 className="text-[#3d1846] font-bold text-[16px]">
                                {item.name}
                              </h4>

                              <p className="text-gray-500 text-[13px]">
                                {item.role}
                              </p>
                            </div>
                          </div>

                          <div className="text-[#db3f9f] text-[72px] leading-none font-serif h-[55px]">
                            ”
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* CARD 2 */}
                    <div className="hidden lg:grid sm:grid-cols-[44%_56%] bg-white rounded-[24px] overflow-hidden min-h-[420px] h-full">

                      {/* PROFILE */}
                      <div className="relative h-full overflow-hidden bg-[#f7f4f6] flex items-center justify-center p-6">

                        <div className="w-full h-full rounded-[28px] bg-gradient-to-br from-[#db3f9f] via-[#c92f8d] to-[#7f3f98] flex flex-col items-center justify-center text-white shadow-[0_20px_60px_rgba(219,63,159,0.25)] relative overflow-hidden">

                          <div className="absolute w-40 h-40 bg-white/10 rounded-full -top-10 -left-10"></div>

                          <div className="absolute w-52 h-52 bg-white/10 rounded-full -bottom-20 -right-16"></div>

                          <div className="w-28 h-28 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-[42px] font-bold tracking-wide shadow-lg">
                            {testimonials[
                              (index + 1) % testimonials.length
                            ].name
                              .split(" ")
                              .map((word) => word[0])
                              .slice(0, 2)
                              .join("")}
                          </div>

                          <h3 className="mt-6 text-[24px] font-bold text-center px-4">
                            {
                              testimonials[
                                (index + 1) % testimonials.length
                              ].name
                            }
                          </h3>

                          <p className="mt-2 text-white/80 text-[15px]">
                            {
                              testimonials[
                                (index + 1) % testimonials.length
                              ].role
                            }
                          </p>

                          <div className="absolute bottom-5 right-6 text-[80px] leading-none text-white/10 font-serif">
                            ”
                          </div>
                        </div>
                      </div>

                      {/* CONTENT */}
                      <div className="p-6 lg:p-7 flex flex-col justify-between h-full">

                        <div>

                          <div className="flex items-center flex-wrap gap-2 mb-3">

                            <div className="flex items-center gap-[2px] shrink-0">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  size={15}
                                  className="text-[#f4be2c] fill-[#f4be2c]"
                                />
                              ))}
                            </div>

                            <h3 className="text-[#3d1846] font-bold text-[18px] leading-none">
                              {
                                testimonials[
                                  (index + 1) % testimonials.length
                                ].title
                              }
                            </h3>
                          </div>

                          <p className="text-gray-500 leading-[1.9] text-[14px]">
                            {
                              testimonials[
                                (index + 1) % testimonials.length
                              ].desc
                            }
                          </p>
                        </div>

                        <div className="flex items-center justify-between mt-7">

                          <div className="flex items-center gap-3">
                            <img
                              src={
                                testimonials[
                                  (index + 1) % testimonials.length
                                ].image
                              }
                              alt=""
                              className="w-12 h-12 rounded-full object-cover"
                            />

                            <div>
                              <h4 className="text-[#3d1846] font-bold text-[16px]">
                                {
                                  testimonials[
                                    (index + 1) % testimonials.length
                                  ].name
                                }
                              </h4>

                              <p className="text-gray-500 text-[13px]">
                                {
                                  testimonials[
                                    (index + 1) % testimonials.length
                                  ].role
                                }
                              </p>
                            </div>
                          </div>

                          <div className="text-[#db3f9f] text-[72px] leading-none font-serif h-[55px]">
                            ”
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>

            {/* BOTTOM */}
            <div className="flex items-center justify-between mt-8 px-2">

              <div className="flex items-center gap-5">
                <span className="text-[#3d1846] text-[18px] font-medium">
                  {String(current + 1).padStart(2, "0")}
                </span>

                <div className="w-48 h-[2px] bg-pink-100 relative overflow-hidden rounded-full">
                  <div
                    className="absolute left-0 top-0 h-full bg-[#db3f9f] transition-all duration-500"
                    style={{
                      width: `${
                        ((current + 1) / testimonials.length) * 100
                      }%`,
                    }}
                  ></div>
                </div>

                <span className="text-[#3d1846] text-[18px] font-medium">
                  {String(testimonials.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>

          {/* REVIEW VIDEO SECTION */}
          <div className="mt-24 overflow-visible lg:px-10 xl:px-14">

            <div className="grid lg:grid-cols-[44%_56%] gap-14 xl:gap-20 items-start">

              {/* LEFT VIDEOS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-10 xl:gap-12 order-1 justify-center">

                {/* VIDEO 1 */}
                <div className="flex justify-center lg:-ml-2 xl:-ml-4">
                  <div className="relative group">

                    <div className="absolute -inset-4 bg-gradient-to-r from-pink-300 via-fuchsia-300 to-purple-300 rounded-[34px] blur-3xl opacity-25 group-hover:opacity-45 transition-all duration-500"></div>

                    <div className="relative bg-white p-2.5 rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-white/60 backdrop-blur-xl">

                      <div className="flex items-center justify-between mb-2.5 px-2">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2f]"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]"></span>
                        </div>

                        <div className="flex items-center gap-2">
                          <div className="text-[#db3f9f] text-[12px] font-semibold">
                            Patient Review
                          </div>

                          {/* FULLSCREEN BUTTON */}
                          <button
                            onClick={() =>
                              openFullscreen(
                                "/assets/ReviewVdo-1.mp4",
                                0
                              )
                            }
                            className="w-7 h-7 rounded-full bg-pink-100 hover:bg-pink-200 transition-all flex items-center justify-center text-[#db3f9f]"
                          >
                            <Maximize2 size={14} />
                          </button>
                        </div>
                      </div>

                      <div className="relative rounded-[22px] overflow-hidden bg-black w-[230px] sm:w-[250px] md:w-[240px] lg:w-[220px] xl:w-[260px] 2xl:w-[280px] aspect-[9/16]">

                        <video
                          ref={(el) => (videoRefs.current[0] = el)}
                          src="/assets/ReviewVdo-1.mp4"
                          controls
                          playsInline
                          onPlay={() => handleVideoPlay(0)}
                          className="w-full h-full object-cover"
                        />

                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                        <div className="absolute bottom-3 left-3 right-3">
                          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl px-3 py-2.5">
                            <div className="flex items-center justify-between gap-3">
                              <div>
                                <p className="text-white font-semibold text-[12.5px]">
                                  Genuine Patient Review
                                </p>
                                <p className="text-white/70 text-[10.5px] mt-0.5">
                                  Trusted care • Happy patient
                                </p>
                              </div>

                              <div className="w-9 h-9 rounded-full bg-white/20 border border-white/20 flex items-center justify-center text-white shrink-0">
                                <Play size={15} className="ml-0.5" />
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>

                  </div>
                </div>

                {/* VIDEO 2 */}
                <div className="flex justify-center md:mt-10 lg:mt-12 xl:mt-16 md:pl-6 lg:pl-4 xl:pl-8">
                  <div className="relative group">

                    <div className="absolute -inset-4 bg-gradient-to-r from-purple-300 via-pink-300 to-fuchsia-300 rounded-[34px] blur-3xl opacity-25 group-hover:opacity-45 transition-all duration-500"></div>

                    <div className="relative bg-white p-2.5 rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-white/60 backdrop-blur-xl">

                      <div className="flex items-center justify-between mb-2.5 px-2">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2f]"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]"></span>
                        </div>

                        <div className="flex items-center gap-2">
                          <div className="text-[#db3f9f] text-[12px] font-semibold">
                            Success Story
                          </div>

                          {/* FULLSCREEN BUTTON */}
                          <button
                            onClick={() =>
                              openFullscreen(
                                "/assets/ReviewVdo-2.mp4",
                                1
                              )
                            }
                            className="w-7 h-7 rounded-full bg-pink-100 hover:bg-pink-200 transition-all flex items-center justify-center text-[#db3f9f]"
                          >
                            <Maximize2 size={14} />
                          </button>
                        </div>
                      </div>

                      <div className="relative rounded-[22px] overflow-hidden bg-black w-[230px] sm:w-[250px] md:w-[240px] lg:w-[220px] xl:w-[260px] 2xl:w-[280px] aspect-[9/16]">

                        <video
                          ref={(el) => (videoRefs.current[1] = el)}
                          src="/assets/ReviewVdo-2.mp4"
                          controls
                          playsInline
                          onPlay={() => handleVideoPlay(1)}
                          className="w-full h-full object-cover"
                        />

                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                        <div className="absolute bottom-3 left-3 right-3">
                          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl px-3 py-2.5">
                            <div className="flex items-center justify-between gap-3">
                              <div>
                                <p className="text-white font-semibold text-[12.5px]">
                                  Gynecology Treatment Review
                                </p>
                                <p className="text-white/70 text-[10.5px] mt-0.5">
                                  Comfort • Recovery • Care
                                </p>
                              </div>

                              <div className="w-9 h-9 rounded-full bg-white/20 border border-white/20 flex items-center justify-center text-white shrink-0">
                                <Play size={15} className="ml-0.5" />
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>

                  </div>
                </div>

              </div>

              {/* RIGHT CONTENT */}
              <div className="order-2 lg:pr-8 xl:pr-12 2xl:pr-16 max-w-[640px]">

                <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-pink-100 text-[#db3f9f] text-[13px] font-semibold uppercase tracking-wide">
                  <Play size={14} />
                  Patient Video Testimonials
                </span>

                <h3 className="mt-6 text-[34px] sm:text-[46px] lg:text-[46px] xl:text-[52px] font-bold text-[#3d1846] leading-[1.08] max-w-[620px]">
                  Real experiences.
                  <br />
                  Trusted treatment.
                  <br />
                  Compassionate care.
                </h3>

                <p className="mt-6 text-gray-600 text-[14.5px] sm:text-[16px] leading-[1.95] max-w-[620px]">
                  Every patient story reflects the trust, comfort, and expert healthcare provided by Dr. JP Pani.
                  From pregnancy care to gynecological treatments, these genuine testimonials showcase compassionate
                  guidance, successful outcomes, and the confidence patients experience throughout their journey.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">

                  <div className="bg-white rounded-[24px] p-4 sm:p-5 shadow-md border border-pink-50 hover:-translate-y-1 transition-all duration-300">
                    <h4 className="text-[28px] sm:text-[34px] lg:text-[36px] xl:text-[38px] font-bold text-[#db3f9f] leading-none">
                      5★
                    </h4>
                    <p className="mt-2.5 text-[#3d1846] font-semibold text-[14px] sm:text-[15px]">
                      Trusted by Patients
                    </p>
                    <p className="mt-2 text-gray-500 text-[12.5px] sm:text-[13px] leading-[1.8]">
                      Families trust the care, guidance, and support through every step.
                    </p>
                  </div>

                  <div className="bg-white rounded-[24px] p-4 sm:p-5 shadow-md border border-pink-50 hover:-translate-y-1 transition-all duration-300">
                    <h4 className="text-[28px] sm:text-[34px] lg:text-[36px] xl:text-[38px] font-bold text-[#db3f9f] leading-none">
                      100%
                    </h4>
                    <p className="mt-2.5 text-[#3d1846] font-semibold text-[14px] sm:text-[15px]">
                      Genuine Testimonials
                    </p>
                    <p className="mt-2 text-gray-500 text-[12.5px] sm:text-[13px] leading-[1.8]">
                      Real stories of comfort, recovery, and confidence.
                    </p>
                  </div>

                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ✅ FULLSCREEN VIDEO MODAL */}
      {fullscreenVideo && (
        <div className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4">

          {/* CLOSE BUTTON */}
          <button
            onClick={closeFullscreen}
            className="absolute top-5 right-5 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-all flex items-center justify-center text-white backdrop-blur-md border border-white/10"
          >
            <X size={24} />
          </button>

          {/* FULLSCREEN VIDEO */}
          <div className="relative w-full max-w-[420px] sm:max-w-[500px] md:max-w-[560px] aspect-[9/16]">

            <video
              src={fullscreenVideo}
              controls
              autoPlay
              className="w-full h-full object-cover rounded-[24px]"
            />
          </div>

        </div>
      )}
    </>
  );
}