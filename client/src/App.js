import FrontPage from "./components/FrontPage"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <FrontPage/>
          </Route>
          <Route exact path="/register">
            <FrontPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
