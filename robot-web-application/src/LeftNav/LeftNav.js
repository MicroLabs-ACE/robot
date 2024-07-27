import React, { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

const LeftNav = () => {
  const icons = [
    {
      id: "1",
      name: "bi:wifi",
    },
    {
      id: "2",
      name: "humbleicons:power",
    },
    {
      id: "3",
      name: "solar:microphone-outline",
    },
    {
      id: "4",
      name: "fluent:speaker-2-20-regular",
    },
  ];
  const activeGearClassAttributes =
    "text-white md:text-[22px] w-[40%] md:w-[100px] py-2 rounded-xl bg-[#017AFF] capitalize";
  const inactiveGearClassAttributes =
    "bg-black md:text-[22px] w-[40%] md:w-[100px] py-2 rounded-xl capitalize";
  const [activeIcon, setActiveIcon] = useState();
  const [gear, setGear] = useState(0);

  return (
    <div className="w-full md:w-[50%] lg:w-[38%] border-2 border-[#636263] rounded-3xl items-start flex flex-col gap-5 p-4">
      <h1>{gear}</h1>
      <img src="robot.png" alt="robot" className="w-full mx-auto" />
      <div className="flex w-full justify-between">
        <div className="pl-3 flex justify-between flex-col w-[46%] rounded-xl py-2 bg-[#017AFF] text-white">
          <span className="md:text-xl capitalize">speed</span>
          <p className="text-3xl text-white md:text-6xl">
            40 <span className="text-[10px] ml-[-0.5rem] ">km/h</span>
          </p>
        </div>
        <div className="flex w-[46%] self-end text-white flex-col gap-1">
          <div className="flex justify-between md:gap-4 ">
            <button
              onClick={() => setGear(0)}
              className={
                gear === 0
                  ? activeGearClassAttributes
                  : inactiveGearClassAttributes
              }
            >
              p
            </button>
            <button
              onClick={() => setGear(1)}
              className={
                gear === 1
                  ? activeGearClassAttributes
                  : inactiveGearClassAttributes
              }
            >
              1
            </button>
          </div>
          <div className="flex justify-between md:gap-4">
            <button
              onClick={() => setGear(3)}
              className={
                gear === 3
                  ? activeGearClassAttributes
                  : inactiveGearClassAttributes
              }
            >
              3
            </button>
            <button
              onClick={() => setGear(2)}
              className={
                gear === 2
                  ? activeGearClassAttributes
                  : inactiveGearClassAttributes
              }
            >
              2
            </button>
          </div>
        </div>
      </div>
      <div className="flex py-2 bg-[#017AFF] px-3 flex-col gap-4 rounded-xl items-start w-full">
        <span className="capitalize text-white">energy consumption</span>
        <div className="w-full flex justify-between">
          <div className="flex flex-col items-center gap-1">
            <p className="text-white  text-[18px] ">
              0 <span className="text-[10px]  ">km/h</span>
            </p>
            <span className="text-sm md:text-[13px] text-white capitalize">
              remaining
            </span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="text-white  text-[18px] ">
              0 <span className="text-[10px]  ">%</span>
            </p>
            <span className="text-sm md:text-[13px] text-white capitalize">
              average
            </span>
          </div>
          <div className="flex flex-col -end items-center gap-1">
            <p className="text-white  text-[18px] ">
              100<span className="text-[10px]  ">km/h</span>
            </p>

            <span className="text-sm md:text-[13px] text-white capitalize">
              full capacity
            </span>
          </div>
        </div>
      </div>
      <div className=" hidden md:flex w-full flex-col gap-5 items-start">
        <div className="flex w-full justify-between gap-6 ">
          {icons.map((icon, index) => {
            if (index === activeIcon)
              return (
                <button
                  onClick={() => setActiveIcon(index)}
                  className=" flex rounded-lg items-center bg-[#017AFF] justify-center py-4 px-6 "
                >
                  <Icon icon={icon.name} color="white" fontSize={20} />
                </button>
              );
            return (
              <button
                onClick={() => setActiveIcon(index)}
                className=" flex rounded-lg bg-black  items-center justify-center py-4 px-6 "
              >
                <Icon icon={icon.name} color="#646464" fontSize={20} />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
