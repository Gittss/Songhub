import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import Welcome from "./components/welcome";
import Signin from "./components/signin";
import Home from "./components/home";
import Login from "./components/login";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Welcome} />
        <Route path="/signin" component={Signin} />
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
      </Router>
    </div>
  );
}

export default App;
