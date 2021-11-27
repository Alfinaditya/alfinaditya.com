import { graphql } from 'gatsby';
import React from 'react';
import { navigate } from 'gatsby-link';
import {
  BackIcon,
  BackToHomepage,
  Container,
  Header,
  Title,
} from './blog-details.style';
import Layout from '../components/Layout';

const BlogDetails = ({ data }) => {
  const blog = data.markdownRemark;
  return (
    <Layout>
      <Container>
        <Header>
          <Title>{blog.frontmatter.title}</Title>
          <p>{blog.frontmatter.date}</p>
        </Header>
        <div dangerouslySetInnerHTML={{ __html: blog.html }} />
        <BackToHomepage onClick={() => navigate(-1)}>
          <BackIcon />
          Back to homepage
        </BackToHomepage>
      </Container>
    </Layout>
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
