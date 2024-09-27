import React from 'react';
import Slider from 'react-slick';
import CurrentIssuesPage from './CurrentIssuesPage';
import ElectionComponent from './ElectionComponent';
import ElectorsComponent from './ElectorsComponent';
import ScrollTop from '../common/ScrollTop';
import ElectionInfo from './ElectionInfo';


const LandingPage = () => {


    return (
        <>
            <ElectionComponent />
            <CurrentIssuesPage />
            <ElectionInfo />
            <ScrollTop />
        </>
    );
};

export default LandingPage;
