import React from "react";
import { MdAttachEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";

const ContactForm = () => {
  return (
    <section className="bg-[#0a0f1a] text-gray-300 py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 ">

        {/* Left Contact Info */}
        <div className="lg:w-1/2 space-y-6 ">
          <div className="text-lg text-teal-400 ">// GET IN TOUCH</div>

          <h2 className="text-4xl font-bold text-white">
            Let's Work <span className="text-cyan-400">Together</span>
          </h2>

          <p className="text-gray-400 text-xl">
            Have a project in mind? I'd love to hear about it.
            Send me a message and let's create something amazing together.
          </p>

            <div className="space-y-4 mt-6">
            <div className="bg-[#111827] p-5 rounded-lg">
              <p className="text-lg text-gray-400 flex gap-2   "><MdAttachEmail className="text-3xl" />Email</p>
              <p className="font-medium text-white">vivekpatel001001@gmail.com</p>
            </div>

            <div className="bg-[#111827] p-5 rounded-lg">
              <p className="text-lg    text-gray-400 flex gap-2  "><FaPhoneVolume className="text-2xl"  />
                Phone</p>
              <p className="font-medium text-white">+1 (555) 123-4567</p>
            </div>

            <div className="bg-[#111827] p-5 rounded-lg">
              <p className=" text-gray-400 text-xl  flex gap-2 "> <FaMapMarkerAlt className="text-2xl"/>
 Location</p>
              <p className="font-medium text-white text-xl">Gujrat ,Surat </p>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="lg:w-1/2 bg-[#111827] p-8 rounded-xl shadow-lg">
          <form className="space-y-6">

            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="flex-1 bg-[#1f2937] text-white p-5 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 bg-[#1f2937] text-white p-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-[#1f2937] text-white p-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />

            <textarea
              rows={5}
              placeholder="Tell me about your project..."
              className="w-full bg-[#1f2937] text-white p-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />

            <button
              type="submit"
              className="w-full bg-linear-to-r from-cyan-400 to-purple-500 text-black font-semibold p-3 rounded-lg hover:opacity-90 transition"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactForm;
