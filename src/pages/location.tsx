import Header from "@/components/Header/Header";
import { Progress } from "@/core/ui/progress";
import Autocomplete from "@/components/AutoComplete/AutoCompleteAcc";
import Link from "next/link";

export default function Location() {
  return (
    <>
      <div className="flex h-full flex-col  sm:h-screen">
        <Header />
        <div className="flex h-full flex-col lg:flex-row">
          <div className="flex w-full flex-col bg-[#EFF8FF]  p-0 max-lg:order-2 sm:p-10 lg:w-1/2">
            <div className="m-5 bg-white p-5 sm:p-10 ">
              <div className="flex flex-col">
                <span className="text-3xl text-btnprimary">
                  Looking for events in
                </span>
                <Autocomplete />
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col justify-center p-10 max-lg:order-1 lg:ml-10 lg:w-1/2">
            <div className="flex flex-col gap-5">
              <span className="text-5xl font-bold text-primary max-sm:text-4xl">
                Pick where you'd
                <br className="max-sm:hidden" /> like to go out
              </span>
              <span className="text-xl text-[#757575]">
                We'll save this location for you.
              </span>
              <div className="flex flex-col gap-2">
                <Progress
                  value={66}
                  className="w-[70%] bg-[#B2DBFE] text-[#B2DBFE]"
                />
                <span className="text-secondary">
                  Step <span className="text-btnsecondary">2</span> of{" "}
                  <span className="text-btnsecondary">3</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="div-drop-shadow flex items-center justify-end gap-5 p-5">
          <Link href="/interests">
            <button className="flex h-[43px] w-[120px] items-center justify-center rounded-sm bg-[#DEF0FF] p-3 font-bold text-primary">
              Previous
            </button>
          </Link>
          <Link href="/favorites">
            <button className="flex h-[43px] w-[120px] items-center justify-center rounded-sm bg-btnprimary p-3 font-bold text-white hover:bg-btnsecondary">
              Next
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
