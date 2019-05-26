import React, { useEffect } from "react";
import Navbar from 'react-bootstrap/Navbar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {getUser, clearUser} from '../modules/user/userActions';

function Filters({ }) {


  return (
    <div>
        Playlists
    </div>

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

export default connect(mapStateToProps, mapDispatchToProps)(Filters)

