'use client';
import Link from 'next/link';
import { Button } from './ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const Navbar = () => {
  const { scrollY } = useScroll();
  const router = useRouter();
  const pathname = usePathname();

  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 20) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className="fixed flex items-center justify-between w-full gap-4 overflow-hidden px-4 pl-10 py-3 z-20 bg-slate-950"
    >
      <div className="relative flex h-8 items-center w-[390px]">
        <div className="flex items-center gap-4">
          <Link href="/">
            <div className="flex gap-1.3 items-center">
              <svg
                id="logo-38"
                width="78"
                height="32"
                viewBox="0 0 78 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M55.5 0H77.5L58.5 32H36.5L55.5 0Z"
                  className="ccustom"
                  fill="#FF7A00"
                ></path>
                <path
                  d="M35.5 0H51.5L32.5 32H16.5L35.5 0Z"
                  className="ccompli1"
                  fill="#FF9736"
                ></path>
                <path
                  d="M19.5 0H31.5L12.5 32H0.5L19.5 0Z"
                  className="ccompli2"
                  fill="#FFBC7D"
                ></path>
              </svg>
              <p className="text-white font-semibold italic text-2xl uppercase font-mono ">
                BitStart
              </p>
            </div>
          </Link>
          <div className="">
            <Tabs
              defaultValue={pathname === '/' ? 'projects' : 'lottery'}
              className="w-[400px]"
            >
              <TabsList>
                <TabsTrigger
                  value="projects"
                  className="font-mono uppercase"
                  onClick={() => router.push('/')}
                >
                  PROJECTS
                </TabsTrigger>
                <TabsTrigger
                  value="lottery"
                  className="font-mono uppercase"
                  onClick={() => router.push('/lottery')}
                >
                  LOTTERY
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="outline">Launch your project</Button>
        <div className="flex items-center gap-1.5">
          <Button variant="default">Connect</Button>
          <Button variant="default" className="bg-orange-500">
            0 Points
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
