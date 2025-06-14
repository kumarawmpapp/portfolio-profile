import React from 'react';
import {NAME} from '../constants';

function Footer() {
  return (
    <footer className="py-5 px-5 bg-dark-blue-gray text-gray-400 text-center text-sm">
      &copy; {new Date().getFullYear()} {NAME}. All rights reserved.
    </footer>
  );
}

export default Footer;