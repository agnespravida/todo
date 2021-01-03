import './assets/LoginRegister.css'
import logo from './img/logonavbar.png'
import { Link } from 'react-router-dom'
import React from 'react'

function RegisterCard (props) {
  const [registerUser, setRegister] = React.useState({
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    username: ''
  })

  function handleChange(event){
    setRegister({...registerUser, [event.target.name]: event.target.value})
  }

  function register() {
    props.register(registerUser)
  }


  return (
    <div className="center">
      <div className="card login-register">
      <img src={logo} style={{width: 'auto', marginTop: '15px'}} className="mx-auto" alt="Logo"></img>
        <h3 style={{
          fontFamily: 'Fredoka One',
          color: 'white',
          marginTop: '10px',
          marginBottom: '10px'
        }}>Welcome to Fancy ToDo!</h3>
        <span style={{marginBottom: '10px', color: 'white'}}>Already have an account? <Link to="/">Login Here!</Link></span>
        <form onSubmit={register}>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fas fa-envelope"></i></span>
                </div>
                <input type="text" className="form-control" placeholder="email" name="email" onChange={handleChange}/>
              </div>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fas fa-user"></i></span>
                </div>
                <input type="text" className="form-control" placeholder="first name" name="first_name" onChange={handleChange}/>
              </div>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fas fa-user"></i></span>
                </div>
                <input type="text" className="form-control" placeholder="last name" name="last_name" onChange={handleChange}/>
              </div>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fas fa-user"></i></span>
                </div>
                <input type="text" className="form-control" placeholder="username" name="username" onChange={handleChange}/>
              </div>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fas fa-key"></i></span>
                </div>
                <input type="password" className="form-control" placeholder="password" name="password" onChange={handleChange}/>
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