/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { FiAlignRight } from "react-icons/fi";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import style from "../styles/sidebar.module.scss";
// import Alert from "./Alert";

const SideBarTwo = ({menuRef}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const region = [
    "",
    "Asia",
    "Africa",
    "US & Canada",
    "Latin America",
    "Europe",
    "Asia Pacific",
    "Ukraine war",
    "Coronavirus",
    "Climate Crisis",
  ];
  const moreArr = [
    "CLIMATE CRISIS",
    "OPINION",
    "CORONAVIRUS",
    "INTVESTIGATON",
    "IN PICTURES",
    "INTERACTIVE",
    "PODCASTS",
  ];
  const LmoreArr = [
    "EUROPE",
    "US/CANADA",
    "MIDDLE EAST",
    "AFRICA",
    "ASIA",
    "LATIN AMERICA",
    "ASIA PACIFIC",
  ];
  return (
    <div className="mb-1 lg:hidden">
      <aside
        className={`bg-black text-white relative p-4 h-[40px] w-screen 
    ${isOpen && style.viewWidth}  
    h-${!isOpen ? "10" : "screen"}   lg:hidden`}
      >
        <img
          src="/assets/NewsLogo.svg"
          className="absolute left-2 top-2 w-[30px]"
          alt=""
        />
        <img
          src="/assets/logoWhite.svg"
          className="absolute left-11 top-2 w-[40px]"
          alt=""
        />

        <button
          onClick={() => {
            setIsOpen(true);
          }}
          className=" absolute top-3 right-2"
        >
          <FiAlignRight onClick={toggleDrawer} className="" />
        </button>

        <Drawer
          open={isOpen}
          enableOverlay={false}
          onClose={toggleDrawer}
          direction="right"

        >
          {isOpen && (
            <nav
              className={`bg-black w-[250px] h-[640px]  sm:w-[300px] p-5   absolute top-0 right-0 overflow-auto`}
           >
              <div className={`flex hover:cursor-pointer `}>
                <RxCross1
                  onClick={() => {
                    setIsOpen(false);
                  }}
                />
              </div>
              <h1 className="text-[20px]  mt-6 sm:mt-3 text-xl tracking-[5px] xl:text-2xl  3xl:text-4xl">
                Region
              </h1>
              <ul className="flex gap-4 flex-col mt-2 mb-3">
                {region.map((val, index) => (
                  <li
                    key={index}
                    className="text-[12px] tracking-[2px]  font-bold"
                  >
                    {val.toUpperCase()}
                  </li>
                ))}
              </ul>

              <h1 className=" text-[20px] mt-12 mb-6 tracking-[5px] xl:text-2xl  3xl:text-4xl">
                News
              </h1>
              <ul className=" text-[12px] flex gap-4 flex-col  ">
                {LmoreArr.map((val, index) => (
                  <li
                    key={index}
                    className="text-[12px] tracking-[2px]  font-bold"
                  >
                    {val}
                  </li>
                ))}
              </ul>

              <h1 className="text-[20px]  mt-12 mb-6  tracking-[5px] xl:text-2xl  3xl:text-4xl">
                More
              </h1>
              <ul className="flex gap-4 flex-col mt-3 mb-6  ">
                {moreArr.map((val, index) => (
                  <li
                    key={index}
                    className="text-[12px] tracking-[2px] font-bold"
                  >
                    {val}
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </Drawer>
      </aside>

      {/* <Alert /> */}
    </div>
  );
};

export default SideBarTwo;
