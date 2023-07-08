import * as React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="text-center bg-slate-900/50 italic text-white fixed inset-x-0 bottom-0 p-2">
      <a>
        <span className="text-md">
          Test task Web developer – Frontend / Backend
        </span>
      </a>

      <div className="flex justify-around text-xl">
        <a href="https://www.linkedin.com/in/cesetas/" target="_blank">
          <FaLinkedin />
        </a>
        <div>
          <span className="text-sm font-bold text-yellow-500">
            {" "}
            SETA3 - 2023
          </span>
        </div>
        <a href="https://github.com/cesetas" target="_blank">
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default Footer;
