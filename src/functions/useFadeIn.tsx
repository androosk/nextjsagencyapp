import { useEffect } from "react";

export const useFadeIn = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fadeIn");
        }
      });
    });

    const elements = document.querySelectorAll(".element-to-fadeIn");
    elements.forEach(el => observer.observe(el));

    return () => elements.forEach(el => observer.unobserve(el));
  }, []);
};
