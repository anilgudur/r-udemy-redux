import React, { Component } from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import * as actionCreators from "../../store/actions/actions";

class Counter extends Component {
  // state = {
  //   counter: 0
  // };

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
        <CounterControl
          label='Add 10'
          clicked={this.props.onAddCounterAction}
        />
        <CounterControl
          label='Subtract 10'
          clicked={this.props.onSubstractCounterAction}
        />
        <hr />
        <button
          onClick={() => this.props.onStoreResultAction(this.props.counter)}
        >
          Store Result
        </button>
        {this.props.mapResults.length > 0 ? (
          <ul>
            {this.props.mapResults.map(row => (
              <li
                key={row.id}
                onClick={() => this.props.onDeleteResultAction(row.id)}
              >
                {row.value}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.ctr.counter,
    mapResults: state.res.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounterAction: () => dispatch(actionCreators.increment()),
    onDecrementCounterAction: () => dispatch(actionCreators.decrement()),
    onAddCounterAction: () => dispatch(actionCreators.add(10)),
    onSubstractCounterAction: () => dispatch(actionCreators.subtract(10)),
    onStoreResultAction: counter =>
      dispatch(actionCreators.storeResult(counter)),
    onDeleteResultAction: id => dispatch(actionCreators.deleteResult(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
