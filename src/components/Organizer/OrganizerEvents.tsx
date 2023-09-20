import { Button } from "@/core/ui/button";
import { AiOutlineUnorderedList } from "react-icons/ai";
import Image from "next/image";
import SearchIcon from "../../../public/assets/search_icon_red.svg";
import { ChevronDown } from "lucide-react";
import { BiCalendar } from "react-icons/bi";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/core/ui/dropdown-menu";
import OrganizerEventTable from "./OrganizerEventTable";
export default function OrganizerEvents() {
  const [activeDiv, setActiveDiv] = useState("List");
  const handleDivClick = (divName: string) => {
    setActiveDiv(divName);
  };
  return (
    <>
      <div className="flex w-full flex-col p-10 max-sm:p-5">
        <div className="flex justify-end max-sm:mb-3 ">
          <Button className="flex h-[43px] w-[150px] justify-center rounded-sm bg-btnprimary p-3 font-bold text-white hover:bg-btnsecondary">
            Create Event
          </Button>
        </div>
        <div className="flex flex-col gap-5">
          <span className="text-2xl font-bold text-primary ">Events</span>
          <div className="h-[1px] bg-[#0080FF]"></div>
          <div className="flex gap-5 max-md:flex-wrap">
            <div
              className={`flex h-[50px] w-[140px] cursor-pointer items-center justify-center gap-3 rounded-lg p-2 ${
                activeDiv === "List"
                  ? "bg-btnprimary text-white hover:bg-btnsecondary"
                  : "bg-[#EFF8FF]"
              }`}
              onClick={() => handleDivClick("List")}
            >
              <AiOutlineUnorderedList
                size={24}
                className={` ${
                  activeDiv === "List" ? "text-white" : "text-btnprimary"
                }`}
              />
              <span>List</span>
            </div>

            {/* Calendar */}
            <div
              className={`flex h-[50px] w-[140px] cursor-pointer items-center justify-center gap-3 rounded-lg p-2 ${
                activeDiv === "Calendar"
                  ? "bg-btnprimary text-white hover:bg-btnsecondary"
                  : "bg-[#EFF8FF]"
              }`}
              onClick={() => handleDivClick("Calendar")}
            >
              <BiCalendar
                size={24}
                className={` ${
                  activeDiv === "Calendar" ? "text-white" : "text-btnprimary"
                }`}
              />
              <span>Calendar</span>
            </div>

            {/* All Events */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex h-[50px] w-[140px] items-center justify-center gap-2 rounded-lg bg-btnprimary text-white outline-none">
                All Events
                <ChevronDown />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-primary text-white">
                <DropdownMenuItem>Upcoming Events</DropdownMenuItem>
                <DropdownMenuItem>All Events</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="flex items-center rounded-lg bg-[#EFF8FF] p-3">
              <input
                className="w-[260px] bg-transparent outline-none placeholder:text-[#757575] max-md:w-full"
                type="text"
                placeholder="Search event"
              />
              <Image src={SearchIcon} alt="search_icon" />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <OrganizerEventTable />
        </div>
      </div>
    </>
  );
}
