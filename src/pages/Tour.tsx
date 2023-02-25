import { motion } from 'framer-motion';
import { FC } from 'react';
import { IoChevronBackSharp } from 'react-icons/io5';
import bg from '../assets/image/screen-1/layer-back.jpg';
import toussaint from '../assets/image/tours/toussaint.jpeg';
import oxenfurt from '../assets/image/tours/oxenfurt.jpeg';
import kaerMorhen from '../assets/image/tours/kaerMorhen.jpeg';
import kaerTrolde from '../assets/image/tours/kaerTrolde.png';
import velen from '../assets/image/tours/velen.webp';
import { Link } from 'react-router-dom';
import { ITours } from './types';
import { useAppDispatch } from '../redux/hooks';
import { addTour } from '../redux/slice/tourSlice';

const tours: ITours[] = [
  {
    id: 9,
    title: 'Toussaint',
    price: 190,
    image: toussaint,
    count: 1,
  },
  {
    id: 10,
    title: 'Oxenfurt',
    price: 200,
    image: oxenfurt,
    count: 1,
  },
  {
    id: 11,
    title: 'Kaer Morhen',
    price: 210,
    image: kaerMorhen,
    count: 1,
  },
  {
    id: 12,
    title: 'Kaer Trolde',
    price: 220,
    image: kaerTrolde,
    count: 1,
  },
  {
    id: 13,
    title: 'Velen',
    price: 230,
    image: velen,
    count: 1,
  },
  {
    id: 14,
    title: 'Velen',
    price: 230,
    image: velen,
    count: 1,
  },
];

export const Tour: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="wrapper">
      <img src={bg} alt="background" className="background" />
      <motion.span
        initial={{
          y: -200,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          y: 0,
          opacity: 1,
          scale: 1,
        }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="tour-baner">
        Choose a location for your tour
      </motion.span>
      <motion.span
        initial={{
          x: -200,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="tour-back">
        <Link to="/">
          <IoChevronBackSharp className="back-icon" />
        </Link>
      </motion.span>
      <motion.div
        initial={{
          y: 400,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          y: 0,
          opacity: 1,
          scale: 1,
        }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="tour-box">
        <div className="tour-container">
          <div className="tour-items">
            {tours.map((tour) => (
              <div key={tour.id} className="tour-item">
                <Link to="/">
                  <img className="tour-image" src={tour.image} alt="background" />
                </Link>
                <div className="tour-bottom">
                  <Link to="#">
                    <span className="tour-title">{tour.title}</span>
                  </Link>
                  <span className="tour-price">{tour.price} florens</span>
                  <button
                    onClick={() =>
                      dispatch(
                        addTour({
                          id: tour.id,
                          price: tour.price,
                          title: tour.title,
                          image: tour.image,
                          count: tour.count,
                        }),
                      )
                    }
                    className="buy-tour">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
