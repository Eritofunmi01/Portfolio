import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiMenu, HiX } from "react-icons/hi";
import { useNavigate, Link } from 'react-router';
import HeroBg from '/Img/hbg.png';

function Body() {
  const fullText = "  I'm a full-stack web developer capable of turning ideas into sleek, functional websites and apps. I create digital experiences that look great, work flawlessly, and deliver real results. Let's build something amazing together.";
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
      className="md:h-[99vh] h-[150vh] gap-10 grid md:grid-cols-2 grid-cols-1 relative"
      style={{
        backgroundImage: `url(${HeroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Optional dark overlay for readability */}
      <div className="absolute inset-0 bg-[#0D1117]/70"></div>

    <div className="flex px-5 z-20 md:px-10">
      {/* Logo */}
      <Link
        to={"/"}
        className="font-serif text-4xl pl-8 mt-5 pr-20 font-bold bg-linear-to-bl from-purple-700 to-green-400 bg-clip-text text-transparent"
      >
        SODIX
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex text-white gap-4 font-sans">
        <Link to={"/resume"}>Resume</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white focus:outline-none"
        >
          {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#0D1117] flex flex-col text-white items-center py-4 md:hidden">
          <Link to={"/resume"} className="py-2">
            Resume
          </Link>
          <Link to={"/about"} className="py-2">
            About
          </Link>
          <Link to={"/contact"} className="py-2">
            Contact
          </Link>
        </div>
      )}
    </div>

      <div className="space-y-2 md:pl-10 pl-4 relative z-10">
        <motion.p 
          className='text-white pt-[20%] lg:pt-[15%] font-bold font-serif text-md md:text-xl' 
          initial={{y:20, opacity:0}} 
          animate={{y:0, opacity:1}} 
          transition={{delay:0.07, duration:0.8}}
        >
          Hi, I'm Sodiya Tofunmi Israel
        </motion.p>

        <motion.h2 
          className='md:text-7xl text-6xl bg-linear-to-bl from-purple-700 font-serif to-green-400 bg-clip-text text-transparent' 
          initial={{y:20, opacity:0}} 
          animate={{y:0, opacity:1}} 
          transition={{delay:0.09, duration:0.8}}
        >
          FullStacks Developer
        </motion.h2>

        <motion.p 
          className='text-white font-sans text-lg md:text-xl lg:text-xl' 
          initial={{y:20, opacity:0}} 
          animate={{y:0, opacity:1}} 
          transition={{delay:0.15, duration:2.0}}
        >
          {displayedText}
          <span className="border-r-2 border-white animate-blink ml-1"></span>
        </motion.p>

        <motion.div className='text-lg font-semibold space-x-5' initial={{y:20, opacity:0}} 
          animate={{y:0, opacity:1}} 
          transition={{delay:4.0, duration:0.8}}>
          <button onClick={() => navigate("/contact")} className=' p-1 rounded-full w-35 bg-linear-to-bl from-purple-700 font-serif to-green-400 hover:border-white hover:border-2 hover:bg-[#17181b] hover:text-white'> Get In Touch</button>
          <button onClick={() => navigate("/resume")} className=' p-1 rounded-full w-38 bg-transparent font-serif  border-white border-2 bg-linear-to-bl from-purple-700 to-green-400 bg-clip-text text-transparent cursor-pointer' > View Resume</button>
        </motion.div>
      </div>

      <div className='w-[70%] pt-20 md:pl-20 relative z-10'>
        <img src="/Img/pic1.jpg" className=' md:ml-15 ml-15 h-[80%] rounded-full' alt="" />
      </div>
    </div>
  );
}

export default Body;
