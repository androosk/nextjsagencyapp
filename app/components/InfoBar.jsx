import React from 'react'

const InfoBar = () => {
  return (
    <section className='bg-white h-52 md:h-[450px] flex items-start place-content-center flex-col'>
      <div className='relative flex overflow-x-hidden'>
        <div className='bg-black w-[100vw] py-2 animate-marquee whitespace-nowrap'>
          <span className='mx-4 text-2xl'>text here</span>
        </div>

      </div>
    </section>
  )
}

export default InfoBar