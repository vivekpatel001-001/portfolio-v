import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbaar() {
  const [open, setOpen] = useState(false);

  return (
    <section className="shadow-md bg-gray-950 sticky top-0 z-50   border-b border-cyan-500">
      <div className="container mx-auto flex justify-between items-center px-5 py-4">
        
        {/* Logo */}
        <p className="text-2xl font-bold text-white">Portfolio</p>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 list-none">
          <li className="text-xl text-hover text-cyan-500"><Link to="/">Home</Link></li>
          <li className="text-xl text-hover text-white"><Link to="/">Projects</Link></li>
          <li className="text-xl text-hover text-white"><Link to="/">About</Link></li>
          <li className="text-xl text-hover text-white"><Link to="/">Services</Link></li>
          <li className="text-xl text-hover text-white"><Link to="/">Contact</Link></li>
        </ul>
        {/* Mobile Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white transition-all duration-300 ${
          open ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-6 list-none">
          <li className="text-lg text-hover">
            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          </li>
          <li className="text-lg text-hover">
            <Link to="/" onClick={() => setOpen(false)}>Projects</Link>
          </li>
          <li className="text-lg text-hover">
            <Link to="/" onClick={() => setOpen(false)}>About</Link>
          </li>
          <li className="text-lg text-hover">
            <Link to="/" onClick={() => setOpen(false)}>Services</Link>
          </li>
          <li className="text-lg text-hover">
            <Link to="/" onClick={() => setOpen(false)}>Contact</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Navbaar;
