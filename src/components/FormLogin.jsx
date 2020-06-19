import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { loginRequest } from '../actions';

import googleIcon from '../assets/img/google-icon.png';
import twitterIcon from '../assets/img/twitter-icon.png';

import '../assets/styles/components/FormLogin.scss';

const FormLogin = (props) => {

  const [form, setValues] = useState({});

  const handleChange = (e) => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.loginRequest(form);
    props.history.push('/');
  };

  return (
    <section className='form-login'>
      <section className='form-login__container'>
        <h2>Inicia sesión</h2>
        <form className='form-login__container--form' onSubmit={handleSubmit}>
          <input
            name='email'
            className='input'
            type='text'
            placeholder='Correo'
            onChange={handleChange}
          />
          <input
            name='password'
            className='input'
            type='password'
            placeholder='Contraseña'
            onChange={handleChange}
          />
          <button type='submit' className='button'>Iniciar sesión</button>
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
};

const mapDispatchToProps = {
  loginRequest,
};

export default withRouter(connect(null, mapDispatchToProps)(FormLogin));
