import React from "react";
import { useState, useEffect } from "react";

import logo from "../assets/CodeRecet_LOGO.png";
import vector from "../assets/Vector.png";
import twitter from "../assets/twitter logo.png";
import facebook from "../assets/facebook logo.png";
import discord from "../assets/Discord logo.png";
import linkedin from "../assets/Linkedin logo.png";
import github from "../assets/Github logo.png";
import tinkerhub from "../assets/tinkerhub.png";
import iet from "../assets/IET.png";
import instagram from "../assets/instagram.svg";


function Footer() {
  const [showContacts, setShowContacts] = useState(false);

  return (
    <footer className="bg-custom-black w-full pt-8 pb-4 px-4 md:px-0">
      <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden bg-custom-yellow shadow-lg">
        <div className="flex flex-col md:flex-row items-center md:justify-between py-8 px-4 md:px-12">
          <img src={logo} className="w-16 h-16 mb-4 md:mb-0" alt="Code Recet Logo" />
          <div className="flex flex-col items-center md:items-end">
            <div className="font-poppins text-xl md:text-2xl text-custom-black mb-2">Hackathon organized by:</div>
            <div className="flex gap-4">
              <img src={tinkerhub} className="w-24 h-auto" alt="Tinkerhub" />
              <img src={iet} className="w-24 h-auto" alt="IET" />
            </div>
          </div>
        </div>
        <div className="border-t border-custom-black mx-4"></div>
        <div className="flex flex-col md:flex-row justify-between items-center py-6 px-4 md:px-12 gap-6">
          <nav className="flex flex-col md:flex-row gap-4 md:gap-8 font-poppins text-lg">
            <a href="#landing" className="hover:text-custom-black transition">Home</a>
            <a href="#about" className="hover:text-custom-black transition">About</a>
            <a href="#gallery" className="hover:text-custom-black transition">Gallery</a>
            <button className="hover:text-custom-black transition flex items-center" onClick={() => setShowContacts(!showContacts)}>
              Contact Us
              <span className="ml-2">{showContacts ? "▲" : "▼"}</span>
            </button>
          </nav>
          {showContacts && (
            <div className="bg-custom-black text-custom-yellow rounded-lg p-4 font-poppins text-base mt-2 md:mt-0">
              <div><span className="font-semibold">Niyas:</span> +91 77363 48128</div>
              <div><span className="font-semibold">Ananthu:</span> +91 97611 74092</div>
            </div>
          )}
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="https://www.instagram.com/coderecet/" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Instagram" className="w-8 h-8" />
            </a>
            <a href="https://twitter.com/coderecet" target="_blank" rel="noopener noreferrer">
              <img src={twitter} alt="Twitter" className="w-8 h-8" />
            </a>
            <a href="https://facebook.com/coderecet" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="Facebook" className="w-8 h-8" />
            </a>
            <a href="https://discord.gg/coderecet" target="_blank" rel="noopener noreferrer">
              <img src={discord} alt="Discord" className="w-8 h-8" />
            </a>
            <a href="https://linkedin.com/company/coderecet" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" className="w-8 h-8" />
            </a>
            <a href="https://github.com/coderecet" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="GitHub" className="w-8 h-8" />
            </a>
          </div>
        </div>
        <div className="border-t border-custom-black mx-4"></div>
        <div className="flex flex-col md:flex-row justify-between items-center py-4 px-4 md:px-12">
          <span className="font-poppins text-sm text-custom-black">&copy; 2026 Code Recet. All rights reserved.</span>
          <div className="apply-button mt-2 md:mt-0" data-hackathon-slug="code-recet-3" data-button-theme="dark" style={{ height: "44px", width: "192px" }}></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
