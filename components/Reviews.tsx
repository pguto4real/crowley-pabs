import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { FaGoogle, FaStar } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Reviews = () => {
  const testimonials = [
    {
      quote:
        "Frank and his team did a fantastic job on our Veloster after a front-end collision. The repair time did not take very long, and the car looks better than it did before the accident. In addition, they washed and cleaned the inside of the vehicle, returning it to us in pristine condition. I would definitely recommend this body shop for those needing their vehicle repaired and working with a family run local business.",
      name: "Cameron Stone",
      title: "Fort Worth, Tx",
    },
    {
      quote:
        "Just had my truck buddy fixed the perfect job beautiful paint job highly recommend",
      name: "Mike Cummings",
      title: "Fort Worth, Tx",
    },
    {
      quote: "The Best autobody place in Texas!!! No one could do the jobs they have done. Also providing superior quality work from my 2012 F150 to my 68 Mustang. They are spectacular with restoration and wizards with body work!! Highly recommended!!",
      name: "Glenn Cutinello",
      title: "Fort Worth, Tx",
    },
    {
      quote:
        "These guys did a great job on replacing a rear bumper for me. Quoted me a fair price and was able to work me in the next day. Go see Frank and he will take of you.",
      name: "Michael Pritchett",
      title: "Fort Worth, Tx",
    },
    {
      quote:
        "Frank is the best he went out of his way to make sure our repair was done timely and correct and worked with insurance without any trouble got the car back and it was like brand new",
      name: "Keith Copeman",
      title: "Fort Worth, Tx",
    },
  ];
  return (
    <section id="testimonials" className="bg:white py-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-1">
          <h2 className="text-3xl md:text-7xl font-bold text-gray-90">
            Kind words from our <span className="text-[#2b4057]">Clients</span>
          </h2>
        </div>
        <div className="text-center my-5">
          <div className="bg-white py-4 px-6 rounded-lg shadow-md inline-flex items-center space-x-2">
            <div className="flex">
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar color="gold" />
              {/* <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 576 512"
                className="text-yellow-400 text-2xl"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
              </svg>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 576 512"
                className="text-yellow-400 text-2xl"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
              </svg>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 576 512"
                className="text-yellow-400 text-2xl"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
              </svg>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 576 512"
                className="text-yellow-400 text-2xl"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
              </svg>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 576 512"
                className="text-yellow-400 text-2xl"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
              </svg> */}
            </div>
            <span className="text-gray-800 font-semibold text-lg">5.0</span>
            <span className="text-gray-600">on</span>
            <div className="flex items-center space-x-1">
              {/* <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                ></path>
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                ></path>
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                ></path>
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                ></path>
                <path fill="none" d="M1 1h22v22H1z"></path>
              </svg> */}
              <FcGoogle />
              <span className="text-gray-800 font-semibold">Google</span>
            </div>
          </div>
        </div>
        <div className="h-[25rem] rounded-md flex flex-col antialiased bg-white dark:bg-white dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
        items={testimonials}
     
        speed="slow"
      />
      
        </div>
      </div>
    </section>
  );
};

export default Reviews;
