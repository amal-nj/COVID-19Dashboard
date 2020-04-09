import React, { Component } from "react";
import logo from './logo.svg';
import axios from "axios";

import './App.css';
import Chart1 from './components/Chart1.js'
import Global from "./components/Global";
import LineExample from "./components/LineExample"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5300")
      .then((response) => {
        console.log(response);
        this.setState({
          data: response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render(){
  return (
    <div className="App">
    <Chart1/>
    <Global data={this.state.data}/>
    <LineExample/>
    </div>
  );
  }
}

export default App;
