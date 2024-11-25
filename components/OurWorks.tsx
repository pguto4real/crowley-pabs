"use client";
import { HoverEffect } from "./ui/card-hover-effect";

export default function OurWorks() {
  return (
    <div className="max-w-5xl mx-auto px-8 lg:px-0 lg:max-w-7xl" id="Works">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    imageBefore: "/assets/hyundai-before.jpg",
    imageAfter:
      "/assets/hyundai-after.jpg",
   
  },
  {
    imageBefore: "/assets/corrola-before.png",
    imageAfter:"/assets/corrola-after.png",
   
  },
  {
    imageBefore: "/assets/hyundai-before.jpg",
    imageAfter:
      "/assets/hyundai-after.jpg",
   
  },
  {
    imageBefore: "/assets/corrola-before.png",
    imageAfter:"/assets/corrola-after.png",
   
  },
  
];
