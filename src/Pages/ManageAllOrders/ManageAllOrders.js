import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([])
    const { user, isLoading } = useAuth();
    // console.log(orders)
    const [status, setStatus] = useState("");

    const handleStatus = (e) => {
        setStatus(e.target.value);
    };

    useEffect(() => {
        fetch('https://hidden-anchorage-44915.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    if (isLoading) {
        return <Spinner animation="border" variant="success" />
    }



    const handleDelete = (id) => {
        const url = `https://hidden-anchorage-44915.herokuapp.com/orders/${id}`
        const proceed = window.confirm('Are you sure,you want to delete?')

        if (proceed) {
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount) {
                        alert('Order deleted successfully')
                        const remaining = orders.filter(order => order._id !== id)
                        setOrders(remaining)
                    }
                })
        }
    }

    const handleUpdate = (id) => {
        fetch(`https://hidden-anchorage-44915.herokuapp.com/updateStatus/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ status }),
        });

        console.log(id);
    };



    return (
        <div>
            <h2>Here we manage all Orders</h2>
            <h4>Total orders: {orders.length}</h4>
            {
                orders.map(order => <div key={order._id}>
                    <div className="m-4 align-item-center justify-content-center border border-2">
                        <div className="d-flex align-item-center justify-content-center ">
                            <div className="me-3">
                                <h4 className="p-2">BikeName: {order?.bikename}</h4>
                                <small>Name: {order?.name}</small>
                                <h6>CC: {order?.cc}</h6>
                                <p>Email: {order?.email}</p>
                                <input
                                    onChange={handleStatus}
                                    type="text"
                                    defaultValue={order?.status}
                                />
                                <button
                                    onClick={() => handleUpdate(order?._id)}
                                    className="btn bg-success m-2 p-2"
                                >
                                    Update
                                </button>
                            </div>
                            <div>
                                <button onClick={() => handleDelete(order?._id)} className="btn btn-primary rounded border border-2 m-2 p-2">Cancel</button>

                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ManageAllOrders;