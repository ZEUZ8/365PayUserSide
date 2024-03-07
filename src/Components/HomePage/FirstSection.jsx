import React, { useState } from "react";

import { MdHomeFilled } from "react-icons/md";
import { LuCalendarDays } from "react-icons/lu";
import { LiaClipboardListSolid } from "react-icons/lia";
import { RxExit } from "react-icons/rx";
import { BsPersonFillLock } from "react-icons/bs";
import { FaPlayCircle } from "react-icons/fa";
import { GoBell } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { TbClock24 } from "react-icons/tb";
import { TbClockOff } from "react-icons/tb";
import { FaClockRotateLeft } from "react-icons/fa6";

const FirstSection = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="">
      <div className=" flex justify-end items-end pb-4">
        <div className="flex items-center gap-3">
          <div>
            <p className="text-white text-lg flex items-center justify-center">
              <GoBell />
            </p>
          </div>
          <div>
            <p className="rounded-full bg-[#5015A6] p-3 text-md text-white ">
              <GiHamburgerMenu />
            </p>
          </div>
        </div>
      </div>

      <div className="mt-2 pl-[4rem] pb-2 text-start">
        <div className="text-white">
          <p className="text-sm">Hi sinan</p>
          <p className="font-extralight text-xs ">Emp ID</p>
        </div>
      </div>

      <div className=" p-0">
        <div className="clockBorder  grid text-white  relative ">
          <div className="translate-y-[-80%] translate-x-[-20px] flex justify-end text-white z-10 absolute right-0">
            <div className="w-[84px] overflow-hidden aspect-square flex justify-center items-center rounded-full border-2 border-white">
              <img src="/imgs/person.png" className="  w-full" alt="" />
            </div>
          </div>
          <div className=" grid justify-center  p-3 text-center">
            <p className="font-light text-sm">Company Name</p>
            <p className="font-light text-xs flex justify-center items-center gap-1">
              <span>
                <IoLocationSharp />
              </span>{" "}
              location
            </p>
            <h1 className="text-4xl p-1">10:26 AM</h1>
            <p className="text-md font-light">12 March 2024</p>
          </div>

          <div className=" grid justify-center ">
            <hr className="text-white w-[90%] mx-auto " />

            <div className="relative flex justify-center items-center p-4">
              <p className="absolute z-20 text-white text-sm">Slide to Attendance</p>
              <label class="switch relative flex  items-center ">
                <div className="absolute z-20 p-4 ">
                  <p
                    style={{
                      transform: isChecked
                        ? "translateX(222px)"
                        : "translateX(0)",
                      transition: "transform 0.8s ease",
                    }}
                    className="arrow text-red-500 font-normal"
                  >
                    <FaArrowRightLong />
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => setIsChecked((prev) => !prev)}
                  class="toggle-btn rounded-full relative grid justify-center items-center"
                />
                <span class="slider "></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
