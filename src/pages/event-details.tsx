import AuthHeader from "@/components/Header/AuthHeader";
import Header from "@/components/Header/Header";
export default function EventDetails() {
  return (
    <>
      <div className="flex flex-col">
        <div className="event-details-background relative ">
          <AuthHeader colorScheme="alternative" />
          <div className="via-[rgba(6, 23, 53, 0.04)] absolute left-0 top-0 z-10 h-[800px] w-full bg-gradient-to-b from-[#061735] to-transparent "></div>

          <div className=" flex h-[741px] flex-col items-center justify-center">
            {/* <div className="relative z-30 flex flex-col items-center justify-center">
              <span className="text-center text-6xl font-bold text-white max-sm:text-4xl">
                World’s Largest events platform
              </span>
              <span className="mt-10 px-4 text-center text-xl text-[#E4E4E4] max-sm:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing
                <br className="max-sm:hidden" /> elit. Curabitur non vestibulum
                nulla. Praesent auctor
                <br className="max-sm:hidden" />
                molestie ornare.
              </span>
              <button className=" mt-8 w-[350px] rounded-lg bg-btnprimary p-2 text-white hover:bg-btnsecondary max-sm:w-[290px]">
                Find next event
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
