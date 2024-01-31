import IncomeAndBudget from "./IncomeAndBudget";
import TransactionsForm from "./TransactionsForm";
import TransactionsList from "./TransactionsList";
import cointImg from "../../Images/coint.jpg"

function TransactionsPage() {
    return ( 
        <main className="transaction-page">
            <div>
                <section className="financial-overview-section">
                    <IncomeAndBudget />
                    <hr className="transactionPage-divider"/>
                </section>

                <section className="transaction-list-section">
                    <TransactionsList />
                </section>
            </div>

                <hr className="transactionPage-divider-2"/>

            <section className="form-container">
                <div className="heading">
                    <h2>Record Your Expenses</h2>
                </div>
                <TransactionsForm /> 
            </section>

            <div className="img-wrapper">
                <img src={cointImg} alt="coint" className="transaction-page-img"/>
            </div>
        </main>
     );
}

export default TransactionsPage;