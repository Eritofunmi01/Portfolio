import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiMenu, HiX } from "react-icons/hi";
import { FaLinkedinIn, FaXTwitter, FaWhatsapp, FaGithub } from "react-icons/fa6";
import { useNavigate, Link } from 'react-router';
import HeroBg from '/Img/hbg.png';

function Body() {
  const fullText =
    "  I'm a full-stack web developer capable of turning ideas into sleek, functional websites and apps. I create digital experiences that look great, work flawlessly, and deliver real results. Let's build something amazing together.";
  const [displayedText, setDisplayedText] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index >= fullText.length) {
        clearInterval(interval);
        return;
      }
      setDisplayedText(prev => prev + fullText.charAt(index));
      index++;
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="h-[105vh] lg:h-[101vh]   relative"
      style={{
        backgroundImage: `url(${HeroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0D1117]/70"></div>

      {/* NAV */}
      <div className="flex px-5 md:px-10 relative z-10">
        <Link
          to={"/"}
          className="font-serif text-4xl md:pl-8 mt-4 font-bold bg-linear-to-bl from-purple-700 to-green-400 bg-clip-text text-transparent"
        >
          SODIX
        </Link>

        <div className="hidden md:flex text-white mt-6 ml-auto gap-6 font-sans">
          <Link to={"/resume"}>Resume</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/contact"}>Contact</Link>
        </div>

        <div className="md:hidden flex items-center ml-auto">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>

        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-[#0D1117] flex flex-col text-white items-center py-4 md:hidden">
            <Link to={"/resume"} className="py-2">Resume</Link>
            <Link to={"/about"} className="py-2">About</Link>
            <Link to={"/contact"} className="py-2">Contact</Link>
          </div>
        )}
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-10 pt-20 flex items-center justify-center px-4">
        <div className="max-w-3xl text-center space-y-4">
          <motion.p
            className="text-white font-bold font-serif text-md md:text-xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.07, duration: 0.8 }}
          >
            Hi, I'm Sodiya Tofunmi Israel
          </motion.p>

          <motion.h2
            className="md:text-7xl text-6xl font-serif bg-linear-to-bl from-purple-700 to-green-400 bg-clip-text text-transparent"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.09, duration: 0.8 }}
          >
            FullStacks Developer
          </motion.h2>

          <motion.p
            className="text-white font-sans text-lg md:text-xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15, duration: 2 }}
          >
            {displayedText}
            <span className="border-r-2 border-white animate-blink ml-1"></span>
          </motion.p>

          <motion.div
            className="flex justify-center gap-5 pt-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 4, duration: 0.8 }}
          >
            <button
              onClick={() => navigate("/contact")}
              className="px-5 py-2 rounded-full bg-linear-to-bl from-purple-700 to-green-400 font-serif hover:border-white hover:border-2 hover:bg-[#17181b] hover:text-white"
            >
              Get In Touch
            </button>

            <button
              onClick={() => navigate("/resume")}
              className="px-5 py-2 rounded-full border-white border-2 font-serif bg-linear-to-bl from-purple-700 to-green-400 bg-clip-text text-transparent"
            >
              View Resume
            </button>
          </motion.div>
        </div>
      </div>

      {/* SOCIAL LINKS – Bottom Right */}
      <div className="fixed bottom-6 right-6 flex md:flex-col gap-4 z-20">
        <a
          href="https://www.linkedin.com/in/sodiya-tofunmi-644737379"
          target="_blank"
          className="p-3 rounded-full bg-[#0D1117] border border-gray-700 text-white hover:bg-green-400 hover:text-black transition"
        >
          <FaLinkedinIn size={18} />
        </a>

        <a
          href="https://github.com/Eritofunmi01"
          target="_blank"
          className="p-3 rounded-full bg-[#0D1117] border border-gray-700 text-white hover:bg-green-400 hover:text-black transition"
        >
          <FaGithub size={18} />
        </a>

        <a
          href="https://x.com/The_YoungDev"
          target="_blank"
          className="p-3 rounded-full bg-[#0D1117] border border-gray-700 text-white hover:bg-purple-600 transition"
        >
          <FaXTwitter size={18} />
        </a>

        <a
          href="https://wa.me/2348069062202"
          target="_blank"
          className="p-3 rounded-full bg-[#0D1117] border border-gray-700 text-white hover:bg-green-500 transition"
        >
          <FaWhatsapp size={18} />
        </a>
      </div>
    </div>
  );
}

export default Body;
