import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Loader from './Loader';
import FiltersBadges from './filters/FiltersBadges';
import Playlist from './Playlist';
import { getPlaylists } from '../store/playlist/playlistActions';

let setIntervalId;
const REFRESH_PL_MS = 30 * 1000;

const filterPlaylists = (playlists, localSearchForm) => {
  if (!playlists || !playlists.items) return [];

  if (!localSearchForm.values
      || !localSearchForm.values.name) return playlists.items;

  const searchStr = localSearchForm.values.name.toLowerCase();

  return playlists.items.filter(playlist => playlist.name.toLowerCase().indexOf(searchStr) > -1);
};

const Playlists = ({
  playlists, getPlaylistsConnect, loading, localSearchForm,
}) => {
  // When the component starts, load the playlits
  // and set the playlist to be refreshed
  useEffect(() => {
    getPlaylistsConnect();
    if (setIntervalId) clearInterval(setIntervalId);
    setIntervalId = setInterval(() => {
      getPlaylistsConnect();
    }, REFRESH_PL_MS);
  }, [getPlaylistsConnect]);

  const filteredPlaylists = filterPlaylists(playlists, localSearchForm);

  return (
    <Container fluid className="playlistsWrapper" role="main" aria-labelledby="playlistsTitle">
      <h1 id="playlistsTitle">Playlists </h1>
      <FiltersBadges />
      <Row>
        {loading && (
        <Loader />
        )}
        {!loading && filteredPlaylists && filteredPlaylists.map(playlist => (
          <Col key={`playlist_wrapper_${playlist.id}`}>
            <Playlist playlist={playlist} />
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
};

Playlists.propTypes = {
  playlists: PropTypes.object,
  getPlaylistsConnect: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  localSearchForm: PropTypes.object,
};

Playlists.defaultProps = {
  playlists: {},
  loading: true,
  localSearchForm: {},
};

function mapStateToProps(state) {
  return {
    loading: state.playlists.loading,
    playlists: state.playlists.response,
    localSearchForm: state.form.localSearchForm,
    token: state.auth.access_token,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getPlaylistsConnect: getPlaylists,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlists);
