"use client";

import { TypewriterEffect } from "./ui/typewriter-effect";

const Code = () => {
  const CODE_LINES = [
    [
      { text: "print", className: "text-green-400" },
      { text: `"Hello`, className: "text-yellow-400" },
      { text: `World!"`, className: "text-yellow-400" },
      { text: "#", className: "text-gray-500" },
      { text: "Prints", className: "text-gray-500" },
      { text: "'Hello", className: "text-gray-500" },
      { text: "world!'", className: "text-gray-500" },
    ],
    [
      { text: "may", className: "text-red-400" },
      { text: "name", className: "text-blue-400" },
      { text: "=", className: "text-white" },
      { text: `"joy"`, className: "text-yellow-400" },
      { text: "#", className: "text-gray-500" },
      { text: "Creates", className: "text-gray-500" },
      { text: "a", className: "text-gray-500" },
      { text: "variable", className: "text-gray-500" },
      { text: "'name'", className: "text-gray-500" },
      { text: "and", className: "text-gray-500" },
      { text: "sets", className: "text-gray-500" },
      { text: "it", className: "text-gray-500" },
      { text: "to", className: "text-gray-500" },
      { text: "'joy'", className: "text-gray-500" },
    ],
    [
      { text: "print", className: "text-green-400" },
      { text: `{name}`, className: "text-blue-400" },
      { text: "#", className: "text-gray-500" },
      { text: "Prints", className: "text-gray-500" },
      { text: "the", className: "text-gray-500" },
      { text: "value", className: "text-gray-500" },
      { text: "of", className: "text-gray-500" },
      { text: "'name'", className: "text-gray-500" },
      { text: "(which", className: "text-gray-500" },
      { text: "is", className: "text-gray-500" },
      { text: "'joy')", className: "text-gray-500" },
    ],
    [
      { text: "##", className: "text-gray-500" },
      { text: "print", className: "text-gray-500" },
      { text: "outputs", className: "text-gray-500" },
      { text: "on", className: "text-gray-500" },
      { text: "the", className: "text-gray-500" },
      { text: "same", className: "text-gray-500" },
      { text: "line.", className: "text-gray-500" },
    ],
    [
      { text: "println", className: "text-gray-500" },
      { text: "adds", className: "text-gray-500" },
      { text: "a", className: "text-gray-500" },
      { text: "new", className: "text-gray-500" },
      { text: "line.", className: "text-gray-500" },
      { text: "Use", className: "text-gray-500" },
      { text: "println", className: "text-gray-500" },
      { text: "for", className: "text-gray-500" },
      { text: "most", className: "text-gray-500" },
      { text: "cases", className: "text-gray-500" },
      { text: "unless", className: "text-gray-500" },
      { text: "you’re", className: "text-gray-500" },
      { text: "doing", className: "text-gray-500" },
      { text: "something", className: "text-gray-500" },
      { text: "special!", className: "text-gray-500" },
    ],
    [
      { text: "println", className: "text-green-400" },
      { text: `{name}`, className: "text-blue-400" },
      { text: "#", className: "text-gray-500" },
      { text: "Prints", className: "text-gray-500" },
      { text: "the", className: "text-gray-500" },
      { text: "value", className: "text-gray-500" },
      { text: "of", className: "text-gray-500" },
      { text: "'name'", className: "text-gray-500" },
      { text: "on", className: "text-gray-500" },
      { text: "a", className: "text-gray-500" },
      { text: "new", className: "text-gray-500" },
      { text: "line", className: "text-gray-500" },
    ],
    [
      { text: "may", className: "text-red-400" },
      { text: "age", className: "text-blue-400" },
      { text: "=", className: "text-white" },
      { text: "takein()", className: "text-yellow-400" },
      { text: "#", className: "text-gray-500" },
      { text: "Asks", className: "text-gray-500" },
      { text: "the", className: "text-gray-500" },
      { text: "user", className: "text-gray-500" },
      { text: "for", className: "text-gray-500" },
      { text: "input,", className: "text-gray-500" },
      { text: "defaulting", className: "text-gray-500" },
      { text: "to", className: "text-gray-500" },
      { text: "a", className: "text-gray-500" },
      { text: "string", className: "text-gray-500" },
    ],
  ];
  return (
    <div className="flex flex-col items-left justify-center h-auto space-y-4 bg-black-200 p-[1rem] rounded-lg max-w-full m-auto">
      <div className="w-fit">
        {CODE_LINES.map((line, index) => (
          <TypewriterEffect
            key={`line-${index}`}
            words={line}
            className="text-lg font-mono"
          />
        ))}
      </div>
    </div>
  );
};

export default Code;
