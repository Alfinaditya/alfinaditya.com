import { graphql } from 'gatsby';
import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { navigate } from 'gatsby-link';

const projectDetails = ({ data }) => {
  const project = data.markdownRemark.frontmatter;
  return (
    <div>
      <div onClick={() => navigate(-1)}>Back to Homepage</div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <GatsbyImage
        image={getImage(project.image.childImageSharp.gatsbyImageData)}
        alt={project.title}
      />
      <a href={project.liveVersion} rel='noreferrer' target='_blank'>
        Live Version
      </a>
      <a href={project.sourceCode} rel='noreferrer' target='_blank'>
        Source Code
      </a>
    </div>
  );
};

export default projectDetails;

export const query = graphql`
  query ProjectDetailsQuery($slug: String) {
    markdownRemark(
      frontmatter: { slug: { eq: $slug }, category: { eq: "projects" } }
    ) {
      frontmatter {
        title
        description
        liveVersion
        sourceCode
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
