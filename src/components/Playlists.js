import React, { useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Loader from './Loader';
import FiltersBadges from './filters/FiltersBadges';
import Playlist from "./Playlist";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getPlaylists} from '../store/playlist/playlistActions';

let setIntervalId;
let REFRESH_PL_MS = 30 * 1000;

const filterPlaylists = (playlists, localSearchForm) => {
  if (!playlists || !playlists.items) return [];

  if (!localSearchForm 
      || !localSearchForm.values 
      || !localSearchForm.values.name)
    return playlists.items;

  const searchStr = localSearchForm.values.name.toLowerCase();

  return playlists.items.filter(playlist=>{
    return playlist.name.toLowerCase().indexOf(searchStr) > -1;
  });
}

function Playlists({ playlists, getPlaylists, loading, localSearchForm }) {
  // When the component starts, load the playlits
  // and set the playlist to be refreshed
  useEffect(() => {
    getPlaylists();
    if (setIntervalId)
      clearInterval(setIntervalId);
    setIntervalId = setInterval(()=>{
      getPlaylists()
    },REFRESH_PL_MS);
  }, [getPlaylists]);

  const filteredPlaylists = filterPlaylists(playlists, localSearchForm);

  return (
    <Container fluid className="playlistsWrapper" role="main" aria-labelledby="playlistsTitle">
        <h1 id="playlistsTitle">Playlists </h1>
        <FiltersBadges/>
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
            <Col>
              <p>Nenhuma playlist disponível</p>
            </Col>
          )}
        </Row>
    </Container>

  );
}

function mapStateToProps(state) {
  return {
    loading: state.playlists.loading,
    playlists: state.playlists.list,
    localSearchForm: state.form.localSearchForm,
    token: state.auth.access_token,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getPlaylists }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlists)

