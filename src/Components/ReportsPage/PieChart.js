import 'chart.js/auto';
import { Pie } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { getFinaceData } from '../../redux/financeSlice';
import { getTotalExpenses } from '../../redux/transactionsSlice';

function PieChart() {
    const budget = useSelector(state => getFinaceData(state).budget);
    const totalExpenses = useSelector(getTotalExpenses);


    const data = {
        labels: [ 'Budget', 'Expenses'],
        datasets: [
            {
                label: '$',
                data: [budget, totalExpenses],
                backgroundColor: [
                    '#009688',
                    '#DC3545'
                ]
            }
        ]
    };

    const options = {
        plugins: {
            legend: {
                labels: {
                    color: '#333333',
                    font: {
                        family: `'Roboto', sans-serif`
                    }
                }
            },
            title: {
                display: true,
                text: 'Budget VS Expenses',
                font: {
                    size: 20,
                    family: `'Montserrat', sans-serif`
                },
                color: '#003366'
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.dataset.label + tooltipItem.parsed
                    }
                }
            }
        }
    }
    
    return ( 
        <div>
            <Pie data={data} options={options}/>
        </div>
     );
}

export default PieChart;