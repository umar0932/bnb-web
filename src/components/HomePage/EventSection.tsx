import EventCard from "../Cards/EventCard";
import events from "../../utils/fakeBackend";

export default function EventSection() {
  const eventsArray = events;

  return (
    <>
      <div className="flex flex-col gap-2 bg-primary p-10">
        <div className="container flex max-h-[350px] flex-col max-md:items-center max-md:justify-center">
          <span className="text-[200px] font-bold text-[#0F3261] max-lg:text-[150px] max-sm:text-[70px]">
            ONLINE
          </span>
          <span className="relative bottom-[155px] text-end text-[140px] font-bold  text-[#1556AD] max-2xl:bottom-[120px] max-lg:bottom-[80px] max-lg:text-[90px] max-sm:bottom-[20px] max-sm:text-[50px]">
            EVENTS
          </span>
        </div>
        <div className=" flex flex-wrap items-center justify-center gap-10 p-5">
          {eventsArray.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
        <div className="flex  w-full items-center justify-center">
          <button className=" mt-8 w-[450px] rounded-lg bg-btnprimary p-2 font-bold text-white hover:bg-btnsecondary">
            Show more
          </button>
        </div>
      </div>
    </>
  );
}
