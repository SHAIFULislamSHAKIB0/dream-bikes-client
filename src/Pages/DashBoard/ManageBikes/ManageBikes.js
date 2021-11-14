import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const ManageBikes = () => {
    const [bikes, setBikes] = useState([])
    const { isLoading } = useAuth();

    useEffect(() => {
        fetch('https://hidden-anchorage-44915.herokuapp.com/bikes')
            .then(res => res.json())
            .then(data => setBikes(data))
    }, [])

    if (isLoading) {
        return <Spinner animation="border" variant="success" />
    }

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure,you want to delete?')

        if (proceed) {
            const url = `https://hidden-anchorage-44915.herokuapp.com/bikes/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount) {
                        alert('data deleted successfully')
                        const remaining = bikes.filter(place => place._id !== id)
                        setBikes(remaining)
                    }
                })
        }
    }
    return (
        <div>
            <h2 className="m-4">Here we manage Our All Bikes</h2> <hr />
            {
                bikes.map(bike => <div key={bike._id}>
                    <div className="m-4 align-item-center justify-content-center">
                        <div className="d-flex align-item-center justify-content-center">
                            <div className=""><h4 className="p-2">BikeName: {bike?.name}</h4>
                                <h6>id:{bike._id}</h6>
                            </div>
                            <div>
                                <button onClick={() => handleDelete(bike._id)} className="btn-warning rounded m-3 p-2">remove</button>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ManageBikes;


{/* <div>
    <h2 className="m-4">Here we manage Our All Bikes</h2> <hr />
    {
        bikes.map(bike => <div key={bike._id}>
            <div className="m-4 align-item-center justify-content-center">
                <div className="d-flex align-item-center justify-content-center">
                    <div className=""><h4 className="p-2">BikeName: {bike?.name}</h4>
                        <h6>id:{bike._id}</h6>
                    </div>
                    <div>
                        <button onClick={() => handleDelete(bike._id)} className="btn-warning rounded m-3 p-2">remove</button>
                    </div>
                </div>
            </div>
        </div>)
    }
</div> */}