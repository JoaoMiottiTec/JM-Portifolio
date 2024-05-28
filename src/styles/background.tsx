'use client';
import React from 'react';

const BackgroundDots = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="bg-dots h-full w-full opacity-50"></div>
    </div>
  );
};

export default BackgroundDots;