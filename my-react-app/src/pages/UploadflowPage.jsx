import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Breadcrumb from '../components/Breadcrumb';
import './UploadflowPage.css';

const UploadFlowPage = () => {
  return (
    <div>
      <Navbar />
      <div className="upload-flow-page">
        <Sidebar />
        <div className="content">
          <Breadcrumb />
        
          <Header />
          <div className="container">
            {/* Upload flow content goes here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadFlowPage;
