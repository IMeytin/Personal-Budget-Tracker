import AddTransactionFrom from "./AddTransactionFrom";

function TransactionPage() {
    return ( 
        <main className="transaction-page">
            <section className="overview-section">
                <div>
                    <button className="action-btn">ADD INCOME</button>
                    <p className="display-financial income-magrin">Income: $1000</p>

                    <button className="action-btn">ADD BUDGET</button>
                    <p className="display-financial">Budget: $500</p>
                </div>

                <hr className="transactionPage-divider"/>
                <div>Transactions</div>
            </section>

                <hr className="transactionPage-divider-2"/>

            <section className="form-container">
                <AddTransactionFrom /> 
            </section>
        </main>
     );
}

export default TransactionPage;