import React, { useEffect, useState } from 'react'
import profilepic from "../assets/profilepic5.png"
import me from "../assets/me.png"
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div className=' max-w-[1200px] md:h-[75vh] mx-auto my-auto md:flex md:flex-row-reverse md:justify-between'>
      
      {/* image */}
      <div className=' flex flex-row justify-center w-[60%] h-[48%] md:h-auto mx-auto '>
        <img src={profilepic} alt="profile_picture" className='object-contain w-full h-full md:object-contain'/>
      </div>

      <div className='  w-[80%] h-auto pt-2 mx-auto flex flex-col justify-center items-center gap-2  md:items-start md:pl-4 md:gap-4'>
        
         {/* mini about me */}
        <h3 className=' text-white text-3xl md:text-4xl text-center'>Hi! I am Akash Singh </h3>

        {/* running letter */}
        <div className='md:text-5xl text-3xl'>
        <TypeAnimation
          sequence={[
            'Developer', // Deletes 'One' and types 'Two'
            1000, // Waits 1s
            'Problem solver', // Types 'One'
          1000, // Waits 2s
          'Freelancer',
          1000,
          'Tutor',
          1000// Types 'Three' without deleting 'Two'
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        style={{ fontSize: '1.2em', display: 'inline-block' }}/>
        </div>

        {/* yoe */}
        <h2 className='text-gray-400 text-2xl md:text-3xl text-center'>with a 2+ years of experience</h2>
        


        {/* socials */}
        <div className=' text-5xl text-blue-500 flex flex-row justify-center pt-4 gap-5'>
          <a href="www.linkedin.com"><AiFillGithub/></a>
          <a href="https://www.linkedin.com"><AiFillLinkedin/></a>
        </div>

        {/* download cv */}
        
        <div className='mt-5 mb-5 hover:shadow-md hover:transition-all hover:duration-100 rounded-xl'>
          <button className="text-gray-300 text-2xl rounded-xl py-4 px-4 bg-primary-color hover:text-white ">Download CV</button>
        </div>
      </div>
     
    </div>
  )
}


{/*  */}

export default Hero
