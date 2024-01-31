import BarChart from "./BarChart";
import DoughtnutChart from "./DoughnutChart";
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
                <DoughtnutChart />
                <BarChart />
                <PieChart />
            </section>
        </main>
     );
}

export default ReportsPage;