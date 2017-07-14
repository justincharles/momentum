import React, { Component } from "react";
import Link from "gatsby-link";
import "./_nav.scss";

class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="nav__row">
          <h1 className="nav__heading">
            <Link to="/">DSA Momentum</Link>
          </h1>
          <div className="nav__menu">
            <h2 className="nav__menu-item">
              <Link to="/preamble">Preamble</Link>
            </h2>
            <h2 className="nav__menu-item">
              <Link to="/platform">Platform</Link>
            </h2>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
