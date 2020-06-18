import React from 'react';

// ? Components
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

// ? Hooks
import useInitialState from '../hooks/useInitialState';

const API = 'http://localhost:3000/initalState';

const Home = () => {

  const initialState = useInitialState(API);

  return (
    <>
      <Search />

      {
        initialState.mylist?.length > 0 &&
        (
          <Categories title='Mi Lista'>
            <Carousel>
              {initialState.mylist?.map((item) => (
                <CarouselItem
                  key={item.id}
                  title={item.title}
                  cover={item.cover}
                  year={item.year}
                  contentRating={item.contentRating}
                  duration={item.duration}
                />
              ))}
            </Carousel>
          </Categories>
        )
      }

      <Categories title='Tendencias'>
        <Carousel>
          {
            initialState.trends?.map((item) => (
              <CarouselItem
                key={item.id}
                title={item.title}
                cover={item.cover}
                year={item.year}
                contentRating={item.contentRating}
                duration={item.duration}
              />
            ))
          }
        </Carousel>
      </Categories>

      <Categories title='Originales'>
        <Carousel>
          {
            initialState.originals?.map((item) => (
              <CarouselItem
                key={item.id}
                title={item.title}
                cover={item.cover}
                year={item.year}
                contentRating={item.contentRating}
                duration={item.duration}
              />
            ))
          }
        </Carousel>
      </Categories>
    </>
  );
};

export default Home;
