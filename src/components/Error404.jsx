import React from 'react';
import '../assets/styles/components/Error404.scss';

const Error404 = () => (
  <div className='error'>
    <h1>404 Ruta no encontrada</h1>
    <h5>{ window.location.pathname }</h5>
  </div>
);

export default Error404;
