import React, { useState } from 'react';
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

const MobileNavbar = ({ switchToggler, setSwitchToggler, themeToggler }) => {
  const windowGlobal = typeof window !== 'undefined' && window;
  const [open, setOpen] = useState(false);
  const [userTheme, setUserTheme] = useState(
    windowGlobal.localStorage.getItem('userTheme')
  );

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
