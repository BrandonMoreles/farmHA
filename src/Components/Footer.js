import React from 'react';
import "../Styles/Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons'; // Importa el ícono de Instagram
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';


import logoBw from "../Images/logoBWF.png"
export const Footer = () => {
  return (
    <div className='footer'>
        <div className='redes'>
            <FontAwesomeIcon icon={faInstagram}  className='iconRed'/> {/* Utiliza el ícono de Instagram */}
            <FontAwesomeIcon icon={faFacebook}  className='iconRed'/>
            <FontAwesomeIcon icon={faTwitter} className='iconRed' />
        </div>
    <img src={logoBw}className='logoFoot'></img>
    <p>Todos los derechos reservados ©</p>
    </div>
  );
};
