import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { navigate } from 'gatsby-link';

const Projects = () => {
  const data = useStaticQuery(query);
  const projects = data.allMarkdownRemark.nodes;

  return (
    <div>
      <h1>projects</h1>
      {projects.map((project, i) => (
        <div key={i}>
          <GatsbyImage
            image={getImage(
              project.frontmatter.image.childrenImageSharp[0].gatsbyImageData
            )}
            alt={project.frontmatter.title}
            onClick={() => navigate(`/project/${project.frontmatter.slug}`)}
          />
          <h2>{project.frontmatter.title}</h2>
          <a
            href={project.frontmatter.liveVersion}
            rel='noreferrer'
            target='_blank'
          >
            Live Version
          </a>
          <a
            href={project.frontmatter.sourceCode}
            rel='noreferrer'
            target='_blank'
          >
            Source Code
          </a>
        </div>
      ))}
    </div>
  );
};
const query = graphql`
  query PROJECTS {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "projects" } } }
    ) {
      nodes {
        frontmatter {
          title
          slug
          liveVersion
          description
          sourceCode
          image {
            childrenImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;
export default Projects;
