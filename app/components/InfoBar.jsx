import React from "react";

const InfoBar = () => {
  const marqueeClass = `mx-4 text-lg md:text-4xl`;
  
  return (
    <div class="relative flex overflow-x-hidden h-8 md:h-16 bg-black text-lg md:text-4xl">
      <div class="animate-marquee py-1 md:py-4 whitespace-nowrap">
        <span class="mx-4">Sometimes I wonder</span>
        <span class="mx-4">Another thing</span>
        <span class="mx-4">In case you were wondering</span>
        <span class="mx-4">Were you wondering?</span>
        <span class="mx-4">I wasn&apos;t wondering</span>
      </div>

      <div class="absolute top-0 py-1 md:py-4 animate-marquee2 whitespace-nowrap">
        <span class="mx-4">Sometimes I wonder</span>
        <span class="mx-4">Another thing</span>
        <span class="mx-4">In case you were wondering</span>
        <span class="mx-4">Were you wondering?</span>
        <span class="mx-4">I wasn&apos;t wondering</span>
      </div>
    </div>
  );
};

export default InfoBar;
