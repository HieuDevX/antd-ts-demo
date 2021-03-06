import React, { Component } from "react";
import "./App.css";
import TypeButton from "./Components/Buttons/TypeButton";
import IconButton from "./Components/Buttons/IconButton";
import SizeButton from "./Components/Buttons/SizeButton";
import DisableButton from "./Components/Buttons/DisabledButton";
import LoadingButton from "./Components/Buttons/LoadingButton";
import MultipleButtons from "./Components/Buttons/MultipleButtons";
import BasicGrid from "./Components/Layout/BasicGrid";
import GridGutter from "./Components/Layout/GridGutter";
import Playground from "./Components/Layout/Playground";
import Playground1 from "./Components/Layout/Playground1";
import BasicStructureLayout from "./Components/Layout/BasicStructureLayout";
import SiderDemo from "./Components/Layout/SiderDemo";
import SiderCustomTrigger from "./Components/Layout/SiderCustomTrigger";
import SiderResponsive from "./Components/Layout/SiderResponsive";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <TypeButton /> */}
        {/* <IconButton /> */}
        {/* <SizeButton /> */}
        {/* <DisableButton /> */}
        {/* <LoadingButton /> */}
        {/* <MultipleButtons /> */}
        {/* <BasicGrid /> */}
        {/* <GridGutter /> */}
        {/* <Playground1 /> */}
        {/* <Playground /> */}
        {/* <BasicStructureLayout /> */}
        <SiderDemo />
        {/* <SiderCustomTrigger /> */}
        {/* <SiderResponsive /> */}
      </div>
    );
  }
}

export default App;
