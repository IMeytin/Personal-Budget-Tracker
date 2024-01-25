import { useState } from "react";

function IncomeAndBudget() {
    const [financeFormData, setFinanceFormData] = useState({
        income: 1000,
        budget: 500
        });

    const [editStatus, setEditStatus] = useState({
        isEditingIncome: false,
        isEditingBudget: false
    })

    const handleEditIncome = () => {
        setEditStatus(prevStatus => ({
            ...prevStatus,
            isEditingIncome: true
        }))
    }

    const handleEditBudget = () => {
        setEditStatus(prevStatus => ({
            ...prevStatus,
            isEditingBudget: true
        }));
    }

    const handleChange = (e) => {
        const {name, value} = e.target;

        setFinanceFormData(prevFormData => ({
            ...prevFormData, 
            [name]:value
        }))
        console.log(financeFormData.income)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setEditStatus({
            isEditingIncome: false,
            isEditingBudget: false
        })
    }
    console.log(editStatus)

    return ( 
        <div>
            {editStatus.isEditingIncome ? (
                <form onSubmit={handleSubmit}>
                    <button type="submit" className="action-btn">ADD INCOME</button>
                    <div className="display-financial income-magrin">
                        <label className="financial-form-labels" htmlFor="income">Income: $</label>
                        <input 
                        autoFocus
                        className="finantial-form-input"
                        type="number" 
                        id="income"
                        name="income"
                        value={financeFormData.income}
                        onChange={handleChange}/>
                    </div>
                </form>
            ) : (
                <div>
                    <button className="action-btn" onClick={handleEditIncome}>ADD INCOME</button>
                    <p className="display-financial income-magrin">Income: ${financeFormData.income}</p>
                </div>
            )}

            {editStatus.isEditingBudget ? (
                <form onSubmit={handleSubmit}>
                    <button type="submit" className="action-btn">ADD INCOME</button>
                    <div className="display-financial income-magrin">
                        <label className="financial-form-labels" htmlFor="budget">Budget: $</label>
                        <input 
                        autoFocus
                        className="finantial-form-input"
                        type="number" 
                        id="budget"
                        name="budget"
                        value={financeFormData.budget}
                        onChange={handleChange}/>
                    </div>
                </form>
            ):(
                <div>
                    <button className="action-btn" onClick={handleEditBudget}>ADD BUDGET</button>
                    <p className="display-financial">Budget: ${financeFormData.budget}</p>
                </div>
            )}
        </div>
    );
}

export default IncomeAndBudget;