import { graphql, Link } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';

const Blog = ({ data }) => {
  const blogs = data.allMarkdownRemark.nodes;
  return (
    <Layout>
      {blogs.map(blog => (
        <div>
          <h1>{blog.frontmatter.title}</h1>
          <p>{blog.frontmatter.date}</p>
          <div dangerouslySetInnerHTML={{ __html: blog.html }} />
          <Link to={`/blog/${blog.frontmatter.slug}`}>Read More</Link>
        </div>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query BLOG {
    allMarkdownRemark(filter: { frontmatter: { category: { eq: "blog" } } }) {
      nodes {
        frontmatter {
          title
          date
          slug
          date
        }
        html
      }
    }
  }
`;
export default Blog;
