import { motion } from 'framer-motion';
import { FC } from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom';
import bg from '../../assets/image/screen-2/layer-back.jpg';
import front from '../../assets/image/screen-2/layer-front.png';
import hero1 from '../../assets/image/screen-2/layer-gera.png';
import hero2 from '../../assets/image/screen-2/layer-yen.png';

export const SecondScreen: FC = () => {
  return (
    <Parallax strength={0} bgImage={bg}>
      <Parallax strength={100} bgImage={front}>
        <Parallax strength={200} bgImage={hero1}>
          <Parallax strength={300} bgImage={hero2}>
            <div className="content" id="secondScreen">
              <Link to="/hunt">
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1.5 }}>
                  <motion.div>
                    <FaInfoCircle className="icon" />
                  </motion.div>
                </motion.div>
              </Link>
            </div>
          </Parallax>
        </Parallax>
      </Parallax>
    </Parallax>
  );
};
