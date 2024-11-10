import React from 'react'

const About = () => {
  return (
    <div id="about">
      <section className="  text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center bg-black">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-5">
      <img
        className="object-cover object-center rounded mx-auto"
        alt="profile photo flex"
        height={"120"}
        width={"200"}
        src={"img.jpeg"}

      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center ">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-50">
        About Me
      </h1>
      <p className="mb-4 leading-relaxed text-gray-50">
      Hello! I am student of Intermediate in Medical Science and also the student of Governor House IT Initiative. Now bring into the field of web development
      I am passionate about learning new technologies and constantly improving my skills.
      </p>
    </div>
  </div>
</section>

    </div>
  )
}

export default About
