import './assets/FrontPage.css'
import './assets/Main.css'
import background from './img/background.png'
import Navbar from './NavbarComponent'
import TaskBoard from './TaskBoard'
import FullCalendarComponent from './FullCalendar'
import AddForm from './AddForm'
import React from 'react'

function MainPage (props) {
  const [todo, setTodo] = React.useState({
    title: '',
    due_date: '',
    description: ''
  })
  function onChangeTodo(event) {
    setTodo({...todo, [event.target.name]: event.target.value})
  }

  function onSubmitTodo() {
    props.addTodo(todo)
  }

  function logout() {
    props.logout()
  }
  function deleteTodo(id) {
    props.deleteTodo(id)
  }

  // React.useEffect(() => {
  //   props.fetchTodo()
  // }, [props.todos])

  return (
    <div>
      <Navbar logout={logout}/>
      <div className="container-fluid">
        <div className="row">
          <div className="col-4">
            <button className="btn btn-lg btn-info task-board glass" data-toggle="modal" data-target="#add-form">Add Task</button>
            <AddForm onChangeTodo={onChangeTodo} onSubmitTodo={onSubmitTodo}/>
            <TaskBoard todos={props.todos} deleteTodo={deleteTodo}/>
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