import { graphql } from 'gatsby';
import React from 'react';
import { navigate } from 'gatsby-link';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import styled from '@emotion/styled';
import { ChevronLeft } from '@styled-icons/heroicons-outline/ChevronLeft';

const Container = styled.div`
  max-width: 605px;
  margin: auto;
  margin-bottom: 51px;
  @media only screen and (min-width: 769px) {
    margin-top: 51px;
  }
  margin-top: 120px;
  color: ${props => props.theme.text};
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

const Content= styled.div`
  p{
    margin: 15px 0;
  }
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 17px;
`;

const BackToHomepage = styled.div`
  color: #707070;
  cursor: pointer;
  margin-top: 51px;
`;

const BackIcon = styled(ChevronLeft)`
  width: 18px;
  height: 18px;
  margin-right: 8px;
`;

const BlogDetails = ({ data }) => {
  const blog = data.markdownRemark;
  return (
    <Layout>
      <Seo
        title={`${blog.frontmatter.title} | Alfin Aditya`}
        description={blog.frontmatter.description}
      />
      <Container>
        <Header>
          <Title>{blog.frontmatter.title}</Title>
          <p>{blog.frontmatter.date}</p>
        </Header>
        <Content dangerouslySetInnerHTML={{ __html: blog.html }} />
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
        description
        date
        slug
      }
      html
    }
  }
`;
