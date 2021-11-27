import { graphql } from 'gatsby';
import React from 'react';
import { navigate } from 'gatsby-link';
import Layout from '../components/Layout';
import {
  Container,
  BackIcon,
  BackToHomepage,
  Title,
  Description,
  LiveIcon,
  CodeIcon,
  LinksMD,
  LinksSM,
} from './project-details.style';

const projectDetails = ({ data }) => {
  const project = data.markdownRemark.frontmatter;
  return (
    <Layout>
      <Container>
        <LinksMD>
          <a href={project.liveVersion} rel='noreferrer' target='_blank'>
            <LiveIcon />
            <span>Live Version</span>
          </a>
          <a href={project.sourceCode} rel='noreferrer' target='_blank'>
            <CodeIcon />
            <span>Source Code</span>
          </a>
        </LinksMD>
        <div>
          <BackToHomepage onClick={() => navigate(-1)}>
            <BackIcon />
            Back to homepage
          </BackToHomepage>
          <Title>{project.title}</Title>
          <video
            src={project.video.publicURL}
            width='100%'
            height='auto'
            preload='auto'
            muted={true}
            title={project.title}
            autoPlay
            playsInline
            loop
          />
          <LinksSM>
            <a href={project.liveVersion} rel='noreferrer' target='_blank'>
              <LiveIcon />
              <span>Live Version</span>
            </a>
            <a href={project.sourceCode} rel='noreferrer' target='_blank'>
              <CodeIcon />
              <span>Source Code</span>
            </a>
          </LinksSM>
          <Description>{project.description}</Description>
        </div>
      </Container>
    </Layout>
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
        video {
          publicURL
        }
      }
    }
  }
`;
