import React from "react";
import Helmet from "react-helmet";
import Nav from "../components/nav/nav";
import Footer from "../components/footer/footer";

// import '../css/blog-post.css'; // make it pretty!

export default function Template({
  data // this prop will be injected by the GraphQL query we'll write in a bit
}) {
  const { markdownRemark: post } = data; // data.markdownRemark holds our post data
  return (
    <div>
      <Helmet>
        <title>{`${post.frontmatter.title} | DSA Momentum`}</title>
      </Helmet>
      <Nav />
      <div className="main__row">
        <h2 className="main__post-title">
          {post.frontmatter.title}
        </h2>
        <div className="main__body-copy main__body-copy--post">
          <div
            className="main__links-section"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
