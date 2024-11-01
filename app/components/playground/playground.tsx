import React from 'react';

interface ProblemExample {
    input: { [key: string]: any }; // Adjust based on your input structure
    output: any;                   // Adjust based on your expected output type
    explanation: string;
}

interface Problem {
    title: string;
    description: string;
    examples: ProblemExample[];
}

interface PlaygroundProps {
    problem: Problem;
}

const Playground: React.FC<PlaygroundProps> = ({ problem }) => {
    return (
        <div className="h-screen overflow-scroll">
            <h2>Problem Details</h2>
            <p><strong>Name:</strong> {problem.title}</p>
            <p><strong>Description:</strong> {problem.description}</p>

            <h3>Examples</h3>
            {problem.examples.map((example, index) => (
                <div key={index}>
                    <h4>Example {index + 1}</h4>
                    <p><strong>Input:</strong> {JSON.stringify(example.input)}</p>
                    <p><strong>Output:</strong> {JSON.stringify(example.output)}</p>
                    <p><strong>Explanation:</strong> {example.explanation}</p>
                </div>
            ))}

            <button onClick={() => alert(`Viewing solution for ${problem.title}`)}>
                View Solution
            </button>
        </div>
    );
}

export default Playground;
