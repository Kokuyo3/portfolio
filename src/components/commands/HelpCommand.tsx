import React from 'react';

const HelpCommand = () => {
  return (
    <div className="term-text">
      {'Here are some commands you can run:'}
      <p className="indent-10 text-term-blue-command">about</p>
      <p className="indent-10 text-term-blue-command">github</p>
      <p className="indent-10 text-term-blue-command">linkedin</p>
      <br />
      {'Run `'}
      <span className="text-term-blue-command">{'help'}</span>
      {'` to see the list of available commands again'}
    </div>
  );
};

export default HelpCommand;
