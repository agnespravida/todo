function EditForm (props) {
  let due_date = props.populate.due_date.slice(0,10)
 return (
  <div className="modal" id="edit-form" tabIndex="-1" role="dialog" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" style={{fontFamily: 'Fredoka One', color: '#5ec0ca', fontSize: '3rem' }}>Edit Task</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="input-group form-group">
            <div className="input-group-prepend">
              <span className="input-group-text"><i className="fas fa-clipboard"></i></span>
            </div>
            <input type="text" className="form-control" placeholder="task title" name="title" value={props.populate.title}/>
          </div>
          <div className="input-group form-group">
            <div className="input-group-prepend">
              <span className="input-group-text"><i className="fas fa-sticky-note"></i></span>
            </div>
            <input type="text" className="form-control" placeholder="description" name="description" value={props.populate.description}/>
          </div>
          <div className="input-group form-group">
            <div className="input-group-prepend">
              <span className="input-group-text"><i className="fas fa-calendar"></i></span>
            </div>
            <input type="date" className="form-control" placeholder="due date" name="due_date" value={due_date}/>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
          <button type="button" className="btn btn-primary">Save Change</button>
        </div>
      </div>
    </div>
  </div>
 )
}

export default EditForm