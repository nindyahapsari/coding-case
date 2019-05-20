import React from "react";
import "../App.css";
import { Provider } from "react-redux";
import store from "../store";
import Counter from "../components/counter";
import Home from "../components/Home";
import Navigation from "../components/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Provider store={store}>
          <Route path={"/"} component={Navigation} />
          <Route exact path={"/Home"} component={Home} />
          <Route exact path={"/Counter"} component={Counter} />
        </Provider>
      </Switch>
    </Router>
  );
};

export default App;
