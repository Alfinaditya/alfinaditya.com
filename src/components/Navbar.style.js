import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { Sun } from '@styled-icons/heroicons-solid/Sun';

export const Nav = styled.nav`
  @media only screen and (min-width: 769px) {
    display: flex;
  }
  padding-top: 20px;
  margin: auto;
  display: none;
`;
export const Left = styled.div`
  flex: 1;
`;
export const Right = styled.div`
  display: flex;
  align-items: center;
`;
export const BrandStyledNavLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  color: ${props => props.theme.text};

  font-size: 26px;
`;
export const StyledNavLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.text};
  font-size: 16px;
  padding-right: 40px;
`;
export const StyledContactLink = styled.a`
  color: ${props => props.theme.text};
  text-decoration: none;
  font-size: 16px;
  padding-right: 40px;
`;

export const SwitchContainer = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 1px solid ${props => props.theme.switchBorder};
  cursor: pointer;
  background: ${props => props.theme.switchIconContainer};
  color: ${props => props.theme.switchIcon};
  transition: 500ms;
  &:hover {
    background: ${props => props.theme.switchContainerHover};
    color: ${props => props.theme.switchIconHover};
  }
`;

export const SwitchIcon = styled(Sun)`
  width: 20px;
  height: 20px;
`;

export const Switch = styled.input`
  position: absolute;
  cursor: pointer;
  width: 100%;
  opacity: 0;
  height: 100%;
`;
