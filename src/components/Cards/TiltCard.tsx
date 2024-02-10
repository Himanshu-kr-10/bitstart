'use client';
import { useState, MouseEvent, useCallback } from 'react';


function throttle<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let lastCall = 0;
  return (...args: Parameters<T>) => {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return func(...args);
  };
}


const TiltCard = () => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const onMouseMove = useCallback(
    throttle((e: MouseEvent<HTMLDivElement>) => {
      const card = e.currentTarget;
      const box = card.getBoundingClientRect();
      const x = e.clientX - box.left;
      const y = e.clientY - box.top;
      const centerX = box.width / 2;
      const centerY = box.height / 2;
      const rotateX = (y - centerY) / 4;
      const rotateY = (centerX - x) / 4;

      setRotate({ x: rotateX, y: rotateY });
    }, 100),
    []
  );

  const onMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <>
      <div
        className="card relative h-[300px] w-[300px] transition-[all_400ms_cubic-bezier(0.03,0.98,0.52,0.99)_0s] will-change-transform"
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
          transition: 'all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s',
        }}
      >
        <div className="group p-2 relative flex h-full w-full select-none items-center justify-center rounded-3xl border border-slate-800/70 bg-gradient-to-tr from-gray-950 to-gray-900 text-sm font-light text-gray-300 ">
          <div className="relative rounded-2xl bg-gradient-to-br from-cyan-400 via-cyan-600 to-sky-700 h-full w-full">
            <div className="absolute top-0 right-0 max-w-[50%] bg-gradient-to-tr from-gray-950 to-gray-900 rounded-bl-3xl px-3 pb-2 ">
              <p className="flex justify-end text-sm">$0.00534234</p>
              <p className="text-green-500 flex justify-end">66.07%</p>
            </div>
            <div className="absolute bottom-0 left-0 max-w-[50%] p-2 pb-0 pr-4 bg-gradient-to-tr from-gray-950 to-gray-900 rounded-tr-3xl">
              <p className="font-thin font-mono text-sm text-neutral-500">BY</p>
              <p className="font-medium">TAD BRUNDY</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TiltCard;
