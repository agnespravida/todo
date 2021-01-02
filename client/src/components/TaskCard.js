import './assets/Main.css'

function TaskCard (props) {
  let checkButton;
  if (props.todo.status === 'on going'){
    checkButton = <i className="far fa-circle" style={{fontSize: '24px'}}></i>
  }
  else {
    checkButton = <i className="far fa-check-circle" style={{fontSize: '24px'}}></i>
  }

  function deleteTodo(){
    props.deleteTodo(props.todo.id)
  }

  return (
    <div className="card task-card">
      <div className="card-header">
        <a href="/" className="close" data-dismiss="alert" aria-label="close" onClick={deleteTodo}>&times;</a>
        <h4>{checkButton} {props.todo.title}</h4>
      </div>
      <div className="card-body">
      <p className="card-text">
        {props.todo.description} <br /><br/>
        <i className='far fa-calendar' style={{fontSize: '24px'}}></i> Due on: {props.todo.due_date} <br/><br/>
        <button className="btn btn-info"><i className="far fa-edit" style={{fontSize: '18px'}}> Edit Task</i></button>
      </p>
      </div>
    </div>
  )
}

export default TaskCard