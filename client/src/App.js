import FrontPage from "./components/FrontPage"
import MainPage from './components/MainPage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"
import React from 'react'
import axios from "axios"

function App() {
  const [isAuth, setAuth] = React.useState(false)
  const [emailLogin, setEmail] = React.useState('')
  const [passwordLogin, setPassword] = React.useState('')

  function login(email, password) {
    setEmail(email)
    setPassword(password)
    setAuth(true)
    console.log(email, password)
  }
  function hitAPI(emailLogin, passwordLogin) {
    let payload = {
      email: emailLogin, password: passwordLogin
    }
    return axios({
      url: 'http://localhost:4000/login',
      method: 'post',
      data: payload
    })
  }
  React.useEffect(() => {
    hitAPI(emailLogin, passwordLogin)
      .then(response => {
        setAuth(true)
        console.log(response.data)
      })
      .catch(err => {
        setAuth(false)
        console.log(err.response.data)
      })
  })

    return (
      <div className="App">
        <Router>
          {isAuth 
          ? <Redirect to="/todo"/>
          : <Redirect to="/"/>}
          <Switch>
            <Route exact path="/">
              <FrontPage login={login}/>
            </Route>
            <Route exact path="/register">
              <FrontPage login={login}/>
            </Route>
            <Route exact path="/todo">
              <MainPage />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  
}


export default App;
