import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const { user, isLoading } = useAuth();


    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/orders?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])

    if (isLoading) {
        return <Spinner animation="border" variant="success" />
    }

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure,you want to delete?')

        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    if (data.deletedCount) {
                        alert('Order deleted successfully')
                        const remaining = orders.filter(order => order._id !== id)
                        setOrders(remaining)
                    }
                })
        }
    }

    return (
        <div>

            <h3 className="mt-4">My Orders</h3>
            {
                orders.filter(myorder => myorder.email === user.email).map(order => <div key={order._id}>
                    <div className="m-4 align-item-center justify-content-center border border-2">
                        <div className="d-flex align-item-center justify-content-center ">
                            <div className="me-3">
                                <h4 className="p-2">BikeName: {order?.bikename}</h4>
                                <h6>CC: {order?.cc} </h6>
                                <p>Email: {order?.email}</p>
                                <small>Price: {order.price} $</small>
                            </div>
                            <div>
                                <button onClick={() => handleDelete(order?._id)} className="btn-danger border border-2 rounded m-2 p-3">Cancel Order</button>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default MyOrders;