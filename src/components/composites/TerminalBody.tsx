import React, { useState } from 'react';
import TermPrompt from '../TermPrompt';
import HelpCommand from '../commands/HelpCommand';

const TerminalBody = () => {
  const [commandsTimeoutDone, setCommandsTimeoutDone] = useState(false);
  const [promptTimeoutDone, setPromptTimeoutDone] = useState(false);
  const [terminalLog, setTerminalLog] = useState([]);

  setTimeout(() => {
    setCommandsTimeoutDone(true);
  }, 1000);

  setTimeout(() => {
    setPromptTimeoutDone(true);
  }, 2000);

  return (
    <main className="bg-term-aubergine">
      <div>
        <span className="term-text">Hello world!</span>
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
      </div>
    </main>
  );
};

export default TerminalBody;
