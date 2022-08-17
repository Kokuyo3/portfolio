import React, { useState, useRef, useEffect, ReactNode } from 'react';

interface TermPromptProps {
  setTerminalLog: React.Dispatch<React.SetStateAction<never[]>>;
  terminalLog: Array<ReactNode>;
}

const TermPrompt = ({ setTerminalLog, terminalLog }: TermPromptProps) => {
  const [text, setText] = useState('');
  const [inputWidth, setInputWidth] = useState('');
  const span = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = span.current;
    setInputWidth(`calc(${node?.offsetWidth}px * 1.25 + 25rem)`);
  }, [text]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="w-auto">
        <form onSubmit={handleSubmit}>
          <label>
            <span className="text-xl font-bold text-term-green">guest@cstang.dev</span>
            <span className="term-text">:</span>
            <span className="text-xl font-bold text-term-blue">~</span>
            <span className="term-text">$</span>
          </label>
          <span className="absolute opacity-0 [z-index: -100] whitespace-pre" ref={span}>
            {text}
          </span>
          <input
            className={`term-text align-bottom caret-transparent border-transparent focus:outline-0 p-0 ml-3 bg-inherit w-min`}
            style={{ width: inputWidth }}
            spellCheck={false}
            value={text}
            onChange={onChange}
            autoFocus={true}
          />
          <span className="animate-cursor-blink ml-[-24.75rem] text-white">_</span>
        </form>
      </div>
    </>
  );
};

export default TermPrompt;