import React from "react";
import "react-circular-progressbar/dist/styles.css";
import { FaPlayCircle } from "react-icons/fa";
import { TbClock24 } from "react-icons/tb";
import { TbClockOff } from "react-icons/tb";
import { FaClockRotateLeft } from "react-icons/fa6";
import CircularProgress from "./CircularProgress";
import Circle from "../test/Circle";

const CenterSection = () => {
  return (
    <div className="chumma grid gap-2  pb-2">
      <div className=" flex justify-center">
        <div className="grid justify-center items-center  circle-div">
          <Circle />
          {/* <CircularProgress/> */}
        </div>
      </div>
      <div className=" text-white grid ">
        <div className="grid grid-cols-3 items-center justify-around">
          <div className="flex flex-col justify-center items-center gap-1">
            <p className="text-md">
              <FaClockRotateLeft />
            </p>
            <p className="text-sm">10:45 AM</p>
            <p className="text-xs font-extralight opacity-50">Check in</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-1">
            <p className="text-md">
              <TbClockOff />
            </p>
            <p className="text-sm">10:45 AM</p>
            <p className="text-xs font-extralight opacity-50">Check Out</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-1">
            <p className="text-md">
              <TbClock24 />
            </p>
            <p className="text-sm">7:58 Hrs</p>
            <p className="text-xs font-extralight opacity-50">Working Hrs</p>
          </div>
        </div>
      </div>

      <div className="extra flex justify-center items-center w-full px-2 pb-4">
        <div className="flex-1">
          <div className=" bg-white h-[3rem] flex  items-center justify-between rounded-2xl p-3">
            <div className="text-lg font-bold text-gray-400">
              Name your activity
            </div>
            <div>
              <FaPlayCircle className="text-green-500 text-3xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterSection;
