import React from 'react';
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6"; // Using react-icons

const Footer = () => {
  return (
    <footer className="footer h-[400px] footer-center p-10 bg-[#1e4637] text-white">
      <div>
        {/* Logo/Brand Name */}
        <h2 className="text-5xl font-bold mb-2">KeenKeeper</h2>
        
        {/* Tagline */}
        <p className="max-w-md opacity-90 text-sm leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
      </div>

      <div>
        {/* Social Links Header */}
        <span className="footer-title normal-case opacity-100 text-lg mb-4">Social Links</span>
        
        {/* Icon Container */}
        <div className="grid grid-flow-col gap-4">
          <a className="btn btn-circle btn-sm bg-white text-[#1e4637] border-none hover:bg-gray-200">
            <FaInstagram size={18} />
          </a>
          <a className="btn btn-circle btn-sm bg-white text-[#1e4637] border-none hover:bg-gray-200">
            <FaFacebookF size={18} />
          </a>
          <a className="btn btn-circle btn-sm bg-white text-[#1e4637] border-none hover:bg-gray-200">
            <FaXTwitter size={18} />
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/10 text-xs opacity-70">
        <p>© 2026 KeenKeeper. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Terms of Service</a>
          <a className="link link-hover">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;