// MainContent.js
import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import "./mainContent.css";
import { Avatar, Card, Grid, Typography } from "@mui/material";
import Modal from "react-modal";
import UploadingModel from "./UploadingModel";
import { Link } from "react-router-dom";
import useStore from "../store";

const MainContent = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [openPopup, setOpenPopup] = useState({
    popup: false,
    src: null,
    text: null,
  });

  const projects = useStore((state) => state.projects);
  const fetchProjects = useStore((state) => state.fetchProjects);
  const deleteProject = useStore((state) => state.deleteProject);
  const user = useStore((state) => state.user);

  useEffect(() => {
    if (user) {
      fetchProjects(user._id);
    }
  }, [user, fetchProjects]);

  const handleDeleteProject = (projectId) => {
    deleteProject(projectId);
    setIsDeleteModalOpen(false);
  };

  return (
    <div className="main-container">
      <Sidebar />
      {openPopup.popup && (
        <UploadingModel
          src={openPopup.src}
          text={openPopup.text}
          setOpenPopup={setOpenPopup}
        />
      )}
      <div className="main-content">
        <div className="header">
          <h1>Sample Project</h1>
          <Grid container className="upload-cards" spacing={4}>
            <Grid item sm={6} md={3}>
              <Card onClick={() =>
                setOpenPopup({
                  popup: true,
                  src: "/assets/Frame1.png",
                  text: "Youtube Video",
                })
              } className="individual-card">
                <Avatar
                  src="/assets/Frame1.png"
                  alt="Profile"
                  sx={{ width: 40, height: 40 }}
                />
                <p className="podcast">
                  Upload
                  <br />
                  Youtube Video
                </p>
              </Card>
            </Grid>
            <Grid item sm={6} md={3}>
              <Card onClick={() =>
                setOpenPopup({
                  popup: true,
                  src: "/assets/Frame2.png",
                  text: "Spotify Podcast",
                })
              } className="individual-card">
                <Avatar
                  src="/assets/Frame2.png"
                  alt="Profile"
                  sx={{ width: 40, height: 40 }}
                />
                <p className="podcast">
                  Upload
                  <br />
                  Spotify Podcast
                </p>
              </Card>
            </Grid>
            <Grid item sm={6} md={3}>
              <Card onClick={() =>
                setOpenPopup({
                  popup: true,
                  src: "/assets/Frame3.png",
                  text: "Text File",
                })
              } className="individual-card">
                <Avatar
                  src="/assets/Frame3.png"
                  alt="Profile"
                  sx={{ width: 40, height: 40 }}
                />
                <p className="podcast">
                  Upload Media
                  <br />
                  or Text File
                </p>
              </Card>
            </Grid>
          </Grid>
          <div className="subscription-section">
            <p>All files are processed! Your widget is ready to go!</p>
            <button className="try-it-button">Try it out!</button>
          </div>
        </div>
        <div className="sample-table">
          <div className="table-header">
            <p>Name</p>
            <p>Upload Date & Time</p>
            <p>Status</p>
            <p>Actions</p>
          </div>
          {projects.map((project) => (
            <div className="table-row" key={project.id}>
              <p>{project.name}</p>
              <p>{new Date(project.upload).toLocaleString()}</p>
              <p>{project.status}</p>
              <div className="actions">
                <Link to="/TranscriptSection">
                  <button className="edit-button" onClick={() => setIsEditModalOpen(true)}>
                    Edit
                  </button>
                </Link>
                <button className="delete-button" onClick={() => setIsDeleteModalOpen(true)}>
                  Delete
                </button>
                {isDeleteModalOpen && (
                  <Modal
                    isOpen={isDeleteModalOpen}
                    onRequestClose={() => setIsDeleteModalOpen(false)}
                    className="modal"
                  >
                    <div>
                      <p>Are you sure you want to delete this project?</p>
                      <button onClick={() => handleDeleteProject(project.id)}>Yes</button>
                      <button onClick={() => setIsDeleteModalOpen(false)}>No</button>
                    </div>
                  </Modal>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal
        isOpen={isEditModalOpen}
        onRequestClose={() => setIsEditModalOpen(false)}
        className="modal"
      >
        <div>
          <p>Edit Modal!</p>
          <p onClick={() => setIsEditModalOpen(false)}>Close Edit Modal</p>
        </div>
      </Modal>
    </div>
  );
};

export default MainContent;
