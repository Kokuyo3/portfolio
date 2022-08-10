import * as React from 'react';
import type { HeadFC } from 'gatsby';
import Hero from '../components/composites/Hero';
import Layout from '../components/composites/Layout';

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
