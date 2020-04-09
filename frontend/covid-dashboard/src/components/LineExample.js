import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

class LineExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: null,
    };
  }
  componentDidMount() {
    axios
      .get(
        "http://localhost:5300/saudi"
      )
      .then((response) => {
        console.log(response);
        this.setState({
          info: response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    var data;
    this.state.info&&console.log(this.state.info[0])

    // if (this.state.info) {
    //     console.log(this.state.info[0].Date.getDate())
    //     // let labels=
    //     // this.state.info.foEach()
    //   data = {
    //     labels: [
    //       "January",
    //       "February",
    //       "March",
    //       "April",
    //       "May",
    //       "June",
    //       "July",
    //     ],
    //     datasets: [
    //       {
    //         label: "Confiremed Cases",
    //         fill: false,
    //         lineTension: 0.1,
    //         backgroundColor: "rgba(75,192,192,0.4)",
    //         borderColor: "rgba(75,192,192,1)",
    //         borderCapStyle: "butt",
    //         borderDash: [],
    //         borderDashOffset: 0.0,
    //         borderJoinStyle: "miter",
    //         pointBorderColor: "rgba(75,192,192,1)",
    //         pointBackgroundColor: "#fff",
    //         pointBorderWidth: 1,
    //         pointHoverRadius: 5,
    //         pointHoverBackgroundColor: "rgba(75,192,192,1)",
    //         pointHoverBorderColor: "rgba(220,220,220,1)",
    //         pointHoverBorderWidth: 2,
    //         pointRadius: 1,
    //         pointHitRadius: 10,
    //         data: [65, 59, 80, 81, 56, 55, 40, 10, 1000],
    //       },
    //     ],
    //   };
    // }
    return (
      <div>
        <h2>Line Example</h2>
        {/* <Line data={data} /> */}
      </div>
    );
  }
}
export default LineExample;
