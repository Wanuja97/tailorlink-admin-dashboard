import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    BarElement
} from "chart.js";
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Filler,
    Title,
    Tooltip,
    Legend,
    BarElement
)

function BarChart() {
    const data = {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September"],
        datasets: [
            {
                label: "Brutto",
                borderRadius: 30,
                data: [0.1, 0.4, 0.2, 0.3, 0.7, 0.4, 0.6, 0.3, 0.4],
                backgroundColor: "rgba(32,214,155,1)",
                barThickness: 10,
            },
            {
                label: "Netto",
                borderRadius: 20,
                data: [0.07, 0.3, 0.15, 0.2, 0.5, 0.3, 0.8, 0.2, 0.4],
                backgroundColor: "rgba(1, 98, 255, 1)",
                barThickness: 10,
            }
        ]
    }
    const options = {
        plugins:{
            legend:{
                position: "top",
                align: "start",
                labels: {
                    boxWidth: 7,
                    usePointStyle: true,
                    pointStyle: "circle",
                },
                title: {
                    text: "Sales Report",
                    display: true,
                    color: "#000",
                    font: {
                        size: 18,
                    },
                },
            },
        },
        elements: {
            bar: {
                barPercentage: 0.3,
                categoryPercentage: 1,
            },
        },
        scales: {
            xAxis: {
                display: false,
            },
            yAxis: {
                max: 1,
            },
        },
    }
    return (
        <>
            <Bar data={data} height={300} options={options}/>
        </>
    )
}

export default BarChart