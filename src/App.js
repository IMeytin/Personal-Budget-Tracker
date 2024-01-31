import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/HomePage/Home';
import TransactionsPage from './Components/TransactionsPage/TrasactionPage';
import ReportsPage from './Components/ReportsPage/ReportsPage';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path='/' element={ <Home /> }></Route>
          <Route path='/Transactions' element={ <TransactionsPage /> }></Route>
          <Route path='/Reports' element={<ReportsPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
