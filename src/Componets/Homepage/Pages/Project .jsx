import React from "react";

function Project() {
  return (
    <section className="bg-[#0a0f1a] py-12 sm:py-14 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">

          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img
              src="https://demo-vue-furniture.storehippo.com/s/641185736319bb2bbd152d5a/6411ceb9dfb4ba9b043e8ed6/banner-2-1024x1024.jpg"
              alt="Furniture Project"
              className="w-full rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-400  mb-4">
              Modern Vue Furniture E-Shop
            </h2>

            <p className="text-white  text-base sm:text-lg leading-relaxed mb-6">
              This is a fully functional demo e-commerce website for a furniture
              store built using the{" "}
              <span className="font-semibold">StoreHippo platform</span> with a
              <span className="font-semibold"> Vue.js frontend</span>.  
              It showcases furniture products, categories, responsive layouts,
              and modern UI patterns — ideal for demo, portfolio, or real-world
              furniture businesses.
            </p>

            <div className="flex justify-center md:justify-start">
              <a
                href="https://demo-vue-furniture.storehippo.com/en/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-cyan-4000 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition w-full sm:w-auto text-center"
              >
                View Live Project →
              </a>

              <button className="ml-4 inline-block bg-white text-yellow px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 hover:text-white transition w-full sm:w-auto">
              Project Details
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Project;
