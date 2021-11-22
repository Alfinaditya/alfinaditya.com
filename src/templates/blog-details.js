import { graphql } from 'gatsby';
import React from 'react';
import { navigate } from 'gatsby-link';

const BlogDetails = ({ data }) => {
  const blog = data.markdownRemark;
  return (
    <div>
      <div onClick={() => navigate(-1)}>Back to homepage</div>
      <h1>{blog.frontmatter.title}</h1>
      <p>{blog.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: blog.html }} />
    </div>
  );
};

export default BlogDetails;

export const query = graphql`
  query BlogDetailsQuery($slug: String) {
    markdownRemark(
      frontmatter: { slug: { eq: $slug }, category: { eq: "blog" } }
    ) {
      frontmatter {
        title
        date
        category
        slug
      }
      html
    }
  }
`;
