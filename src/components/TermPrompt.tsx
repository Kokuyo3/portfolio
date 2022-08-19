import React, { useState, useRef, useEffect, ReactNode } from 'react';
import CommandValidator from '../utils/CommandValidator';

interface TermPromptProps {
  setTerminalLog: React.Dispatch<React.SetStateAction<ReactNode[]>>;
  terminalLog: Array<ReactNode>;
}

const TermPrompt = ({ setTerminalLog, terminalLog }: TermPromptProps) => {
  const [text, setText] = useState('');
  const [inputWidth, setInputWidth] = useState('');
  const [executed, setExecuted] = useState(false);

  const span = useRef<HTMLSpanElement>(null);
  const input = useRef<HTMLInputElement>(null);

  // Magic number substitutes
  const promptOffset = '21ch';
  const rightPageEdgeOffset = '1ch';

  useEffect(() => {
    const spanNode = span.current;

    setInputWidth(
      `min(calc(-100% + ${promptOffset} + ${spanNode?.offsetWidth}px), ${rightPageEdgeOffset})`
    );
  }, [text]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    const selectionStart = input.current?.selectionStart;
    const currentCaratOffset = `calc(-100% + ${promptOffset} + ${selectionStart}ch)`;

    if (e.key === 'ArrowLeft') {
      if (selectionStart == 0) {
        setInputWidth(`min(calc(-100% + ${promptOffset}), ${rightPageEdgeOffset})`);
      } else {
        setInputWidth(`min(calc(${currentCaratOffset} - 1ch), ${rightPageEdgeOffset})`);
      }
    } else if (e.key === 'ArrowRight') {
      if (selectionStart == input.current?.value.length) {
        setInputWidth(`min(${currentCaratOffset}, ${rightPageEdgeOffset})`);
      } else {
        setInputWidth(`min(calc(${currentCaratOffset} + 1ch), ${rightPageEdgeOffset})`);
      }
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    setTerminalLog([...terminalLog, CommandValidator.runCommand(text)]);
    setExecuted(true);

    event.preventDefault();
  };

  return (
    <>
      <div className="relative">
        <form onSubmit={handleSubmit}>
          <label>
            <span className="text-term-green">guest@cstang.dev</span>
            <span>:</span>
            <span className="text-term-blue">~</span>
            <span>$</span>
          </label>
          <span
            className="absolute opacity-0 [z-index: -100] whitespace-pre max-w-[calc(100%-21ch)] overflow-hidden"
            ref={span}
          >
            {text}
          </span>
          <input
            className="align-bottom caret-transparent border-transparent focus:outline-0 p-0 ml-3 bg-inherit w-[calc(100%-21ch)] grow-0"
            spellCheck={false}
            value={text}
            onChange={onChange}
            onKeyDown={onKeyDown}
            autoFocus={true}
            ref={input}
          />
          {!executed && (
            <span
              className="absolute animate-cursor-blink text-white"
              style={{ marginLeft: inputWidth }}
            >
              _
            </span>
          )}
          <input className="align-bottom p-0 hidden" type="submit" value="" />
        </form>
      </div>
    </>
  );
};

export default TermPrompt;
