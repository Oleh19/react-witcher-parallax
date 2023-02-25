import { motion } from 'framer-motion';
import { FC } from 'react';
import { IoChevronBackSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import bg from '../assets/image/screen-3/layer-back.jpg';
import geralt from '../assets/image/witchers/geralt.jpeg';
import letho from '../assets/image/witchers/letho.jpeg';
import vesemir from '../assets/image/witchers/vesemir.webp';
import eskel from '../assets/image/witchers/eskel.webp';
import lambert from '../assets/image/witchers/lambert.jpeg';
import { IWitchers } from './types';
import { useAppDispatch } from '../redux/hooks';
import { addWitchers } from '../redux/slice/witchersSlice';

const witchers: IWitchers[] = [
  {
    id: 1,
    title: 'Geralt',
    image: geralt,
    price: 1900,
    count: 1,
  },
  {
    id: 2,
    title: 'Letho',
    image: letho,
    price: 2000,
    count: 1,
  },
  {
    id: 3,
    title: 'Vesemir',
    image: vesemir,
    price: 2100,
    count: 1,
  },
  {
    id: 4,
    title: 'Eskel',
    image: eskel,
    price: 2200,
    count: 1,
  },
  {
    id: 5,
    title: 'Lambert',
    image: lambert,
    price: 2300,
    count: 1,
  },
];

export const Witcher: FC = () => {
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
        className="witcher-baner">
        Choose a witcher
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
        className="witcher-back">
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
        className="witcher-box">
        <div className="witcher-container">
          <div className="witcher-items">
            {witchers.map((witcher) => (
              <div key={witcher.id} className="witcher-item">
                <Link to="/">
                  <img className="witcher-image" src={witcher.image} alt="background" />
                </Link>
                <div className="witcher-bottom">
                  <Link to="#">
                    <span className="witcher-title">{witcher.title}</span>
                  </Link>
                  <span className="witcher-price">{witcher.price} florens</span>
                  <button
                    onClick={() =>
                      dispatch(
                        addWitchers({
                          id: witcher.id,
                          price: witcher.price,
                          title: witcher.title,
                          image: witcher.image,
                          count: witcher.count,
                        }),
                      )
                    }
                    className="buy-witcher">
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
