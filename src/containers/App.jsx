import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import '../assets/styles/App.scss';

const App = () => (
  <div className='app'>
    <Header />
    <Search />

    <Categories title='Categoria 1'>
      <Carousel>
        <CarouselItem title='Título descriptivo' detail='2019 16+ 114 minutos' />
        <CarouselItem title='Título descriptivo' detail='2019 16+ 114 minutos' />
        <CarouselItem title='Título descriptivo' detail='2019 16+ 114 minutos' />
        <CarouselItem title='Título descriptivo' detail='2019 16+ 114 minutos' />
      </Carousel>
    </Categories>

    <Categories title='Categoria 2'>
      <Carousel>
        <CarouselItem title='Título descriptivo' detail='2019 16+ 114 minutos' />
        <CarouselItem title='Título descriptivo' detail='2019 16+ 114 minutos' />
      </Carousel>
    </Categories>

    <Categories title='Categoria 3'>
      <Carousel>
        <CarouselItem title='Título descriptivo' detail='2019 16+ 114 minutos' />
        <CarouselItem title='Título descriptivo' detail='2019 16+ 114 minutos' />
        <CarouselItem title='Título descriptivo' detail='2019 16+ 114 minutos' />
        <CarouselItem title='Título descriptivo' detail='2019 16+ 114 minutos' />
        <CarouselItem title='Título descriptivo' detail='2019 16+ 114 minutos' />
        <CarouselItem title='Título descriptivo' detail='2019 16+ 114 minutos' />
        <CarouselItem title='Título descriptivo' detail='2019 16+ 114 minutos' />
        <CarouselItem title='Título descriptivo' detail='2019 16+ 114 minutos' />
        <CarouselItem title='Título descriptivo' detail='2019 16+ 114 minutos' />
        <CarouselItem title='Título descriptivo' detail='2019 16+ 114 minutos' />
      </Carousel>
    </Categories>

    <Footer />
  </div>
);

export default App;
