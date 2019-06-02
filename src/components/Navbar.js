import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import Filters from './filters/FiltersWrapper';
import SearchBarForm from "./SearchBarForm";

import '../stylesheets/navbar.css';

import { getUser, clearUser } from '../store/user/userActions';

function CustomNavbar({ token, user, getUser, logout }) {
  useEffect(() => {
    if (token) getUser();
  }, [token]);

  const logoutOnClick = (e) => {
    e.preventDefault();
    clearUser();
    if (logout) logout();
  }

  return (
    <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
      <Navbar.Brand>Spotifood</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end text-white">
        {token && user && (
          <Nav>
            <SearchBarForm />
            <NavDropdown
              className="loggedInUserDropdown"
              title={
                <span>
                  {user.images && user.images.length > 0 && (
                    <Image alt="Logged In Profile Picture" className="userImage" src={user.images[0].url} roundedCircle />
                  )}
                  <b>{user.display_name}</b>
                </span>
              }
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item onClick={logoutOnClick}>Logout</NavDropdown.Item>
            </NavDropdown>
            <div className="filtersWrapperNav">
              <Filters idPrefix="navFilterForm" />
            </div>
          </Nav>

        )}
      </Navbar.Collapse>
    </Navbar >
  );
}


function mapStateToProps(state) {
  return {
    loading: state.user.loading,
    user: state.user.user,
    token: state.auth.access_token
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getUser, clearUser }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomNavbar)

