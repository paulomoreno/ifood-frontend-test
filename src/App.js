import React, { useState } from "react";

import Button from 'react-bootstrap/Button';
import Navbar from './components/Navbar';
import Filters from './components/Filters';
import Playlists from './components/Playlists';
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';

import './App.css';

import { getAuthEndpoint, getAccessToken, clearToken } from './helpers/auth';
import {makeApiRequest} from './helpers/api';

function App() {
  const [token, setToken] = useState(getAccessToken());

  const logout = () => {
    clearToken();
    setToken(null);
  }

  return (
    <div className="App">
      <Navbar token={token} logout={logout}/>
      <div className="content">

      {!token && (
        <div className="loginWrapper">
          <Button variant="primary" href={getAuthEndpoint()}>Login with Spotify</Button>
        </div>
      )}
      {token && (
        <div>
          <Filters />
          <Playlists />
        </div>
      )}
      </div>
    </div >
  );
}

export default App;
