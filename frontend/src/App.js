import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import LandingPage from './pages/LandingPage';


import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Support from './pages/Support';
import Payment from './pages/Payment';
import PaymentHistory from './components/PaymentHistory';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signUp" element={<SignUp />}></Route>

          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/support" element={<Support />}></Route>
          <Route path="/payment" element={<Payment />}></Route>

          <Route path="/landingPage" element={<LandingPage />}></Route>
          <Route path="/paymentHistory" element={<PaymentHistory />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
