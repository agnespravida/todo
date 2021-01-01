import './FrontPage.css'
import './Main.css'
import background from './img/background.png'
import Navbar from './NavbarComponent'
import TaskBoard from './TaskBoard'
import FullCalendarComponent from './FullCalendar'
import AddForm from './AddForm'

function MainPage () {
  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-4">
            <button className="btn btn-lg btn-info task-board glass" data-toggle="modal" data-target="#add-form">Add Task</button>
            <AddForm />
            <TaskBoard />
          </div>
          <div className="col-8">
            <FullCalendarComponent />
          </div>
        </div>
      </div>
      <div className="bg-video">
        <img className="bg-video-content" src={background} alt="background" ></img>
      </div>
    </div>
  )
}



export default MainPage