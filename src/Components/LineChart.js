import React from 'react';
import {Line} from "react-chartjs-2"
import {Chart as ChartJS} from "chart.js/auto"
const LineChart = ({charData}) => {
    return (
        <div style={{width:'40%'}}>
            <Line data={charData} />
        </div>
    );
}

export default LineChart;