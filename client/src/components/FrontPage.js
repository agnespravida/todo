import './assets/FrontPage.css'
import LoginCard from "./LoginCard.js"
import RegisterCard from "./RegisterCard.js"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import React from 'react'



function FrontPage(props) {
  const [login, setLogin] = React.useState({
    email: '',
    password: ''
  })
  

  function onChangeLogin(event) {
    setLogin({...login, [event.target.name]: event.target.value})
  }

  function onSubmit() {
    props.loginUser(login)
  }

  function register(registerUser) {
    props.register(registerUser)
  }
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <LoginCard 
            onChangeLogin={onChangeLogin}
            onSubmit={onSubmit}/>
          </Route>
          <Route exact path="/register">
            <RegisterCard register={register}/>
          </Route>
        </Switch>
      </Router>
      <div className="bg-video">
        <video className="bg-video-content" autoPlay muted loop src="https://cdn.videvo.net/videvo_files/video/free/2012-09/small_watermarked/hd0637_preview.webm" type="video/webm" ></video>
      </div>
    </div>
  )
}

export default FrontPage