import React from 'react';

import playIcon from '../assets/img/play-icon.png';
import plusIcon from '../assets/img/plus-icon.png';

import '../assets/styles/components/CarouselItem.scss';

const CarouselItem = (props) => {
  const { title, detail } = props;
  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src='https://images.pexels.com/photos/413879/pexels-photo-413879.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='' />
      <div className='carousel-item__details'>
        <div>
          <img className='carousel-item__details--img' src={playIcon} alt='Play Icon' />
          <img className='carousel-item__details--img' src={plusIcon} alt='Plus Icon' />
        </div>
        <p className='carousel-item__details--title'>{ title }</p>
        <p className='carousel-item__details--subtitle'>{ detail }</p>
      </div>
    </div>
  );
};

export default CarouselItem;
