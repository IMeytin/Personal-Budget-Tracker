import illustration from '../../Images/Illustration .png'
function Home() {
    return ( 
        <main>
            <section>
                <div className='heading heading-margin'>
                    <h2>Welcome to Personal Budget Tracker!</h2>
                </div>

                <div className="welcome-section-container body-color-font">
                    <div className='welcome-text-container'>
                        <h3 className='subHeading '>Simple, Effective, and Straightforward</h3>
                        <p className='body-text'>Managing your personal finances shouldn't be complicated. With Personal Budget Tracker, we offer you a straightforward solution to keep track of your expenses and budget without any fuss. Our platform is designed for ease, making personal finance management accessible to everyone, regardless of your financial savvy.</p>
                    </div>
                    
                    <div>
                        <img className='welcome-section-img' src={illustration} alt="illustration" />
                    </div>
                </div>
            </section>
            <hr/>
            
        </main>
    );
}

export default Home;