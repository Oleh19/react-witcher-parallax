import { FC } from 'react';

const navMenu = ['About', 'Tour', 'Witcher'];

export const Header: FC = () => {
  return (
    <header className="header">
      <div className="nav-container">
        <nav className="nav">
          {navMenu.map((item, index) => (
            <div key={index} className="">{item}</div>
          ))}
        </nav>
      </div>
    </header>
  );
};
