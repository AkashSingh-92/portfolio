import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {

    const [nav, setNav] = useState(false)

  return (
    <div className=' flex justify-between items-center max-w-[1200px] mx-auto h-24 px-4 text-l rounded-md poppins'>


        <h1 className='text-3xl font-bold primary-color ml-1 cursor-pointer'>Akash Singh</h1>
        <ul className='hidden md:flex '>
            <li className='p-2 text-xl text-gray-400 hover:text-white cursor-pointer'>Home</li>
            <li className='p-2 text-xl text-gray-400 hover:text-white cursor-pointer'>About me</li>
            <li className='p-2 text-xl text-gray-400 hover:text-white cursor-pointer'>Projects</li>
            <li className='p-2 text-xl text-gray-400 hover:text-white cursor-pointer'>Experience</li>
            <li className='p-2 text-xl text-gray-400 hover:text-white cursor-pointer'>Contact me</li>
        </ul>
      
        <div onClick={()=>{
            setNav(!nav)
        }} className='block md:hidden '>
           {nav ? <AiOutlineClose size={30} color={'white'}/>: <AiOutlineMenu size={30} color={'white'}/>}
        </div>


        <div className={nav ? "fixed h-full left-0 top-0 text-gray-300 w-[60%] ease-in-out duration-100 border-r-gray-900 rounded-r-2xl bg-[#202122] md:hidden py-10": "hidden"}>
        <h1 className='text-3xl font-bold primary-color ml-4'>Akash Singh</h1>
        <ul className='p-8 text-2xl'>
            <li className='p-2'>Home</li>
            <li className='p-2'>About me</li>
            <li className='p-2'>Projects</li>
            <li className='p-2'>Experience</li>
            <li className='p-2'>Contact me</li>
        </ul>            
        </div>


    </div>
  )
}

export default Navbar;
