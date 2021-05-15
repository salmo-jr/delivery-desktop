import React from 'react';
import { Link } from 'react-router-dom';

const GlobalMenu = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/deliverymenList">Lista de Entregadores</Link>
        </nav>
    );
}

export default GlobalMenu;