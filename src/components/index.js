import React from "react";

import Home from "./home";
import About from "./about";

export default class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      message: ""
    };
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentWillMount() {
    this.dataCheck();
    console.log("componentWillMount");
  }
  componentWillUnmount() {}
  dataCheck() {
    setTimeout(() => {
      this.setState({ message: "sumit kumar dey" });
    }, 5000);
  }
  homeCB(state) {
    console.log("i am home cb=>>>>", state);
    this.setState({ message: state });
  }
  render() {
    console.log("render");
    return (
      <div>
        <Home homeAction={this.homeCB.bind(this)} />
        <About aboutP={this.state.message} />
      </div>
    );
  }
}
