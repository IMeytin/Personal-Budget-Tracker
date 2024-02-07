import logo from '../../Images/Piggy-bank-logo.png'
import { Link } from 'react-router-dom';

function NavBar() {
    return ( 
        <header>
            <nav className='container navBar'>
                <div className='logo-wrapper'>
                    <img className='logo' src={logo} alt="logo"/>
                </div>
                <ul className="nav-links">
                    <li>
                        <Link className='link' to='/'>Home</Link>
                    </li>
                    <li>
                        <Link className='link' to='/Transactions'>Transactions</Link>
                    </li>
                    <li>
                        <Link className='link' to='/Reports'>Reports</Link>
                    </li>
                </ul>
            </nav>
        </header>
     );
}

export default NavBar;
