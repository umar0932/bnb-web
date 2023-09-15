import EventCard from "@/components/Cards/EventCard";
import Copyright from "@/components/Copyright/Copyright";
import Header from "@/components/Header/Header";
import { events } from "@/utils/fakeBackend";

export default function Likes() {
  const eventsArray = events;
  return (
    <>
      <div className=" min-2xl:items-center flex h-[100vh] flex-col">
        <Header colorScheme="likes-page-header" />
        <div className="h-full">
          <div className="mt-10 flex gap-10 overflow-auto bg-[#DEF0FF] p-10">
            {eventsArray.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
        </div>
        <Copyright />
      </div>
    </>
  );
}
