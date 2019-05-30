import React, { useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Loader from './Loader';

import {getPlaylists} from '../modules/playlist/playlistActions';
import Playlist from "./Playlist";

let setIntervalId;
let REFRESH_PL_MS = 30 * 1000;

function Playlists({ playlists, getPlaylists, loading, localFilters }) {
  // When the component starts, load the playlits
  // and set the playlist to be refreshed
  useEffect(() => {
    getPlaylists();
    if (setIntervalId)
      clearInterval(setIntervalId);
    setIntervalId = setInterval(()=>{getPlaylists()},REFRESH_PL_MS);
  }, []);

  const filterPlaylists = (playlists, localFilters) => {
    if (!playlists || !playlists.items) return [];
    if (!localFilters || !localFilters.name) return playlists.items;

    const searchStr = localFilters.name.toLowerCase();
    return playlists.items.filter(playlist=>{
      return playlist.name.toLowerCase().indexOf(searchStr) > -1;
    });
  }

  const filteredPlaylists = filterPlaylists(playlists, localFilters);

  console.log('playlsits',playlists);
  // const filteredPlaylists = playlists.filter(playlist => playlist.name)

  return (
    <Container fluid>
        <h1>Playlists</h1>
        <Row>
          {loading && (
            <Loader/>
          )}
          {!loading && filteredPlaylists && filteredPlaylists.map((playlist,i) => (
            <Col key={`playlist_wrapper_${i}`}>
              <Playlist playlist={playlist}/>
            </Col>
          ))}
          {(!filteredPlaylists || filteredPlaylists.length === 0) && !loading && (
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
    localFilters: state.filters.local_filters_query,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getPlaylists }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlists)

