import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="col-md-12">
      <nav className="navbar py-3">
        <ul className="nav ml-auto">
          <li className="nav-item">
            <a href="/" className="nav-link">
              Gmail
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              Images
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              <i className="bi bi-grid-3x3-gap-fill" />
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              <i className="fa fa-user-circle-o" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Header;
