import React from 'react';
import { CiBitcoin } from 'react-icons/ci';
import { SlArrowRight } from 'react-icons/sl';

const LongCard = () => {
  return (
    <div className="group flex items-center rounded-[16px] border border-gray-100/10 bg-slate-800/30 py-1 pl-1 pr-2 transition-all ease-in-out hover:translate-y-[-1px] hover:bg-slate-800/50 active:scale-[.99]">
      <div className="rounded-[12px] rounded-tr-[6px] p-[7px] bg-red-500">
        <CiBitcoin size={28} />
      </div>
      <div className="ml-2 flex-1 overflow-hidden text-sm md:ml-2 md:flex md:text-base">
        <div className="font-mono font-thin tracking-wide text-green-500 text-lg">
          LOREM
        </div>
        <div className="text-white ml-4 text-lg font-medium">LOREM ISPUM</div>
        <div className="text-[#939393] text-lg ml-4">has launched!</div>
      </div>
      <div className="flex items-center gap-2">
        <div className="text-[#939393] text-lg font-mono">5</div>
        <div className="text-[#939393] text-lg font-mono">DAYS AGO</div>
        <div className="text-[#939393]">
          <SlArrowRight size={28} className="p-1" />
        </div>
      </div>
    </div>
  );
};

export default LongCard;
