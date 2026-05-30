import { useEffect } from "react";

const useScrollFade = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".fade-up, .fade-left, .fade-right, .zoom-in"
    );

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");

            // optional: stop observing after animation triggers (better performance)
            observerInstance.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect(); // ✅ clean cleanup
    };
  }, []);
};

export default useScrollFade;