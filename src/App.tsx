import { FC } from 'react';
import { Route, Routes } from 'react-router';
import { Home } from './pages/Home';
import { Hunt } from './pages/Hunt';
import { Tour } from './pages/Tour';
import { Witcher } from './pages/Witcher';

export const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tour" element={<Tour />} />
      <Route path="/hunt" element={<Hunt />} />
      <Route path="/witcher" element={<Witcher />} />
    </Routes>
  );
};

export default App;
