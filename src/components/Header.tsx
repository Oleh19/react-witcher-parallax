import { motion } from 'framer-motion';
import { FC } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FirstNavMenu = [
  {
    name: 'Buy tour',
    link: '#firstScreen',
  },
  {
    name: 'Hunt',
    link: '#secondScreen',
  },
  {
    name: 'Witcher',
    link: '#thirdScreen',
  },
  {
    name: 'Cart',
    link: '#thirdScreen',
  },
];

export const Header: FC = () => {
  return (
    <motion.header
      initial={{
        x: 400,
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
      className="header">
      <div className="nav-container">
        <div className="nav">
          {FirstNavMenu.map((item, index) =>
            item.name === 'Cart' ? (
              <Link key={index} to="/cart" className="cart">
                <FaCartPlus />
              </Link>
            ) : (
              <a key={index} href={item.link}>
                <div>{item.name}</div>
              </a>
            ),
          )}
        </div>
      </div>
    </motion.header>
  );
};
