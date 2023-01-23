import React from 'react';
import {Bar} from "react-chartjs-2"
import {Chart as Chartjs} from "chart.js/auto"
const BarChart = ({charData}) => {
    return (
        <div style={{width:'40%'}}>
            <Bar data={charData} />
        </div>
    );
}

export default BarChart;
