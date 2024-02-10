'use client';
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { AnimatePresence, motion } from 'framer-motion';

const cardData = [
  {
    id: 1,
    heading: '1Invest in Project',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum architecto reprehenderit fuga porro nesciunt perferendis debitis doloribus fugiat esse minus',
  },
  {
    id: 2,
    heading: '2Invest in Project',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum architecto reprehenderit fuga porro nesciunt perferendis debitis doloribus fugiat esse minus',
  },
  {
    id: 3,
    heading: '3Invest in Project',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum architecto reprehenderit fuga porro nesciunt perferendis debitis doloribus fugiat esse minus',
  },
  {
    id: 4,
    heading: '4Invest in Project',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum architecto reprehenderit fuga porro nesciunt perferendis debitis doloribus fugiat esse minus',
  },
];

const slideVariant = {
  animate: (index: number) => ({
    x: `${index * -100}%`,
    transition: {
        type: 'spring',
        damping: 18,
        stiffness: 100,
    },
  }),
};

export const FeatureGrid = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardInitialState, setCardInitialState] = useState(0);

  const handleNextSlide = () => {
    setCurrentIndex((prevSlide) => prevSlide + 1);
    setCardInitialState(currentIndex);
  };

  const handlePrevSlide = () => {
    setCurrentIndex((prevSlide) => prevSlide - 1);
    setCardInitialState(currentIndex);
  };

  return (
    <div className="container mt-10 overflow-hidden">
      <div className="mb-8 flex justify-between gap-4">
        <h2 className="text-2xl font-bold leading-[1.2] md:text-4xl">
          We're good
          <span className="text-slate-600"> Here's why.</span>
        </h2>
        <div className="flex gap-2">
          <button
            className="h-fit bg-slate-800 p-4 text-2xl text-white transition-color hover:bg-slate-700"
            onClick={handlePrevSlide}
            disabled={currentIndex === 0}
          >
            <FaChevronLeft size={24} />
          </button>
          <button
            className="h-fit bg-slate-800 p-4 text-2xl text-white transition-color hover:bg-slate-700"
            onClick={handleNextSlide}
            disabled={currentIndex === cardData.length - 1}
          >
            <FaChevronRight size={24} />
          </button>
        </div>
      </div>
      <motion.div className="flex gap-4">
        {cardData.map((item, index) => (
          <motion.div
            variants={slideVariant}
            initial={{ x: `${cardInitialState * -100}%`}}
            animate={currentIndex === index || index > currentIndex ? 'animate' : "initial"}
            custom={currentIndex}
            className="relative flex min-h-[250px] w-10/12 max-w-lg shrink-0 flex-col justify-between overflow-hidden p-8 shadow-lg md:w-3/5 bg-slate-950 border border-slate-800"
          >
            <h3 className="mb-8 text-3xl font-bold text-slate-200">
              {item.heading}
            </h3>
            <p className="text-slate-300">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

type FeatureCard = {
  heading: string;
  description: string;
};

const FeatureCard = ({ heading, description }: FeatureCard) => {
  return (
    <div className="relative flex min-h-[250px] w-10/12 max-w-lg shrink-0 flex-col justify-between overflow-hidden p-8 shadow-lg md:w-3/5 bg-slate-950 border border-slate-800">
      <h3 className="mb-8 text-3xl font-bold text-slate-200">{heading}</h3>
      <p className="text-slate-300">{description}</p>
    </div>
  );
};
