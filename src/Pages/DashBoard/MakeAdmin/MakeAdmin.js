import { Alert, TextField } from '@mui/material';
import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSucces] = useState(false);

    const handleOnblur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://hidden-anchorage-44915.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {

                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    // console.log(data)
                    setSucces(true);

                }
            })

        e.preventDefault();
    }

    return (
        <div>
            <h2>Make an admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '75%' }}
                    label="Email"
                    type="email"
                    onBlur={handleOnblur}
                    variant="standard"
                />
                <Button type="submit" variant="outlined">Make Admin</Button>
            </form>
            {
                success && <Alert severity="success">Made admin Successfully!!</Alert>
            }
        </div>
    );
};

export default MakeAdmin;