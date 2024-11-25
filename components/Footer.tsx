import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io5";
import { TbBrandFacebook } from "react-icons/tb";

const Footer = () => {
  return (
    <footer
      aria-labelledby="footer-heading"
      className="bg-[#2b4057] rounded-t-lg"
    >
      <h2
        id="footer-heading"
        className="absolute w-px h-px p-0 m-[-1px] overflow-hidden clip-rect-0 whitespace-nowrap border-0"
      >
        Footer
      </h2>
      <div
        className="max-w-[80rem] ml-auto mr-auto pb-[2rem] pt-[6rem] md:pt-[8rem]
      pl-[1.5rem] pr-[1.5rem] md:pl-[1.5rem] md:pr-[1.5rem] "
      >
        <div className="drm dsw dti">
          <div className="aco">
            <img
              alt="Company name"
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&amp;shade=500"
              className="h-[1.75rem] max-w-full block align-middle"
            />
            <p className="space-y-custom text-custom leading-[1.5rem] text-sm ">
              Making the world a better place through constructing elegant
              hierarchies.
            </p>
            <div className="flex space-x-6 data-custom">
              <a href="#" className="ayu bmf">
                <span className="t">Facebook</span>
                <IoLogoFacebook className="w-[1.5rem] h-[1.5rem] text-gray-500 text-opacity-100" />
              </a>
              <a href="#" className="ayu bmf">
                <span className="t">Instagram</span>
                <FaInstagramSquare className="w-[1.5rem] h-[1.5rem] text-gray-500 text-opacity-100" />
              </a>
              <a href="#" className="ayu bmf">
                <span className="t">X</span>
                <FaXTwitter className="w-[1.5rem] h-[1.5rem] text-gray-500 text-opacity-100" />
              </a>
            </div>
          </div>
          <div className="gap-8 grid grid-cols-2 mt-[4rem] xl:mt-0 col-span-2">
            <div className="flex justify-center">
              <div className="text-white ">
                <h3 className="font-bold text-lg">Quick Links</h3>
                <ul role="list" className="lo acl space-y-2">
                  <li className="font-semibold">
                    <a href="#Services" className="">
                      Services
                    </a>
                  </li>
                  <li className="font-semibold">
                    <a href="#Reviews" className="">
                      Reviews
                    </a>
                  </li>
                  <li className="font-semibold">
                    <a href="#Works" className="">
                      Works
                    </a>
                  </li>
                </ul>
              </div>
              {/* <div className="la csn">
                <h3 className="axa">Support</h3>
                <ul role="list" className="lo acl">
                  <li>
                    <a href="#" className="axs">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="axs">
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="axs">
                      Guides
                    </a>
                  </li>
                  <li>
                    <a href="#" className="axs">
                      API Status
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>
            <div className=" flex justify-center">
              <div className="text-white ">
                <h3 className="font-bold text-lg">Contact Us</h3>
                <p className="mt-[1.5rem] font-semibold">
                  10128 N Crowley Rd Suite D<br /> Crowley, TX 76036
                </p>
                <p className="font-semibold">(817) 293-4188</p>
                <p className="font-semibold">Email:</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[4rem] md:mt-[5rem] lg:mt-[6rem] border-t  pt-[2rem] border-white border-opacity-10">
          <p className="text-gray-400 text-opacity-100">
            © 2020 Crowley Paint And Body. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
