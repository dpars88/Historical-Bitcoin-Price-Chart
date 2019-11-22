import React from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';


class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = ({
      dateData: [],
      numberData: []
    })
  }

  getData(){
    axios.get('/data')
      .then((response) => {
        const bitcoinData = response.data.bpi;
        console.log(bitcoinData)
        const dateArray = [];
        const numberArray = [];
        for (var key in bitcoinData) {
          dateArray.push(key);
          numberArray.push(bitcoinData[key])
        }
        console.log('this is date array', dateArray);
        console.log('this is number array', numberArray);

        this.setState ({
          dateData: dateArray,
          numberData: numberArray
        })
      })
      .catch((err) => {
        console.error(err)
      })
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    const months = this.state.dateData;
    const values = this.state.numberData;
    const data = {
      labels: months,
      datasets: [
        {
          label: 'Bitcoin Data',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(204,51,51,0.2)',
          borderColor: 'rgba(204,51,51,0.2)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(0,153,153,0.2)',
          pointBackgroundColor: 'rgba(0,153,153,0.2)',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(0,153,153,0.2)',
          pointHoverBorderColor: 'rgba(0,153,153,0.2)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: values
        }
      ]
    }
    return (
      <div>
        <h2>Historical Bitcoin Prices</h2>
        <Line ref="chart" data={data}/>
      </div>
    )
  }
}

export default Main;