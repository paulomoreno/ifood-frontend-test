import React, { useEffect } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './navbar.css';

import {getUser, clearUser} from '../modules/user/userActions';

function CustomNavbar({ token, user, getUser, logout }) {
  useEffect(() => {
    getUser();
  },[]);

  const logoutOnClick = (e) => {
    e.preventDefault();
    clearUser();
    if (logout) logout();
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Spotifood</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        {token && user && (
          <Navbar.Text>
            {user.images && user.images.length > 0 && (
              <Image className="userImage" src={user.images[0].url} roundedCircle />
            )}
            <b>{user.display_name}</b>
            <Button onClick={logoutOnClick} variant="link">Logout</Button>
          </Navbar.Text>
        )}
      </Navbar.Collapse>
    </Navbar >

  );
}

function mapStateToProps(state) {
  return {
    loading: state.user.loading,
    user: state.user.user,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getUser, clearUser }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomNavbar)

