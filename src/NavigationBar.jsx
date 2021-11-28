import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link className="nav-link active" to="/recipe">
            HOME
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/recipe/add">
            ADD RECIPE
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
