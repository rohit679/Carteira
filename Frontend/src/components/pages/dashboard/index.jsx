import React, { useState } from "react";
import { useEffect } from "react";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiAcademicCap } from "react-icons/hi";
import { ImBlog } from "react-icons/im";
import logo from "../../../assets/logo.png";
import MenubarButton from "../../organisms/atoms/menubarButton";

const Dashboard = ({ setPath }) => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setPath("/dashboard");
  });
  return (
    <div className="flex w-full h-screen bg-gray-900 ">
      <div
        className={`flex flex-col flex-shrink-0 w-72 border-r transition-all duration-500 ${
          toggle && "-ml-52"
        } bg-gray-800 h-screen overflow-y-scroll`}
      >
        <div className="flex justify-between items-center ml-6 my-8">
          <div className="flex gap-4 items-center text-lg">
            <img width={20} src={logo} alt="my logo" />
            Dashboard
          </div>
          <div
          className="mr-3 cursor-pointer px-3 py-3 hover:bg-gray-700 rounded-[30px]"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            <GiHamburgerMenu size={20} />
          </div>
        </div>
        <div className="flex flex-col w-full gap-4">
          <MenubarButton
            text={"Home"}
            icon={AiOutlineHome}
            toggle={toggle}
            isActive={true}
          />
          <MenubarButton text={"About"} icon={AiOutlineUser} toggle={toggle} />
          <MenubarButton
            text={"Experience"}
            icon={HiAcademicCap}
            toggle={toggle}
          />
          <MenubarButton
            text={"Projects"}
            icon={AiOutlineFundProjectionScreen}
            toggle={toggle}
          />
          <MenubarButton text={"Publications"} icon={ImBlog} toggle={toggle} />
        </div>
      </div>

      <div className="flex w-full">Main Content</div>
    </div>
  );
};

export default Dashboard;
