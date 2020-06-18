import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/FormRegister.scss';

const FormRegister = () => (
  <section className='form-register'>
    <section className='form-register__container'>
      <h2>Regístrate</h2>
      <form className='form-register__container--form'>
        <input className='input' type='text' placeholder='Nombre' />
        <input className='input' type='text' placeholder='Correo' />
        <input className='input' type='password' placeholder='Contraseña' />
        <button type='button' className='button'>
          Registrarme
        </button>
      </form>
      <Link to='/login'>Iniciar sesión</Link>
    </section>
  </section>
);

export default FormRegister;
