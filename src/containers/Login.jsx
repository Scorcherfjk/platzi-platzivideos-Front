import React from 'react';

// ? Components
import Header from '../components/Header';
import FormLogin from '../components/FormLogin';
import Footer from '../components/Footer';

// ? Style
import '../assets/styles/Login.scss';

const Login = () => (
  <div className='login'>
    <Header />
    <FormLogin />
    <Footer />
  </div>
);

export default Login;
