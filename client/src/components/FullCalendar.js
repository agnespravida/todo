import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

function FullCalendarComponent(props) {
  let events = []
  for (let i = 0; i < props.todos.length; i++){
    if(props.todos[i].status === 'on going'){
      events.push({
        title: props.todos[i].title,
        date: props.todos[i].due_date.slice(0, 10)
      })
    }
  }
  return (
    <div style={{margin: '40px'}}>
      <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        height="750px"
        events = {events}
      />
    </div>
  )
}

export default FullCalendarComponent