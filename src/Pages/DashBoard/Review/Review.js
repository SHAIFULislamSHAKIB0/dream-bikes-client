import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const Review = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:5000/reviews', data)
            .then(res => {
                // console.log(res)
                if (res.data.insertedId) {
                    alert('review added successfully inserted')
                    reset();
                }
            })
    }
    return (
        <div className="add-bike m-4">
            <h3 className="text-primary">Please Review at our service.</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="please enter your name" />

                <input type="number" {...register("rating")} placeholder="Rate us between 1-5" />
                <input {...register("img")} placeholder="please-enter-your-img-url" />
                <textarea {...register("des")} placeholder="Plese write about our service." />

                <input type="submit" />
            </form>
        </div>
    );
};

export default Review;