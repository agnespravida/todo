import FrontPage from "./components/FrontPage"
import MainPage from './components/MainPage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"
import React from 'react'
import axios from "./config/axios"


function App() {
  const [isAuth, setAuth] = React.useState(false)
  const [login, setLogin] = React.useState({
    email: '',
    password: ''
  })
  function loginUser(login) {
    setLogin(login)
    setAuth(true)
  }

  function loginAxios(){
    axios({
      url: '/login',
      method: 'post',
      data: login
    })
    .then((res) => {
      console.log(res.data)
      localStorage.setItem('access_token', res.data.access_token)
      fetchTodo()
      setAuth(true)
    })
    .catch(err => {
      console.log(err.response.data)
      setAuth(false)
    })
  }
  function fetchTodo() {
    axios({
      url: '/todos',
      method: 'get',
      headers: {access_token: localStorage.getItem('access_token')}
    })
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {
      console.log(err.res.data)
    })
  }

  function logout() {
    setLogin({email: '', password: ''})
    setAuth(false)
    localStorage.clear()
  }

  React.useEffect(() => {
    loginAxios()
  })
 
    return (
      <div className="App">
        <Router>
          {isAuth 
          ? <Redirect to="/todo"/>
          : <Redirect to="/"/>}
          <Switch>
            <Route exact path="/">
              <FrontPage loginUser={loginUser}/>
            </Route>
            <Route exact path="/register">
              <FrontPage loginUser={loginUser}/>
            </Route>
            <Route exact path="/todo">
              <MainPage logout={logout}/>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  
}


export default App;
