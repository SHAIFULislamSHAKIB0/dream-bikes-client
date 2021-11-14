import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/404.png'
import './NotFound.css'
const NotFound = () => {
    return (
        <div className="notFound">
            <img style={{ width: '100%' }} src={notfound} alt="" />
            <Link to="/"><button className='contact-btn'>Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;