import React from 'react';
import {
  BrandStyledNavLink,
  Left,
  Nav,
  Right,
  StyledNavLink,
  SwitchContainer,
  Switch,
  SwitchIcon,
  StyledContactLink,
} from './Navbar.style';

const Navbar = ({ switchToggler, setSwitchToggler, themeToggler }) => {
  return (
    <Nav>
      <Left>
        <BrandStyledNavLink to='/'>Alfin Aditya</BrandStyledNavLink>
      </Left>
      <Right>
        <StyledNavLink activeStyle={{ fontWeight: 'bold' }} to='/'>
          Home
        </StyledNavLink>
        <StyledNavLink activeStyle={{ fontWeight: 'bold' }} to='/blog'>
          Blog
        </StyledNavLink>
        <StyledContactLink href='mailto:alfinaditia02@gmail.com'>
          Contact
        </StyledContactLink>
        <SwitchContainer>
          <Switch
            type='checkbox'
            onChange={e => {
              setSwitchToggler(e.target.checked);
              themeToggler();
            }}
            checked={switchToggler}
          />
          <SwitchIcon />
        </SwitchContainer>
      </Right>
    </Nav>
  );
};

export default Navbar;
