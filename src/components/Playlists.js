import React, { useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {getPlaylists} from '../modules/playlist/playlistActions';
import Playlist from "./Playlist";

function Playlists({ playlists, getPlaylists }) {
  useEffect(() => {
    console.log('a')
    getPlaylists();
  }, []);

  return (
    <Container fluid>
        <h1>Playlists</h1>
        <Row>
          {playlists && playlists.items && playlists.items.map(playlist => (
            <Col>
              <Playlist playlist={playlist}/>
            </Col>
          ))}
          {(!playlists || playlists.length === 0) && (
            <p>No playlists available</p>
          )}
        </Row>
    </Container>

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

