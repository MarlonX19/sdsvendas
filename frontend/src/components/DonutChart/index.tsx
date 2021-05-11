import React, { useEffect } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';
import { BASE_URL } from 'utils/requests';

import { SaleSum } from 'types/sale';


type ChartData = {
  labels: string[];
  series: number[];
}


const DonutChart: React.FC = () => {

  let chartData: ChartData = { labels: [], series: [] };

  const fetchAmountBySeller = async() => {
    try {
      const response = await axios.get(`${BASE_URL}/sales/amount-by-seller`);
      const data = response.data as SaleSum[];
      const myLabels = data.map(x => x.sellerName);
      const mySeries = data.map(x => x.sum);

      chartData = { labels: myLabels, series: mySeries };

      console.log('response', chartData);
    }
    catch (err) {
      console.log('err', err);
    }
  }

  useEffect(() => {
    fetchAmountBySeller();
  }, [])


  const mockData = {
    series: [477138, 499928, 444867, 220426, 473088],
    labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
}

const options = {
    legend: {
        show: true
    }
}

  return (
    <div>
      <Chart 
      options={{...options, labels: chartData.labels}} 
      series={chartData.series}
      type='donut'
      height='240'
    />
  </div>
  )
}

export default DonutChart;