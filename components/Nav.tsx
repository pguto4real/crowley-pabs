"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../lib/utils";
import { PiPhoneCallThin } from "react-icons/pi";

export function Nav({ className }: { className?: string }) {
  //   const [active, setActive] = useState<string | null>(null);
  //   return (
  //     <div className="flex justify-between ">
  //
  //       <Navbar/>
  //
  //     </div>
  //   );
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-7xl mx-auto z-50 flex justify-between items-center",
        className
      )}
    >
      <div className="ml-5 sm:ml-0">Logo</div>
      <Menu setActive={setActive}>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Services"
        ></MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Reviews"
        ></MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Works"
        ></MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Contact"
        ></MenuItem>
      </Menu>
      <div className="hidden sm:flex bg-[#2b4057] px-3 py-3 rounded-full text-white space-x-3 items-center">
        <PiPhoneCallThin className="h-6 w-6 font-bold"/>
        <div className="font-bold">(817) 293-4188</div>
      </div>
      <div className="inline sm:hidden mr-5 sm:mr-0">Mobile Menu</div>
    </div>
  );
}
function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Products"
        ></MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
