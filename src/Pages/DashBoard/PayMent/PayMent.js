import React from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const PayMent = () => {
    const { admin } = useAuth();
    const history = useHistory();

    if (admin) {
        history.push('/');
    }
    return (
        <div>
            <h2>Payment Gateway coming soon!!</h2>
        </div>
    );
};

export default PayMent;