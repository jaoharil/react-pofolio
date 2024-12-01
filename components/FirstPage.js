import React from 'react';
import Image from 'next/image';
import Img from '../../assets/img2.png';

const FirstPage = () => {
  return (
    <div className="h-full">
      <main className="w-full h-full bg-secondary page-shadow">
        <div className="px-10 space-y-4">
          {/* image container */}
          <div>
            <Image src={Img} alt="Description of the image" width={200} height={190} className="mx-auto" />
          </div>
          {/* text container */}
          <div>
            <div>
              <h1 className="uppercase">Hello</h1>
              <p className="text-3xl md:text-5xl font-bold">Im Jaoharil</p>
              <p className="text-left">Web Developer</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis cumque voluptas mollitia ducimus rem</p>
              {/* <a href="" className="inline-block bg-primary text-white cursor-pointer hover:bg-primary/80 py-2 px-4 my-3 rounded-lg">
              Hire Me
            </a> */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FirstPage;
