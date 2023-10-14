import { Link } from "react-router-dom";
import { Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import "./NavBar.css";
/* import CartWidget from "../CartWidget/CartWidget"; */

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="nav-container">
      <ul className="nav-ul">
        <Link className="li" to="/">
          Home
        </Link>
        <Link className="li" to="/About">
          Quienes somos
        </Link>
        <Link className="li" to="/Contact">
          Contacto
        </Link>
        <div className="li" onClick={handleMenuClick}>
          Categorías
        </div>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>
            <Link to="/Category/Ropa">Ropa</Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link to="/Category/Accesorio">Accesorios</Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link to="/Category/Decoración">Decoración</Link>
          </MenuItem>
        </Menu>
      </ul>
    </nav>
  );
};

export default NavBar;



// import React from 'react';
// import  "./NavBar.css";

// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// const NavBar = () => {
//   return <nav>
//         <ul>
//             <li>Home</li>
//             <li>Equipos</li>
//             <li>Sponsor</li>
//             <li>Noticias</li>
//             <li>Contacto</li>
//             <li><ShoppingCartIcon /></li>

//         </ul>

//     </nav>
// }

// export default NavBar