import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Github, Instagram, Linkedin } from "lucide-react";
import Galaxy from "../../Galexy.jsx";

function Herosection() {
  const [text] = useTypewriter({
    words: ["Web Developer", "Full Stack Developer", "React Developer"],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-950">

      {/* Galaxy Background */}
      <div className="absolute inset-0">
        <Galaxy
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={500}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      {/* Content Wrapper */}
      <div className="relative container mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center gap-14">

        {/* LEFT : Text Content */}
        <div className="text-white w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I’m Vivek 👋
          </h1>

          <h2 className="text-2xl md:text-4xl font-semibold text-cyan-400 mb-5">
            I am a <span>{text}</span>
            <Cursor cursorStyle="|" />
          </h2>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
            I am a passionate full-stack developer who loves building clean,
            user-friendly and responsive web applications. I specialize in
            React, Node.js and modern JavaScript, turning ideas into real-world
            digital products with smooth UI and strong performance.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <button className="bg-cyan-400 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg transition w-full sm:w-auto">
              Hire Me
            </button>

            <button className="border border-white/30 hover:border-cyan-400 text-white px-6 py-3 rounded-lg transition w-full sm:w-auto">
              Contact Me
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-6 mt-10">
            {[
              {
                icon: Github,
                href: "https://github.com/vivekpatel001-001",
                target: "_blank",
                label: "GitHub"
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/vivek-patel-44a56b367/",
                target: "_blank",
                label: "LinkedIn"
              },
              {
                icon: Instagram,
                href: "https://www.instagram.com/v.kpatel_91",
                target: "_blank",
                label: "Instagram"
              },
            ].map(({ icon: Icon, href, target, label }) => (
              <a
                key={label}
                href={href}
                target={target}
                aria-label={label}
                className="p-3 rounded-full border border-white/20 hover:border-cyan-400 hover:scale-110 transition"
              >
                <Icon size={20} className="text-white" />
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT : Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1766964855974-1dfcf5107823?q=80&w=2062&auto=format&fit=crop"
            alt="Hero"
            className="w-64 md:w-[320px] rounded-2xl shadow-xl"
          />
        </div>

      </div>
    </section>
  );
}

export default Herosection;
