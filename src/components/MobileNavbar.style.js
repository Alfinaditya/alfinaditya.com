import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { Sun } from '@styled-icons/heroicons-solid/Sun';
import { Menu } from '@styled-icons/heroicons-solid/Menu';

export const BrandStyledNavLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  color: var(--black);
  font-size: 26px;
  padding-bottom: 15px;
`;

export const MobileNav = styled.nav`
  @media only screen and (min-width: 769px) {
    display: none;
  }
  display: block;
  position: relative;
  width: 100%;
  height: 1px;
  margin-top: 50px;
`;

export const MobileLinks = styled.div`
  display: flex;
  background: #fcfcfc;
  border-radius: 6px;
  padding: 30px;
  position: absolute;
  width: 100%;
  flex-direction: column;
`;
export const StyledNavLink = styled(Link)`
  text-decoration: none;
  color: var(--black);
  font-weight: 500;
  font-size: 16px;
  padding-bottom: 15px;
`;

export const StyledContactLink = styled.a`
  color: var(--black);
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  padding-bottom: 15px;
`;

export const SwitchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  transition: 500ms;
  span {
    margin-left: 10px;
    font-weight: 500;
    width: 100%;
  }
`;

export const HamburgerMenuContainer = styled.div`
  background: var(--black);
  border-radius: 4px;
  color: white;
  padding: 5px;
  position: absolute;
  top: 30px;
  right: 20px;
  z-index: 2;
  cursor: pointer;
`;

export const SwitchIcon = styled(Sun)`
  color: ${props => props.theme.switchIcon};
  width: 20px;
  height: 20px;
`;

export const HamburgerMenu = styled(Menu)`
  width: 36px;
  height: 27px;
`;

export const Switch = styled.input`
  position: absolute;
  cursor: pointer;
  opacity: 0;
  width: 100px;
  left: 0;
`;
