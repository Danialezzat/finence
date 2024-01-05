import React from 'react'
import { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"

const Navbar = () => {

    const [nav, setNav] = useState(true)

    const handleNave = () => {
        setNav(!nav)
    }

  return (
    <div  className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4  text-white'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
        <ul className='hidden md:flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Company</li>
            <li className='p-4'>Resourses</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Content</li>
        </ul>

        <div onClick={handleNave} className='block md:hidden'>
            {!nav ? <AiOutlineClose  size={24}/> : <AiOutlineMenu size={24}/>}
            
        </div>
        <div className={!nav ? `fixed left-0 top-0 w-[60%] border-r-gray-900 h-full bg-[#000300] ease-in-out duration-500`: 'fixed left-[-1005%]'}>

            <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1> 
            <ul className='uppercase p-4'>
                 <li className='p-4 border-b border-gray-600'>Home</li>
                 <li className='p-4 border-b border-gray-600'>Company</li>
                 <li className='p-4 border-b border-gray-600'>Resourses</li>
                 <li className='p-4 border-b border-gray-600'>About</li>
                 <li className='p-4'>Content</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar