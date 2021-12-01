import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { navigate } from 'gatsby-link';
import {
  Header,
  StyledLink,
  Project,
  ProjectsContainer,
  Title,
  Links,
  CodeIcon,
  LiveIcon,
} from './Projects.style';

const Projects = () => {
  const data = useStaticQuery(query);
  const projects = data.allMarkdownRemark.nodes;

  return (
    <div>
      <Header>Projects</Header>
      <ProjectsContainer>
        {projects.map((project, i) => (
          <Project key={i}>
            <GatsbyImage
              image={getImage(
                project.frontmatter.image.childrenImageSharp[0].gatsbyImageData
              )}
              alt={project.frontmatter.title}
              style={{
                width: '282px',
                height: '259px',
                border: '1px solid #E5E5E5',
                cursor: 'pointer',
              }}
              onClick={() => navigate(`/project/${project.frontmatter.slug}`)}
            />
            <div>
              <Title>{project.frontmatter.title}</Title>

              <Links>
                <StyledLink
                  href={project.frontmatter.liveVersion}
                  rel='noreferrer'
                  target='_blank'
                >
                  <span>Live Version</span>
                  <LiveIcon />
                </StyledLink>

                <StyledLink
                  href={project.frontmatter.sourceCode}
                  rel='noreferrer'
                  target='_blank'
                >
                  <span>Source Code</span>
                  <CodeIcon />
                </StyledLink>
              </Links>
            </div>
          </Project>
        ))}
      </ProjectsContainer>
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
