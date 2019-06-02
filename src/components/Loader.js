import React from "react";
import Spinner from 'react-bootstrap/Spinner';
import Col from 'react-bootstrap/Col';

import '../stylesheets/loader.css';

const Loader = (props) => (
  <div className="loaderWrapper">
    <Spinner
      animation="border"
      role="status"
      {...props}
    >
      <span className="sr-only">Loading...</span>
    </Spinner>
  </div>
);

export default Loader;