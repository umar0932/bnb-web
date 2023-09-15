import Copyright from "@/components/Copyright/Copyright";
import Header from "@/components/Header/Header";
import { organizers } from "@/utils/fakeBackend";
import FeaturedCard from "@/components/Cards/FearturedCard";

export default function Following() {
  const organizersArray = organizers;
  return (
    <>
      <div className=" min-2xl:items-center flex h-[100vh] flex-col">
        <Header colorScheme="follow-page-header" />
        <div className="mt-10 h-full bg-[#DEF0FF]">
          <div className="flex  justify-between gap-10 overflow-auto  p-10">
            {/* {eventsArray.map((event, index) => (
              <EventCard key={index} event={event} />
            ))} */}
            {organizersArray.map((organizer, index) => (
              <FeaturedCard key={index} organizer={organizer} />
            ))}
          </div>
        </div>
        <Copyright />
      </div>
    </>
  );
}
