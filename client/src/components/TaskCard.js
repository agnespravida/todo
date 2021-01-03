import './assets/Main.css'



function TaskCard (props) {
  let due_date = props.todo.due_date.slice(0, 10)
  let checkButton;
  if (props.todo.status === 'on going'){
    checkButton = <i className="far fa-circle" style={{fontSize: '24px'}}></i>
  }
  else {
    checkButton = <i className="far fa-check-circle" style={{fontSize: '24px'}}></i>
  }

  function getIdDelete(){
    props.getIdDelete(props.todo.id)
  }

  function getIdUpdateStatus() {
    props.getIdUpdateStatus(props.todo.id)
  }

  function populateForm() {
    props.populateForm(props.todo)
  }

  return (
    <div>
      <div className="card task-card">
        <div className="card-header">
          <a href="/" className="close" data-dismiss="alert" aria-label="close" onClick={getIdDelete}>&times;</a>
          <h4 onClick={getIdUpdateStatus}>{checkButton} {props.todo.title}</h4>
        </div>
        <div className="card-body">
          <p className="card-text">
            {props.todo.description} <br /><br/>
            <i className='far fa-calendar' style={{fontSize: '24px'}}></i> Due on: {due_date} <br/><br/>
            <button className="btn btn-info" data-toggle="modal" data-target="#edit-form" onClick={populateForm}><i className="far fa-edit" style={{fontSize: '18px'}}> Edit Task</i></button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default TaskCard