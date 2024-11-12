import React from "react";
import aboutimage from "../assets/about.png";
import {
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaPython,
  FaReact,
  FaAws,
} from "react-icons/fa";

const About = () => {
  return (
    <div className="py-10 text-white bg-[#232325] mx-auto h-auto" id="about">
      <div className="flex sm:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
        <div>
          <div className="w-[400px] h-full">
            <img
              src={aboutimage}
              alt="aboutImg"
              className="object-cover rounded-xl h-[300px] "
            />
          </div>
        </div>

        <div className="mx-auto flex flex-col md-gap-4">
          <div className="p-2">
            <div className="text-gray-300 my-3 ">
              <h3 className="text-4xl font-semibold mb-5">
                About
                <span className="primary-text"> Me</span>
              </h3>
              <p className="text-justify leading-7 w-11/12 flex sm:flex-row flex-col  mx-auto">
                I’m a Computer Science student with a passion for web
                development and machine learning. With a strong foundation in
                coding and problem-solving, I specialize in creating intuitive
                web applications and exploring the exciting potential of Machine
                learning. I aim to pursue a career as an AI or Software
                Engineer, I’m eager to leverage my skills to solve complex
                challenges and contribute to innovative tech solutions.
              </p>
            </div>
          </div>

          <div className="flex mt-10 items-center gap-7">
            <div className="bg-[#333333]/40 p-5 rounded-lg">
              <h3 className="md:text-4xl text-2xl font-semibold text-white">
                <span>
                  <div className="text-5xl flex justify-center  mx-auto gap-16 my-7 text-purple-600">
                    <FaCss3Alt />
                    <FaHtml5 />
                    <FaJs />
                    <FaPython />
                    <FaReact />
                    <FaAws />
                  </div>
                </span>
              </h3>
              {/* <p>
                <span className="md:text-base text-xs">Projects</span>
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
