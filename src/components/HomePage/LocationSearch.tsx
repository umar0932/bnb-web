import { useState } from "react";
import { useAutocomplete } from "../../core/hooks/useAutocomplete";
import Image from "next/image";
import ArrowIcon from "../../../public/assets/arrow_down.svg";
import CurrentLocation from "../../../public/assets/current_location.svg";
import BrowseOnline from "../../../public/assets/browse_online.svg";
export default function LocationSearch() {
  const { searchInputRef, findMyLocation } = useAutocomplete();
  const [isAdditionalDivOpen, setIsAdditionalDivOpen] = useState(false);

  const toggleAdditionalDiv = () => {
    setIsAdditionalDivOpen(!isAdditionalDivOpen);
  };

  return (
    <>
      <div className="flex items-center justify-center bg-secondary p-10">
        {/* <Autocomplete /> */}
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="relative flex items-center gap-4">
            <span className="text-5xl font-bold text-[#89A1D3] max-sm:text-3xl">
              Popular in
            </span>

            <Image
              src={ArrowIcon}
              alt="arrow_icon"
              className="h-[30px] w-[30px] cursor-pointer max-sm:h-[20px] max-sm:w-[20px]"
              onClick={toggleAdditionalDiv}
            />
            {isAdditionalDivOpen && (
              <div className="absolute right-[-230px] top-[40px] flex flex-col gap-3 bg-[#F6FBFF] p-4 max-md:right-[-60px] max-sm:p-3">
                <div
                  className="flex cursor-pointer gap-5"
                  onClick={toggleAdditionalDiv}
                >
                  <Image src={CurrentLocation} alt="current_location" />
                  <span className="text-base text-[#3B5998]">
                    Use my current location
                  </span>
                </div>
                <div className="border border-[#9CB2DF]"></div>
                <div className="flex cursor-pointer gap-6">
                  <Image src={BrowseOnline} alt="browse_online_events" />
                  <span className="text-base text-[#3B5998]">
                    Browse online events
                  </span>
                </div>
              </div>
            )}
          </div>
          <div>
            <input
              className="w-full max-w-[180px] border-b border-white bg-transparent  p-2 text-center text-xl text-btnprimary  outline-none placeholder:text-btnprimary"
              placeholder="California"
              ref={searchInputRef}
              type="text"
            />
          </div>
        </div>
      </div>
    </>
  );
}
