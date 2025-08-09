import React from 'react';

interface SolutionProps {
  problem: any;
}

const Solution: React.FC<SolutionProps> = ({ problem }) => {
  return (
    <div>
      <h2>Solution for: {problem.title}</h2>
      {/* You can fill this with actual solution content */}
      <p>This is the solution section.</p>
    </div>
  );
};

export default Solution;
