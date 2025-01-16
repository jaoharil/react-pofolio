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
          url: 'https://github.com/jaoharil/movie-anime',
        },
        {
          title: 'title',
          path: '/projeck/rental.png',
          url: 'https://github.com/jaoharil/rentdrive',
        },
        {
          title: 'title',
          path: '/projeck/defoode.png',
          url: 'https://github.com/jaoharil/DEfood',
        },
        {
          title: 'title',
          path: '/projeck/vesmet.png',
          url: 'https://github.com/jaoharil/vesmetreact',
        },
      ],
    },
    {
      images: [
        {
          title: 'Pemesanan Website',
          path: '/projeck/shopee.png',
          url: 'https://rils-web.vercel.app/',
        },
        {
          title: 'Shopee',
          path: '/projeck/shope.png',
          url: 'https://github.com/jaoharil/minishopee',
        },
        {
          title: 'Spk',
          path: '/projeck/spk.png',
        },
        {
          title: 'title',
          path: '/projeck/Toko.png',
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
        clickable: true,
      }}
      modules={[Pagination]}
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
                          {image.url && (
                            <a
                              href={image.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="absolute bottom-0 translate-y-full group-hover:-translate-y-4 transition-all duration-300 flex items-center gap-x-2 text-[13px] tracking-[0.2em] text-white bg-sky-300 py-1 px-3 rounded-lg"
                            >
                              Live Projek <BsArrowRight />
                            </a>
                          )}
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
