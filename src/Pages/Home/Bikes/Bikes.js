import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Bike from '../Bike/Bike';
import './Bikes.css'

const Bikes = () => {
    const [bikes, setBikes] = useState([]);
    const bikess = bikes.slice(0, 6)

    useEffect(() => {
        fetch('https://hidden-anchorage-44915.herokuapp.com/bikes')
            .then(res => res.json())
            .then(data => setBikes(data))
    }, [])
    const { isLoading } = useAuth();
    if (isLoading) {
        return <Spinner animation="border" variant="success" />
    }

    return (
        <div>
            <div className="container mt-4">
                <h2>Our Bikes Collection</h2>
                <p><small>A bike collection is just that, a drive to collect used bikes. A collection can be planned a few months in advance with focus on advertising the event through email lists, posted flyers, or a mention in a local paper.</small></p>
            </div>

            <div className="row">
                {
                    bikess.map(bike => <Bike key={bike._id} bike={bike}></Bike>)
                }

            </div>

        </div>
    );
};

export default Bikes;