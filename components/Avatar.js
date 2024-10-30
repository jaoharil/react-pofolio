//next img
import Image from 'next/image';

const Avatar = () => {
  return (
    <div className="flex  xl:flex md:flex  ">
      <Image src={'/aril.png'} width={337} height={378} alt="" className="translate-z-0 w-full h-full" />
    </div>
  );
};

export default Avatar;
