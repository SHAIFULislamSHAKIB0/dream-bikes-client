import axios from 'axios';
import React from 'react';
import './AddBikes.css'
import { useForm } from 'react-hook-form';

const AddBikes = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://hidden-anchorage-44915.herokuapp.com/bikes', data)
            .then(res => {
                // console.log(res)
                if (res.data.insertedId) {
                    alert('added successfully inserted')
                    reset();
                }
            })
    }
    return (
        <div className="add-bike m-4">
            <h3 className="text-primary">Please  addBikes</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="name" />

                {/* <input {...register("country", { required: true, maxLength: 20 })} placeholder="country" />
                <input {...register("days", { required: true, maxLength: 20 })} placeholder="days" /> */}

                <input type="number" {...register("price")} placeholder="price" />
                <input type="number" {...register("cc")} placeholder="cc" />
                <input {...register("img")} placeholder="img" />
                <textarea {...register("des")} placeholder="description" />

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddBikes;