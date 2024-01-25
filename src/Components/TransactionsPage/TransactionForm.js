import { useState } from "react";

function TransactionForm() {
    const radioOptions = [
        { value: 'rent', label: 'Rent'},
        {value: 'grocery', label: 'Grocery'},
        {value: 'shopping', label: 'Shopping'},
        {value: 'dining out', label: 'Dining Out'},
        {value: 'other', label: 'Other'}
    ];

    const [formData, setFormData] = useState({
        category: '',
        date: '',
        amount: ''
    });
    const [submittedData, setSubmittedData] = useState([]);

    const handleChange = (e) => {
        const {name , value} = e.target

        setFormData({
            ...formData, 
            [name]: value
        })
        console.log(formData)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData([...submittedData, formData])
        console.log(submittedData)
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <label>Category</label>
            <div className="input-radio-container">
                {radioOptions.map( option => (
                    <div key={option.value}>
                        <input
                        type="radio"
                        name="category"
                        value={option.value}
                        id={option.value}
                        checked={formData.category === option.value}
                        onChange={handleChange}/>
                        <label htmlFor={option.value}>{option.label}</label>
                    </div>
                ))}
            </div>
        
            <div>
                <label htmlFor="date">Date</label><br />
                <input 
                className="" 
                name="date"
                type="date" 
                id="date" 
                value={formData.date}
                onChange={handleChange}/>
            </div>

            <div>
                <label htmlFor="amount">Amount:</label><br />
                <div className="amount-wrapper">
                    <span className="dollar-sign">$</span>
                    <input 
                    type="text"
                    id="amount" 
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}/>
                </div>
            </div>
            <button className="action-btn btn-add-expanse" type="submit">Add Expense</button>
    </form>
    );
}

export default TransactionForm;