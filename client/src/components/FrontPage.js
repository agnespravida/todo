import './FrontPage.css'
import background from './img/video.mp4'
import LoginCard from "./LoginCard.js"
import RegisterCard from "./RegisterCard.js"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function FrontPage() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <LoginCard />
          </Route>
          <Route exact path="/register">
            <RegisterCard />
          </Route>
        </Switch>
      </Router>
      <div className="bg-video">
        <video className="bg-video-content" autoPlay muted loop src={background} type="video/mp4" ></video>
      </div>
    </div>
  )
}

export default FrontPage