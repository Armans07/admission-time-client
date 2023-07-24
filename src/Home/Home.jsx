import React from 'react';
import CollegeCard from './College';
import GallerySection from './GallerySection';
import OnlineCourse from './OnlineCourse';
import Feedback from './FeedBack';
import Banner from './Banner';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CollegeCard></CollegeCard>
            <GallerySection></GallerySection>
            <OnlineCourse></OnlineCourse>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;