import { useSelector } from "react-redux";
import { getTotalByCategory } from "../../redux/transactionsSlice";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";


function BarChart() {
    const totalByCategory = useSelector(getTotalByCategory);
    const dataPoints = Object.values(totalByCategory);

    const data = {
        labels: ['Rent', 'Grocery', 'Shopping', 'Dining Out', 'Other'],
        datasets: [
            {
                label: 'Amount spent $',
                data: dataPoints,
                backgroundColor: [
                    '#28B463',
                    '#E74C3C',
                    '#F1C40F',
                    '#246EB9',
                    '#8E44AD'
                ],
                barPercentage: 1.0,
                categoryPercentage: 1.0
            }
        ]
    };
    const options = {
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'Expenses by category',
                font: {
                    size: 20,
                    family: `'Montserrat', sans-serif`
                },
                color: '#003366'
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.dataset.label + tooltipItem.parsed.y
                    }
                }
            }
        },
        scales: {
            y:{
                ticks: {
                    display: false
                },
                grid: {
                    display: false,
                },
                border: {
                    display: false
                }
            },
            x:{
                ticks: {
                    color: '#333333',
                    font: {
                        family: `'Roboto', sans-serif`
                    }
                },
                grid: {
                    display: false
                }
            }
        }
    }
    return ( 
        <div className="bar-chart">
            <Bar data={data} options={options}/>
        </div>
     );
}

export default BarChart;