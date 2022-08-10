import * as React from 'react';
import type { HeadFC } from 'gatsby';
import TerminalBody from '../components/composites/TerminalBody';
import Layout from '../components/composites/Layout';

const IndexPage = () => {
  return (
    <Layout>
      <TerminalBody />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
