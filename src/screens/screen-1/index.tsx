import { FC } from 'react';
import { Parallax } from 'react-parallax';
import bg from '../../assets/image/screen-1/layer-back.jpg';
import front from '../../assets/image/screen-1/layer-front.png';
import middle from '../../assets/image/screen-1/layer-middle.png';
import { FaInfoCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const FirstScreen: FC = () => {
  return (
    <Parallax strength={100} bgImage={bg}>
      <Parallax strength={300} bgImage={middle}>
        <Parallax strength={400} bgImage={front}>
          <div className="content" id="firstScreen">
            <Link to="tour">
              <motion.div
                initial={{
                  opacity: 0,
                }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}>
                <FaInfoCircle className="icon" />
              </motion.div>
            </Link>
          </div>
        </Parallax>
      </Parallax>
    </Parallax>
  );
};
