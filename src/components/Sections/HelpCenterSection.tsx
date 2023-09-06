import { Separator } from "@/components/ui/separator";
export default function HelpCenterSection() {
  return (
    <>
      <div className="drop-shadow-custom flex flex-col items-center justify-center  bg-[#DEF0FF] p-10">
        <span className="mt-5 text-3xl font-bold text-[#313131] max-md:text-center">
          The best support and resources for event organizers in the industry
        </span>
        <div className="drop-shadow-custom relative top-[90px] flex w-full rounded-lg bg-[#F6FBFF] p-10 max-lg:p-5 ">
          <div className="container flex items-center justify-evenly gap-20 max-xl:gap-10 max-lg:gap-5 max-md:flex-col max-md:justify-center max-md:text-center">
            <span className="text-lg font-bold text-[#313131]">
              Help Center
            </span>
            <hr className="h-full w-[1px] bg-secondary max-md:hidden" />
            <span className="text-base text-[#757575]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              <br className="max-xl:hidden" />
              non vestibulum nulla. Praesent auctor molestie ornare.
            </span>
            <button className=" w-[190px] rounded-lg bg-btnprimary p-2 text-white hover:bg-btnsecondary">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
