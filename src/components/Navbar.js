import React, { useEffect } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './navbar.css';

import { getUser, clearUser } from '../modules/user/userActions';

function CustomNavbar({ token, user, getUser, logout }) {
  useEffect(() => {
    getUser();
  }, []);

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
        <Nav>
          {token && user && (
            <NavDropdown title={
              <span>
                {user.images && user.images.length > 0 && (
                  <Image className="userImage" src={user.images[0].url} roundedCircle />
                )}
                <b>{user.display_name}</b>
              </span>
            } id="collasible-nav-dropdown">
              <NavDropdown.Item onClick={logoutOnClick}>Logout</NavDropdown.Item>
            </NavDropdown>

          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar >

  );
}

{/* <Navbar.Text>
            {user.images && user.images.length > 0 && (
              <Image className="userImage" src={user.images[0].url} roundedCircle />
            )}
            <b>{user.display_name}</b>
            <Button onClick={logoutOnClick} variant="link">Logout</Button>
          </Navbar.Text> */}


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

