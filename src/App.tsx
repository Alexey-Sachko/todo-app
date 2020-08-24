import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MainPage from "./pages/MainPage";
import OtherPage from "./pages/OtherPage/OtherPage";

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/other">Other</Link>
      </div>
      <Switch>
        <Route path="/">
          <MainPage />
        </Route>
        <Route path="/other">
          <OtherPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
