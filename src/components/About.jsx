import React from 'react'

function About() {
    return (
        <div className='bg-gray-950 md:h-[131vh] h-[140vh]'>
            <p className='text-center font-serif text-gray-300 pt-20 '>Get to know me</p>
            <h2 className='text-center font-serif bg-linear-to-bl from-purple-700 to-green-400 bg-clip-text text-transparent'>About Me</h2>
            <div className='lg:grid-cols-2 grid pt-20 w-[80vw] '>
                <div className='w-[70%] '>
                    <img src="/Img/pic1.jpg" className='lg:rounded-xl  rounded-full border-4 border-gray-900 lg:h-90 lg:w-75 lg:ml-27 ml-22 mb-10' alt="" />
                </div>
                <div className='w-[110%] space-y-5 pl-5 lg:pl-0 '>
                    <p className='text-green-600 font-semibold '>Who am i ?</p>
                    <h3 className='text-gray-400'> I'm Sodiya Tofunmi, a Web Developer and Web Designer</h3>
                    <p className='text-gray-300 text-sm'>I am a fullstacks developer based in Nigeria and i have been building noteworthy UX/UI designs and websites for almost a year, which comply with the latest design trends. I help convert a vision and an idea into meaningful and useful products. Having a sharp eye for product evolution helps me prioritize tasks, iterate fast and deliver faster.</p>
                    <hr className=' text-gray-400 font-extralight' />
                    <div className='grid lg:grid-cols-2 sm:space-x-4 text-sm'>
                        <div className=' flex gap-2 text-gray-400 font-semibold'>Name:  <p className='text-green-600'>Sodiya Tofunmi</p></div>
                        <div className=' flex gap-2 text-gray-400 font-semibold'>Email:  <p className='text-green-600'>sodiyaeritofunmi15@gmail.com</p></div>
                        <div className=' flex gap-2 md:pt-3 text-gray-400 font-semibold'>Age:  <p className='text-green-600'>17</p></div>
                        <div className=' flex gap-2 md:pt-3 text-gray-400 font-semibold'>From:  <p className='text-green-600'>Lagos, Nigeria</p></div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About