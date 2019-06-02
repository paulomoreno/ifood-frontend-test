import React from "react";
import Image from 'react-bootstrap/Image';

import '../stylesheets/playlist.css';

const Playlist = ({ playlist }) => {
  console.log(playlist);
  return (
    <div className="playlist text-center">
        {playlist.images && playlist.images.length > 0 && (
          <Image alt={`"${playlist.name}" cover image`} src={playlist.images[0].url} rounded />
        )}
        <h2 class="mt-2 mb-2">{playlist.name}</h2>
        <p>
          <b>{playlist.tracks && playlist.tracks.total}</b> faixas 
          - 
          Por <b>{playlist.owner && playlist.owner.display_name}</b>
        </p>
    </div>
  );
}

export default Playlist

