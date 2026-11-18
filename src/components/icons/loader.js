import React from 'react';
import { TOPOLOGY_PATH, TOPOLOGY_NODES } from './logo';

// Same mark as the header logo, with hollow nodes filled to match the loader background.
const IconLoader = () => (
  <svg
    id="logo"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round">
    <title>Loading</title>
    <path className="edge" fill="none" strokeWidth="5" pathLength="1" d={TOPOLOGY_PATH} />
    {TOPOLOGY_NODES.map(([cx, cy]) => (
      <circle
        key={`${cx}-${cy}`}
        className="node"
        cx={cx}
        cy={cy}
        r="5.5"
        strokeWidth="4"
        fill="#020c1b"
      />
    ))}
  </svg>
);

export default IconLoader;
