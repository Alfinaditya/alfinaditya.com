import React, { useState, useEffect } from 'react';
import {
  BrandStyledNavLink,
  StyledNavLink,
  StyledContactLink,
  SwitchContainer,
  Switch,
  SwitchIcon,
  MobileNav,
  HamburgerMenuContainer,
  HamburgerMenu,
  MobileLinks,
} from './MobileNavbar.style';
import { windowGlobal } from '../const';

const MobileNavbar = ({ switchToggler, setSwitchToggler, themeToggler }) => {
  const [open, setOpen] = useState(false);
  const [userTheme, setUserTheme] = useState(undefined);
  useEffect(() => {
    setUserTheme(windowGlobal.localStorage.getItem('userTheme'));
  }, []);

  return (
    <MobileNav>
      <HamburgerMenuContainer>
        <HamburgerMenu onClick={() => setOpen(!open)} />
      </HamburgerMenuContainer>
      {open && (
        <MobileLinks>
          <BrandStyledNavLink to='/'>Alfin Aditya</BrandStyledNavLink>
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
                setUserTheme(windowGlobal.localStorage.getItem('userTheme'));
              }}
              checked={switchToggler}
            />
            <SwitchIcon />
            {userTheme === 'dark' ? (
              <span>Light Mode</span>
            ) : (
              <span>Dark Mode</span>
            )}
          </SwitchContainer>
        </MobileLinks>
      )}
    </MobileNav>
  );
};

export default MobileNavbar;
