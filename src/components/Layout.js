import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { ThemeProvider } from '@emotion/react';
import themes from './Theme.style';
import GlobalStyle from './GlobalStyle';
import MobileNavbar from './MobileNavbar';
import { windowGlobal } from '../const';

const Layout = ({ children }) => {
  const [theme, setTheme] = useState(undefined);
  const [switchToggler, setSwitchToggler] = useState(undefined);
  useEffect(() => {
    const item =
      windowGlobal.localStorage.getItem('userTheme') === null
        ? 'light'
        : windowGlobal.localStorage.getItem('userTheme');
    if (item) {
      setTheme(item);
      setSwitchToggler(true);
      if (item === 'dark') setSwitchToggler(true);
    }
  }, []);
  function themeToggler() {
    if (windowGlobal.localStorage.getItem('userTheme') === null) {
      windowGlobal.localStorage.setItem('userTheme', 'dark');
      const dark = windowGlobal.localStorage.getItem('userTheme');
      setTheme(dark);
    } else if (windowGlobal.localStorage.getItem('userTheme') === 'light') {
      windowGlobal.localStorage.setItem('userTheme', 'dark');
      const dark = windowGlobal.localStorage.getItem('userTheme');
      setTheme(dark);
    } else if (windowGlobal.localStorage.getItem('userTheme') === 'dark') {
      windowGlobal.localStorage.setItem('userTheme', 'light');
      const light = windowGlobal.localStorage.getItem('userTheme');
      setTheme(light);
    }
  }
  return (
    <div>
      <ThemeProvider theme={theme === 'light' ? themes.light : themes.dark}>
        <GlobalStyle />
        {theme !== undefined && (
          <>
            <MobileNavbar
              switchToggler={switchToggler}
              setSwitchToggler={setSwitchToggler}
              themeToggler={themeToggler}
            />
            <Navbar
              switchToggler={switchToggler}
              setSwitchToggler={setSwitchToggler}
              themeToggler={themeToggler}
            />
            {children}
          </>
        )}
      </ThemeProvider>
    </div>
  );
};

export default Layout;
