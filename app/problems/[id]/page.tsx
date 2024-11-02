'use client';

import { useParams } from 'next/navigation';
import Playground from '@/app/components/playground/playground';
import Split from 'react-split';
import ReactCodeMirror from '@uiw/react-codemirror';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import problems from '@/app/data/EachProblems';
import { useEffect, useState } from 'react';

const ProblemDetails = () => {
  const [language, setLanguage] = useState(1); // Default to C++
  const [usersCode, setUsersCode] = useState(""); // Initialize as an empty string
  const { id } = useParams();
  const problem = problems.find((p) => p.id === id);

  if (!problem) {
    return <p>Problem not found</p>;
  }

  // Update usersCode based on selected language and problem
  useEffect(() => {
    if (problem.starterCode[language]) {
      setUsersCode(problem.starterCode[language].name);
    }
  }, [language, problem]);

  // Asynchronous function to handle form submission


  return (
    <div>
      <h2>Problem Details</h2>
      <div>
        <form className="max-w-sm mx-auto">
          <label htmlFor="language" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Select Language
          </label>
          <select
            id="language"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => setLanguage(Number(e.target.value))}
          >
            <option value="0">C++</option>
            <option value="1">Java</option>
          </select>
        </form>
      </div>

      <Split className='flex flex-row' minSize={0}>
        <Playground problem={problem} />
        <ReactCodeMirror
          value={usersCode}
          theme={vscodeDark}
          height='500px'
          width='100%' // Adjusted width to 100% for better layout
        />
      </Split>
    </div>
  );
};

export default ProblemDetails;
