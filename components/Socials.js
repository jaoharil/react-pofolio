import Link from 'next/link';
import { RiInstagramLine, RiFacebookLine, RiGithubFill, RiLinkedinBoxFill } from 'react-icons/ri';

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={'https://www.instagram.com/_lah1_'} className="hover:text-kuning transtion-all duration-300">
        <RiInstagramLine />
      </Link>
      <Link href={'https://www.facebook.com/rilscoy/'} className="hover:text-kuning transtion-all duration-300">
        <RiFacebookLine />
      </Link>
      <Link href={'https://github.com/jaoharil'} className="hover:text-kuning transtion-all duration-300">
        <RiGithubFill />
      </Link>
      <Link href={'https://www.linkedin.com/in/jaoharil/'} className="hover:text-kuning transtion-all duration-300">
        <RiLinkedinBoxFill />
      </Link>
    </div>
  );
};

export default Socials;
