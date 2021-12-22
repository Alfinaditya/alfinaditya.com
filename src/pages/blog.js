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
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  color: ${props => props.theme.text};
`;

const Content = styled.div`
  height: 75px;
  color: ${props => props.theme.text};
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const Date = styled.p`
  margin: 7px 0;
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
            <Content dangerouslySetInnerHTML={{ __html: blog.html }} />
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
