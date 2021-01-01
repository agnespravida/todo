import './assets/Main.css'
import TaskCard from './TaskCard'

function TaskBoard () {
  return (
    <div className="card task-board glass">
      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li className="nav-item">
          <a className="nav-link active" id="pills-on-going-tab" data-toggle="pill" href="#pills-on-going" role="tab" aria-controls="pills-home" aria-selected="true">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="pills-completed-tab" data-toggle="pill" href="#pills-completed" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</a>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div className="tab-pane fade show active" id="pills-on-going" role="tabpanel" aria-labelledby="pills-home-tab">
          <TaskCard />
        </div>
        <div className="tab-pane fade" id="pills-completed" role="tabpanel" aria-labelledby="pills-contact-tab">
          <TaskCard />
        </div>
      </div>
    </div>
  )
}

export default TaskBoard