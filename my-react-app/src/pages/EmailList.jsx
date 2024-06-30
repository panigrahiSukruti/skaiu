// src/pages/EmailList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import useStore from '../store';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const EmailList = () => {
    const setEmails = useStore((state) => state.setEmails);

    const { data: emails, isLoading } = useQuery({
        queryKey: ['emails'],
        queryFn: async () => {
            const response = await axios.get('/api/emails');
            setEmails(response.data);
            return response.data;
        }
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const emailList = Array.isArray(emails) ? emails : [];

    return (
        <div>
            <h1>Email List</h1>
            <ul>
                {emailList.map((email) => (
                    <li key={email.id}>
                        {email.address}
                        <Link to={`/edit/${email.id}`}>Edit</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmailList;
