import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import styles from './Graph.module.css';

const options = {
  maintainAspectRatio: false,
  scales: {
    xAxes: [
      {
        gridLines: {
          color: '#ffffff'
        }
      }
    ],
    yAxes: [
      {
        gridLines: {
          display: false
        }
      }
    ]
  }
};

const BASE_URL = `https://slim-moms.goit.co.ua/api/v1/user/eats/achievement/${Date.now()}`;

class Graph extends Component {
  state = {
    chartData: {
      labels: [],
      datasets: [
        {
          label: 'Target',
          data: [],
          fill: false,
          backgroundColor: 'blue',
          borderColor: 'blue',
          lineTension: 0.5,
          borderWidth: 2,
          pointBorderWidth: 0.1
        },
        {
          label: 'Eaten',
          data: [],
          fill: false,
          backgroundColor: 'orange',
          borderColor: 'orange',
          lineTension: 0.5,
          borderWidth: 2,
          pointBorderWidth: 0.1
        }
      ]
    }
  };
  async componentDidMount() {
    const headers = {
      Authorization:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZTU5M2E4YmY0ZTlhNjQxNjE3MjkwNjgiLCJjcmVhdGVkRGF0ZSI6MTU4MjkwNTk5NTM1MCwiZXhwIjoxNTg1NDk3OTk1fQ.V0DNjQZGogaeEUleHvvIZeKRVQ2JG4AKXP_A1ZCXL8Y'
    };
    const data = await axios.get(BASE_URL, { headers });
    const day = data.data.graphData.labels;

    this.setState(prev => ({
      chartData: {
        ...prev.chartData,
        labels: [...data.data.graphData.labels],
        datasets: [
          {
            ...prev.chartData.datasets[0],
            data: [...data.data.graphData.dailyRate]
          },
          {
            ...prev.chartData.datasets[1],
            data: [...data.data.graphData.eatedProducts]
          }
        ]
      }
    }));

    // changing the Graph interface for mobile devices
    const getAverage = data => {
      let firstAverageNum = 0;
      let secondAverageNum = 0;
      let thirdAverageNum = 0;
      for (let i = 0; i < 10; i += 1) {
        firstAverageNum += data[i];
      }
      for (let i = 10; i < 20; i += 1) {
        secondAverageNum += data[i];
      }
      for (let i = 20; i < 29; i += 1) {
        thirdAverageNum += data[i];
      }
      return [
        Math.round(firstAverageNum / 10),
        Math.round(secondAverageNum / 10),
        Math.round(thirdAverageNum / 9)
      ];
    };

    if (this.props.isMobile) {
      this.setState(prev => ({
        chartData: {
          ...prev.chartData,
          labels: [
            `${day[0]}-${day[10]}`,
            `${day[10]}-${day[20]}`,
            `${day[20]}-${day[29]}`
          ],
          datasets: [
            {
              ...prev.chartData.datasets[0],
              data: getAverage(data.data.graphData.dailyRate)
            },
            {
              ...prev.chartData.datasets[1],
              data: getAverage(data.data.graphData.eatedProducts)
            }
          ]
        }
      }));
    }
  }

  render() {
    return (
      <div className={styles.graphChart}>
        <h3>ДИНАМИКА УПОТРЕБЛЕНИЯ КАЛОРИЙ ЗА МЕСЯЦ</h3>
        <Line
          data={this.state.chartData}
          width={600}
          height={340}
          options={options}
        />
      </div>
    );
  }
}

export default Graph;
