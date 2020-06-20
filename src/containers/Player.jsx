import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getVideoSource } from '../actions';
import NotFound from './NotFound';

import '../assets/styles/components/Player.scss';

const Player = (props) => {

  const { playing, match } = props;
  const { id } = match.params;

  const hasPlaying = Object.keys(playing).length > 0;

  useEffect(() => {
    props.getVideoSource(id);
  }, []);

  return hasPlaying ? (
    <div className='Player'>
      <video controls autoPlay>
        <source src={playing.source} type='video/mp4' />
      </video>
      <div className='Player-back'>
        <button type='button' onClick={() => props.history.goBack()}>
          Regresar
        </button>
      </div>
    </div>
  ) : <NotFound />;
};

const mapStatetoProps = (state) => {
  return {
    playing: state.playing,
  };
};

const mapDispathToProps = {
  getVideoSource,
};

export default withRouter(connect(mapStatetoProps, mapDispathToProps)(Player));
