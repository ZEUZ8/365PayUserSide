import React, { useState } from "react";
import BackGround from "../background/backGround";
import { GrHomeRounded } from "react-icons/gr";
import { LuCalendarDays } from "react-icons/lu";
import { LiaClipboardListSolid } from "react-icons/lia";
import { RxExit } from "react-icons/rx";
import { BsPersonFillLock } from "react-icons/bs";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import CenterSection from "./CenterSection";
import FirstSection from "./FirstSection";
import Footer from "./Footer"
import "./style.css"

const Home = () => {
  const percentage = 66;
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="relative w-[100vw] ">
      <img
        className="absolute translate-y-[-2rem]  inset-0 w-[430px] aspect-auto  opacity-25"
        src="/imgs/shape(3).png"
        alt="Background Image"
      />
      <img
        className="absolute translate-y-[15rem] inset-0  opacity-25"
        src="/imgs/shapes(1).png"
        alt="Background Image"
      />
      <img
        className="absolute top-[35%] right-0 opacity-25"
        src="/imgs/shapes(2).png"
        alt="Background Image"
      />
      <div className="absolute   inset-0 h-[90vh]   flex flex-col">

        <div className="first-section p-3 test relative h-1/2">
          <FirstSection />
        </div>

        <div className="first-section grid gap-2 max-h-1/2">
          <CenterSection />
        </div>

        <div className="fixed bottom-0 left-0 w-full  ">
          <Footer/>
        </div>
      </div>
    </div>
  );
};

export default Home;
