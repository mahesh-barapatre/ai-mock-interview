"use client";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import React from "react";

function Header() {
  const path = usePathname();

  return (
    <div className="px-6 py-3 flex justify-between items-center shadow-sm bg-secondary">
      <div>
        <img src="logo.svg" alt="logo" />
      </div>
      <ul className="hidden md:flex gap-6">
        <li
          className={`hover:text-primary hover:font-bold transition-all ease-in-out cursor-pointer ${
            path == "/dashboard" && "text-primary font-bold"
          }`}
        >
          Dashboard
        </li>
        <li
          className={`hover:text-primary hover:font-bold transition-all ease-in-out cursor-pointer ${
            path == "/dashboard/questions" && "text-primary font-bold"
          }`}
        >
          Questions
        </li>
        <li
          className={`hover:text-primary hover:font-bold transition-all ease-in-out cursor-pointer ${
            path == "/dashboard/upgrade" && "text-primary font-bold"
          }`}
        >
          Upgrade
        </li>
        <li
          className={`hover:text-primary hover:font-bold transition-all ease-in-out cursor-pointer ${
            path == "/dashboard/howitworks?" && "text-primary font-bold"
          }`}
        >
          How it works?
        </li>
      </ul>
      <UserButton />
    </div>
  );
}

export default Header;
