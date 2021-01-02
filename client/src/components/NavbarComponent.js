import './assets/Main.css'
import Logo from './img/logonavbar.png'

function Navbar (props) {
  function logout() {
    props.logout()
  }

  return (
    <nav className="navbar glass">
      <div className="navbar-brand">
        <img src={Logo} width="40" height="40" alt=""/> FancyToDo
      </div>
      <button id="btn-logout" className="btn btn-secondary ml-auto" onClick={logout}>logout</button>
    </nav>
  )
}


export default Navbar