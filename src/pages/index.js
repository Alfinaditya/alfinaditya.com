import React from 'react';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Projects from '../components/Projects';

export default function Home() {
  return (
    <Layout>
      <div>
        <Hero />
        <Projects />
      </div>
    </Layout>
  );
}
