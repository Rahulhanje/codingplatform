import React from 'react';
import { Problem } from '@/app/data/types/types';

interface ProblemDisplayProps {
    problem: Problem;
}

const ProblemDisplay: React.FC<ProblemDisplayProps> = ({ problem }) => {
    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold">{problem.title}</h2>
            <p className="my-2"><strong>Problem Statement:</strong> {problem.problemStatement}</p>

            <h3 className="text-xl font-semibold">Examples</h3>
            <div className="space-y-4">
                {problem.examples.map((example) => (
                    <div key={example.id} className="border p-4 rounded">
                        <h4 className="font-medium">Example {example.id}</h4>
                        <p><strong>Input:</strong> {example.inputText}</p>
                        <p><strong>Output:</strong> {example.outputText}</p>
                    </div>
                ))}
            </div>

            <h3 className="text-xl font-semibold mt-4">Constraints</h3>
            <p>{problem.constraints}</p>

            <h3 className="text-xl font-semibold mt-4">Tags</h3>
            <ul className="list-disc list-inside">
                {problem.tag.map((tag) => (
                    <li key={tag.id}>{tag.name}</li>
                ))}
            </ul>

            <h3 className="text-xl font-semibold mt-4">Companies</h3>
            <ul className="list-disc list-inside">
                {problem.companies.map((company) => (
                    <li key={company.id}>{company.name}</li>
                ))}
            </ul>

            <p className="mt-4"><strong>Average Time:</strong> {problem.averagetime}</p>
            <p className="mt-2"><strong>Difficulty:</strong> {problem.difficulty}</p>
        </div>
    );
};

export default ProblemDisplay;
