'use client';
import React from 'react';
import { Rowdies } from 'next/font/google';
import { motion } from 'framer-motion';

const rowdies = Rowdies({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.8,
    },
  },
};

const containerAnimation = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
  }),
};

const childAnimation = {
  hidden: {
    opacity: 0,
    y: 24,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100,
    },
  },
};

const text = 'Invest in vetted projects.';

const Hero = () => {
  const heading = Array.from(text);
  return (
    <header className="relative flex items-center justify-center flex-col mt-4  h-[calc(100vh-80px)] max-h-[700px] font-wide font-bold leading-none">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <motion.div
        className={`text-[50px] md:text-[60px] lg:text-[85px] ${rowdies.className}`}
        variants={containerAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true
        }}
      >
        {heading.map((word, index) => (
          <motion.span className="inline-block" variants={childAnimation} key={index}>
            {word === ' ' ? "\u00A0" : word}
          </motion.span>
        ))}
      </motion.div>

      <motion.p
        className="text-gray-500 font-mono mt-4 text-2xl "
        variants={fadeInAnimationVariants}
        initial="initial"
        animate="animate"
        whileInView="animate"
      >
        Start your next investment on vetted project with BitStart
      </motion.p>
    </header>
  );
};

export default Hero;
