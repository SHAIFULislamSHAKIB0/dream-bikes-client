import React from 'react';
import Rating from 'react-rating';
import './CustomerReview.css'

const CustomerReview = (props) => {
    const { name, img, des, rating } = props.review;
    return (
        <div className="col-md-4 col-sm-12 container ">
            <div className="cart our-services p-3 m-2">
                <div>
                    <img className="images" src={img} alt="" />
                </div>
                <h4 className="mt-2">{name}</h4>
                {/* <h6>Rating: {rating}</h6> */}
                <Rating
                    initialRating={rating}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly>
                </Rating>
                <p>{des}</p>
            </div>
        </div>
    );
};

export default CustomerReview;