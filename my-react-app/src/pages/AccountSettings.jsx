import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Breadcrumbs from "../components/Breadcrumb";
import ProfileSection from "../components/ProfileSection";
import SubscriptionSection from "../components/SubscriptionSection";
import "./AccountSettings.css";
import { Grid } from "@mui/material";

const AccountSettings = () => {
  const [userName, setUserName] = useState("alphauser");
  const email = "alphauser@gmail.com"; // Email is not editable

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  return (
    <div>
      <div className="main-container">
        <Sidebar/>
        <div className="main-content">
          <Breadcrumbs />
          <Grid className="content">
            <ProfileSection
              userName={userName}
              email={email}
              onUserNameChange={handleUserNameChange}
            />
            <SubscriptionSection />
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
