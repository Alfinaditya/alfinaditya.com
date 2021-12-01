import { graphql } from 'gatsby';
import React from 'react';
import { navigate } from 'gatsby-link';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import styled from '@emotion/styled';
import { ChevronLeft } from '@styled-icons/heroicons-outline/ChevronLeft';
import { Code } from '@styled-icons/heroicons-outline/Code';
import { Link } from '@styled-icons/heroicons-outline/Link';

const Container = styled.div`
  max-width: 700px;
  margin: auto;
  @media only screen and (min-width: 769px) {
    margin-top: 51px;
  }
  margin-top: 120px;
  margin-bottom: 51px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${props => props.theme.text};
`;

const LinksMD = styled.div`
  margin: 20px 0;
  margin-right: 20px;
  @media only screen and (max-width: 519px) {
    display: none;
  }
  a {
    width: 120px;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--black);
    margin-bottom: 20px;
    span {
      color: ${props => props.theme.text};
    }
  }
`;

const LinksSM = styled.div`
  margin: 20px 0;
  margin-right: 20px;
  @media only screen and (min-width: 520px) {
    display: none;
  }
  a {
    @media only screen and (max-width: 346px) {
      margin-right: 18px;
    }
    margin-right: 30px;
    width: 100%;
    text-decoration: none;
    color: var(--black);
    margin-bottom: 20px;
    span {
      color: ${props => props.theme.text};
    }
  }
`;
const Description = styled.p`
  margin: 20px 0;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-top: 36px;
  margin-bottom: 20px;
`;

const BackToHomepage = styled.div`
  color: #707070;
  cursor: pointer;
`;

const BackIcon = styled(ChevronLeft)`
  width: 18px;
  height: 18px;
  margin-right: 8px;
`;

const CodeIcon = styled(Code)`
  width: 16px;
  height: 16px;
  margin-right: 8px;
  color: ${props => props.theme.text};
`;

const LiveIcon = styled(Link)`
  width: 16px;
  height: 16px;
  margin-right: 8px;
  color: ${props => props.theme.text};
`;

const projectDetails = ({ data }) => {
  const project = data.markdownRemark.frontmatter;
  return (
    <Layout>
      <Seo
        title={`${project.title} | Alfin Aditya`}
        description={project.description}
      />
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
