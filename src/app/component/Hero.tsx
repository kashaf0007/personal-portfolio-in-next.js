import React from 'react'
import Link from 'next/link'
const Hero = () => {
  return (
   
      <section className="text-gray-600 body-font bg-fixed bg-cover bg-center custom-img">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img
        className="object-cover object-center rounded  mx-auto  "
        alt="hero"
        width={250}
        height={200}
        src="img.jpeg "
        
        
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-yellow-50">
       Hi, I'm
        <br className="hidden lg:inline-block" />
        Kashaf Aman
      </h1>
      <p className="mb-8 leading-relaxed text-yellow-50">
        I'm a web developer passionate. My tools includes HTML, CSS, JAVASCRIPT, TYPESCRIPT and I'm keep learning on new technologies.
      </p>
      <div className="flex justify-center">
        <Link href={"#Contact"}>
        <button className="inline-flex text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
          Contact
        </button>
        </Link>
        <button className="ml-4 inline-flex text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
          Hire Me
        </button>
      </div>
    </div>
  </div>
</section>

   
  )
}

export default Hero
