import React from 'react';
import './NotFound.css';

const NotFoundPage = () => {
  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h1>404</h1>
          <h2>Oopsie Page not found</h2>
        </div>
        <a href="/">Get back to shopping!!!</a>
      </div>
    </div>
  );
}

export default NotFoundPage;
