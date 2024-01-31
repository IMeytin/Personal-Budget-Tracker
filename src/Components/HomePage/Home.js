import illustration from '../../Images/Illustration .png'
import welcomeImg from "../../Images/illustration-2.png"
function Home() {
    return ( 
        <main>
            <section>
                <div className='heading heading-margin'>
                    <h2>Welcome to Personal Budget Tracker!</h2>
                </div>

                <div className="welcome-section-container body-color-font">
                    <div>
                        <img className='welcome-section-img' src={illustration} alt="illustration" />
                    </div>
                    <div className='welcome-text-container'>
                        <h3 className='subHeading '>Simple, Effective, and Straightforward</h3>
                        <p className='body-text'>Managing your personal finances shouldn't be complicated. With Personal Budget Tracker, we offer you a straightforward solution to keep track of your expenses and budget without any fuss. Our platform is designed for ease, making personal finance management accessible to everyone, regardless of your financial savvy.</p>
                    </div>
                </div>
                <hr/>
                <div className="welcome-section-container-2 body-color-font">
                    <div>
                        <img src={welcomeImg} alt="Money" className='welcome-section-img-2'/>
                    </div>
                    <div className='welcome-text-container'>
                        <p className="body-text">Explore the full potential of Personal Budget Tracker by navigating to our 'Transactions' page. Here, you can easily add and categorize your daily expenses, set your income and budget goals, and gain a clear overview of your financial activities.</p>
                        <p className="body-text">Don't forget to visit the 'Reports' page, where your financial data is transformed into insightful charts and graphs. This visual representation of your spending patterns empowers you with the knowledge to make informed budgeting decisions, helping you to achieve your financial objectives with confidence.</p>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;