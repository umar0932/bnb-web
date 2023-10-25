import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css' // Import the calendar styles

const localizer = momentLocalizer(moment)

const myEventsList = [
  {
    start: moment('2023-09-26T10:00:00').toDate(),
    end: moment('2023-09-26T13:00:00').toDate(),
    title: 'Concert'
  }
]

// const today = moment().startOf("day").toDate(); // Get today's date

const dayPropGetter = (date: Date) => {
  // Check the day of the week (0 for Sunday, 1 for Monday, etc.)
  const dayOfWeek = moment(date).day()

  // Apply different classes based on the day of the week
  switch (dayOfWeek) {
    case 0: // Sunday
      return { className: 'sunday' } // Apply a class for Sundays
    case 1: // Monday
      return { className: 'monday' } // Apply a class for Mondays
    case 2: // Tuesday
      return { className: 'tuesday' } // Apply a class for Tuesdays
    case 3: // Wednesday
      return { className: 'wednesday' } // Apply a class for Wednesdays
    case 4: // Thursday
      return { className: 'thursday' } // Apply a class for Thursdays
    case 5: // Friday
      return { className: 'friday' } // Apply a class for Fridays
    case 6: // Saturday
      return { className: 'saturday' } // Apply a class for Saturdays
    default:
      return {} // For other days, no special class
  }
}

export default function OrganizerEventCalendar() {
  const handleSelect = () => {
    window.open('/create-event-page/welcome') // Open in a new tab
  }

  // const today = moment().startOf('day').toDate() // Get today's date

  // // Set the initial date to the first day of the current month
  // const initialDate = moment().startOf('month').toDate()

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        selectable={true}
        onSelectSlot={handleSelect}
        startAccessor='start'
        endAccessor='end'
        style={{ height: 500 }}
        views={['month', 'week']}
        formats={{ weekdayFormat: 'dddd' }}
        className='table-drop-shadow rounded-lg bg-[#F3FAFF] p-3'
        dayPropGetter={dayPropGetter}
        // date={initialDate} // Set the initial date to the first day of the current month
      />
    </div>
  )
}
