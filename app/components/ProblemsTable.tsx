'use client';
import React from 'react';
import Link from 'next/link';
import { problems } from '../data/problems';

const ProblemsTable = () => {
  return (
    <div>
      <h2>Problems</h2>
      <table cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Difficulty</th>
            <th>Status</th>
            <th>Solution</th>
          </tr>
        </thead>
        <tbody>
          {problems.map((problem) => (
            <tr key={problem.id}>
              <td>
                <Link href={`/problems/${problem.id}`}>
                  <p style={{ color: 'blue', textDecoration: 'underline' }}>{problem.name}</p>
                </Link>
              </td>
              <td>{problem.difficulty}</td>
              <td>{problem.status}</td>
              <td>
                <button onClick={() => alert(`Viewing solution for ${problem.name}`)}>
                  {problem.solution}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProblemsTable;
