import React, { ReactNode } from 'react';
import CommandNotFound from '../components/commands/CommandNotFound';
import HelpCommand from '../components/commands/HelpCommand';

class CommandValidator {
  private static commands: Record<string, Record<string, string | ReactNode>> = {
    help: {
      description: 'Lists the commands that can be executed',
      usage: 'help',
      output: <HelpCommand />
    }
  };

  static runCommand = (command: string) => {
    if (CommandValidator.commands[command] === undefined) {
      return <CommandNotFound command={command} />;
    }

    return CommandValidator.commands[command].output;
  };
}

export default CommandValidator;
