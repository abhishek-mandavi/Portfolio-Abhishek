import React from "react";
import { Bio } from "../../data/constants";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <footer className="w-full py-8 flex flex-col items-center bg-black text-gray-100">
      {/* Logo */}
      <h1 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">
        Abhishek Mandavi
      </h1>

      {/* Navigation Links */}
      <nav className="mt-3 flex flex-wrap gap-6 justify-center text-gray-100 dark:text-gray-300 text-lg">
        <a href="#about" className="hover:text-blue-600">About</a>
        <a href="#skills" className="hover:text-blue-600">Skills</a>
        <a href="#projects" className="hover:text-blue-600">Projects</a>
        <a href="#education" className="hover:text-blue-600">Contact</a>
      </nav>

      {/* Social Media Icons */}
      <div className="flex mt-4 gap-6">
        <a href={Bio.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 text-2xl hover:text-blue-500">
          <img src="/dist/assets/images/githubIcon.png"/>
        </a>
        <a href={Bio.email} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 text-2xl hover:text-blue-500">
          <img src="/dist/assets/images/emailIcon.png"/>
        </a>
        <a href={Bio.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 text-2xl hover:text-blue-500">
          <LinkedInIcon />
        </a>
        <a href={Bio.insta} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 text-2xl hover:text-blue-500">
          <InstagramIcon />
        </a>
      </div>

      {/* Copyright */}
      <p className="mt-6 text-gray-500 text-sm text-center">
        &copy; {new Date().getFullYear()} Abhishek Mandavi . All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
