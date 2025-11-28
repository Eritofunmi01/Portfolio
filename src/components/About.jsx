import React from 'react'

function About() {
  return (
    <div className='bg-gray-950 h-[121vh]'>
        <p className='text-center font-serif text-gray-300 pt-20 '>Get to know me</p>
        <h2 className='text-center font-serif bg-linear-to-bl from-purple-700 to-green-400 bg-clip-text text-transparent'>About Me</h2>
        <div className='grid-cols-2 grid pt-20 w-[80vw] '>
            <div className='w-[70%]'>
                <img src="/Img/pic1.jpg" className='rounded-xl border-4 border-gray-900 h-90 w-75 ml-35' alt="" />
            </div>
            <div className='w-[110%] space-y-5 '>
                <p className='text-green-600 font-semibold '>Who am i ?</p>
                <h3 className='text-gray-400'> I'm Sodiya Tofunmi, a Web Developer and Web Designer</h3>
                <p className='text-gray-300 text-sm'>I am a fullstacks developer based in Nigeria and i have been building noteworthy UX/UI designs and websites for almost a year, which comply with the latest design trends. I help convert a vision and an idea into meaningful and useful products. Having a sharp eye for product evolution helps me prioritize tasks, iterate fast and deliver faster.</p>
                <hr className=' text-gray-400 font-extralight' />
                <div className='grid grid-cols-2 text-sm'>
                    <div className=' flex gap-2 text-gray-400 font-semibold'>Name:  <p className='text-green-600'>Sodiya Tofunmi</p></div>
                    <div className='bg-white'>hjvhas</div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default About