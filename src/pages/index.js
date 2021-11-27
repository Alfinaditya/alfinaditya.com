import React from 'react';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Projects from '../components/Projects';
import { css } from '@emotion/react';

export default function Home() {
  return (
    <Layout>
      <div
        css={css`
          margin-bottom: 50px;
        `}
      >
        <Hero />
        <Projects />
      </div>
    </Layout>
  );
}
