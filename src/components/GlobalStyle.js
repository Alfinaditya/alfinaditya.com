import { Global, css, useTheme } from '@emotion/react';
import React from 'react';

const GlobalStyle = props => (
  <Global
    styles={css`
      @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');
      :root {
        --black: #353535;
      }
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
      body {
        font-family: 'Quicksand', sans-serif;
        color: var(--black);
        max-width: 1195px;
        margin: auto;
        background: ${useTheme().pageBackground};
        @media only screen and (max-width: 1211px) {
          width: 90%;
        }
      }
    `}
  />
);

export default GlobalStyle;
