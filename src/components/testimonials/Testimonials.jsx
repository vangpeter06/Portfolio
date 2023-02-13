import React from 'react';
import './testimonials.css';
import Img from '../../assets/me.png';

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={Img} alt="Avatar" />
          </div>
            <h5 className='client__name'>Peter Vang (name)</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At praesentium suscipit magni voluptatibus quasi a, rsandae ipsa adipisci!
            </small>
          
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={Img} alt="Avatar" />
          </div>
            <h5 className='client__name'>Peter Vang (name)</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At praesentium suscipit magni voluptatibus quasi a, reiciendis necessitatibus quis minima, illo tenetur toghdfhtam aliquid aperiam explicabo iure dolores  sgwsetgwe resdgsgcusandae ipsa adipisci!
            </small>
          
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={Img} alt="Avatar" />
          </div>
            <h5 className='client__name'>Peter Vang (name)</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At praesentium suscipit magni voluptatibus quasi a, reiciendis necessitatibus quis minima, liquid aperiam explicabo iure dolores recusandae ipsa adipisci!
            </small>
          
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials


// easier to clean up the codes 
// const data = [
//   {
//     avatar: avatar1,
//     name: 'Person name',
//     review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor explicabo voluptatem quis earum laboriosam in itaque delectus officiis, eius voluptate rem, distinctio architecto non? Delectus at error officia id veniam?'
//   }
// ]
{/* <Swiper className="container testimonials__container"> */}
// {
//   data.map(({avatar, name, review}. index) => {
//     return (
//       <SwiperSlide key={index} className="testimonial">
//           <div className="client__avatar">
//             <img src={avatar}/>
//           </div>
//             <h5 className='client__name'>{name}</h5>
//             <small className='client__review'>
//               {review}
//             </small>
          
//         </SwiperSlide>
//     )
//   })
{/* <swiper */}
// }