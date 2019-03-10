import React, { Component } from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
  state = {
    counter: 0
  };

  //   counterChangedHandler = (action, value) => {
  //     switch (action) {
  //       case "inc":
  //         this.setState(prevState => {
  //           return { counter: prevState.counter + 1 };
  //         });
  //         break;
  //       case "dec":
  //         this.setState(prevState => {
  //           return { counter: prevState.counter - 1 };
  //         });
  //         break;
  //       case "add":
  //         this.setState(prevState => {
  //           return { counter: prevState.counter + value };
  //         });
  //         break;
  //       case "sub":
  //         this.setState(prevState => {
  //           return { counter: prevState.counter - value };
  //         });
  //         break;
  //     }
  //   };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.counter} />
        <CounterControl
          label='Increment'
          clicked={this.props.onIncrementCounterAction}
        />
        <CounterControl
          label='Decrement'
          clicked={this.props.onDecrementCounterAction}
        />
        <CounterControl label='Add 5' clicked={this.props.onAddCounterAction} />
        <CounterControl
          label='Subtract 5'
          clicked={this.props.onSubstractCounterAction}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounterAction: () => dispatch({ type: "INCREMENT" }),
    onDecrementCounterAction: () => dispatch({ type: "DECREMENT" }),
    onAddCounterAction: () => dispatch({ type: "ADD", value: 5 }),
    onSubstractCounterAction: () => dispatch({ type: "SUBSTRACT", value: 5 })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
