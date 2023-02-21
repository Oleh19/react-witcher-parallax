import { FC } from 'react';
import { FullScreen } from './components/FullScreen';
import { Header } from './components/Header';

export const App: FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <FullScreen />
    </div>
  );
};

export default App;
