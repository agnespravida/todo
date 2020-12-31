import './LoginRegister.css'
import logo from './img/logonavbar.png'
import { Link } from 'react-router-dom'

function RegisterCard () {
  return (
    <div className="center">
      <div className="card">
      <img src={logo} style={{width: 'auto', marginTop: '15px'}} className="mx-auto" alt="Logo"></img>
        <h3 style={{
          fontFamily: 'Fredoka One',
          color: 'white',
          marginTop: '10px',
          marginBottom: '10px'
        }}>Welcome to Fancy ToDo!</h3>
        <span style={{marginBottom: '10px', color: 'white'}}>Already have an account? <Link to="/">Login Here!</Link></span>
        <form>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fas fa-envelope"></i></span>
                </div>
                <input type="text" className="form-control" placeholder="email"/>
              </div>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fas fa-user"></i></span>
                </div>
                <input type="text" className="form-control" placeholder="username"/>
              </div>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fas fa-key"></i></span>
                </div>
                <input type="password" className="form-control" placeholder="password"/>
              </div>
              <div className="form-group">
                <input type="submit" value="Sign Up" className="btn btn-info"/>
              </div>   
        </form>
      </div>
    </div>
  )
}

export default RegisterCard