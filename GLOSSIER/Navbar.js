import React from 'react';
import {Link} from "react-router-dom"

function Navbar(props) {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <h2><a class="navbar-brand" href="/">GLOSSIER</a></h2>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
    <Link to="/" class="nav-item nav-link"> Home</Link>

      <Link to="/skin" class="nav-item nav-link"> Skin care </Link>
      <Link to="/makeup" class="nav-item nav-link">Make up </Link>
      <Link to="/body" class="nav-item nav-link"> Body </Link>
      <Link to="/fra" class="nav-item nav-link"> Fragance </Link>
      <Link to="/limited" class="nav-item nav-link"> Limited Edition</Link>
      <Link to="/user" class="nav-item nav-link">Login</Link>








      <Link to="/cart" class="nav-item nav-link"> Cart </Link>
    </div>
  </div>
</nav>
        </div>
    );
}

export default Navbar;