import React from 'react';
import Img from '../public/sertificat/s.jpg';
import Image from 'next/image';

const Cover = () => {
  return (
    <div class="profile-card text-[#e2e6d5] w-full h-full rounded-md shadow-xl overflow-hidden z-[100] relative cursor-pointer snap-start shrink-0 bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-col items-center justify-center gap-3 transition-all duration-300 group">
      <div className="">
        {/* <BorderBeam /> */}
        <Image src={Img} alt="" className="w-[300px] h-[190px] mx-auto border  " />
      </div>{' '}
      <div class="avatar w-full pt-5 flex items-center justify-center flex-col gap-1"></div>
      <div class="headings *:text-center *:leading-4">
        <p class="text-xl font-serif font-semibold text-[#c8e855]">Jaoharil Maknun</p>
        <p class="text-sm font-semibold text-[#c8e855]">Book Ceterficate</p>
      </div>
      {/* <div class="w-full items-center justify-center flex">
        <ul class="flex flex-col items-start gap-2 has-[:last]:border-b-0 *:inline-flex *:gap-2 *:items-center *:justify-center *:border-b-[1.5px] *:border-b-stone-700 *:border-dotted *:text-xs *:font-semibold *:text-[#c8e855] pb-3">
          <li>
            <svg id="phone" viewBox="0 0 24 24" class="fill-stone-700 group-hover:fill-[#58b0e0]" height="15" width="15" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0V0z" fill="none"></path>
              <path d="M19.23 15.26l-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z"></path>
            </svg>
            <p>+123-458-784</p>
          </li>
          <li>
            <svg class="fill-stone-700 group-hover:fill-[#58b0e0]" height="15" width="15" id="mail" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <path d="M16,14.81,28.78,6.6A3,3,0,0,0,27,6H5a3,3,0,0,0-1.78.6Z" fill="#231f20"></path>
              <path d="M16.54,16.84h0l-.17.08-.08,0A1,1,0,0,1,16,17h0a1,1,0,0,1-.25,0l-.08,0-.17-.08h0L2.1,8.26A3,3,0,0,0,2,9V23a3,3,0,0,0,3,3H27a3,3,0,0,0,3-3V9a3,3,0,0,0-.1-.74Z" fill="#231f20"></path>
            </svg>
            <p>jaoharil@gmail.com</p>
          </li>
          <li>
            <svg class="fill-stone-700 group-hover:fill-[#58b0e0]" height="15" width="15" id="globe" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <g data-name="Layer 2">
                <path
                  data-name="globe"
                  d="M22 12A10 10 0 0 0 12 2a10 10 0 0 0 0 20 10 10 0 0 0 10-10zm-2.07-1H17a12.91 12.91 0 0 0-2.33-6.54A8 8 0 0 1 19.93 11zM9.08 13H15a11.44 11.44 0 0 1-3 6.61A11 11 0 0 1 9.08 13zm0-2A11.4 11.4 0 0 1 12 4.4a11.19 11.19 0 0 1 3 6.6zm.36-6.57A13.18 13.18 0 0 0 7.07 11h-3a8 8 0 0 1 5.37-6.57zM4.07 13h3a12.86 12.86 0 0 0 2.35 6.56A8 8 0 0 1 4.07 13zm10.55 6.55A13.14 13.14 0 0 0 17 13h2.95a8 8 0 0 1-5.33 6.55z"
                ></path>
              </g>
            </svg>
            <p>joril.com</p>
          </li>
          <li>
            <svg id="map" viewBox="0 0 16 16" class="fill-stone-700 group-hover:fill-[#58b0e0]" height="15" width="15" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 0C5.2 0 3 2.2 3 5s4 11 5 11 5-8.2 5-11-2.2-5-5-5zm0 8C6.3 8 5 6.7 5 5s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z" fill="#444"></path>
            </svg>
            <p>Lombok Timur, selong</p>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default Cover;
