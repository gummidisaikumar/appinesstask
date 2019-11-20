import React from "react";
import RenderApp from "./RenderApp";
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <RenderApp/>
      </div>
    );
  }
}

export default App;
