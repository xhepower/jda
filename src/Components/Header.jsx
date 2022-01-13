import React from "react";

function Header() {
  return (
    <>
      <div className="mobile-menu">
        <div className="components">
          <ul>
            <li>
              <a href="/">Clientes</a>
            </li>
            <li>
              <a href="/">Precios</a>
            </li>
            <li>
              <a href="/">Reportes</a>
            </li>
          </ul>
        </div>
        <ul className="user">
          <li>
            <a href="/">My orders</a>
          </li>
          <li>
            <a href="/">My account</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
