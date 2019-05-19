import React from "react";
import "../App.css";
import { Provider } from "react-redux";
import store from "../store";
import Counter from "../components/counter";
import Home from "../components/Home";

const App = () => {
  return (
    <Provider store={store}>
      <Home />
      <Counter />
    </Provider>
  );
};

export default App;
