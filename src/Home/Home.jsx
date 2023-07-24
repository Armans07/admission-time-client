import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import CardSearch from './CardSearch';
import CollegeCard from './College';
import GallerySection from './GallerySection';
import OnlineCourse from './OnlineCourse';
import Feedback from './FeedBack';


const Home = () => {
    return (
        <div>
            
            <CollegeCard></CollegeCard>
            <GallerySection></GallerySection>
            <OnlineCourse></OnlineCourse>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;