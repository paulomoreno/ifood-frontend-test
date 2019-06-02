import React, { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Navbar from './Navbar';
import Filters from './filters/FiltersWrapper';
import Playlists from './Playlists';
import ReduxToastr from 'react-redux-toastr'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAuthEndpoint } from '../helpers/auth';
import { clearToken, getToken } from '../store/auth/authActions';

import '../stylesheets/App.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'

function App({ clearToken, getToken, access_token }) {
  useEffect(() => {
    getToken();
  }, [getToken]);

  const logout = () => {
    clearToken();
  }

  return (
    <div className="App h-100">
      <div className="body-bkg" />
      <Navbar logout={logout}/>
      <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates
        position="top-left"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
        closeOnToastrClick />
      {!access_token && (
        <div className="contentLogin h-100 align-items-center justify-content-center text-white">
          <Jumbotron variant="dark" className="loginWrapper">
            <h1>Bem Vindo ao Spotifood</h1>
            <p>
              Faça login usando sua conta do Spotify e aproveite uma nova maneira de visualizar suas playlists!
            </p>
            <p>
              <Button variant="success" href={getAuthEndpoint()}>Login com Spotify</Button>
            </p>
          </Jumbotron>
        </div>
      )}
      {access_token && (
        <Container fluid className="contentWrapper h-100 text-white">
          <Row className="align-items-stretch h-100">
            <Col style={{ flexGrow: 1 }}>
              <Playlists />
            </Col>
            <Col md="5" lg="4" xl="3" className="filtersWrapper d-none d-md-flex">
              <Filters idPrefix="sideFilterForm" />
            </Col>
          </Row>
        </Container>
      )}
    </div>
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
