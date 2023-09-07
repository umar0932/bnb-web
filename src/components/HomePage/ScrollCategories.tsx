import ScrollContainer from "react-scroll-horizontal";
import events from "@/utils/fakeBackend";
import EventCard from "../Cards/EventCard";
export default function ScrollCategories() {
  const eventsArray = events;
  return (
    <>
      <div className="relative bottom-[150px] max-2xl:bottom-[90px] max-lg:bottom-[60px] max-sm:bottom-0">
        <ScrollContainer
          className="custom-scroll-container"
          style={{
            width: "100%",
            height: "450px",
            overflow: "auto",
          }}
          //   className="absolute bottom-[150px]"
        >
          <div className="  flex w-[2700px] items-center justify-center  gap-10 p-5">
            {eventsArray.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
        </ScrollContainer>
      </div>
    </>
  );
}
