import React from 'react';
import {NAME} from '../constants';

function LandingArea({ headerHeight }) {
  return (
    <section
      style={{ minHeight: `calc(100vh - ${headerHeight}px)` }}
      className="flex flex-col items-center justify-center bg-light-gray p-10 text-center box-border"
    >
      <img
        src="avatar.jpg"
        alt={NAME}
        className="rounded-full w-52 h-52 object-cover mb-8 border-4 border-dark-blue-gray shadow-lg"
      />
      <h2 className="text-5xl font-bold text-dark-blue-gray mb-4">
        Hi, I'm {NAME}
      </h2>
      <p className="text-xl leading-relaxed max-w-3xl text-medium-blue-gray">
        I'm a passionate Web Developer with the experience of creating
        beautiful and functional web experiences. I specialize in React, PHP, and UI/UX.
        </p>
    </section>
  );
}

export default LandingArea;