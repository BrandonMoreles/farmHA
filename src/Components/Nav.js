import React, { useState } from 'react';
import "../Styles/Nav.css";

export const Nav = () => {
    const [seleccion, setSeleccion] = useState(0);

    // Utiliza una función de flecha para definir 'choice'
    const choice = (elegir) => {
        setSeleccion(elegir);
    }

    return (
        <ul className='options'>
            <li className='option' style={seleccion === 0 ? { borderBottom: '2px solid #000' } : null} onClick={() => choice(0)}>Inicio</li>
            <li className='option' style={seleccion === 1 ? { borderBottom: '2px solid #000' } : null} onClick={() => choice(1)}>Contacto</li>
            <li className='option' style={seleccion === 2 ? { borderBottom: '2px solid #000' } : null} onClick={() => choice(2)}>Sobre nosotros</li>
            <li className='option' style={seleccion === 3 ? { borderBottom: '2px solid #000' } : null} onClick={() => choice(3)}>Productos</li>
        </ul>
    );
}
