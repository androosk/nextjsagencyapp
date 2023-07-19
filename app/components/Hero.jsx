import React from 'react';
import { manrope } from '../fonts';

const withManrope = `${manrope.className} text-2xl md:text-6xl font-bold tracking-wider`

const Hero = () => {
  return (
    <section className='bg-white text-black h-52 md:h-[450px] flex items-start place-content-center flex-col px-[10%]'>
       <h1 className={withManrope}>Beautiful websites that</h1>
       <p className={withManrope}>bring customers to your door</p>
    </section>
  )
}

export default Hero