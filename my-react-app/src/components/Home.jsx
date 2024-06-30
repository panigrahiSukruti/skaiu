import React, { useState } from 'react';
import Modal from "react-modal";
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Header from '../components/Header'; 
import './styles.css'; 
import axios from 'axios';
const Home = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
    reset(); // Reset form fields on modal close
  }

  const onSubmit = (data) => {
const res = axios({
    method: 'post',
    url: 'http://localhost:8080/api/v1/projects/create',
    params:{
        projectName: data.projectName    }
});
    closeModal();
  };
  


  return (
    <div>
      <Header /> {/* Include the Header component */}
      <div>
        <button>Back to Home</button>
      </div>
      <div style={{ rowGap: "20px" }}>
        <h1
          style={{
            textAlign: "center",
            color: "#7E22CE",
            fontSize: "48px",
            fontFamily: "Roboto",
            marginBottom: "20px",
          }}
        >
          Create a New Project
        </h1>
        <img
          src="Logo/Home_Group16.png"
          alt="notification"
          height={"300px"}
          width={"520px"}
          style={{ marginLeft: "auto", marginRight: "auto", display: "block" }}
        ></img>
        <div>
          <p
            style={{
              textAlign: "center",
              fontSize: "18px",
              fontFamily: "Roboto",
              marginTop: "20px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in
          </p>
        </div>
        <div>
          <button
            onClick={openModal}
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              display: "block",
              background: "#211935",
              color: "white",
              fontSize: "28px",
              fontFamily: "Roboto",
              padding: "12px",
            }}
          >
            Create New Project
          </button>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="overlay"
      >
        <Box 
          component="form" 
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="form-header">
            Create Project
          </h2>
          <TextField
          className='form-field'
            label="Enter Project Name"
            {...register('projectName', { required: "Project Name can't be empty" })}
            error={!!errors.projectName}
            helperText={errors.projectName?.message}
          />
          <Box className="modal-footer">
            <Button variant="text" className="cancel-btn" onClick={closeModal}>
              Cancel
            </Button>
            <Button type="submit" variant="contained" className="create-btn">
              Create
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default Home;
