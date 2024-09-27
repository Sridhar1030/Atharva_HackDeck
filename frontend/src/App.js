import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout';
import LandingPage from './components/home/landingpage';
import Login from './components/auth/login';
import OTPVerification from './components/auth/otpVerification';



function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/otpverification" element={<OTPVerification />} />



        <Route path="/" element={<Layout />}>
          <Route path="/landingpage" element={<LandingPage />} />


        </Route>
      </Routes>
    </>
  );
}

export default App;
