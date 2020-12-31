import './FrontPage.css'
import './Main.css'
import background from './img/background.png'
import Navbar from './NavbarComponent'
import TaskBoard from './TaskBoard'
import FullCalendarComponent from './FullCalendar'

function MainPage () {
  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-4">
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