import React from 'react';
import logo from '/public/icons/logo2.png'; // Asegúrate de que la ruta sea correcta

export default function ApplicationLogo(props) {
    return (
        <img {...props} src={logo} alt="Logo"  className="w-16 h-16" />
    );
}
