import React from 'react';

// The B drawn as an architecture diagram: one path for the links, a node at every joint.
export const TOPOLOGY_PATH = 'M30 82V18H56L70 34L56 50H30M56 50L74 66L58 82H30';
export const TOPOLOGY_NODES = [
  [30, 82],
  [30, 50],
  [30, 18],
  [56, 18],
  [70, 34],
  [56, 50],
  [74, 66],
  [58, 82],
];

const IconLogo = () => (
  <svg
    id="logo"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    viewBox="0 0 100 100"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round">
    <title>Bernard Buabeng Baah</title>
    <path className="edge" fill="none" strokeWidth="5" d={TOPOLOGY_PATH} />
    {TOPOLOGY_NODES.map(([cx, cy]) => (
      <circle key={`${cx}-${cy}`} className="node" cx={cx} cy={cy} r="5.5" strokeWidth="4" />
    ))}
  </svg>
);

export default IconLogo;
