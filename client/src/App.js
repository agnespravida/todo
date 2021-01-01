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
  function login(email, password) {
    let payload = {
      email,
      password
    }
    axios({
      url: 'http://localhost:4000/login',
      data: payload,
      method: 'post'
    })
    .then(response => {
      console.log("Hallo")
      localStorage.setItem('test', 'test')
      setAuth(true)
    })
  }
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
