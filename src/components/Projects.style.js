import styled from '@emotion/styled';
import { Code } from '@styled-icons/heroicons-outline/Code';
import { Link } from '@styled-icons/heroicons-outline/Link';

export const Header = styled.h1`
  margin-bottom: 30px;
  color: ${props => props.theme.text};
  @media only screen and (max-width: 715px) {
    text-align: center;
  }
`;

export const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  @media only screen and (max-width: 715px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const Project = styled.div`
  margin-right: 40px;
  margin-bottom: 50px;
  @media only screen and (max-width: 715px) {
    margin-right: 0;
  }
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: var(--black);
  display: flex;
  align-items: center;
  width: fit-content;
  margin-right: 30px;
  color: ${props => props.theme.text};
  span {
    margin-right: 10px;
    color: ${props => props.theme.text};
  }
  @media only screen and (max-width: 1118px) {
    margin-right: 20px;
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.text};
`;

export const Title = styled.h2`
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  color: ${props => props.theme.text};
`;

export const CodeIcon = styled(Code)`
  width: 16px;
  height: 16px;
`;

export const LiveIcon = styled(Link)`
  width: 16px;
  height: 16px;
`;
