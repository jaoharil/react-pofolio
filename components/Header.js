//next img
import Image from 'next/image';
import Link from 'next/link';
import Socials from '../components/Socials';
import TopLeftImg from '../components/TopLeftImg';

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex  items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-y-6 py-8">
          {/* social media */}
          {/* <TopLeftImg /> */}
          {/* <Socials /> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
