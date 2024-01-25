import IncomeAndBudget from "./IncomeAndBudget";
import TransactionForm from "./TransactionForm";

function TransactionPage() {
    return ( 
        <main className="transaction-page">
            <div>
                <section className="financial-overview-section">
                    <IncomeAndBudget />
                    <hr className="transactionPage-divider"/>
                </section>

                <section className="transaction-list-section">
                    <div>Transactions</div>
                </section>
            </div>

                <hr className="transactionPage-divider-2"/>

            <section className="form-container">
                <TransactionForm /> 
            </section>
        </main>
     );
}

export default TransactionPage;