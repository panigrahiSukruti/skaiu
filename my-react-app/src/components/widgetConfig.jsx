import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, Box, Typography, Tabs, Tab, TextField, AppBar, Toolbar, IconButton } from '@mui/material';
import { Home, Settings, Assignment, LocalOffer } from '@mui/icons-material';
import { FaFlag } from 'react-icons/fa';
const widgetConfig = () => {
    return (
        <Router>
          <Container>
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  LAMA
                </Typography>
                <IconButton color="inherit">
                  <FaFlag />
                </IconButton>
              </Toolbar>
            </AppBar>
            <Box sx={{ display: 'flex', mt: 2 }}>
              <Tabs orientation="vertical" variant="scrollable" value={false}>
                <Tab icon={<Home />} label="Projects" />
                <Tab icon={<Settings />} label="Widget Configurations" />
                <Tab icon={<Assignment />} label="Deployment" />
                <Tab icon={<LocalOffer />} label="Pricing" />
              </Tabs>
              <Box sx={{ flexGrow: 1, ml: 3 }}>
                <Routes>
                  <Route path="/configurations" element={<Configuration />} />
                  {/* Add other routes here */}
                </Routes>
              </Box>
            </Box>
          </Container>
        </Router>
      );
    }
    
    function Configuration() {
      return (
        <Box>
          <Typography variant="h4">Configuration</Typography>
          <Box sx={{ mt: 2 }}>
            <Tabs value={0}>
              <Tab label="General" />
              <Tab label="Display" />
              <Tab label="Advanced" />
            </Tabs>
            <Box sx={{ mt: 2 }}>
              <TextField fullWidth label="Chatbot Name" variant="outlined" />
              <TextField fullWidth label="Welcome Message" variant="outlined" sx={{ mt: 2 }} />
            </Box>
          </Box>
        </Box>
      );
    }
    

export default widgetConfig