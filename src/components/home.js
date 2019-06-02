import React from "react";

export default class Home extends React.Component {
  homeAction(t) {
    let day = new Date().getTime();
    console.log("i am home", day, t);
    this.props.homeAction(day);
  }
  render() {
    return (
      <div>
        <h1> i am home </h1>
        <button type="button" onClick={this.homeAction.bind(this, 1)}>
          home submit
        </button>
        <hr />
      </div>
    );
  }
}
