"use client";
import React, { useEffect } from "react";
import { manrope } from "../fonts";

const withManropeLeft = `${manrope.className} text-2xl md:text-6xl font-bold tracking-wider relative transform transition duration-500 -translate-x-[120%] -translate-y-10`;

const withManropeRight = `${manrope.className} text-2xl md:text-6xl font-bold tracking-wider relative transform transition duration-500 translate-x-[120%] translate-y-10`;

const Hero = () => {
  const loadFunction = () => {
    const replacers = document.querySelectorAll("[data-replace]");
    for (let i = 0; i < replacers.length; i++) {
      let replaceClasses = JSON.parse(
        replacers[i].dataset.replace.replace(/'/g, '"')
      );
      Object.keys(replaceClasses).forEach(function (key) {
        replacers[i].classList.remove(key);
        replacers[i].classList.add(replaceClasses[key]);
      });
    }
  };

  useEffect(() => {
    loadFunction();
  }, []);

  return (
    <section className="bg-white text-black h-52 md:h-[450px] flex items-start place-content-center flex-col px-[10%]">
      <h1
        className={withManropeLeft}
        data-replace='{"-translate-x-[120%]": "translate-x-0", "-translate-y-10": "translate-y-0"}'
      >
        Beautiful websites that
      </h1>
      <p
        className={withManropeRight}
        data-replace='{"translate-x-[120%]": "translate-x-0", "translate-y-10": "translate-y-0"}'
      >
        bring customers to your door
      </p>
    </section>
  );
};

export default Hero;
