import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import Welcome from "./components/welcome";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Welcome} />
      </Router>
    </div>
  );
}

export default App;
