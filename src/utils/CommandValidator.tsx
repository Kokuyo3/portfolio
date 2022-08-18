import React, { ReactNode } from 'react';
import AboutCommand from '../components/commands/AboutCommand';
import CommandNotFound from '../components/commands/CommandNotFound';
import GitHubCommand from '../components/commands/GitHubCommand';
import HelpCommand from '../components/commands/HelpCommand';
import LinkedInCommand from '../components/commands/LinkedInCommand';
import SkidCommand from '../components/commands/SkidCommand';

class CommandValidator {
  private static commands: Record<string, Record<string, string | ReactNode>> = {
    about: {
      description: 'A blurb about me and my background',
      usage: 'about',
      output: <AboutCommand />
    },
    github: {
      description: 'Links my GitHub',
      usage: 'github',
      output: <GitHubCommand />
    },
    help: {
      description: 'Lists the commands that can be executed',
      usage: 'help',
      output: <HelpCommand />
    },
    linkedin: {
      description: 'Links my LinkedIn',
      usage: 'linkedin',
      output: <LinkedInCommand />
    },
    skid: {
      description: 'Some nostalgic tech-related doings and milestones from my childhood!',
      usage: 'skid',
      output: <SkidCommand />
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
