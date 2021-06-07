import React from 'react';
import './App.css';

export function App(): JSX.Element {
  return (
    <main
      className="
        flex
        items-center
        justify-center
        w-screen
        h-screen
        bg-gray-900
        overflow-hidden
      "
    >
      <h1
        className="
          text-2xl
          sm:text-4xl
          md:text-6xl
          lg:text-8xl
          font-mono
          font-bold
          italic
          text-pink-600
          drop-shadow
        "
      >
        Hello world
      </h1>
    </main>
  );
}
