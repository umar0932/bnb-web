import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css"; // Import the calendar styles

const localizer = momentLocalizer(moment);

const myEventsList = [
  {
    start: moment("2023-09-23T10:00:00").toDate(),
    end: moment("2023-09-23T13:00:00").toDate(),
    title: "Concert",
  },
  {
    start: moment("2023-09-26T10:00:00").toDate(),
    end: moment("2023-09-28T13:00:00").toDate(),
    title: "Music Workshop",
  },
  {
    start: moment("2023-09-24T10:00:00").toDate(),
    end: moment("2023-09-24T13:00:00").toDate(),
    title: "Conference",
  },
];

export default function OrganizerEventCalendar() {
  const handleSelect = () => {
    window.open("/create-event-page/welcome"); // Open in a new tab
  };

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        selectable={true}
        onSelectSlot={handleSelect}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        views={["month", "week"]}
        formats={{ weekdayFormat: "dddd" }}
        className="table-drop-shadow rounded-lg bg-[#F3FAFF] p-3"
      />
    </div>
  );
}
