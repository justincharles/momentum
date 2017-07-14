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
            },
            {
              name: "twitter:card",
              content: "summary_large_image"
            },
            {
              name: "twitter:site",
              content: "@DSA_Momentum"
            },
            {
              name: "twitter:title",
              content: "DSA Momentum"
            },
            {
              name: "twitter:description",
              content: "For a Mass Socialist Movement in the United States"
            },
            {
              name: "twitter:image",
              content: "https://s3.amazonaws.com/dsamomentum/dsamomentum.png"
            },
            {
              name: "twitter:image:alt",
              content: "Design and Illustration by Colleen Tighe"
            },
            {
              property: "og:url",
              content: "http://dsamomentum.org/"
            },
            {
              property: "og:type",
              content: "website"
            },
            {
              property: "og:title",
              content: "DSA Momentum"
            },
            {
              property: "og:description",
              content: "For a Mass Socialist Movement in the United States"
            },
            {
              property: "og:image",
              content: "https://s3.amazonaws.com/dsamomentum/dsamomentum.png"
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
