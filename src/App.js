import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';
import ProgressBar from './ProgressBar';
import Home from './Components/HomePage/Home';
import TransactionPage from './Components/TransactionsPage/TrasactionPage';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path='/' element={ <Home /> }></Route>
          <Route path='/Transactions' element={ <TransactionPage /> }></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
