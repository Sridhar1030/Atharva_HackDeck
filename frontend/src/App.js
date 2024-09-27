import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout';
import LandingPage from './components/home/landingpage';
import Login from './components/auth/login';
import OTPVerification from './components/auth/otpVerification';
import ElectorsComponent from './components/home/ElectorsComponent';
import CandidateSearch from './components/home/CandidateSearch';
import { TextSizeProvider } from './components/common/TextSizeContext';
import VotingPage from './components/vote/VotingPage';

function App() {
  return (
    <>
      <TextSizeProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/otpverification" element={<OTPVerification />} />

          {/* Set the LandingPage as the default route for the root path */}
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} /> {/* This sets LandingPage as the default component for "/" */}
            <Route path="ElectorsComponent" element={<ElectorsComponent />} />
            <Route path="CandidateSearch" element={<CandidateSearch />} />
            <Route path="Vote" element={<VotingPage/>}/>

          </Route>
        </Routes>
      </TextSizeProvider>
    </>
  );
}

export default App;
