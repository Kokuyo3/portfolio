import * as React from 'react';

const TerminalBody = () => {
  return (
    <h1 className="bg-term-aubergine">
      <div>
        <span className="text-xl font-bold text-term-green">guest@cstang.dev</span>
        <span className="text-xl font-bold text-white">:</span>
        <span className="text-xl font-bold text-term-blue">~</span>
        <span className="text-xl font-bold text-white">$ hello world</span>
        <span className="animate-cursor-blink ml-1 text-white">_</span>
      </div>
    </h1>
  );
};

export default TerminalBody;
