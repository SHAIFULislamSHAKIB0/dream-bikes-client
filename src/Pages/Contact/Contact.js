import React from 'react';
import './Contact.css'
import img from '../../images/contact.png'

const Contact = () => {
    return (
        <div className="mt-4">
            <h1>Contact with us</h1>
            <div className="contact-form p-3">
                <div className="row  d-flex justify-content-center ">
                    <div className="col-md-6 mt-5">
                        <input
                            className="input-field"
                            type="text"
                            placeholder="Enter Your Name"
                        />
                        <br />
                        <input
                            className="input-field"
                            type="Email"
                            placeholder="Enter Your Email"
                        />
                        <br />
                        <input
                            className="input-field"
                            type="text"
                            placeholder="Enter Your Phone"
                        />
                        <br />
                        <input className="contact-btn mt-3" type="submit" value="Submit" />
                    </div>
                    <div className="col-md-6">
                        <div className="contact-im">
                            <img
                                className="w-100"
                                src={img}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;