import { faFacebookSquare, faInstagramSquare, faTwitterSquare, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faMap, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css'

const Footer = () => {


    return (
        <div>
            <div className="footer-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <div className="left-container text-start">
                                <h1>Dream Bikes <br /> Collection</h1>
                                <div className="icons-container d-flex text-center">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faInstagramSquare} />
                                    </div>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faTwitterSquare} />
                                    </div>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faYoutube} />
                                    </div>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faFacebookSquare} />
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-md-6 col-sm-12">
                            <div className="right-footer-container">

                                <div className="phone d-flex align-items-center justify-content-center mt-4">
                                    <div className="foter-phone-icon">
                                        <FontAwesomeIcon icon={faPhone} />
                                    </div>
                                    <div>
                                        <h5>+8801816800887</h5>
                                        <h6>shaifulshakib560@gmail.com</h6>
                                    </div>
                                </div>
                                {<div className="map d-flex align-items-center justify-content-center mt-2">
                                    <div className="foter-phone-icon">
                                        <FontAwesomeIcon icon={faMap} />
                                    </div>
                                    <div>
                                        <p>
                                            Narayanhat,Fatikchari
                                            <br /> Chittagong,Bangladesh.
                                        </p>
                                    </div>
                                </div>}
                            </div>
                        </div>

                        {/* right of my web */}
                    </div>
                    <p className="mt-4">
                        <small>SHAKIB'S © . All rights reserved.</small>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;