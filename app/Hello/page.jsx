import React from "react";

const HelloPage = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4 animate__animated animate__fadeIn animate__delay-1s">
          Hello,
        </h1>
        <h2 className="text-2xl font-semibold text-white mb-8 animate__animated animate__fadeIn animate__delay-2s">
          How are you?
        </h2>
      </div>
    </div>
  );
};

export default HelloPage;
