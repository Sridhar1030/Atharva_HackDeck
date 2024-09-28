import logo from './logo.svg';
import './App.css';
import { Routes, Route, Router } from 'react-router-dom';
import Layout from './layout';
import LandingPage from './components/home/landingpage';
import Login from './components/auth/login';
import OTPVerification from './components/auth/otpVerification';
import ElectorsComponent from './components/home/ElectorsComponent';
import CandidateSearch from './components/home/CandidateSearch';
import { TextSizeProvider } from './components/common/TextSizeContext';
import VotingPage from './components/vote/VotingPage';
import CandidateDetail from './components/home/CandidateDetail';
import LocationPage from './components/Location/LocationPage';
import AdminDashboard from './components/AdminDash/AdminDash';
import VoterEducation from './components/home/VoterEducation';
import ResultsPage from './components/Results/Results';
import ProtectedRoute from './components/ProtectedRoute';
import AboutUs from './components/common/AboutUs';
import VoterDetailPage from './components/vote/VoterDetailPage';

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
            <Route path="/ElectorsComponent" element={<ElectorsComponent />} />
            <Route path="/CandidateSearch" element={<CandidateSearch />} />
            <Route path="/candidate/:name" element={<CandidateDetail />} />
            <Route path="/votereducation" element={<VoterEducation />} />
            <Route path="/aboutus" element={<AboutUs />} />


            {/* Protecting routes that require user authentication */}
            <Route path="/Vote" element={<ProtectedRoute element={<VotingPage />} />} />
            <Route path="/location" element={<ProtectedRoute element={<LocationPage />} />} />
            <Route path="/admin" element={<ProtectedRoute element={<AdminDashboard />} />} />
            <Route path="/result" element={<ProtectedRoute element={<ResultsPage />} />} />




            <Route path="voterdetail" element={<VoterDetailPage />} />
          </Route>
        </Routes>
      </TextSizeProvider>
    </>
  );
}

export default App;
