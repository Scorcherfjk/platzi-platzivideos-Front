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

const Home = ({ mylist, trends, originals }) => {

  // const initialState = useInitialState(API);

  return (
    <>
      <Search />
      {
        mylist.length > 0 &&
        (
          <Categories title='Mi Lista'>
            <Carousel>
              {mylist.map((item) => (
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
            trends.map((item) => (
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
            originals.map((item) => (
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

const mapStateToProps = (state) => {
  return {
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);
