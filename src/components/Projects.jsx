import React from "react";
import proj1 from "../assets/1.png";
import proj2 from "../assets/2.png";
import proj3 from "../assets/3.png";
import proj4 from "../assets/4.png";

const Projects = () => {
  return (
    <div class=" py-6 max-w-[1200px] mx-auto" id="projects">
      <div class="mx-auto px-4 md:px-8">
        <div class="mb-4 flex items-center justify-between ">
          <div class="flex flex-col gap-4">
            <h2 class="text-2xl lg:text-3xl text-white">
              {" "}
              My
              <span> Projects</span>
            </h2>
            <p class="text-gray-500">
              {" "}
              These are my Latest School and Personal Projects.
              <br /> Click to view Git Repository
            </p>
          </div>
        </div>

        <div class="grid gap-4 grid-cols-2 sm:grid-cols-3 md-gap-4">
          <a
            href="https://github.com/lawr-cruz/6CSStudy2-Thesis-Files.git"
            class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
          >
            <img
              src={proj1}
              loading="lazy"
              alt=""
              class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
          </a>

          <a
            href="https://github.com/Jaafary24/WeatherApp"
            class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg  md:h-80"
          >
            <img
              src={proj2}
              loading="lazy"
              alt=""
              class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
          </a>

          <a
            href="https://github.com/Jaafary24/NumericalMethods-UBERStocksPrediction"
            class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <img
              src={proj4}
              loading="lazy"
              alt=""
              class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
          </a>

          <a
            href="https://github.com/Jaafary24/ReactApp"
            class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
          >
            <img
              src={proj3}
              loading="lazy"
              alt=""
              class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
          </a>
        </div>

        <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8"></div>
      </div>
    </div>
  );
};

export default Projects;
