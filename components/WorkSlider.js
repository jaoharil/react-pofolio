import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import { BsArrowRight } from 'react-icons/bs';

// data
const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/projeck/Anime.png',
        },
        {
          title: 'title',
          path: '/projeck/rental.png',
        },
        {
          title: 'title',
          path: '/projeck/defoode.png',
        },
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/projeck/Anime.png',
        },
        {
          title: 'title',
          path: '/projeck/rental.png',
        },
        {
          title: 'title',
          path: '/projeck/defoode.png',
        },
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      breakspoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      spaceBetween={10}
      pagination={{
        clikcable: true,
      }}
      modules={{ Pagination }}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div
                    key={index} // Tambahkan key di sini
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      {/* image */}
                      <Image src={image.path} height={500} width={300} alt="" />
                      {/* gradients */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc]  to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      {/* title */}
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hove:xl:translate-y-20 transition-all duration-300">
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                          <div className="delay-100">Live</div>
                          <div className="traslate-y-[500%] group-hover:">Projek</div>
                          <div className="text-xl translate-y-[500%] group-hover:trasnlate-y-0 transtion-all duration-300 delay-200 ">
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
