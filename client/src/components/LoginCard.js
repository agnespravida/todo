import './assets/LoginRegister.css'
import logo from './img/logonavbar.png'
import { Link } from 'react-router-dom'

function LoginCard (props) {

  function onChangeLogin(event) {
    props.onChangeLogin(event)
  }
  // function onChangeEmail(event) {
  //   props.onChangeEmail(event)
  // }
  // function onChangePassword(event) {
  //   props.onChangePassword(event)
  // }
  function onSubmit(){
    props.onSubmit()
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
        <span style={{marginBottom: '10px', color: 'white'}}>Don't have an account? <Link to="/register">Sign Up Here!</Link></span>
        <form onSubmit={onSubmit}>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fas fa-envelope"></i></span>
                </div>
                <input type="text" className="form-control" placeholder="email" name="email" onChange={onChangeLogin}/>
              </div>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fas fa-key"></i></span>
                </div>
                <input type="password" className="form-control" placeholder="password" name="password" onChange={onChangeLogin}/>
              </div>
              <div className="form-group">
                <input type="submit" value="Login" className="btn btn-info"/>
              </div>   
        </form>
      </div>
    </div>
  )
}

export default LoginCard