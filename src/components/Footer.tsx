import React from 'react';
import './Footer.css';
import { color } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer
  className="footer"
  style={{ backgroundColor: 'white', color: 'black', padding: '1rem', textAlign: 'center' }}
>
  <p>© 2025 Grace Travelers. All rights reserved.</p>
</footer>

  );
};

export default Footer;
