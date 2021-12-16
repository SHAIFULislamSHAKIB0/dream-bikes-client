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
        fetch(`https://hidden-anchorage-44915.herokuapp.com/bikes/${bikeId}`)
            .then(res => res.json())
            .then(data => setBikes(data))
    }, [bikeId])


    const onSubmit = data => {
        data.status = "pending";
        data.email = user.email;
        data.bikename = bikes.name;
        data.cc = bikes.cc;
        data.price = bikes.price;


        console.log(data)
        axios.post('https://hidden-anchorage-44915.herokuapp.com/orders', data)
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

                <input defaultValue={user?.email} {...register("email", { disabled: false })} />
                {errors.email && <span className="error">This field is required</span>}
                <input defaultValue={bikes?.name} {...register("bikename", { disabled: false })} />
                <input defaultValue={bikes?.cc} {...register("cc", { disabled: false })} />
                <input placeholder="price" defaultValue={bikes?.price} {...register("price", { disabled: false })} />

                <input placeholder="Please Enter Your Phone number" defaultValue="" {...register("phone")} />

                <input type="submit" />

            </form>
            <h5>Cursor will check every input field!!!!!</h5>

        </div>
    );
};

export default Bookings;