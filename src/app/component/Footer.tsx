import React from 'react'
import Link from 'next/link';
import{IoLogoGithub} from 'react-icons/io'
import{BsDiscord} from 'react-icons/bs'
// import{FaFacebook} from 'react-icons/fa'
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='bg-gray-500 '>
     <footer className="text-grey-600 body-font">
     <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
       <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <img  src="img2.jpeg" alt="profile pic" width={80} height={80}/>

   

      <span className="ml-3 text-xl">PORTFOLIO</span>
    </a>
    <p className=" text-gray-800 sm:ml-4 sm:pl-4 sm:border-l-2  mt-2  text-xl ">© 2024 Portfolio
  
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <Link target="_blank" href="https://github.com/kashaf0007" className="text-black text-3xl hover:text-[#030303]">
        <IoLogoGithub/>
        </Link>

        <Link target="_blank" href="https://www.linkedin.com/in/kashafaman-aman-398082316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-black text-3xl  hover:text-[#0e76a8]">
        <FaLinkedin/>
        </Link>
        
        <Link target="_blank" href="" className="text-black text-3xl hover:text-[#483eb1]">
        <BsDiscord/>
        </Link>
 
    </span>
  </div>
 </footer>
    </div>
  )
}

export default Footer