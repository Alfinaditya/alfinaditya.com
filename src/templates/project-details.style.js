import styled from '@emotion/styled';
import { ChevronLeft } from '@styled-icons/heroicons-outline/ChevronLeft';
import { Code } from '@styled-icons/heroicons-outline/Code';
import { Link } from '@styled-icons/heroicons-outline/Link';

export const Container = styled.div`
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

export const LinksMD = styled.div`
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

export const LinksSM = styled.div`
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
export const Description = styled.p`
  margin: 20px 0;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-top: 36px;
  margin-bottom: 20px;
`;

export const BackToHomepage = styled.div`
  color: #707070;
  cursor: pointer;
`;

export const BackIcon = styled(ChevronLeft)`
  width: 18px;
  height: 18px;
  margin-right: 8px;
`;

export const CodeIcon = styled(Code)`
  width: 16px;
  height: 16px;
  margin-right: 8px;
  color: ${props => props.theme.text};
`;

export const LiveIcon = styled(Link)`
  width: 16px;
  height: 16px;
  margin-right: 8px;
  color: ${props => props.theme.text};
`;
