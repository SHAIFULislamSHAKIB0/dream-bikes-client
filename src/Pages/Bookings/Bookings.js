import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Bookings.css'

const Bookings = () => {
    const { user } = useAuth();
    const { bikeId } = useParams();
    const [bikes, setBikes] = useState({})
    // console.log(bikes)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    useEffect(() => {
        fetch(`http://localhost:5000/bikes/${bikeId}`)
            .then(res => res.json())
            .then(data => setBikes(data))
    }, [])


    const onSubmit = data => {
        // console.log(data)
        axios.post('http://localhost:5000/orders', data)
            .then(res => {
                // console.log(res)
                if (res.data.insertedId) {
                    alert('place order successfully')
                    reset();
                }
            })
    }

    return (
        <div className="">
            <h3>Please!Book your bikes!!</h3>
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                <input defaultValue={user?.displayName} {...register("name")} />

                <input defaultValue={user?.email} {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}
                <input defaultValue={bikes?.name} {...register("bikename", { required: true })} />
                <input defaultValue={bikes?.cc} {...register("cc", { required: true })} />
                <input placeholder="phone number" defaultValue={bikes?.price} {...register("price", { required: true })} />

                <input placeholder="Please Enter Your Phone number" defaultValue="" {...register("phone")} />

                <input type="submit" />

            </form>
            <h5>Cursor will check every input field!!!!!</h5>

        </div>
    );
};

export default Bookings;