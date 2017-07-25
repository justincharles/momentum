import React, { Component } from "react";
import Link from "gatsby-link";
import "./_footer.scss";

class Footer extends Component {
  render() {
    return (
      <nav className="footer">
        <div className="footer__row">
          <div className="footer__menu">
            <h2 className="footer__menu-item">
              <a href="https://twitter.com/dsa_momentum" target="_blank">
                Twitter
              </a>
            </h2>
            <h2 className="footer__menu-item">
              <a
                href="https://www.facebook.com/DSA-Momentum-336318696801055/"
                target="_blank"
              >
                Facebook
              </a>
            </h2>
            <h2 className="footer__menu-item">
              <a href="mailto:info@dsamomentum.org" target="_blank">
                Email
              </a>
            </h2>
          </div>
        </div>
      </nav>
    );
  }
}

export default Footer;
