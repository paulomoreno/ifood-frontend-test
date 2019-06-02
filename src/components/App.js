import React, { useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ReduxToastr from 'react-redux-toastr';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Login from './Login';
import Navbar from './Navbar';
import Filters from './filters/FiltersWrapper';
import Playlists from './Playlists';
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
        <Login />
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
