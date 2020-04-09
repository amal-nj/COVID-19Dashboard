import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";

class Global extends Component {
  constructor(props) {
    super(props);
    this.state = {
      global: null,
      data: null,
    };
  }
  
  render() {
    var global;
    if (this.props.data) {
      global = this.props.data[0].Global;
    }
    console.log(global);
    var data;
    if (global) {
      data = {
        labels: ["Active Cases", "Total Deaths", "Total recovereed"],
        datasets: [
          {
            data: [
              global.TotalConfirmed -
                global.TotalDeaths -
                global.TotalRecovered,
              global.TotalDeaths,
              global.TotalRecovered,
            ],
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          },
        ],
      };
    }
    return (
      <div>
        <h2>Total Confirmed Cases Globally</h2>
        {data && <Doughnut data={data} />}
      </div>
    );
  }
}

export default Global;
