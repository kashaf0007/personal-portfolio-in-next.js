import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    
      <header className="bg-white z-40 sticky top-0">
  <div className="p-2  mx-auto flex-col  items-center bg-gray-500">
    <a className="flex  font-medium items-center text-black-600 ">
      <img  src="img2.jpeg" alt="profile pic flex" width={100} height={100}/>
      <span className="ml-3 text-xl">Portfolio</span>
    </a>
    <nav className=" text-gray-50 flex flex-wrap items-center  justify-center mb-auto ml-auto mr-auto text-base">
      <Link href={"/"} className="mr-5   hover:text-green-800 ">Home</Link>
      <Link  href={"#about"} className="mr-5  hover:text-green-800">About</Link>
      <Link  href={"#Contact"} className="mr-5 hover:text-green-800">Contact</Link>
      <Link href={"#projects"} className="mr-5 hover:text-green-800">Projects</Link> 
      <Link href={"#skills"} className="mr-5 hover:text-green-800">Skills</Link>
    </nav>
  </div>
</header>
      
  
  )
}


// mb-4 md:mb-0 
export default Header
