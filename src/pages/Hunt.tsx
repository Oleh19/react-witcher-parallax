import { motion } from 'framer-motion';
import { FC, useEffect } from 'react';
import { IoChevronBackSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import bg from '../assets/image/screen-2/layer-back.jpg';
import fiend from '../assets/image/hunt/fiend.webp';
import leshy from '../assets/image/hunt/leshy.webp';
import protofleder from '../assets/image/hunt/protofleders.webp';
import { IMonsters } from './types';
import { useAppDispatch } from '../redux/hooks';
import { addHunt } from '../redux/slice/huntSlice';

const monsters: IMonsters[] = [
  {
    id: 1,
    title: 'Fiend',
    price: 100,
    image: fiend,
    count: 1,
  },
  {
    id: 2,
    title: 'Leshy',
    price: 100,
    image: leshy,
    count: 1,
  },
  {
    id: 3,
    title: 'Protofleder',
    price: 100,
    image: protofleder,
    count: 1,
  },
];

export const Hunt: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        Choose a monster for hunt
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
        className="hunt-box">
        <div className="hunt-container">
          <div className="hunt-items">
            {monsters.map((monster) => (
              <div key={monster.id} className="hunt-item">
                <Link to="/">
                  <img className="hunt-image" src={monster.image} alt={monster.title} />
                </Link>
                <div className="hunt-bottom">
                  <Link to="#">
                    <span className="hunt-title">{monster.title}</span>
                  </Link>
                  <span className="hunt-price">{monster.price} florens</span>
                  <button
                    onClick={() =>
                      dispatch(
                        addHunt({
                          id: monster.id,
                          price: monster.price,
                          title: monster.title,
                          image: monster.image,
                          count: monster.count,
                        }),
                      )
                    }
                    className="buy-hunt">
                    Buy
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
