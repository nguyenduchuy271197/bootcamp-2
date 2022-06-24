import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Huy",
    };
  }

  componentDidMount() {
    this.setState({ name: "Tien" });
  }

  clickHandler() {
    this.setState({ name: "Sean" });
  }

  render() {
    return (
      <div>
        <h1>
          My name is <span>{this.state.name}</span>
        </h1>
        <button onClick={this.clickHandler.bind(this)}>Click</button>
      </div>
    );
  }
}
