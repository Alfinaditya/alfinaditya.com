import styled from '@emotion/styled';
import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import { StaticImage } from 'gatsby-plugin-image';

const Title = styled.p`
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${props => props.theme.text};
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  font-size: 17px;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const Description = styled.p`
  color: ${props => props.theme.text};
`;
const About = () => {
  return (
    <Layout>
      <Seo title='About me | Alfin Aditya' />
      <Container>
        <StaticImage
          alt='Alfin Aditya'
          width={105}
          height={105}
          style={{ borderRadius: '50%' }}
          imgStyle={{ borderRadius: '50%' }}
          src='../contents/assets/me.webp'
        />
        <Title>
          My name is Alfin Aditya, i'm a person who is passionate about Web
          development.
        </Title>
        <Description>
          My favorite technologies are : React,Typescript and GraphQL
        </Description>
      </Container>
    </Layout>
  );
};

export default About;
