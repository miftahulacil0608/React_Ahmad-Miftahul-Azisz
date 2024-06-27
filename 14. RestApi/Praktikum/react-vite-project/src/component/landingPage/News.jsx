import React from 'react'

const News = () => {
  return (
    <section className='bg-[#F3F5FA] py-20 flex justify-center items-center'>
        <div className='container'>
            <div className='text-center'>
                <h1 className='text-2xl text-[#37517e] font-semibold'>Join Our Newsletter</h1>
                <p className='text-base leading-6 tracking-[0.1px] mt-2 max-w-sm md:max-w-none mx-auto'>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
            </div>
            <div className='relative max-w-sm md:max-w-xl lg:max-w-4xl mx-auto mt-4'>
                <input type='text' className='w-full rounded-full border-0' />
                <div className='absolute flex items-center inset-y-0 right-0'>
                    <button className='py-2 px-6 bg-[#47b2e4] rounded-full inline-flex'>Subscribe</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default News