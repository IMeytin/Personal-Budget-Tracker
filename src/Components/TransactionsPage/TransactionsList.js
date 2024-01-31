import { useDispatch, useSelector } from "react-redux";
import { getSubmittedData, removeSubmittedData } from "../../redux/transactionsSlice";
import noExpenses from "../../Images/noExpenses.png"

function TransactionsList() {
    const dispatch = useDispatch()
    const submittedData = useSelector(getSubmittedData);
    return ( 
        <div>
            {submittedData && submittedData.length > 0 ? (
                <div>
                    <div className="heading">
                        <h3 className="subHeading">Expenses</h3>
                    </div>
                    <div className="list">
                        {submittedData.map((transactionsData) => {
                                const {category, date, amount, id} = transactionsData;
                                return(
                                    <div key={id} className="display-expenses-wrapper">
                                        <div className="body-color-font display-expenses ">
                                            <p>{category}</p>
                                            <p>{date}</p>
                                            <p>${amount}</p>
                                        </div>
                                        <div >
                                            <button onClick={() => dispatch(removeSubmittedData({id}))} className="delete-btn"><bold>X</bold></button>
                                        </div>
                                    </div>
                                )
                            }
                        )}
                    </div>
                </div>
            ):(
                <img className="noExpenses-img" src={noExpenses} alt="No Expenses Added"/>
            )}
        </div>
    );
}

export default TransactionsList;