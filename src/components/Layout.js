import React from 'react';
import Navbar from './Navbar';
import { Global, css } from '@emotion/react';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');
          body {
            font-family: 'Quicksand', sans-serif;
          }
        `}
      />
      {children}
    </div>
  );
};

export default Layout;
