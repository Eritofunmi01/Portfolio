import { useState } from "react";
import { Link } from "react-router";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#11151b] h-15 flex justify-between items-center px-5 md:px-10">
      {/* Logo */}
      <Link
        to={"/"}
        className="font-serif text-4xl font-bold bg-linear-to-bl from-purple-700 to-green-400 bg-clip-text text-transparent"
      >
        SODIX
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex text-white gap-4 font-sans">
        <Link to={"/resume"}>Resume</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/experience"}>Experience</Link>
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
          <Link to={"/experience"} className="py-2">
            Experience
          </Link>
        </div>
      )}
    </div>
  );
}
