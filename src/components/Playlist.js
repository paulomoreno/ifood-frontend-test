import React from 'react';
import Image from 'react-bootstrap/Image';
import PropTypes from 'prop-types';

import '../stylesheets/playlist.css';

const Playlist = ({ playlist }) => (
  <div className="playlist text-center">
    {playlist.images && playlist.images.length > 0 && (
      <Image alt={`"${playlist.name}" cover image`} src={playlist.images[0].url} rounded />
    )}
    <h2 className="mt-2 mb-2">{playlist.name}</h2>
    <p>
      <b>{playlist.tracks && playlist.tracks.total}</b>
      {' faixas - Por '}
      <b>{playlist.owner && playlist.owner.display_name}</b>
    </p>
  </div>
);

Playlist.propTypes = {
  playlist: PropTypes.object.isRequired,
};

export default Playlist;
