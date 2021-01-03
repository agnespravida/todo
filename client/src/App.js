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
  const [todos, setTodos] = React.useState([])
  // const [todo, setTodo] = React.useState({})
  // const [idDelete, setIdDelete] = React.useState(null)
  // const [idUpdate, setIdUpdate] = React.useState(null)
  function register(registerUser){
    axios({
      url: '/register',
      data: registerUser,
      method: 'post'
    })
    .then(() => {
      setAuth(false)
    })
    .catch(err => {
      console.log(err.response.data)
    })
  }
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
      localStorage.setItem('access_token', res.data.access_token)
      setAuth(true)
      fetchTodo()
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
      if (localStorage.getItem('access_token')){
        setAuth(true)
      }
      else {
        setAuth(false)
      }
      setTodos(res.data)
      console.log(res.data)
    })
    .catch(err => {
      console.log(err.response.data)
    })
  }
  
  function addTodo(todo) {
    // setTodo(todo)
    axios({
      url: '/todos/',
      method: 'post',
      headers: {access_token: localStorage.getItem('access_token')},
      data: todo
    })
    .then((res) => {
      fetchTodo()
      console.log(res.data)
    })
    .catch(err => {
      console.log(err.response.data);
    })
  }

  // function addTodoAxios() {
  //   axios({
  //     url: '/todos/',
  //     method: 'post',
  //     headers: {access_token: localStorage.getItem('access_token')},
  //     data: todo
  //   })
  //   .then((res) => {
  //     fetchTodo()
  //     console.log(res.data)
  //   })
  //   .catch(err => {
  //     console.log(err.response.data);
  //   })
  // }

  function getIdDelete(id) {
    // setIdDelete(id)
    axios({
      url: `/todos/${id}`,
      method: 'DELETE',
      headers: {
        access_token: localStorage.getItem('access_token')
      }
    })
    .then(res => {
      fetchTodo()
    })
    .catch(err => {
      console.log(err.response.data)
    })
  }

  // function deleteTodo() {
  //   axios({
  //     url: `/todos/${idDelete}`,
  //     method: 'DELETE',
  //     headers: {
  //       access_token: localStorage.getItem('access_token')
  //     }
  //   })
  //   .then(res => {
  //     fetchTodo()
  //   })
  //   .catch(err => {
  //     console.log(err.response.data)
  //   })
  // }

  function getIdUpdateStatus(id) {
    // setIdUpdate(id)
    axios({
      url: `/todos/${id}`,
      method: 'patch',
      headers: {
        access_token: localStorage.getItem('access_token')
      }
    })
    .then(res => {
      fetchTodo()
    })
    .catch(err => {
      console.log(err.response.data)
    })
  }
  // function editStatus() {
  //   axios({
  //     url: `/todos/${idUpdate}`,
  //     method: 'patch',
  //     headers: {
  //       access_token: localStorage.getItem('access_token')
  //     }
  //   })
  //   .then(res => {
  //     fetchTodo()
  //   })
  //   .catch(err => {
  //     console.log(err.response.data)
  //   })
  // }

  function editTodo(todo, id) {
    axios({
      url: `/todos/${id}`,
      method: 'put',
      headers: {
        access_token: localStorage.getItem('access_token')
      },
      data: todo
    })
    .then(() => {
      fetchTodo()
    })
    .catch(err => {
      console.log(err.response.data)
    })
  }

  function logout() {
    setLogin({email: '', password: ''})
    setAuth(false)
    localStorage.clear()
  }

  React.useEffect(() => {
    loginAxios()
  }, [login])
  React.useEffect(() => {
    fetchTodo()
  }, [todos])
  // React.useEffect(() => {
  //   addTodoAxios()
  // })
  // React.useEffect(() => {
  //   deleteTodo()
  // })
  // React.useEffect(() => {
  //   editStatus()
  // })
    return (
      <div className="App">
        <Router>
          {isAuth 
          ? <Redirect to="/todo"/>
          : <Redirect to="/"/>}
          <Switch>
            <Route exact path="/">
              <FrontPage loginUser={loginUser} register={register}/>
            </Route>
            <Route exact path="/register">
              <FrontPage loginUser={loginUser} register={register}/>
            </Route>
            <Route exact path="/todo">
              <MainPage 
              logout={logout}
              todos={todos}
              fetchTodo={fetchTodo}
              addTodo={addTodo}
              getIdDelete={getIdDelete}
              getIdUpdateStatus={getIdUpdateStatus}
              editTodo={editTodo}
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  
}


export default App;
