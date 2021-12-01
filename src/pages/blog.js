import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import { Blogs, Date, Title, ReadMore, Content } from './blog.style';

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
