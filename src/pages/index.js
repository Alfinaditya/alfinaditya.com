import React from 'react';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Projects from '../components/Projects';
import { css } from '@emotion/react';
import Seo from '../components/Seo';

export default function Home() {
  return (
    <Layout>
      <Seo title='Home | Alfin Aditya' description="Alfin Aditya's Blog" />
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
