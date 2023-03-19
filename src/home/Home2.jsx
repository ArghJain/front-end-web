import React from "react";
import image from "./assets/images/Desktop1.png";
import "./Home2.css";

export default function Home2() {
  return (
    <div className="flex lg:flex-row sm:flex-col md:flex-col gap-10 lg:justify-center lg:items-center py-12 px-8 overflow-x-hidden bg-stone-900">
      <div className="w-[800px]   sm:order-last md:order-last">
        <img
          className="drop-shadow-2xl shadow-zinc-400 rounded-xl img-home2"
          src={image}
          alt="about-img"
        />
      </div>
      <div className="flex flex-col sm:justify-end md:justify-end gap-5 lg:w-96 sm:w-fit md:w-fit sm:p-6 md:p-6 lg:p-0 sm:ml-auto md:ml-auto lg:ml-2 lg:text-left sm:text-right md:text-right sm:px-20 md:px-20">
        <h3 className="lg:text-2xl sm:text-4xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r  from-pink-400 to-pink-900 sm:mr-4 md:mr-4">
          Our Mission
        </h3>
        <h2 className="w-fit text-slate-100 font-extrabold lg:text-3xl sm:text-7xl md:text-7xl sm:ml-auto md:ml-auto lg:ml-0">
          Game Theory?
        </h2>
        <p className="text-slate-300 font-thin lg:text-lg sm:text-2xl md:text-2xl !text-justified">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
          dolores maiores vel iste quae iusto sed at neque, facere doloribus
          tempora rerum ipsam fugiat commodi similique praesentium expedita
          iure, voluptatum quisquam vitae. Ab maxime dolore sint unde
          voluptatum, impedit atque?
        </p>
        <button className="flex justify-center bg-gradient-to-r  from-pink-900 to-pink-700 text-white font-medium lg:text-lg sm:text-2xl md:text-2xl sm:w-56 md:w-56 lg:w-44 rounded-full h-10 !text-center sm:ml-auto md:ml-auto lg:ml-1">
          <div> Learn more </div>
        </button>
      </div>

      <div></div>

      <div className="absolute z-0 w-32 rounded-full shadow-2xl shadow-blue-300"></div>
    </div>
  );
}