import { useState } from "react";

function AddTransactionFrom() {
    const [date, setDate] = useState();
    console.log(date)

    return ( 
        <form>
            <label htmlFor="">Category</label>
            <div className="input-radio-container">
                <input type="radio" name="category" value="rent" id="rent"/>
                <label htmlFor="rent">rent</label>

                <input type="radio" name="category" value="regrocerynt" id="grocery"/> 
                <label htmlFor="grocery">grocery</label>

                <input type="radio" name="category" value="shopping" id="shopping"/>
                <label htmlFor="shopping">shopping</label>

                <input type="radio" name="category" value="dining" id="dining"/>
                <label htmlFor="dining">dining out</label>

                <input type="radio" name="category" value="other" id="other"/>
                <label htmlFor="other">other</label>
            </div>
            
            <div>
                <label>Date</label><br />
                <input className="" onChange={(e) => setDate(e.target.value)} type="date" />
            </div>

            <div>
                <label>Amount:</label><br />
                $<input className="amount-input" type="text" />
            </div>
        </form>
     );
}

export default AddTransactionFrom;