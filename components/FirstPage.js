import React from 'react';
import Img from '../../assets/img2.png';

const FirstPage = () => {
  return (
    <div className="h-full">
      <main className="w-full h-full bg-secondary page-shadow ">
        <div className="px-10 space-y-4">
          {/* image container */}
          <div>
            <img src={Img} alt="" className="w-[200px] h-[190px] mx-auto  " />
          </div>
          {/* text container */}
          <div>
            <div className="">
              <h1 className="uppercase">Hello</h1>
              <p className="text-3xl md:text-5xl font-bold">I'm Jaoharil</p>
              <p className="text-left ">Web Developer</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis cumque voluptas mollitia ducimus rem!</p>
              {/* <a href="" className="inline-block bg-primary text-white cursor-pointer hover:bg-primaru/80 py-2 px-4 my-3 rounded-lg">
              Her Me
            </a> */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FirstPage;
