// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import './Navbar.css';

// // const Navbar: React.FC = () => {
// //   return (
// //     <nav className="navbar">
      
// //       <h1 className="logo">Grace Travelers</h1>
// //       <ul className="nav-links">
// //         <li><Link to="/">Home</Link></li>
// //          <li><a href="#about" style={{ color: '#fff', textDecoration: 'none' }}>About</a></li>
// //         <li><a href="#gallery" style={{ color: '#fff', textDecoration: 'none' }}>Gallery</a></li>
// //         <li><Link to="/ooty">Ooty</Link></li>
// //         <li><Link to="/pykara">Pykara</Link></li>
// //         <li><Link to="/coonoor">Coonoor</Link></li>
// //         <li><Link to="/avalanche">Avalanche</Link></li>
// //         <li><Link to="/contact">Contact</Link></li>
// //       </ul>
// //     </nav>
// //   );
// // };
// // export default Navbar;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';
// import logo from '../assets/logo-removebg-preview.png'; 
// // import { color } from 'framer-motion';

// const Navbar: React.FC = () => {
//   return (
//     <nav className="navbar">
//       <div className="logo-container">
//         <img src={logo} alt="Grace Travelers Logo" className="logo" />
//       </div>
//       <ul className="nav-links">
//         <li><Link to="/">Home</Link></li>
//         <li><a href="#about" style={{ color: '#222', textDecoration: 'none' }}>About</a></li>
//         <li><a href="#gallery" style={{ color: '#222', textDecoration: 'none' }}>Gallery</a></li>
//         <li><Link to="/destinations">Destinations</Link></li>
//         <li><Link to="/ooty">Ooty</Link></li>
//         <li><Link to="/pykara">Pykara</Link></li>
//         <li><Link to="/coonoor">Coonoor</Link></li>
//         <li><Link to="/avalanche">Avalanche</Link></li>
//         <li><Link to="/contact">Contact</Link></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo-removebg-preview.png'; 


const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Grace Travelers Logo" className="logo" />
       </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        {/* <li><a href="#about" style={{ color: '#fff', textDecoration: 'none' }}>About</a></li>
        <li><a href="#gallery" style={{ color: '#fff', textDecoration: 'none' }}>Gallery</a></li> */}
        <li><Link to="/about">About</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/destinations">Destinations</Link></li>

        <li><Link to="/ooty">Ooty</Link></li>
        <li><Link to="/pykara">Pykara</Link></li>
        <li><Link to="/coonoor">Coonoor</Link></li>
        <li><Link to="/avalanche">Avalanche</Link></li>

        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;