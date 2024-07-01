import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import WidgetsIcon from "@mui/icons-material/Widgets";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import useStore from "../store";
import "../components/Sidebar.module.css";
import "../components/Logo.css";
import Logo_main  from "../assets/assets/directright.png"

const Sidebar = () => {
  const isSidebarOpen = useStore((state) => state.isSidebarOpen);

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={isSidebarOpen}
      className="sidebar"
      // sx={{
      //   width: "25%",
      //   height: "100vh",
      //   flexShrink: 0,
      //   backgroundColor: "#F3E8FF",
      //   "& .MuiDrawer-paper": {
      //     width: "25%",
      //     height: "100vh",
      //     boxSizing: "border-box",
      //     backgroundColor: "#F3E8FF",
      //   },
      // }}
    >
      <div className="sidebar-header">
        {/* <Typography variant="h6" noWrap component="div"> */}
         <Link to={"/"}>
         <img src={Logo_main} alt="logo" />
         <img src="/Logo/LAMA.png" alt="logo" /></Link>

        {/* </Typography> */}

        {/* TODO: Doing something else :( */}
        <Typography variant="body2" noWrap component="div">
          Sample Project Name
        </Typography>
      </div>
      <div className="sidebar-links">
        <List>
          <ListItem button component={Link} to="/projects">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Project" />
          </ListItem>
          <ListItem button component={Link} to="/widgetConfig">
            <ListItemIcon>
              <WidgetsIcon />
            </ListItemIcon>
            <ListItemText primary="Widget Configuration" />
          </ListItem>
          <ListItem button component={Link} to="/deployment">
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Deployment" />
          </ListItem>
          <ListItem button component={Link} to="/pricing">
            <ListItemIcon>
              <MonetizationOnIcon />
            </ListItemIcon>
            <ListItemText primary="Pricing" />
          </ListItem>
        </List>

        <List>
          <Divider />
          <ListItem button component={Link} to="/accountSettings">
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
};

export default Sidebar;
