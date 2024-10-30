import React from 'react';
import Img from '../public/aril.png';
// import { BorderBeam } from '@/components/magicui/border-beam.tsx';

const FirstPage = () => {
  return (
    <div className="h-full">
      <main className="w-full h-full bg-primary/60 page-shadow ">
        <div className="px-10 space-y-4">
          {/* image container */}
          <div className="pt-5">
            {/* <BorderBeam /> */}
            <img src="/sertificat/frontend.png" alt="" className="w-[200px] h-[150px] mx-auto   " />
          </div>
          {/* text container */}
          <div>
            <div className=" ">
              <h1 className="uppercase text-black">FrontEnd Web DEVELOPER</h1>
              <p className="text-left text-black">Dicoding Indonesia</p>
              <p className="text-xs text-black">Sertifikat ini diperoleh setelah menyelesaikan pelatihan/kursus MSIB yang diselenggarakan oleh kamendikbud. Sertifikat ini mengakui kompetensi dalam FrontEnd dengan fokus pada JavaScript.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FirstPage;