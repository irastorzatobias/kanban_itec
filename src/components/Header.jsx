import React from 'react';
import logoImg from 'utils/default-monochrome.svg';

export default function Header({ title }) {
  return (
    <div className="h-24 mb-4 flex justify-center items-center bg-indigo-500 ">
      <img src={logoImg} className="h-auto w-64" alt="logo" />
      {/* <h1 className="text-center text-2xl mb-3 bg-blue-500 p-3 font-black text-white uppercase">
        {title}
      </h1> */}
    </div>
  );
}
