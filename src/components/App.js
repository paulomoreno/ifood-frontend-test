import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import ReduxToastr from 'react-redux-toastr';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Filters from './filters/FiltersWrapper';
import Playlists from './Playlists';
import { getAuthEndpoint } from '../helpers/auth';
import { clearToken, getToken } from '../store/auth/authActions';

import '../stylesheets/App.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

const App = ({ clearTokenConnect, getTokenConnect, accessToken }) => {
  useEffect(() => {
    getTokenConnect();
  }, [getTokenConnect]);

  const logout = () => {
    clearTokenConnect();
  };

  return (
    <div className="App h-100">
      <div className="body-bkg" />
      <Navbar logout={logout} />
      <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates
        position="top-left"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
        closeOnToastrClick
      />
      {!accessToken && (
        <div className="contentLogin h-100 align-items-center justify-content-center text-white">
          <Jumbotron variant="dark" className="loginWrapper" role="main" aria-labelledby="loginJTTitle">
            <h1 id="loginJTTitle">Bem Vindo ao Spotifood</h1>
            <p>
              Faça login usando sua conta do Spotify e aproveite uma nova maneira de visualizar
              suas playlists!
            </p>
            <p>
              <Button variant="success" href={getAuthEndpoint()}>Login com Spotify</Button>
            </p>
          </Jumbotron>
        </div>
      )}
      {accessToken && (
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
};

App.propTypes = {
  clearTokenConnect: PropTypes.func.isRequired,
  getTokenConnect: PropTypes.func.isRequired,
  accessToken: PropTypes.string,
};

App.defaultProps = {
  accessToken: null,
};


function mapStateToProps(state) {
  return {
    accessToken: state.auth.access_token,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    clearTokenConnect: clearToken,
    getTokenConnect: getToken,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
