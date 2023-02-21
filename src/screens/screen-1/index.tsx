import { FC } from 'react';
import { Parallax } from 'react-parallax';
import bg from '../../assets/image/screen-1/layer-back.jpg';
import front from '../../assets/image/screen-1/layer-front.png';
import middle from '../../assets/image/screen-1/layer-middle.png';

export const FirstScreen: FC = () => {
  return (
    <Parallax strength={100} bgImage={bg}>
      <Parallax strength={300} bgImage={middle}>
        <Parallax strength={400} bgImage={front}>
          <div className="content"></div>
        </Parallax>
      </Parallax>
    </Parallax>
  );
};
