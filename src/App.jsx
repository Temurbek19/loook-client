import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import HomePage from "./pages/homePage";
import LoginPage from "./pages/loginPage";
import Registrasiya from "./pages/Registrasiya";

function App() {
  const isAuthorized = JSON.parse(localStorage.getItem("token"));

  return (
    <div className="App">
      <Router>
        {isAuthorized ? (
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Redirect to="/" />
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/registrasiya" component={Registrasiya} />
            <Redirect to="/" />
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
