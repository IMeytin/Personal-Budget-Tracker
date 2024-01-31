import BarChart from "./BarChart";
import PieChart from "./PieChart";
import ReportsWelcomeText from "./ReportsWelcomeText";

function ReportsPage() {
    return ( 
        <main>
            <section>
                <ReportsWelcomeText />
            </section>
            <hr />
            <section className="chart-section">
                <BarChart />
                <PieChart />
            </section>
        </main>
     );
}

export default ReportsPage;