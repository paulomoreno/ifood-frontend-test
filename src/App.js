import React, { useState, useEffect } from "react";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from './components/Navbar';
import Filters from './components/Filters';
import Playlists from './components/Playlists';
import ReduxToastr from 'react-redux-toastr'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';

import './App.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'

import { getAuthEndpoint } from './helpers/auth';
import { clearToken, getToken } from './modules/auth/authActions';

function App({clearToken, getToken, access_token}) {
  useEffect(() => {
    getToken();
  }, []);

  const logout = () => {
    clearToken();
  }

  return (
    <div className="App">
      <Navbar logout={logout}/>
      <ReduxToastr
            timeOut={4000}
            newestOnTop={false}
            preventDuplicates
            position="top-left"
            transitionIn="fadeIn"
            transitionOut="fadeOut"
            progressBar
            closeOnToastrClick/>
      <div className="content">
      {!access_token && (
        <div className="loginWrapper">
          <Button variant="primary" href={getAuthEndpoint()}>Login with Spotify</Button>
        </div>
      )}
      {access_token && (
        <div>
          <Container fluid>
            <Filters />
          </Container>
          <Playlists />
        </div>
      )}
      </div>
    </div >
  );
}

function mapStateToProps(state) {
  return {
    access_token: state.auth.access_token,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ clearToken, getToken }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
