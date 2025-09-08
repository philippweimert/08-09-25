import React from 'react';
import './Logo.css';

const Logo = ({ className }) => {
  return (
    <svg
      viewBox="0 0 2000 340"
      role="img"
      aria-label="ACENCIA – Wir machen bAV einfach"
      className={className}
    >
      <g id="icon">
        <rect x="63" y="40" width="280" height="67" rx="18" ry="18" fill="none" stroke="#FFFFFF" strokeWidth="24"/>
        <rect x="63" y="139" width="280" height="67" rx="18" ry="18" fill="none" stroke="#FFFFFF" strokeWidth="24"/>
        <rect x="63" y="238" width="280" height="67" rx="18" ry="18" fill="none" stroke="#FFFFFF" strokeWidth="24"/>
      </g>
      <g id="wordmark">
        <text x="390" y="30" className="acencia-text">ACENCIA</text>
      </g>
      <g id="tagline">
        <text x="390" y="255" className="tagline-text">WIR MACHEN BAV EINFACH</text>
      </g>
    </svg>
  );
};

export default Logo;
