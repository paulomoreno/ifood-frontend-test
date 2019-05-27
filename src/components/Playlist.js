import React, { useEffect } from "react";
import Image from 'react-bootstrap/Image';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './playlist.css';

const Playlist = ({ playlist }) => {
  console.log(playlist);
  return (
    <a href={playlist.href} className="playlistButton">
        {playlist.images && playlist.images.length > 0 && (
          <Image src={playlist.images[0].url} rounded />
        )}
        <h3>{playlist.name}</h3>
    </a>
  );
}

export default Playlist

