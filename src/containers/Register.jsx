import React from 'react';

// ? Components
import Header from '../components/Header';
import FormRegister from '../components/FormRegister';
import Footer from '../components/Footer';

// ? Style
import '../assets/styles/Register.scss';

const Register = () => (
  <div className='register'>
    <Header />
    <FormRegister />
    <Footer />
  </div>
);

export default Register;
