import 'tailwindcss/tailwind.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';


// src/components/Contact.js
import React from 'react';

function Footer() {
  return (
    <div className="bg-[#121212] p-4">
    <footer className="bg-[#121212] py-4 text-white text-center">
      <p>&copy; 2023 Skynet. Todos los derechos reservados.</p>
      
      <div className="mt-4">
        <a href="#" className="mr-4">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="#" className="mr-4">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
      </div>
    </footer>
    </div>
  );
}

export default Footer;
