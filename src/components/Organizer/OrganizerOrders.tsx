import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/core/ui/select";
import SearchIcon from "../../../public/assets/search_icon_red.svg";
import Image from "next/image";

import OrganizerOrdersTable from "./OrganizerOrdersTable";
export default function OrganizerOrders() {
  return (
    <>
      <div className="flex w-full flex-col p-10 max-sm:p-5">
        <div className="flex flex-col gap-5">
          <span className="text-2xl font-bold text-primary ">Orders</span>
          <div className="h-[1px] bg-[#0080FF]"></div>
          <div className="flex gap-5 max-md:flex-wrap">
            {/* Search*/}
            <Select>
              <SelectTrigger
                className="h-[40px] w-[160px] border-none bg-btnprimary text-white outline-none"
                color="text-white"
              >
                <SelectValue placeholder="Search by" />
              </SelectTrigger>
              <SelectContent className="border-none bg-primary text-white outline-none">
                <SelectGroup>
                  <SelectItem value="Buyer">Buyer</SelectItem>
                  <SelectItem value="Attendee">Attendee</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            {/* Date Range */}
            <Select>
              <SelectTrigger
                className="h-[40px] w-[160px] border-none bg-btnprimary text-white outline-none"
                color="text-white"
              >
                <SelectValue placeholder="Date Range" />
              </SelectTrigger>
              <SelectContent className="border-none bg-primary text-white outline-none">
                <SelectGroup>
                  <SelectItem value="Past 3 Months">Past 3 Months</SelectItem>
                  <SelectItem value="Past 6 Months">Past 6 Months</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <div className="flex h-[40px] items-center rounded-lg bg-[#EFF8FF] p-3">
              <input
                className="w-[310px] bg-transparent outline-none placeholder:text-[#3B5998] max-md:w-[300px] max-sm:w-[260px] max-sm:placeholder:text-sm"
                type="text"
                placeholder="Search order number, email, or name"
              />
              <Image
                src={SearchIcon}
                alt="search_icon"
                className="h-[19px] w-[19px]"
              />
            </div>
          </div>
          <div className="mt-5">
            <OrganizerOrdersTable />
          </div>
        </div>
      </div>
    </>
  );
}
