import { FC } from 'react';
import { FullScreen } from '../components/FullScreen';
import { Header } from '../components/Header';


export const Home: FC = () => {
  return (
    <>
      <Header />
      <FullScreen />
    </>
  );
};
