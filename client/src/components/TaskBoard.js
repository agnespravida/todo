import './assets/Main.css'
import TaskCard from './TaskCard'

function TaskBoard (props) {
  function deleteTodo(id) {
    props.deleteTodo(id)
  }

  return (
    <div className="card task-board glass">
      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li className="nav-item">
          <a className="nav-link active" id="pills-on-going-tab" data-toggle="pill" href="#pills-on-going" role="tab" aria-controls="pills-home" aria-selected="true">On Going</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="pills-completed-tab" data-toggle="pill" href="#pills-completed" role="tab" aria-controls="pills-contact" aria-selected="false">Completed</a>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div className="tab-pane fade show active" id="pills-on-going" role="tabpanel" aria-labelledby="pills-home-tab">
          {props.todos.filter(todo => todo.status === 'on going').map(todo => <TaskCard key={todo.id} todo={todo} deleteTodo={deleteTodo}/>)}
        </div>
        <div className="tab-pane fade" id="pills-completed" role="tabpanel" aria-labelledby="pills-contact-tab">
          {props.todos.filter(todo => todo.status === 'completed').map(todo => <TaskCard key={todo.id} todo={todo} deleteTodo={deleteTodo}/>)}
        </div>
      </div>
    </div>
  )
}

export default TaskBoard