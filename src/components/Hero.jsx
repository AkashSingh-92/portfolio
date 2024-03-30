import React from 'react'
import profilepic from "../assets/profilepic5.png"
import me from "../assets/me.png"
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div className='max-w-[1240px] h-[80vh] mx-auto '>
      
      {/* image */}
      <div className='flex flex-row justify-center w-[80%] h-[50%] mx-auto'>
        <img src={profilepic} alt="profile_picture" />
      </div>

      <div className='w-[80%] pt-2 mx-auto'>
        <div className='flex flex-col items-center mx-auto w-[100%]'>
         {/* mini about me */}
        <h3 className='text-white text-3xl'>Hi! I am Akash Singh </h3>

        {/* running letter */}
        <div>
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
        style={{ fontSize: '2em', display: 'inline-block' }}/>
        </div>

        {/* yoe */}
        <h2 className='text-gray-400 text-2xl'>with a 2+ years of experience</h2>
        </div>


        {/* socials */}
        <div>

        </div>

        {/* cv */}
        <div></div>




      </div>
     
    </div>
  )
}


{/*  */}

export default Hero
