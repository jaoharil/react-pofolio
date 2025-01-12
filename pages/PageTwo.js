import React from 'react';
import Img from '../public/sertificat/fullstack.png';
import Image from 'next/image';
const PageTwo = () => {
  return (
    <div className="h-full">
      <main className="w-full h-full bg-kuning page-shadow ">
        <div className="px-10 space-y-4">
          {/* image container */}
          <div className="pt-5">
            <Image src={Img} alt="fullstack" className="w-[200px] h-[150px] mx-auto  " />
          </div>
          {/* text container */}

          <div className="">
            <h1 className="uppercase text-black">Fullstack Web DEVELOPER</h1>
            <p className="text-left text-black">PT.Hadvane Indonesia</p>
            <p className="text-xs text-black">Sertifikat ini diperoleh setelah menyelesaikan pelatihan/kursus MSIB yang diselenggarakan oleh kamendikbud. Sertifikat ini mengakui kompetensi dalam Fullstack dengan fokus pada Laravel.</p>
            {/* <a href="" className="inline-block bg-primary text-white cursor-pointer hover:bg-primaru/80 py-2 px-4 my-3 rounded-lg">
              Her Me
            </a> */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default PageTwo;
