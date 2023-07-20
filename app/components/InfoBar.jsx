import React from 'react'

const InfoBar = () => {
  return (
    <section className='bg-white h-52 md:h-[450px] flex items-start place-content-center flex-col'>
      <div className='relative flex overflow-x-hidden bg-black'>
        <div className='py-2 animate-marquee whitespace-nowrap'>
          <span className='mx-4 text-2xl'>text here1</span>
          <span className='mx-4 text-2xl'>text here2</span>
          <span className='mx-4 text-2xl'>text here3</span>
          <span className='mx-4 text-2xl'>text here4</span>
          <span className='mx-4 text-2xl'>text here5</span>
          <span className='mx-4 text-2xl'>text here6</span>
          <span className='mx-4 text-2xl'>text here7</span>
          <span className='mx-4 text-2xl'>text here8</span>
          <span className='mx-4 text-2xl'>text here9</span>
        </div>
        <div className=' absolute top-0 py-2 animate-marquee2 whitespace-nowrap'>
          <span className='mx-4 text-2xl'>text here10</span>
          <span className='mx-4 text-2xl'>text here11</span>
          <span className='mx-4 text-2xl'>text here12</span>
          <span className='mx-4 text-2xl'>text here13</span>
          <span className='mx-4 text-2xl'>text here14</span>
          <span className='mx-4 text-2xl'>text here15</span>
          <span className='mx-4 text-2xl'>text here16</span>
          <span className='mx-4 text-2xl'>text here17</span>
          <span className='mx-4 text-2xl'>text here18</span>
        </div>

      </div>
    </section>
  )
}

export default InfoBar