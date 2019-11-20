import React from "react";
import RenderApp from "./RenderApp";
import {Provider} from 'react-redux';
import store from '../../modules/redux/store';

import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
          <Provider store={store}>
           <RenderApp/>
          </Provider>
      </div>
    );
  }
}

export default App;
