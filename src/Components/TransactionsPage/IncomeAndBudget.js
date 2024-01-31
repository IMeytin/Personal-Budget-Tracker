import { useDispatch, useSelector } from "react-redux";
import { getFinaceData, setIncome, setBudget, setEditingStatus, getEditStatus } from "../../redux/financeSlice";


function IncomeAndBudget() {
    const dispatch = useDispatch();
    const financeData = useSelector(getFinaceData);
    const editStatus = useSelector(getEditStatus)

    const handleEditIncome = () => {
        dispatch(setEditingStatus({field: 'isEditingIncome', value: true}))
    }

    const handleEditBudget = () => {
        dispatch(setEditingStatus({field: 'isEditingBudget', value: true}))
    }

    const handleChange = (e) => {
        const {name, value} = e.target;

        if (name === 'income'){
            dispatch(setIncome(value))
        }
        else if (name === 'budget') {
            dispatch(setBudget(value))
        }
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(editStatus.isEditingIncome){
            dispatch(setEditingStatus({field: 'isEditingIncome', value: false}))
        }
        else if(editStatus.isEditingBudget){
            dispatch(setEditingStatus({field: 'isEditingBudget',value: false}))
        }
    }

    return ( 
        <div className="finance-form-wrapper">
            {editStatus.isEditingIncome ? (
                <form onSubmit={handleSubmit}>
                    <button type="submit" className="action-btn">SET INCOME</button>
                    <div className="display-financial income-magrin">
                        <label className="financial-form-labels" htmlFor="income">Income: $</label>
                        <input 
                        autoFocus
                        className="finantial-form-input"
                        type="number" 
                        id="income"
                        name="income"
                        value={financeData.income}
                        onChange={handleChange}/>
                    </div>
                </form>
            ) : (
                <div>
                    <button className="action-btn" onClick={handleEditIncome}>SET INCOME</button>
                    <p className="display-financial income-magrin">Income: $ {financeData.income}</p>
                </div>
            )}

            {editStatus.isEditingBudget ? (
                <form onSubmit={handleSubmit}>
                    <button type="submit" className="action-btn">SET BUDGET</button>
                    <div className="display-financial budget-margin">
                        <label className="financial-form-labels" htmlFor="budget">Budget: $</label>
                        <input 
                        autoFocus
                        className="finantial-form-input"
                        type="number" 
                        id="budget"
                        name="budget"
                        value={financeData.budget}
                        onChange={handleChange}/>
                    </div>
                </form>
            ):(
                <div>
                    <button className="action-btn" onClick={handleEditBudget}>SET BUDGET</button>
                    <p className="display-financial">Budget: $ {financeData.budget}</p>
                </div>
            )}
        </div>
    );
}

export default IncomeAndBudget;