import React from 'react';

const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5 ">
      <div className="text-white-500 flex gap-4 text-sm md:text-base">
        <a href="/terms" className="hover:text-white transition-colors duration-200">Terms & Conditions</a>
        <span className="text-gray-500">|</span>
        <a href="/privacy" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
      </div>

      <div className="flex gap-3">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src="/assets/github.svg" alt="GitHub" className="w-6 h-6 hover:opacity-80 transition-opacity duration-200" />
        </a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src="/assets/twitter.svg" alt="Twitter" className="w-6 h-6 hover:opacity-80 transition-opacity duration-200" />
        </a>
        <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src="/assets/instagram.svg" alt="Instagram" className="w-6 h-6 hover:opacity-80 transition-opacity duration-200" />
        </a>
      </div>

      <p className="text-white-500 text-sm md:text-base">© {new Date().getFullYear()} Jodi. All rights reserved.</p>
    </footer>
  );
};

export default Footer;