import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem('token');
            const res = await axios.get('/api/auth/user', {
                headers: { 'x-auth-token': token },
            });
            setUser(res.data);
        };
        fetchUser();
    }, []);

    if (!user) return <div>Loading...</div>;

    return (
        <div>
            <h1>Welcome, {user.name}</h1>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default Dashboard;
