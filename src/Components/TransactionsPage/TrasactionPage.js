import IncomeAndBudget from "./IncomeAndBudget";
import TransactionsForm from "./TransactionsForm";
import TransactionsList from "./TransactionsList";

function TransactionsPage() {
    return ( 
        <main className="transaction-page">
            <div className="change-order">
                <section className="financial-overview-section">
                    <IncomeAndBudget />
                    <hr className="transactionPage-divider"/>
                </section>

                <section className="transaction-list-section">
                    <TransactionsList />
                </section>
            </div>

                <hr className="transactionPage-divider-2"/>

            <section className="transactions-form-section">
                <div className="heading">
                    <h2>Record Your Expenses</h2>
                </div>
                <TransactionsForm /> 
            </section>
        </main>
     );
}

export default TransactionsPage;