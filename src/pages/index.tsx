import * as React from 'react';
import type { HeadFC } from 'gatsby';

const IndexPage = () => {
  return (
    <main>
      <h1 className='text-3xl text-sky-400 font-bold underline'>
        Hello world! TailwindCSS is working if this is formatted.
      </h1>
      <br />
      <p>
        <span>Congratulations — you just made a Gatsby site! 🎉🎉🎉</span>
        <br />
        Edit <code className='bg-slate-300'>src/pages/index.tsx</code> to see this page
        update in real-time. 😎
      </p>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
