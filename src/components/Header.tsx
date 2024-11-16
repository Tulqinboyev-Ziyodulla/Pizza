import React from 'react';

const Header: React.FC = () => {



  return (
    <header className="bg-yellow-300 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">REACT PIZZA</h1>
          <p className="text-sm text-gray-600">самая вкусная пицца во вселенной</p>
        </div>
        <button className="bg-orange-500 text-white py-2 px-4 rounded-full font-medium hover:bg-orange-600">
          520 ₽
        </button>
      </div>
    </header>
  );
};

export default Header;
