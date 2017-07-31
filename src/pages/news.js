import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import Nav from "../components/nav/nav";
import Footer from "../components/footer/footer";

// import '../css/index.css'; // add some style if you want!

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>News | DSA Momentum</title>
      </Helmet>
      <Nav />
      <div className="main__row">
        <h3 className="main__page-title">News</h3>
        <div className="main__body-copy">
          {posts
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({ node: post }) => {
              return (
                <div className="main__links-section" key={post.id}>
                  <h4 className="main__links-section-title">
                    <Link to={post.frontmatter.path}>
                      {post.frontmatter.title}
                    </Link>
                  </h4>
                  <h5>
                    {post.frontmatter.date}
                  </h5>
                  <p>
                    {post.excerpt}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;
