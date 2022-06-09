import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import ContactMe from './ContactMe';
import Projects from './Projects';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Projects></Projects>
            <ContactMe></ContactMe>
            <Footer></Footer>
        </div>
    );
};

export default Home;