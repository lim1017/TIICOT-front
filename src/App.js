import React from "react";
import "./App.css";
import Main from "./pages/Main";
import About from "./pages/About";
import AppBar from "./components/AppBar";

import { HashRouter, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

// import history from "./history";

const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <HashRouter history={history}>
        <AppBar />

        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
