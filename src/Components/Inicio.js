import React, { useState, useEffect } from 'react';
import '../Styles/Inicio.css';
import Elliseo from '../Images/elliseo.png';
import Elliseo1 from '../Images/elliseo1.png';
import Elliseo3 from '../Images/elliseo3.png';
import Elliseo4 from '../Images/elliseo4.png';
import InfoELl from "../Images/InfoElliseo.png"
import Logo from "../Images/Logo.jpg"
export const Inicio = () => {
  const imagenes = [Elliseo, Elliseo1, Elliseo3, Elliseo4];
  const [time, setTime] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(0); // Cambia la opacidad a 0 al principio de la transición

      setTimeout(() => {
        if (time === 3) {
          setTime(0);
        } else {
          setTime(time + 1);
        }
        setOpacity(1); // Cambia la opacidad a 1 después de un pequeño retraso
      }, 300);

    }, 5000);

    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
  }, [time]);

  return (
    <div className='inicio'>
        <h3 className='slogan'>DrElliseo: Tu camino hacia una atención médica sin complicaciones.</h3>
    <div className='divInicio'>
            <img
        className='elLogo'
        src={imagenes[time]}
        alt='Imagen'
        style={{ opacity: opacity }} // Establece la opacidad dinámicamente
        />
        <p className='elliTitle'>DrElliseo, ya disponible en <img className='logoInfo' src={Logo}></img></p> 
        <a href=' https://w.app/QUNjwf' id='infoWhat'><img className='info' src={InfoELl} ></img></a>
    </div>
    <p className='elliBody'>Diseñada pensando en tu bienestar, DrElliseo es tu puerta de entrada a un cuidado de salud
        de primera clase desde la comodidad de tu farmacia favorita. Olvídate de las largas esperas y reserva tus citas médicas de manera
        rápida y segura con nuestra aplicación. Con DrElliseo, tu salud está en buenas manos</p>
    </div>
  );
};
