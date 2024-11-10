import React from 'react'
import { CiSquareCheck } from "react-icons/ci"

const Skills = () => {
  return (
    <div id='skills'>
      <section className=" body-font  bg-gray-950">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full bg-white mb-20">
      <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
        SKILLS
      </h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
        My Skills
      </h1>
    </div>
    <div className="flex flex-wrap  -m-4">
        {/* skills */}
      <div className="p-4 md:w-1/3  ">
        <div className="flex rounded-lg h-full bg-white p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
            <CiSquareCheck />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
             HTML
            </h2>
          </div>
          <div className="flex-grow">
         <div className='h-1 w-full bg-gray-950 rounded-xl'></div>
          </div>
        </div>
      </div>

      <div className="p-4 md:w-1/3  ">
        <div className="flex rounded-lg h-full bg-white p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
            <CiSquareCheck />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
             CSS
            </h2>
          </div>
          <div className="flex-grow">
         <div className='h-1 w-full bg-gray-950 rounded-xl'></div>
          </div>
        </div>
      </div>

      <div className="p-4 md:w-1/3  ">
        <div className="flex rounded-lg h-full bg-white p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
            <CiSquareCheck />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
             HTML
            </h2>
          </div>
          <div className="flex-grow">
         <div className='h-1 w-full bg-gray-950 rounded-xl'></div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3  ">
        <div className="flex rounded-lg h-full bg-white p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
            <CiSquareCheck />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
             JAVASCRIPT
            </h2>
          </div>
          <div className="flex-grow">
         <div className='h-1 w-full bg-gray-950 rounded-xl'></div>
          </div>
        </div>
      </div>
      
      
    </div>
  </div>
</section>

    </div>
  )
}

export default Skills
