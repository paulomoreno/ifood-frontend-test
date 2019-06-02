import React, { useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Filters from './filters/FiltersWrapper';
import SearchBarForm from './SearchBarForm';
import { getUser, clearUser } from '../store/user/userActions';

import '../stylesheets/navbar.css';

const CustomNavbar = ({
  token, user, getUserConnect, logout, clearUserConnect,
}) => {
  useEffect(() => {
    if (token) getUserConnect();
  }, [token, getUserConnect]);

  const logoutOnClick = (e) => {
    e.preventDefault();
    clearUserConnect();
    if (logout) logout();
  };

  return (
    <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
      <Navbar.Brand>Spotifood</Navbar.Brand>
      {token && user && (
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      )}
      {token && user && (
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end text-white">

          <Nav>
            <SearchBarForm />
            <NavDropdown
              className="loggedInUserDropdown"
              title={(
                <span>
                  {user.images && user.images.length > 0 && (
                    <Image alt="Logged In Profile Picture" className="userImage" src={user.images[0].url} roundedCircle />
                  )}
                  <b>{user.display_name}</b>
                </span>
              )}
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item onClick={logoutOnClick}>Sair</NavDropdown.Item>
            </NavDropdown>
            <div className="filtersWrapperNav">
              <Filters idPrefix="navFilterForm" />
            </div>
          </Nav>
        </Navbar.Collapse>
      )}
    </Navbar>
  );
};

CustomNavbar.propTypes = {
  token: PropTypes.string,
  user: PropTypes.object,
  getUserConnect: PropTypes.func.isRequired,
  clearUserConnect: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

CustomNavbar.defaultProps = {
  token: '',
  user: {},
};

function mapStateToProps(state) {
  return {
    user: state.user.user,
    token: state.auth.access_token,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getUserConnect: getUser,
    clearUserConnect: clearUser,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomNavbar);
