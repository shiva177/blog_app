import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-md py-0 border-t border-gray-700 text-white p-10 text-sm mt-auto">
      <div className="flex flex-col text-center   mt-2">
        Designed & Developed by:{" "}
        <ul className="flex flex-row justify-center">
          <li>
            <a
              href="https://sonalkumari.vercel.app"
              target="_blank"
              className="hover:text-white"
            >
              Shivam Kumar
            </a>
          </li>
        </ul>
        <div className="flex flex-col space-y-8 items-center justify-center">
          <div className="flex gap-6">
            <a
              href="https://github.com/shiva177"
              target="_blank"
              className="hover:text-white"
            >
              <FaGithub className="hover:text-purple-500 transition-all duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/shivamkr177/"
              target="_blank"
              className="hover:text-white"
            >
              <FaLinkedinIn className="hover:text-purple-500 transition-all duration-300" />
            </a>
          </div>
         <br></br>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
