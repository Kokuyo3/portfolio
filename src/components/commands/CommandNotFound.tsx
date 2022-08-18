import React from 'react';

interface CommandNotFoundProps {
  command: string;
}

const CommandNotFound = ({ command }: CommandNotFoundProps) => {
  return (
    <div>
      <span>{`${command}: command not found. Run 'help' for a list of valid commands.`}</span>
    </div>
  );
};

export default CommandNotFound;
