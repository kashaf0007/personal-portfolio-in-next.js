import Image from "next/image";
import Navbar from "./component/Header";
import Hero from "./component/Hero";
import Contact from "./component/Contact";
import Project from "./component/Project";
import About from "./component/About";
import Skills from "./component/Skills";

export default function Home() {
  return (
    <div>
    <Hero/>
    <Contact/>
    <Project/>
    <About/>
    <Skills/>
      {/* <Navbar /> */}
    </div>
  );
}
