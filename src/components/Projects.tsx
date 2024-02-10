'use client';
import React from 'react';
import TiltCard from './Cards/TiltCard';

const Projects = () => {
  return (
    <div className="container">
      <div className="mx-6 mt-20">
        <p className="font-medium font-mono text-2xl text-[#ffa14a] ">
          Projects
        </p>
      </div>
      <div className="mx-3 mt-8">
        <div className="px-2 py-4 flex justify-center w-[1190px] lg:w-auto gap-2 lg:gap-4">
          <TiltCard />
          <TiltCard />
          <TiltCard />
          <TiltCard />
        </div>
      </div>
    </div>
  );
};

export default Projects;
