import styled from '@emotion/styled';
import { Link } from 'gatsby';

export const Blogs = styled.div`
  max-width: 605px;
  margin: auto;
  @media only screen and (min-width: 769px) {
    margin-top: 51px;
  }
  margin-top: 120px;
  margin-bottom: 120px;
  div {
    margin-bottom: 40px;
  }
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  color: ${props => props.theme.text};
`;

export const Content = styled.p`
  height: 75px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${props => props.theme.text};
`;

export const Date = styled.p`
  margin: 7px 0;
  color: ${props => props.theme.text};
`;

export const ReadMore = styled(Link)`
  color: #0579cd;
  text-decoration: none;
  overflow: hidden;
`;
