import React, { useEffect } from "react";
import Navbar from 'react-bootstrap/Navbar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {getPlaylists} from '../modules/playlist/playlistActions';

function Playlists({ playlists, getPlaylists }) {
  useEffect(() => {
    getPlaylists();
  }, []);

  return (
    <div>
        <h1>Playlists</h1>
        {playlists && playlists.items && playlists.items.map(playlist => (
          <div>
            <h3>{playlist.name}</h3>
          </div>
        ))}
    </div>

  );
}

function mapStateToProps(state) {
  return {
    loading: state.playlists.loading,
    playlists: state.playlists.list,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getPlaylists }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlists)

