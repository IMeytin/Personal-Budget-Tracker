import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { getFinaceData } from '../../redux/financeSlice';

function DoughtnutChart() {
    const income = useSelector(state => getFinaceData(state).income);
    const budget = useSelector(state => getFinaceData(state).budget);

    const data = {
        labels: ['Income', 'Budget'],
        datasets: [
            {
                data: [income, budget],
                backgroundColor: [
                    '#28B463',
                    '#246EB9'
                ]
            }
        ]
    }

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
                text: 'Income-Budget Balance Chart',
                font: {
                    size: 20,
                    family: `'Montserrat', sans-serif`
                },
                color: '#003366'
            }
        }
    }

    return ( 
        <div className='chart'>
            <Doughnut data={data} options={options}/>
        </div>
     );
}

export default DoughtnutChart;