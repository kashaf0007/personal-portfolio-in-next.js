import React from 'react'
import Link from 'next/link'
const Project = () => {
  return (
    <div id='projects' className='bg-black'>
<section className="body-font">
  <div className="container px-5 py-24 mx-auto   ">
    <div className="flex flex-col text-center w-full  mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-50">
        MY PROJECTS
      </h1>
      <p className=" text-gray-50 lg:w-2/3 mx-auto leading-relaxed text-base">
      Here is my projects
      </p>
    </div>
    <div className="flex flex-wrap -m-4 ">
        {/* projects */}
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img
            alt="project"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="project.jpeg"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              TODO LIST
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              TODO LIST
            </h1>
            <p className="leading-relaxed">
             Projects
            </p>
            <Link href={"https://github.com/kashaf0007/TODO-LIST.git"}>
            <p className=" text-indigo-600 leading-relaxed">
             view project
            </p>
            </Link>
          </div>
        </div>
      </div>

      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img
            alt="project"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="project2.jpeg"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              Resume
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Resume
            </h1>
            <p className="leading-relaxed">
             Projects
            </p>
            <Link href={"https://hackathone-milestone1and2.vercel.app/"}>
            <p className=" text-indigo-600 leading-relaxed">
             view project
            </p>
            </Link>
          </div>
        </div>
      </div>

      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img
            alt="project"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="project3.jpeg"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              ATM MACHINE
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              ATM MACHINE
            </h1>
            <p className="leading-relaxed">
             Projects
            </p>
            <Link href={"https://github.com/kashaf0007/atm-machine.git"}>
            <p className=" text-indigo-600 leading-relaxed">
             view project
            </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>




</div> )}

export default Project
