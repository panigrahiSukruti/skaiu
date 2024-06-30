// MainContent.js
import React from "react";
import Sidebar from "./Sidebar";
import "./mainContent.css";
import { Avatar, Card, Grid, Typography } from "@mui/material";

const MainContent = () => {

    const Data = [{
      name: "Sample Name",
      upload: new Date().toLocaleString(),
      status: "Done"
    },
    {
        name: "Sample Name",
        upload: new Date().toLocaleString(),
        status: "Done"
      },
      {
        name: "Sample Name",
        upload: new Date().toLocaleString(),
        status: "Done"
      },
      {
        name: "Sample Project",
        upload: new Date().toLocaleString(),
        status: "Done"
      }]
  return (
    <div className="main-container">
      <Sidebar />
      <div className="main-content">
        <div className="header">
          <h1>Sample Project</h1>
          <Grid container className="upload-cards" spacing={4}>
            <Grid item sm={6} md={3}>
              <Card className="individual-card">
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
              <Card className="individual-card">
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
              <Card className="individual-card">
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
          {Data.map((item, index) => (
            <div className="table-row" key={index}>
              <p>{item.name}</p>
              <p>{item.upload}</p>
              <p>{item.status}</p>
              <div className="actions">
                <button className="edit-button">Edit</button>
                <button className="delete-button">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
