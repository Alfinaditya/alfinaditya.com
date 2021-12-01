import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const StatusCode = styled.h1`
  font-size: 36px;
`;
const NotFoundContainer = styled.div`
  color: ${props => props.theme.text};
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`;
const NotFoundText = styled.h1`
  margin: 15px 0;
`;
const BackToHomePage = styled(Link)`
  color: ${props => props.theme.text};
`;

const NotFound = () => {
  return (
    <Layout>
      <Seo title={'Page Not Found'} description={'Something Went Wrong'} />
      <NotFoundContainer>
        <StatusCode>404</StatusCode>
        <NotFoundText>Something Went Wrong.</NotFoundText>
        <BackToHomePage to='/'>Back to Homepage</BackToHomePage>
      </NotFoundContainer>
    </Layout>
  );
};

export default NotFound;
