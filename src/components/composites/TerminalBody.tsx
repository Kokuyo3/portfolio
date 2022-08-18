import React, { ReactNode, useState } from 'react';
import TermPrompt from '../TermPrompt';
import HelpCommand from '../commands/HelpCommand';

const TerminalBody = () => {
  const [commandsTimeoutDone, setCommandsTimeoutDone] = useState(false);
  const [promptTimeoutDone, setPromptTimeoutDone] = useState(false);
  const [terminalLog, setTerminalLog] = useState<ReactNode[]>([]);

  setTimeout(() => {
    setCommandsTimeoutDone(true);
  }, 1000);

  setTimeout(() => {
    setPromptTimeoutDone(true);
  }, 2000);

  return (
    <main>
      <div>
        <span>Hello world!</span>
        {commandsTimeoutDone ? (
          <>
            <br />
            <br />
            <HelpCommand />
            {promptTimeoutDone ? (
              <TermPrompt setTerminalLog={setTerminalLog} terminalLog={terminalLog} />
            ) : null}
          </>
        ) : null}
        {terminalLog.map((commandOutput, index) => (
          <div key={index}>
            {commandOutput}
            <TermPrompt setTerminalLog={setTerminalLog} terminalLog={terminalLog} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default TerminalBody;
