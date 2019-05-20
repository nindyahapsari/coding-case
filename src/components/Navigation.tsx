import React, { Component } from "react";
import { Link } from "react-router-dom";

interface Props {}

interface State {
  home: string;
  counter: string;
}

class Navigation extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      home: "Home",
      counter: "Counter"
    };
  }
  render() {
    return (
      <div className="navbox">
        <div className="topnav">
          <a href="" className="codecasenav">
            Code Case
          </a>
          <Link to={"/Home"}>{this.state.home}</Link>
          <Link to={"/Counter"}>{this.state.counter}</Link>
        </div>
      </div>
    );
  }
}

export default Navigation;
