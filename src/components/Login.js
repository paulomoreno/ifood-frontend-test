
import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import { getAuthEndpoint } from '../helpers/auth';

const Login = () => (
  <div className="contentLogin h-100 align-items-center justify-content-center text-white">
    <Jumbotron variant="dark" className="loginWrapper" role="main" aria-labelledby="loginJTTitle">
      <h1 id="loginJTTitle">Bem Vindo ao Spotifood</h1>
      <p>
        Entre usando sua conta do Spotify e aproveite uma nova maneira de visualizar
        suas playlists!
      </p>
      <p>
        <Button size="lg" variant="success" href={getAuthEndpoint()}>Entre com Spotify</Button>
      </p>
    </Jumbotron>
  </div>
);

export default Login;
