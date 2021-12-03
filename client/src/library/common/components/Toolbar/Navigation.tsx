import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { logout } from 'library/common/components/stateSlices/loginSlice';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

// eslint-disable-next-line react/function-component-definition
export default function Navigation() {
  const navigate = useNavigate();
  const { loggedInUser } = useSelector((state: RootStateOrAny) => state.login);
  const dispatch = useDispatch();

  const logoutSubmitHandler = () => {
    // @ts-ignore: Unreachable code error
    dispatch(logout());
    localStorage.removeItem('loggedInUser');
    navigate('/');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {loggedInUser ? (
            <div>
              helo
              {loggedInUser.firstName}
              <button
                className="dropdown-item"
                type="button"
                onClick={logoutSubmitHandler}
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link to="/">Home Page</Link>
              </Typography>

              <Button color="inherit">
                <Link to="/login">Login</Link>
              </Button>
              <Button color="inherit">
                <Link to="/register">Register</Link>
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
