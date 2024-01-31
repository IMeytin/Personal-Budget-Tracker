import reportsImage from '../../Images/ReportsImage.png'
function ReportsWelcomeText() {
    return ( 
        <div className='welcome-section-container reports-welcome-section body-color-font'>
            <div className='welcome-text-container'>
                <h3 className='subHeading'>Visualize Your Financial Journey</h3>
                <p className='body-text'>Visual graphs and charts will guide you through your financial journey, providing a clear picture of your spending habits over time. Compare your actual expenses against your budget goals and stay on track with your financial objectives.</p>
                <p className='body-text'> Our visualizations help you to understand the story behind your numbers. Discover patterns in your spending, see the impact of your financial decisions, and use this knowledge to plan ahead. Whether you're saving for a big goal or just trying to manage day-to-day expenses</p>
            </div>
            <div>
                <img className='reports-image' src={reportsImage} alt="Reports illustration" />
            </div>
        </div>
     );
}

export default ReportsWelcomeText;