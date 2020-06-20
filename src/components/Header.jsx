import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';

import logo from '../assets/img/logo-platzi-video-BW2.png';
import userIcon from '../assets/img/user-icon.png';

import '../assets/styles/components/Header.scss';

const Header = (props) => {

  const { user } = props;
  const hasUser = Object.keys(user).length > 0;

  const { pathname } = window.location;
  const inHome = RegExp('login$|register$').test(pathname);

  const handleLogout = () => {
    props.logoutRequest({});
  };

  return (
    <header className={inHome ? 'header verde' : 'header morado'}>
      <Link to='/'>
        <img className='header__img' src={logo} alt='Platzi Video' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          {
            hasUser ?
              <img src={gravatar(user.email)} alt='' /> :
              <img src={userIcon} alt='' />
          }
          <p>Perfil</p>
        </div>
        <ul>
          {
            hasUser ?
              (
                <>
                  <li><Link to='/'>{user.email.slice(0, user.email.indexOf('@'))}</Link></li>
                  <li><a href='#logout' onClick={handleLogout}>Cerrar Sesión</a></li>
                </>
              ) : <li><Link to='/login'>Iniciar Sesión</Link></li>
          }
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispathToProps = {
  logoutRequest,
};

Header.propTypes = {
  user: PropTypes.object,
  logoutRequest: PropTypes.func,
};

export default withRouter(connect(mapStateToProps, mapDispathToProps)(Header));
