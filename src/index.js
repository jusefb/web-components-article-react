import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";
import { VoteCounter } from "./VoteCounter";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div className="App">
        <VoteCounter
          header="Web Components"
          subheader="Do you like Web Components?"
        >
          Vote for Web Components now !!
        </VoteCounter>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
