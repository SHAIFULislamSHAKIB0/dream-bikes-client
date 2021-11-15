import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import CustomerReview from '../CustomerReview/CustomerReview';
import './CustomerReviews.css'

const CustomerReviews = () => {
    const [reviews, setReviews] = useState([])
    const { isLoading } = useAuth();

    // console.log(reviews);

    useEffect(() => {
        fetch('https://hidden-anchorage-44915.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [reviews])

    if (isLoading) {
        return <Spinner animation="border" variant="success" />
    }
    return (
        <div>
            <div className="container mt-4">
                <h2>User Reviews</h2>

            </div>

            <div className="row">
                {
                    reviews.map(review => <CustomerReview key={review._id} review={review} ></CustomerReview>)
                }

            </div>

        </div>
    );
};

export default CustomerReviews;