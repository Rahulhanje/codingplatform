'use client';

import { useParams } from 'next/navigation';

import Playground from '@/app/components/playground/playground';
import Split from 'react-split';
import ReactCodeMirror, { EditorView } from '@uiw/react-codemirror';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import problems from '@/app/data/EachProblems';

import { useState } from 'react';



const ProblemDetails = () => {
  const { id } = useParams();

  // Ensure id is valid and find the corresponding problem
  const problem = problems.find((p) => p.id === parseInt(id as string));

  if (!problem) return <p>Problem not found</p>;
  const [code, setCode] = useState('const a = 1;'); // Initial code

  // Function to handle code changes
  const handleChange = (value: string) => {
    setCode(value); // Update the state with the new code
  };
  const logCode = () => {
    console.log(code); // Print the current code to the console
  };

  return (
    <div>

      <Split className='flex flex-row' minSize={0}>
        <Playground problem={problem} />
        <ReactCodeMirror
          onChange={handleChange}
          value={problem.initialcode}
          theme={vscodeDark}
          height="500px"
          width="100%"
          
          extensions={[
            EditorView.theme({
              '&': {
                padding: '0 !important' // Force padding to 0
              }
            })
          ]}
        />

      </Split>

    </div>
  );
};

export default ProblemDetails;
