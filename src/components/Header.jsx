import React from "react";
import ImagenPoke from '../Image/pokeapi_256.png'

const Navbar = () => {

  return (
    <nav>
      <div />
      <div>
        <a href="/">
          <img src={ImagenPoke} alt="pokeapi-logo" className="navbar-image" />
        </a>
        
      </div>
    </nav>
  );
};

export default Navbar;
