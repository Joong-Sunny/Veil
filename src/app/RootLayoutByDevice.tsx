"use client";

import React from 'react';

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayoutByDevice = ({children}: RootLayoutProps) => {

  return (
    <div className="flex h-[100dvh] w-screen overflow-hidden bg-[#f5f5f5] bg-cover bg-center">
      <div className="relative mx-auto h-full w-full bg-white">
        {children}
      </div>
    </div>
  );
};

export default RootLayoutByDevice;
