import React from 'react';

function SocialMediaLink({ href, ariaLabel, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white text-2xl hover:text-blue-300 transition-colors"
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}

export default SocialMediaLink;