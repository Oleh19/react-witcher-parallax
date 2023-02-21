import { FC } from 'react';
import { Parallax } from 'react-parallax';
import bg from '../../assets/image/screen-3/layer-back.jpg';
import middle from '../../assets/image/screen-3/layer-middle.png';
import ciri from '../../assets/image/screen-3/layer-ciri.png';
import font from '../../assets/image/screen-3/layer-front.png';

export const ThirdScreen: FC = () => {
  return (
    <Parallax strength={0} bgImage={bg}>
      <Parallax strength={100} bgImage={middle}>
        <Parallax strength={200} bgImage={ciri}>
          <Parallax strength={200} bgImage={font}>
            <div className="content"></div>
          </Parallax>
        </Parallax>
      </Parallax>
    </Parallax>
  );
};
