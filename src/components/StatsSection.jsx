// StatsSection.jsx

import React, { useEffect, useRef, useState } from "react";

const stats = [
  {
    number: 30,
    suffix: "K+",
    title: "SATISFIED PATIENTS",
  },
  {
    number: 5,
    suffix: "K+",
    title: "SURGERIES",
  },
  {
    number: 20,
    suffix: "+",
    title: "YEARS EXPERIENCE",
  },
  { number: "24",
    prefix: "24/", 
    suffix: "/7", 
    title: "EMERGENCY SUPPORT" },
];

function Counter({ end, suffix }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let start = 0;

    const duration = 1800;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [started, end]);

  return (
    <div ref={ref} className="flex items-start justify-center">
      {/* NUMBER */}
      <span>{count}</span>

      {/* SUFFIX */}
      {suffix && (
        <span
          className="
            text-[50%]
            ml-0.5
            sm:ml-1
            relative
            top-0
            sm:-top-1
            md:-top-0
            font-bold
          "
        >
          {suffix}
        </span>
      )}
    </div>
  );
}

const StatsSection = () => {
  return (
    <section className="w-full bg-white py-10 sm:py-12 md:py-14 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-5 lg:px-8">
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 sm:gap-y-14 md:gap-y-16 gap-x-4">
          
          {stats.map((item, index) => (
            <div
              key={index}
              className="relative flex justify-center items-center"
            >
              
              {/* NUMBER */}
              <h2
                className="
                  text-[#d83f9f]
                  font-extrabold
                  leading-none
                  tracking-[-1px]
                  sm:tracking-[-2px]
                  md:tracking-[-2px]
                  text-[42px]
                  sm:text-[56px]
                  md:text-[68px]
                  lg:text-[74px]
                  xl:text-[88px]
                "
              >
                <Counter
                  end={item.number}
                  suffix={item.suffix}
                />
              </h2>

              {/* TITLE */}
              <p
                className="
                  absolute
                  mt-4
                  sm:mt-5
                  text-[#2d1638]
                  uppercase
                  tracking-wide
                  font-medium
                  text-[8px]
                  sm:text-[10px]
                  md:text-[12px]
                  lg:text-[13px]
                  bg-white
                  px-2
                  sm:px-4
                  md:px-5
                  text-center
                  leading-snug
                  whitespace-nowrap
                "
              >
                {item.title}
              </p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;