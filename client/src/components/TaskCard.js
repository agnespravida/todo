import './Main.css'

function TaskCard () {
  return (
    <div className="card task-card">
      <div className="card-header">
        <a href="/" className="close" data-dismiss="alert" aria-label="close">&times;</a>
       <h4><i className="far fa-circle" style={{fontSize: '24px'}}></i><i className="far fa-check-circle" style={{fontSize: '24px'}}></i> Task Name</h4>
      </div>
      <div className="card-body">
      <p className="card-text">
        Task Description <br /><br/>
        <i className='far fa-calendar' style={{fontSize: '24px'}}></i> Due on: 10/01/2021 <br/><br/>
        <button className="btn btn-info"><i className="far fa-edit" style={{fontSize: '18px'}}> Edit Task</i></button>
      </p>
      </div>
    </div>
  )
}

export default TaskCard