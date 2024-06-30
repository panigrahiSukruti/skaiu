import React, { useState } from 'react';
import Modal from "react-modal";
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// Setting the app element for accessibility purposes
Modal.setAppElement("#root");

const LandingPage = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  // Functions to open and close the modal
  function openModal() {
    setIsOpen(true);
  }
  
  function closeModal() {
    setIsOpen(false);
  }

  // Form handling using react-hook-form
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    closeModal(); // Close the modal on successful form submission
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
        }}
      >
        <Box 
          component="form" 
          onSubmit={handleSubmit(onSubmit)} 
          sx={{ maxWidth: 400, mx: 'auto', p: 2, boxShadow: 3, borderRadius: 2 }}
        >
          <Typography variant="h5" component="h1" gutterBottom>
            Create Project
          </Typography>
          <TextField
            label="Enter Project Name"
            variant="outlined"
            fullWidth
            margin="normal"
            {...register('projectName', { required: "Project Name can't be empty" })}
            error={!!errors.projectName}
            helperText={errors.projectName?.message}
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Button variant="text" color="error" onClick={closeModal}>
              Cancel
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Create
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default LandingPage;