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

interface ITours {
  title: string;
  price: number;
  image: string;
}

const tours: ITours[] = [
  {
    title: 'Toussaint',
    price: 190,
    image: toussaint,
  },
  {
    title: 'Oxenfurt',
    price: 200,
    image: oxenfurt,
  },
  {
    title: 'Kaer Morhen',
    price: 210,
    image: kaerMorhen,
  },
  {
    title: 'Kaer Trolde',
    price: 220,
    image: kaerTrolde,
  },
  {
    title: 'Velen',
    price: 230,
    image: velen,
  },
];

export const Tour: FC = () => {
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
            {tours.map((tour, index) => (
              <div key={index} className="tour-item">
              <Link to='/'>
              <img className="tour-image" src={tour.image} alt="background" />
              </Link>
                <div className="tour-bottom">
                  <Link to='#'>
                  <span className="tour-title">{tour.title}</span>
                  </Link>
                  <span className="tour-price">{tour.price} florens</span>
                  <button className="buy-tour">Buy</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
