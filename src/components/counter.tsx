import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { Button } from "reactstrap";

import {
  CounterState,
  incrementCounter,
  decrementCounter
} from "../button/index";

interface CounterBox {
  increment: () => void;
  decrement: () => void;
  count: any;
}

const Counter = ({ increment, decrement, count }: CounterBox) => {
  return (
    <div className="container">
      <div className="counterBox">
        <h1> Counter: {count.count}</h1>
        <Button
          outline
          color="primary"
          onClick={increment}
          className="theButton"
        >
          +
        </Button>
        <Button
          outline
          color="primary"
          onClick={decrement}
          className="theButton"
        >
          -
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state: CounterState) => ({
  count: state.count
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  increment: () => dispatch(incrementCounter()),
  decrement: () => dispatch(decrementCounter())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
