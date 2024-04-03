import React from 'react'
import aboutimage from '../assets/about4.jpeg'

function About() {
  return (
    <div className='bg-[#232325] p-7'>
    <div className='text-white p-3 flex flex-col gap-7 max-w-[1200px] mx-auto md:flex-row-reverse'>
        {/* about me */}

        <div className='flex flex-col gap-7'>
        <div>
            <p className='text-5xl mb-5'>About <span>Me</span></p>
            <p className='text-xl text-justify leading-relaxed'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam recusandae corrupti porro commodi est vel a animi quaerat unde ullam. Atque, nemo explicabo quos magni vel voluptatibus laborum ab voluptates!
            </p>
        </div>

        {/* summary */}
        <div className='flex flex-row text-xl flex-auto gap-2  text-center '>
            <div className='bg-[#20242d] p-2 rounded-xl w-[30%]' >
                <p>11 <span>+</span></p>
                <b><p className='primary-color'>Projects</p></b>
            </div>
            <div className='bg-[#20242d] p-2 rounded-xl w-[40%]'>
                <p>2 <span>+</span></p>
                <b><p className='primary-color'>Years Experience</p></b>
            </div>
            <div className='bg-[#20242d] p-2 rounded-xl w-[30%]'>
                <p>10 <span>+</span></p>
                <b><p className='primary-color'>Happy Clients</p></b>
            </div>

        </div>
        </div>

        {/* image */}
        <div className='rounded-xl overflow-hidden grayscale grow'>
            <img src={aboutimage} alt="about_image" className='cover-cover w-[100%] h-[100%]'/>
        </div>
      
    </div>
    </div>
  )
}

export default About
