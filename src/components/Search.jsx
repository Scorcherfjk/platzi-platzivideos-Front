import React from 'react';
import { connect } from 'react-redux';

import { searchVideo } from '../actions';

import '../assets/styles/components/Search.scss';

const Search = (props) => {

  const handleChange = (e) => {
    props.searchVideo(e.target.value);
  };

  return (
    <section className='main'>
      <h2 className='main__title'>¿Qué quieres ver hoy?</h2>
      <input type='text' className='input' placeholder='Buscar...' onChange={handleChange} />
    </section>
  );
};

const mapDispatchToProps = {
  searchVideo,
};

export default connect(null, mapDispatchToProps)(Search);
