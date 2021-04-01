import React, { Component } from "react"

import Provinces from './components/Provinces'
import Territories from './components/Territories'
import Covid19 from "./components/Covid19"

import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedMenu: 'p'
    }
  }

  render() {
    return (
      <div className="App">

        <div className="menu">
          <p className="menu-item" onClick={() => this.setState({ selectedMenu: 'p' })}>About Me</p>
          <p className="menu-item" onClick={() => this.setState({ selectedMenu: 't' })}>My Town</p>
        </div>

        {this.state.selectedMenu === 'p' ?
          <Provinces />
          :
          <Territories />
        }
      </div>
    );
  }
}


export default App;
