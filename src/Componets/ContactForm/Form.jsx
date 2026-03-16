import React from "react";
import { MdAttachEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";

const ContactForm = () => {
<<<<<<< HEAD

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;

    const phone = "919725082796"; // apna WhatsApp number

    const text = `Name: ${name}%0AEmail: ${email}%0ASubject: ${subject}%0AMessage: ${message}`;

    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  };

  return (
    <section className="w-full bg-[#0a0f1a] text-gray-300 py-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row gap-12">

        {/* Left Contact Info */}
        <div className="lg:w-1/2 space-y-6">
          <div className="text-lg text-teal-400">// GET IN TOUCH</div>
=======
  return (
    <section className="bg-[#0a0f1a] text-gray-300 py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 ">

        {/* Left Contact Info */}
        <div className="lg:w-1/2 space-y-6 ">
          <div className="text-lg text-teal-400 ">// GET IN TOUCH</div>
>>>>>>> e77573375fd3298e967aa1ccc43892320df98975

          <h2 className="text-4xl font-bold text-white">
            Let's Work <span className="text-cyan-400">Together</span>
          </h2>

          <p className="text-gray-400 text-xl">
            Have a project in mind? I'd love to hear about it.
            Send me a message and let's create something amazing together.
          </p>

<<<<<<< HEAD
          <div className="space-y-4 mt-6">

            <div className="bg-[#111827] p-5 rounded-lg">
              <p className="text-lg text-gray-400 flex items-center gap-2">
                <MdAttachEmail className="text-3xl" />
                Email
              </p>
              <p className="font-medium text-white">
                vivekpatel001001@gmail.com
              </p>
            </div>

            <div className="bg-[#111827] p-5 rounded-lg">
              <p className="text-lg text-gray-400 flex items-center gap-2">
                <FaPhoneVolume className="text-2xl" />
                Phone
              </p>
              <p className="font-medium text-white">
                +91 9999999999
              </p>
            </div>

            <div className="bg-[#111827] p-5 rounded-lg">
              <p className="text-lg text-gray-400 flex items-center gap-2">
                <FaMapMarkerAlt className="text-2xl" />
                Location
              </p>
              <p className="font-medium text-white">
                Gujarat, Surat
              </p>
            </div>

=======
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
>>>>>>> e77573375fd3298e967aa1ccc43892320df98975
          </div>
        </div>

        {/* Right Form */}
        <div className="lg:w-1/2 bg-[#111827] p-8 rounded-xl shadow-lg">
<<<<<<< HEAD

          <form className="space-y-6" onSubmit={handleSubmit}>

            <div className="flex flex-col md:flex-row gap-4">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="flex-1 bg-[#1f2937] text-white p-4 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
=======
          <form className="space-y-6">

            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="flex-1 bg-[#1f2937] text-white p-5 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
>>>>>>> e77573375fd3298e967aa1ccc43892320df98975
              />

              <input
                type="email"
<<<<<<< HEAD
                name="email"
                placeholder="Your Email"
                required
                className="flex-1 bg-[#1f2937] text-white p-4 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />

=======
                placeholder="Your Email"
                className="flex-1 bg-[#1f2937] text-white p-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
>>>>>>> e77573375fd3298e967aa1ccc43892320df98975
            </div>

            <input
              type="text"
<<<<<<< HEAD
              name="subject"
              placeholder="Subject"
              required
              className="w-full bg-[#1f2937] text-white p-4 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
=======
              placeholder="Subject"
              className="w-full bg-[#1f2937] text-white p-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
>>>>>>> e77573375fd3298e967aa1ccc43892320df98975
            />

            <textarea
              rows={5}
<<<<<<< HEAD
              name="message"
              placeholder="Tell me about your project..."
              required
              className="w-full bg-[#1f2937] text-white p-4 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
=======
              placeholder="Tell me about your project..."
              className="w-full bg-[#1f2937] text-white p-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
>>>>>>> e77573375fd3298e967aa1ccc43892320df98975
            />

            <button
              type="submit"
<<<<<<< HEAD
              className="w-full bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold p-4 rounded-lg hover:opacity-90 transition"
=======
              className="w-full bg-linear-to-r from-cyan-400 to-purple-500 text-black font-semibold p-3 rounded-lg hover:opacity-90 transition"
>>>>>>> e77573375fd3298e967aa1ccc43892320df98975
            >
              Send Message
            </button>

          </form>
<<<<<<< HEAD

=======
>>>>>>> e77573375fd3298e967aa1ccc43892320df98975
        </div>

      </div>
    </section>
  );
};

<<<<<<< HEAD
export default ContactForm;
=======
export default ContactForm;
>>>>>>> e77573375fd3298e967aa1ccc43892320df98975
