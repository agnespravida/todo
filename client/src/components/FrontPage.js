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
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  function onChangeEmail(event) {
    setEmail(event.target.value)
  }
  function onChangePassword(event){
    setPassword(event.target.value)
  }
  function onSubmit() {
    props.login(email, password)
  }
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <LoginCard 
            onChangeEmail={onChangeEmail}
            onChangePassword={onChangePassword}
            onSubmit={onSubmit}/>
          </Route>
          <Route exact path="/register">
            <RegisterCard />
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