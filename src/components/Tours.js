import React from 'react'
import Title from './Title';
import { tours } from '../data';
import Tour from './Tour';

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours"></Title>
      <div className="section-center featured-center">
        {tours.map((tour) => {
          // const { id, img, date, title, info, location, days, price} = tour;
          return (
            <Tour {...tour} key={tour.id}/>
          );
        })}
      </div>
    </section>
  );
}

export default Tours