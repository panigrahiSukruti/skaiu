// src/pages/EmailForm.jsx
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import useStore from '../store';

const EmailForm = () => {
    const { register, handleSubmit, setValue } = useForm();
    const { id } = useParams();
    const navigate = useNavigate();
    const addEmail = useStore((state) => state.addEmail);
    const emails = useStore((state) => state.emails);

    useEffect(() => {
        if (id) {
            const email = emails.find((email) => email.id === id);
            if (email) {
                setValue('address', email.address);
            }
        }
    }, [id, emails, setValue]);

    const onSubmit = async (data) => {
        if (id) {
            await axios.put(`http://localhost:5173/api/emails/${id}`, data);
        } else {
            const response = await axios.post('http://localhost:5173/api/emails', data);
            addEmail(response.data);
        }
        navigate('/');
    };

    const handleImageUpload = async (event) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'gwqixvet'); // Replace with your Cloudinary preset
    
        try {
            const response = await axios.post(
                'https://api.cloudinary.com/v1_1/dfnhalcs3/image/upload', // Replace with your Cloudinary cloud name
                formData
            );
            setValue('imageUrl', response.data.secure_url);
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };
    

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="email" placeholder="Email Address" {...register('address')} />
            <input type="file" onChange={handleImageUpload} />
            <button type="submit">Save</button>
        </form>
    );
};

export default EmailForm;
