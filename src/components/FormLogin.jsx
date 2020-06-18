import React from 'react';
import { Link } from 'react-router-dom';

import googleIcon from '../assets/img/google-icon.png';
import twitterIcon from '../assets/img/twitter-icon.png';

import '../assets/styles/components/FormLogin.scss';

const FormLogin = () => (
  <section className='form-login'>
    <section className='form-login__container'>
      <h2>Inicia sesión</h2>
      <form className='form-login__container--form'>
        <input className='input' type='text' placeholder='Correo' />
        <input className='input' type='password' placeholder='Contraseña' />
        <button type='button' className='button'>Iniciar sesión</button>
        <div className='form-login__container--remember-me'>
          <label htmlFor='cbox1'>
            <input type='checkbox' id='cbox1' value='first_checkbox' />
            Recuérdame
          </label>
          <Link to='/'>Olvidé mi contraseña</Link>
        </div>
      </form>
      <section className='form-login__container--social-media'>
        <div>
          <img src={googleIcon} alt='google icon' />
          Inicia sesión con Google
        </div>
        <div>
          <img src={twitterIcon} alt='twitter icon' />
          Inicia sesión con Twitter
        </div>
      </section>
      <p className='form-login__container--register'>
        No tienes ninguna cuenta
        <Link to='/register'> Regístrate</Link>
      </p>
    </section>
  </section>
);

export default FormLogin;
