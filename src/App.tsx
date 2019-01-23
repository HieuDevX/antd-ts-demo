import React, { Component } from "react";
import "./App.css";
import TypeButton from "./Components/Buttons/TypeButton";
import SizeButton from "./Components/Buttons/ButtonSizeComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TypeButton />
        <SizeButton />
      </div>
    );
  }
}

export default App;
