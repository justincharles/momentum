import React, { Component } from "react";
import logo from "../../assets/logo.png";
import Nav from "../nav/nav";
import "./_header.scss";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <Nav />
        <img src={logo} className="header__graphic" alt="DSA Momentum" />
      </header>
    );
  }
}

export default Header;
