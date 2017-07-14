import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import Nav from "../components/nav/nav";

import "../styles/main.scss";

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func
  };

  render() {
    return (
      <div>
        <Helmet
          title="DSA Momentum"
          meta={[
            {
              name: "description",
              content: "For a Mass Socialist Movement in the United States"
            },
            {
              name: "keywords",
              content: "socialism, democratic socialism, DSA"
            }
          ]}
        />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem`,
            paddingTop: 0
          }}
        >
          {this.props.children()}
        </div>
      </div>
    );
  }
}
