import './Main.css'
import Logo from './img/logonavbar.png'

function Navbar () {
  return (
    <nav className="navbar glass">
      <div className="navbar-brand">
        <img src={Logo} width="40" height="40" alt=""/> FancyToDo
      </div>
      <button id="btn-logout" className="btn btn-secondary ml-auto">logout</button>
    </nav>
  )
}


export default Navbar