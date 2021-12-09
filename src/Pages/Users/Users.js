import { Grid } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import User from './User/User';
import './Users.css'

const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/users/')
            .then(result => {
                setUsers(result.data)
            })
    }, [])
    return (
        <div>
           <Grid container spacing={{ xs: 2, md: 3 }} className="container">
                {
                    users.map(user => <User
                    key={user.id}
                    user={user}></User>)
                }
           </Grid>
        </div>
    );
};

export default Users;