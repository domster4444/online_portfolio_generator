import * as React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import Drawer from 'library/common/components/Drawer/Drawer';

// eslint-disable-next-line react/function-component-definition
export default function Navigation() {
  const { loggedInUser } = useSelector((state: RootStateOrAny) => state.login);

  if (loggedInUser === null) {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Drawer />

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/">Home Page</Link>
            </Typography>

            <Button color="inherit">
              <Link to="/login">Login</Link>
            </Button>

            <Button color="inherit">
              <Link to="/register">Register</Link>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
  return <div style={{ display: 'none' }} />;
}
