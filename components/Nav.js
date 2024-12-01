import { useState } from 'react';
import { HiHome, HiUser, HiViewColumns, HiRectangleGroup, HiEnvelope } from 'react-icons/hi2';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'certificate', path: '/services', icon: <HiRectangleGroup /> },
  { name: 'work', path: '/work', icon: <HiViewColumns /> },
  { name: 'contact', path: '/contact', icon: <HiEnvelope /> },
];

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  const [activeTooltip, setActiveTooltip] = useState(null);

  const handleMouseEnter = (index) => setActiveTooltip(index);
  const handleMouseLeave = () => setActiveTooltip(null);
  const handleClick = () => setActiveTooltip(null);

  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-[80px] bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-80 xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {navData.map((link) => (
          <div key={link.name} className="relative flex items-center">
            <Link
              className={`${link.path === pathname && 'text-kuning'} flex items-center group hover:text-accent transition-all duration-300`}
              href={link.path}
              onClick={handleClick}
              onMouseEnter={() => handleMouseEnter(link.name)}
              onMouseLeave={handleMouseLeave}
              aria-label={link.name}
            >
              <div className="text-2xl">{link.icon}</div>
            </Link>

            {activeTooltip === link.name && (
              <div
                className={`absolute ${activeTooltip === link.name ? 'block' : 'hidden'} xl:right-full xl:mr-2 xl:bg-white xl:p-[6px] xl:rounded-[3px] xl:text-primary xl:text-center xl:top-1/2 xl:-translate-y-1/2 
                block xl:hidden bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-white p-[6px] rounded-[3px] text-primary text-center`}
              >
                <div className="text-sm font-semibold capitalize">{link.name}</div>
                <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white xl:hidden"></div>
                <div className="absolute right-[-6px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-t-transparent border-b-transparent border-l-white hidden xl:block"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
