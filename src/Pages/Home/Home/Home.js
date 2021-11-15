import React from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Contact from '../../Contact/Contact';
import CustomerReviews from '../../CustomerReviews/CustomerReviews';


import Banner from '../Banner/Banner'
import Bikes from '../Bikes/Bikes';


const Home = () => {
    const { isLoading } = useAuth();
    if (isLoading) {
        return <Spinner animation="border" variant="success" />
    }
    return (
        <div>
            <Banner></Banner>
            <Bikes></Bikes>
            <CustomerReviews></CustomerReviews>
            <Contact></Contact>

        </div>
    );
};

export default Home;