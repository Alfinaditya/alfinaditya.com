import styled from '@emotion/styled';
import { ChevronLeft } from '@styled-icons/heroicons-outline/ChevronLeft';

export const Container = styled.div`
  max-width: 605px;
  margin: auto;
  margin-bottom: 51px;
  @media only screen and (min-width: 769px) {
    margin-top: 51px;
  }
  margin-top: 120px;
  color: ${props => props.theme.text};
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 17px;
`;

export const BackToHomepage = styled.div`
  color: #707070;
  cursor: pointer;
  margin-top: 51px;
`;
export const BackIcon = styled(ChevronLeft)`
  width: 18px;
  height: 18px;
  margin-right: 8px;
`;
