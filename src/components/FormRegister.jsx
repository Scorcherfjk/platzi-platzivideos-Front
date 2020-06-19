import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { registerRequest } from '../actions';

import '../assets/styles/components/FormRegister.scss';

const FormRegister = (props) => {

  const [form, setValues] = useState({});

  const handleChange = (e) => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.registerRequest(form);
    props.history.push('/');
  };

  return (
    <section className='form-register'>
      <section className='form-register__container'>
        <h2>Regístrate</h2>
        <form className='form-register__container--form' onSubmit={handleSubmit}>
          <input name='name' className='input' type='text' placeholder='Nombre' onChange={handleChange} />
          <input name='email' className='input' type='text' placeholder='Correo' onChange={handleChange} />
          <input name='password' className='input' type='password' placeholder='Contraseña' onChange={handleChange} />
          <button type='submit' className='button'>
            Registrarme
          </button>
        </form>
        <Link to='/login'>Iniciar sesión</Link>
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  registerRequest,
};

export default withRouter(connect(null, mapDispatchToProps)(FormRegister));
