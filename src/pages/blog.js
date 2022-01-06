import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const Blogs = styled.div`
  max-width: 605px;
  margin: auto;
  @media only screen and (min-width: 769px) {
    margin-top: 51px;
  }
  margin-top: 120px;
  margin-bottom: 120px;
  div {
    margin-bottom: 30px;
  }
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  color: ${props => props.theme.text};
`;

const Description = styled.div`
  color: ${props => props.theme.text};
  margin: 10px 0;
`;

const Date = styled.p`
  margin: 15px 0;
  color: ${props => props.theme.text};
`;

const ReadMore = styled(Link)`
  color: #0579cd;
  text-decoration: none;
  overflow: hidden;
`;

const Blog = ({ data }) => {
  const blogs = data.allMarkdownRemark.nodes;
  return (
    <Layout>
      <Seo title='Blog | Alfin Aditya' description="Alfin Aditya's Blog" />
      <Blogs>
        {blogs.map((blog, i) => (
          <div key={i}>
            <Title>{blog.frontmatter.title}</Title>
            <Date>{blog.frontmatter.date}</Date>
            <Description>{blog.frontmatter.description}</Description>
            <ReadMore to={`/blog/${blog.frontmatter.slug}`}>
              Read More...
            </ReadMore>
          </div>
        ))}
      </Blogs>
    </Layout>
  );
};

export const query = graphql`
  query BLOG {
    allMarkdownRemark(filter: { frontmatter: { category: { eq: "blog" } } }) {
      nodes {
        frontmatter {
          title
          description
          date
          slug
          date
        }
      }
    }
  }
`;
export default Blog;
