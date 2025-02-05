// Hook for controlling animation for each item
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const useItemAnimation = () => {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start("visible");
          } else {
            controls.start("hidden");
          }
        });
      },
      { threshold: 0.5 } // Trigger animation when 50% of the item is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  return { ref, controls };
};

export default useItemAnimation;
