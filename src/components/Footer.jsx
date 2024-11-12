import React from "react";
import { FaGithubSquare, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div class="mt-0 w-max-[800px] border-t border-gray-500 text-center">
      <p class="my-2 text-gray-500">Pampanga, Philippines</p>
      <div class="inline-flex text-gray-500 gap-4 text-3xl">
        <a href="https://www.linkedin.com/in/fred-jaafary-a8759b305/">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/r.feddd/">
          <FaInstagram />
        </a>
        <a href="https://github.com/Jaafary24">
          <FaGithubSquare />
        </a>
      </div>
    </div>
  );
};

export default Footer;
