import { graphql, Link } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import { Container, Date, Title, ReadMore, Content } from './blog.style';

const Blog = ({ data }) => {
  const blogs = data.allMarkdownRemark.nodes;
  return (
    <Layout>
      <Container>
        {blogs.map((blog, i) => (
          <div key={i}>
            <Title>{blog.frontmatter.title}</Title>
            <Date>{blog.frontmatter.date}</Date>
            <Content dangerouslySetInnerHTML={{ __html: blog.html }} />
            <ReadMore to={`/blog/${blog.frontmatter.slug}`}>
              Read More...
            </ReadMore>
          </div>
        ))}
      </Container>
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
