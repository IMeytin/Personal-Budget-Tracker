import { useDispatch, useSelector } from "react-redux";
import { setTransactionsData, resetTransactionData, addSubmittedData, getTransactionsData } from "../../redux/transactionsSlice";

function TransactionsForm() {
    const radioOptions = [
        {value: 'Rent', label: 'Rent'},
        {value: 'Grocery', label: 'Grocery'},
        {value: 'Shopping', label: 'Shopping'},
        {value: 'Dining out', label: 'Dining Out'},
        {value: 'Other', label: 'Other'}
    ];

    const transactionsData = useSelector(getTransactionsData)
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const {name , value} = e.target;

        dispatch(setTransactionsData({name, value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addSubmittedData());
        dispatch(resetTransactionData())
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <label>Category</label>
            <div className="input-radio-container">
                {radioOptions.map( option => (
                    <div key={option.value}>
                        <input
                        required
                        type="radio"
                        name="category"
                        value={option.value}
                        id={option.value}
                        checked={transactionsData.category === option.value}
                        onChange={handleChange}/>
                        <label htmlFor={option.value}>{option.label}</label>
                    </div>
                ))}
            </div>
        
            <div>
                <label htmlFor="date">Date</label><br />
                <input 
                required
                name="date"
                type="date" 
                id="date" 
                value={transactionsData.date}
                onChange={handleChange}/>
            </div>

            <div>
                <label htmlFor="amount">Amount:</label><br />
                <div className="amount-wrapper">
                    <span className="dollar-sign">$</span>
                    <input 
                    required
                    type="number"
                    id="amount" 
                    name="amount"
                    value={transactionsData.amount}
                    onChange={handleChange}/>
                </div>
            </div>
            <button className="action-btn btn-add-expanse" type="submit">Add Expense</button>
    </form>
    );
}

export default TransactionsForm;