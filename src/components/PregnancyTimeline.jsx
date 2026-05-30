import React, { useEffect, useRef, useState } from "react";

const pregnancyMonths = [
  {
    month: "1 Month",
    image: "/assets/images/1month.png",
  },
  {
    month: "2 Month",
    image: "/assets/images/2month.png",
  },
  {
    month: "3 Month",
    image: "/assets/images/3month.png",
  },
  {
    month: "4 Month",
    image: "/assets/images/4month.png",
  },
  {
    month: "5 Month",
    image: "/assets/images/5month.png",
  },
  {
    month: "6 Month",
    image: "/assets/images/6month.png",
  },
  {
    month: "7 Month",
    image: "/assets/images/7month.png",
  },
  {
    month: "8 Month",
    image: "/assets/images/8month.png",
  },
  {
    month: "9 Month",
    image: "/assets/images/9month.png",
  },
];

// LOOP ITEMS
const loopItems = [
  ...pregnancyMonths,
  ...pregnancyMonths,
  ...pregnancyMonths,
];

export default function PregnancyTimeline() {
  const total = pregnancyMonths.length;

  // START FROM CENTER
  const [current, setCurrent] = useState(total);

  // RESPONSIVE ITEMS
  const [itemsToShow, setItemsToShow] = useState(7);

  const sliderRef = useRef(null);

  // RESPONSIVE
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(3);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(5);
      } else {
        setItemsToShow(7);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  // PERFECT INFINITE LOOP
  useEffect(() => {
    if (current >= total * 2) {
      setTimeout(() => {
        if (sliderRef.current) {
          sliderRef.current.style.transition = "none";
        }

        setCurrent(total);

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            if (sliderRef.current) {
              sliderRef.current.style.transition =
                "transform 700ms ease-in-out";
            }
          });
        });
      }, 700);
    }
  }, [current, total]);

  return (
    <section className="w-full bg-[#f7f4f6] py-10 lg:py-14 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        
        {/* TITLE */}
<div className="text-center max-w-[1000px] mx-auto px-4 mb-8 sm:mb-10">
  <h2
    className="
      text-[#43204a]
      font-bold
      leading-[1.1]

      text-[26px]
      sm:text-[36px]
      md:text-[44px]
      lg:text-[52px]

      max-w-[320px]
      sm:max-w-[600px]
      md:max-w-[760px]
      lg:max-w-[900px]

      mx-auto
    "
  >
    Taking Care of You and Your Baby Pregnancy Timeline
  </h2>
</div>

        {/* SLIDER */}
        <div className="overflow-hidden w-full">
          <div
            ref={sliderRef}
            className="flex items-end"
            style={{
              transform: `translateX(-${
                current * (100 / itemsToShow)
              }%)`,
              transition: "transform 700ms ease-in-out",
            }}
          >
            {loopItems.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex flex-col items-center"
                style={{
                  width: `${100 / itemsToShow}%`,
                }}
              >
                
                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.month}
                  className="
                    object-contain

                    h-[120px]
                    sm:h-[170px]
                    md:h-[220px]
                    lg:h-[320px]

                    transition-all
                    duration-500
                  "
                />

                {/* MONTH BUTTON */}
                <button
                  className={`
                    mt-3

                    min-w-[70px]
                    sm:min-w-[90px]
                    md:min-w-[100px]
                    lg:min-w-[120px]

                    h-[32px]
                    sm:h-[38px]
                    lg:h-[46px]

                    px-3

                    rounded-xl
                    border

                    text-[11px]
                    sm:text-[13px]
                    lg:text-[16px]

                    font-semibold
                    transition-all
                    duration-300

                    ${
                      current % total === index % total
                        ? "bg-[#db3f9f] text-white border-[#db3f9f] shadow-lg scale-105"
                        : "bg-white border-gray-200 text-[#43204a]"
                    }
                  `}
                >
                  {item.month}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}