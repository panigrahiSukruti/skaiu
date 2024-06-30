import React from 'react';
import './ProfileSection.css';
import { Avatar, Grid } from '@mui/material';

const ProfileSection = ({ userName, email, onUserNameChange }) => {
  return (
    <Grid container className="profile-section" spacing={2} >
      <Grid className="profile-picture" item sm={12} md={2}>
        <Avatar src="/Logo/profile.png" alt="Profile" sx={{ width: 100, height: 100 }} />
      </Grid>
      <Grid className="form-group" item sm={6} md={5}>
        <label>User Name</label>
        <input
          type="text"
          value={userName}
          onChange={onUserNameChange}
        />
      </Grid>
      <Grid className="form-group" item sm={6} md={5}>
        <label>Email</label>
        <input
          type="text"
          value={email}
          readOnly
        />
      </Grid>
    </Grid>
  );
};

export default ProfileSection;