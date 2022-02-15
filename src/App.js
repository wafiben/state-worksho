import logo from "./logo.svg";
import "./App.css";

import React, { Component } from "react";
import Home from "./Home";

export default class App extends Component {
  state = { count: 0, show: false };
  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };
  componentDidMount() {
    console.log("mounting");
    /* alert('welcome') */
  }
  componentDidUpdate() {
    console.log("updating");
  }
  handleShow = () => {
    this.state.show
      ? this.setState({ show: false })
      : this.setState({ show: true });
    console.log(this.state.show);
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>+</button>
        <p>{this.state.count}</p>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.handleShow}>SHOW</button>
        {this.state.show ? <Home /> : "hello"}
      </div>
    );
  }
}
