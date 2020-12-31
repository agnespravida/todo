import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

function FullCalendarComponent() {
  return (
    <div style={{margin: '40px'}}>
      <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        height="750px"
      />
    </div>
  )
}

export default FullCalendarComponent