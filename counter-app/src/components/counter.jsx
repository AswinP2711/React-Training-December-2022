import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    if (this.state.count !== 0) {
        this.setState({ count: this.state.count - 1 });
    } 
  };

  render() {
    return (
      <div>
        <span>{this.formatCount()}</span>
        <br />
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    if (count === 0) {
      return "Zero";
    } else {
      return count;
    }
  }
}

export default Counter;
