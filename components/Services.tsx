"use client";
import React from 'react'
import { HoverEffect } from './ui/services-card-hover-effect';
import { FcGoogle } from 'react-icons/fc';

const Services = () => {
    return (
        <section id="Services" className="bg:white py-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-1">
          <h2 className="text-3xl md:text-7xl font-bold text-gray-90">
            Our <span className="text-[#2b4057]">Services</span>
          </h2>
        </div>
        
        <div className="h-[35rem] rounded-md flex flex-col antialiased bg-white dark:bg-white dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        
        <div className="max-w-5xl mx-auto px-8 lg:px-0 lg:max-w-7xl">
          <HoverEffect items={projects} />
        </div>
        </div>
      </div>
    </section>
      );
}

export default Services


export const projects = [
  {
    title: "Bodywork and Dent Repair",
    subtitle:
      "From minor dents to significant body damage, our team is skilled in repairing a wide range of issues. We use modern techniques such as paintless dent repair (PDR) to remove imperfections without affecting the original paint.",
   
  },
  {
    title: "Trim Repair and Replacement",
    subtitle:"Enhance the exterior of your vehicle with our trim services. We repair or replace damaged bumpers, moldings, and grilles, ensuring that every piece fits perfectly and complements your vehicle’s design.",
   
  },
  {
    title: "Rust Repair",
    subtitle:
      "Protect your investment from further damage with our rust repair services. We treat affected areas to eliminate rust and prevent it from spreading, ensuring your vehicle remains in top condition.",
   
  },
  {
    title: "Custom Paint and Graphics",
    subtitle:"Add a personal touch to your vehicle with our custom paint and graphics services. Whether you’re looking for unique designs, stripes, or decals, we can create a look that reflects your style.",
   
  },
  {
    title: "Restoration Services",
    subtitle:"Maintain your vehicle’s beauty with our detailing services. We offer comprehensive interior and exterior cleaning, polishing, and waxing to give your car a showroom shine. Our detailing packages can be customized to fit your needs.",
   
  },
  {
    title: "Detailing Services",
    subtitle:"Add a personal touch to your vehicle with our custom paint and graphics services. Whether you’re looking for unique designs, stripes, or decals, we can create a look that reflects your style.",
   
  },
  
];