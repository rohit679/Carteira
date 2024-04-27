import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { BsXLg } from "react-icons/bs";
import { HiAcademicCap } from "react-icons/hi";
import { ImBlog } from "react-icons/im";
import NavbarTab from "./navbarTab";
import logo from "../../../assets/logo.png";

const NavBar = ({ activePath }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="absolute top-0 sticky w-full z-50 py-6">
      <div className="flex justify-between items-center px-[40px] md:px-[60px] xl:px-[120px] 2xl:px-[200px]">
        <Link to="/">
          <img src={logo} width="30" alt="logo" />
        </Link>
        {open ? (
          <div
            onClick={() => {
              setOpen(false);
            }}
            className="flex justify-center items-center hover:bg-baseCol rounded-2xl h-8 w-8 hover:text-black lg:hidden"
          >
            <BsXLg />
          </div>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="menu-button"
            class="h-6 w-6 cursor-pointer lg:hidden block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => {
              setOpen(true);
            }}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
        <div
          class={`hidden w-full lg:flex md:items-center md:w-auto gap-2 xl:gap-4 2xl:gap-6`}
          id="menu"
        >
          <NavbarTab
            title="Home"
            icon={AiOutlineHome}
            link="/"
            isActive={activePath === "/"}
          />
          <NavbarTab
            title="About"
            icon={AiOutlineUser}
            link="/about"
            isActive={activePath === "/about"}
          />
          <NavbarTab
            title="Experience"
            icon={HiAcademicCap}
            link="/experience"
            isActive={activePath === "/experience"}
          />
          <NavbarTab
            title="Projects"
            icon={AiOutlineFundProjectionScreen}
            link="/projects"
            isActive={activePath === "/projects"}
          />
          <NavbarTab
            title="Publications"
            icon={ImBlog}
            link="/articles"
            isActive={activePath === "/articles"}
          />
        </div>
      </div>
      {open && (
        <div
          class={`flex flex-col gap-3 items-start pt-8 px-[40px] md:px-[60px] xl:px-[120px] 2xl:px-[200px] lg:hidden`}
          id="menu"
        >
          <NavbarTab
            title="Home"
            icon={AiOutlineHome}
            link="/"
            isActive={activePath === "/"}
          />
          <NavbarTab
            title="About"
            icon={AiOutlineUser}
            link="/about"
            isActive={activePath === "/about"}
          />
          <NavbarTab
            title="Experience"
            icon={HiAcademicCap}
            link="/experience"
            isActive={activePath === "/experience"}
          />
          <NavbarTab
            title="Projects"
            icon={AiOutlineFundProjectionScreen}
            link="/projects"
            isActive={activePath === "/projects"}
          />
          <NavbarTab
            title="Publications"
            icon={ImBlog}
            link="/articles"
            isActive={activePath === "/articles"}
          />
        </div>
      )}
    </div>
  );
};

export default NavBar;
