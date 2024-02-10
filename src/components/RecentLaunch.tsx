'use client';
import React, { useRef } from 'react';
import LongCard from './Cards/LongCard';
import { Button } from './ui/button';
import { SlArrowRight } from 'react-icons/sl';
import { useScroll, motion, useTransform } from 'framer-motion';

const RecentLaunch = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  return (
    <div className="container flex flex-col mt-20">
      <p className="md:text-2xl font-mono font-medium tracking-wide text-[hsl(76,87%,67%)] mx-6">
        Recently launched project using BitStart
      </p>
      <motion.div
        className="mt-8 mx-3"
        ref={ref}
        style={{ scale: scaleProgress, opacity: opacityProgress }}
      >
        <div className="relative z-10 flex flex-col gap-1">
          <LongCard />
          <LongCard />
          <LongCard />
          <LongCard />
          <LongCard />
        </div>
        <div className="inset-4 mx-4 h-3 rounded-b-[16px] bg-slate-800 opacity-[0.5]"></div>
        <div className="inset-4 mx-8 h-2 rounded-b-[16px] bg-slate-800 opacity-[0.3]"></div>
      </motion.div>
      <div className="flex justify-center mt-5">
        <Button>
          View ALL
          <SlArrowRight size={24} className="p-1" />
        </Button>
      </div>
    </div>
  );
};

export default RecentLaunch;
