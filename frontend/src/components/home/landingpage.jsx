import React from 'react';
import Slider from 'react-slick';
import CurrentIssuesPage from './CurrentIssuesPage';
import ElectionComponent from './ElectionComponent';
import ElectorsComponent from './ElectorsComponent';

const LandingPage = () => {
    // Carousel settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <>
            <ElectionComponent />
            <CurrentIssuesPage />
        </>
    );
};

export default LandingPage;
