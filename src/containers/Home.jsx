/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';

// ? Components
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

// // ? Hooks
// import useInitialState from '../hooks/useInitialState';

// const API = 'http://localhost:3000/initalState';

const Home = ({ mylist, trends, originals, search }) => {

  // const initialState = useInitialState(API);

  return (
    <>
      <Search />
      {
        search.length > 0 &&
        (
          <Categories title='Resultados de la busqueda'>
            <Carousel>
              {search.map((item) => (
                <CarouselItem
                  key={item.id}
                  {...item}
                />
              ))}
            </Carousel>
          </Categories>
        )
      }
      {
        mylist.length > 0 &&
        (
          <Categories title='Mi Lista'>
            <Carousel>
              {mylist.map((item) => (
                <CarouselItem
                  key={item.id}
                  {...item}
                  isList
                />
              ))}
            </Carousel>
          </Categories>
        )
      }

      <Categories title='Tendencias'>
        <Carousel>
          {
            trends.map((item) => (
              <CarouselItem
                key={item.id}
                {...item}
              />
            ))
          }
        </Carousel>
      </Categories>

      <Categories title='Originales'>
        <Carousel>
          {
            originals.map((item) => (
              <CarouselItem
                key={item.id}
                {...item}
              />
            ))
          }
        </Carousel>
      </Categories>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals,
    search: state.search,
  };
};

export default connect(mapStateToProps, null)(Home);
