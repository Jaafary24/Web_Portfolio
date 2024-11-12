import React from "react";
import profilepic from "../assets/IMG_8087.jpg";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";
import mycv from "../assets/JaafaryFred_Resume.pdf";

const Hero = () => {
  return (
    <div>
      <div
        className="my-7 sm:my-0 max-w-[1200px] h-[80vh] mx-auto flex flex-col-reverse sm:flex-row justify-center align-center"
        id="home"
      >
        <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]">
          {" "}
        </div>
        <div className=" flex-col my-auto mx-auto">
          <p className="flex justify-center md:text-5xl sm:text-4xl text-xl font-bold text-gray-200">
            Hi! I am Fred A. Jaafary
          </p>
          <h1 className="justify-center md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
            <TypeAnimation
              sequence={[
                "Software Engineer",
                1000,
                "Web Developer",
                1000,
                "AI Engineer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <div className="flex justify-center items-center">
            <p className="md:text-5xl sm:text-4xl text-xl font-bold text-gray-500">
              Computer Science Student
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 my-7 text-purple-600">
            <a href="https://www.linkedin.com/in/fred-jaafary-a8759b305/">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/Jaafary24">
              <AiFillGithub />
            </a>
            <a href="https://www.instagram.com/r.feddd/">
              <AiFillInstagram />
            </a>
          </div>
          <div className="flex justify-center">
            <div class="relative inline-flex  group my-3">
              <div class="  absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
              <a
                href={mycv}
                title="Download CV"
                role="button"
                class="w-[190px] h-[60px] relative inline-flex items-center  px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-primary-color font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                download
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
        <div className="my-auto">
          <img
            className="w-[200px] sm:w-[300px] mx-auto h-auto rounded-full"
            src={profilepic}
            alt="profile pic"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
