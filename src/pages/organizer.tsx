import { useState } from "react";
import OrganizerHeader from "@/components/Header/OrganizerHeader";
import { GoHome } from "react-icons/go";
import { BiCalendar } from "react-icons/bi";
import { CiViewList } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import Image from "next/image";
import HomeIcon from "../../public/assets/home_icon.svg";
import CalendarIcon from "../../public/assets/calendar_icon_organizer.svg";
import ListIcon from "../../public/assets/list_icon.svg";
import StatsIcon from "../../public/assets/stats_icon.svg";
import FinanceIcon from "../../public/assets/finance_icon.svg";
import SettingsIcon from "../../public/assets/settings_icon.svg";
import HelpIcon from "../../public/assets/help_icon.svg";

export default function Organizer() {
  const [activeDiv, setActiveDiv] = useState("Home");

  // Function to handle div click
  const handleDivClick = (divName: string) => {
    setActiveDiv(divName);
  };

  // Define a function to get the text for the active div
  const getActiveDivText = () => {
    switch (activeDiv) {
      case "Home":
        return "Home";
      case "Events":
        return "Events";
      case "ListView":
        return "ListView";
      case "Settings":
        return "Settings";
      // Add more cases as needed
      default:
        return "";
    }
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="flex">
          <div className="w-[5%] bg-white p-5">Logo</div>
          <div className="w-full">
            {" "}
            <OrganizerHeader />
          </div>
        </div>
        {/* Left Side */}
        <div className="flex w-full">
          <div className="card-drop-shadow w-[80px] bg-[#DEF0FF] ">
            <div className="mb-10 mt-20 flex flex-col justify-center bg-[#DEF0FF]">
              <div
                className={`flex h-[70px] cursor-pointer items-center justify-center p-2 ${
                  activeDiv === "Home" ? "bg-btnsecondary text-white" : ""
                }`}
                onClick={() => handleDivClick("Home")}
              >
                <GoHome
                  size={27}
                  className={` ${
                    activeDiv === "Home" ? "text-white" : "text-[#3B5998]"
                  }`}
                />
              </div>
              <div
                className={`flex h-[70px] cursor-pointer items-center justify-center p-2 ${
                  activeDiv === "Events" ? "bg-btnsecondary text-white" : ""
                }`}
                onClick={() => handleDivClick("Events")}
              >
                <BiCalendar
                  size={27}
                  className={` ${
                    activeDiv === "Events" ? "text-white" : "text-[#3B5998]"
                  }`}
                />
              </div>
              <div
                className={`flex h-[70px] cursor-pointer items-center justify-center p-2 ${
                  activeDiv === "ListView" ? "bg-btnsecondary text-white" : ""
                }`}
                onClick={() => handleDivClick("ListView")}
              >
                <CiViewList
                  size={27}
                  className={` ${
                    activeDiv === "ListView" ? "text-white" : "text-[#3B5998]"
                  }`}
                />
              </div>
              <div className="flex h-[70px] cursor-pointer items-center justify-center p-2">
                <Image
                  src={StatsIcon}
                  alt="stats_icon"
                  className="h-[22px] w-[22px]"
                />
              </div>
              <div className="flex h-[80px] cursor-pointer items-center justify-center p-2">
                <Image
                  src={FinanceIcon}
                  alt="finance_icon"
                  className="h-[22px] w-[22px]"
                />
              </div>
              <div
                className={`flex h-[70px] cursor-pointer items-center justify-center p-2 ${
                  activeDiv === "Settings" ? "bg-btnsecondary text-white" : ""
                }`}
                onClick={() => handleDivClick("Settings")}
              >
                <IoSettingsOutline
                  size={27}
                  className={` ${
                    activeDiv === "Settings" ? "text-white" : "text-[#3B5998]"
                  }`}
                />
              </div>
              <div className="mt-5 flex h-[80px] cursor-pointer items-center justify-center p-2">
                <Image
                  src={HelpIcon}
                  alt="help_icon"
                  className="h-[22px] w-[22px]"
                />
              </div>
            </div>
          </div>
          {/* Right Side */}
          <div className="flex w-full flex-col gap-5">
            <div className="card-drop-shadow  mt-20 w-[130px] rounded-r-lg bg-btnprimary p-2 text-center text-white">
              {getActiveDivText()} {/* Display the active div text */}
            </div>
            <div>Hello world</div>
          </div>
        </div>
      </div>
    </>
  );
}
