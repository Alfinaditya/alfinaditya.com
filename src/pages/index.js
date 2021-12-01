import React from 'react';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Projects from '../components/Projects';
import { css } from '@emotion/react';
import Seo from '../components/Seo';

export default function Home() {
  return (
    <Layout>
      <Seo />
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
