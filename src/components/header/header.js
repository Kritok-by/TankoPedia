import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="header d-flex justify-content-center">
      <h3>
        <Link to="/">React Tankopedia</Link>
      </h3>
      <ul className="d-flex">
        <li>
          <Link to="/heavy">Heavy Tanks</Link>
        </li>
        <li>
          <Link to="/medium">Medium Tanks</Link>
        </li>
        <li>
          <Link to="/light">Light Tanks</Link>
        </li>
        <li>
          <Link to="/pt-sau">Pt-Sau</Link>
        </li>
        <li>
          <Link to="/sau">Sau</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
