import React from 'react';
import Slider from 'react-slick';
import CurrentIssuesPage from './CurrentIssuesPage';
import ElectionComponent from './ElectionComponent';
import ElectorsComponent from './ElectorsComponent';
import ScrollTop from '../common/ScrollTop';
import ElectionInfo from './ElectionInfo';
import Faq from './Faqs';


const LandingPage = () => {


    return (
        <>
            <ElectionComponent />
            <CurrentIssuesPage />
            <ElectionInfo />
            <Faq />
            <ScrollTop />
        </>
    );
};

export default LandingPage;
