import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs, FaServer, FaGitAlt } from "react-icons/fa";
import { SiExpress, SiJsonwebtokens, SiMongodb, SiMysql, SiPostman, SiVercel, SiNetlify } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";

function Skill() {
  return (
    <section className=" bg-gray-950 py-14 md:py-20 overflow-hidden">
      {/* MagicBento background animation layer */}

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center mb-14">
          My <span className="text-cyan-400">Skills</span>
        </h2>

        {/* Skill Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Frontend */}
          <div className="bg-gray-800/80 backdrop-blur rounded-xl p-8 text-center
              hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25
              transition-all duration-300">
            <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
              Frontend
            </h3>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
              Building responsive and interactive UIs using modern frontend technologies.
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 justify-items-center">
              <div className="flex flex-col items-center text-gray-300 hover:text-orange-500 transition">
                <FaHtml5 className="text-3xl" />
                <span className="text-sm mt-1">HTML</span>
              </div>
              <div className="flex flex-col items-center text-gray-300 hover:text-blue-500 transition">
                <FaCss3Alt className="text-3xl" />
                <span className="text-sm mt-1">CSS</span>
              </div>
              <div className="flex flex-col items-center text-gray-300 hover:text-yellow-400 transition">
                <FaJsSquare className="text-3xl" />
                <span className="text-sm mt-1">JavaScript</span>
              </div>
              <div className="flex flex-col items-center text-gray-300 hover:text-cyan-400 transition">
                <FaReact className="text-3xl" />
                <span className="text-sm mt-1">React</span>
              </div>
              <div className="flex flex-col items-center text-gray-300 hover:text-sky-400 transition">
                <SiTailwindcss className="text-3xl" />
                <span className="text-sm mt-1">Tailwind</span>
              </div>
            </div>
          </div>

          {/* Backend */}
          <div className="bg-gray-800/80 backdrop-blur rounded-xl p-8 text-center
              hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25
              transition-all duration-300">
            <h3 className="text-2xl font-semibold text-cyan-400  mb-4">
              Backend
            </h3>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
              Developing scalable and secure backend services.
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 justify-items-center">
              <div className="flex flex-col items-center text-gray-300 hover:text-green-500 transition">
                <FaNodeJs className="text-3xl" />
                <span className="text-sm mt-1">Node.js</span>
              </div>
              <div className="flex flex-col items-center text-gray-300 hover:text-gray-200 transition">
                <SiExpress className="text-3xl" />
                <span className="text-sm mt-1">Express</span>
              </div>
              <div className="flex flex-col items-center text-gray-300 hover:text-yellow-400 transition">
                <SiJsonwebtokens className="text-3xl" />
                <span className="text-sm mt-1">JWT</span>
              </div>
              <div className="flex flex-col items-center text-gray-300 hover:text-blue-400 transition">
                <FaServer className="text-3xl" />
                <span className="text-sm mt-1">REST API</span>
              </div>
            </div>
          </div>

          {/* Database */}
          <div className="bg-gray-800/80 backdrop-blur rounded-xl p-8 text-center
              hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25
              transition-all duration-300">
            <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
              Database
            </h3>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
              Managing structured and unstructured data efficiently.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-items-center">
              <div className="flex flex-col items-center text-gray-300 hover:text-green-500 transition">
                <SiMongodb className="text-3xl" />
                <span className="text-sm mt-1">MongoDB</span>
              </div>
              <div className="flex flex-col items-center text-gray-300 hover:text-indigo-400 transition">
                <DiMsqlServer className="text-3xl" />
                <span className="text-sm mt-1">CRUD</span>
              </div>
            </div>
          </div>

          {/* Tools & DevOps */}
          <div className="bg-gray-800/80 backdrop-blur rounded-xl p-8 text-center
              hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25
              transition-all duration-300">
            <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
              Tools & DevOps
            </h3>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
              Tools for development, testing, and deployment.
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 justify-items-center">
              <div className="flex flex-col items-center text-gray-300 hover:text-cyan-500 transition">
                <FaGitAlt className="text-3xl" />
                <span className="text-sm mt-1">Git</span>
              </div>
              <div className="flex flex-col items-center text-gray-300 hover:text-orange-400 transition">
                <SiPostman className="text-3xl" />
                <span className="text-sm mt-1">Postman</span>
              </div>
              <div className="flex flex-col items-center text-gray-300 hover:text-black transition">
                <SiVercel className="text-3xl" />
                <span className="text-sm mt-1">Vercel</span>
              </div>
              <div className="flex flex-col items-center text-gray-300 hover:text-teal-400 transition">
                <SiNetlify className="text-3xl" />
                <span className="text-sm mt-1">Netlify</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;
