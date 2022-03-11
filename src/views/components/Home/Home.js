import React from 'react';
import Rates from '../../Common/Rates/Rates';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <Rates/>
            <Footer/>
        </div>
    );
};

export default Home;