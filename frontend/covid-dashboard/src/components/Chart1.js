import React, { Component } from "react";
import axios from "axios";
import MyChart from "./MyChart.js";
import {Bar} from 'react-chartjs-2';

class Chart1 extends Component {
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

  render() {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: 'rgba(63,191,127,1)',
            borderColor: 'rgba(63,191,127,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 80, 81, 56, 55, 40]
          }
        ]
      };
    return (
      <div style={{width:'50%'}}>

        This is my component
        <Bar
          data={data}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: true
          }}
        />
      </div>
    );
  }
}

export default Chart1;
