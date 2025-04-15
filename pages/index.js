import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Socials from '../components/Socials';
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';
import { easeInOut, motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Home = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Frontend Web Developer', 'Full Stack Web Developer'],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="bg-primary/60 h-full ">
      <ParticlesContainer />
      {/* text */}
      <div className="w-full h-full   bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col pt-20 sm:pt-[300px] xl:justify-center lg:justify-center  xl:pt-20 xl:text-left h-full container mx-auto ">
          {/* title */}
          <motion.h1 variants={fadeIn('down', 0.2)} initial="hidden" animate="show" exit="hidden" className="h2 text-accent mt-[-2rem]">
            Jaoh<span className="text-kuning">aril</span> Maknun
          </motion.h1>

          {/* subtitle */}
          <motion.p variants={fadeIn('down', 0.3)} initial="hidden" animate="show" exit="hidden" className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-10 text-xl text-accent mt-[-1rem]">
            <span ref={el} />
          </motion.p>

          <motion.p variants={fadeIn('down', 0.3)} initial="hidden" animate="show" exit="hidden" className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 text-accent mt-[-1rem]">
            I am a web developer from Indonesia, East Lombok. I just graduated from college in informatics engineering.
          </motion.p>
          <motion.div variants={fadeIn('down', 0.3)} initial="hidden" animate="show" exit="hidden" className="max-w-sm z-40 xl:max-w-xl mx-auto xl:mx-0 mb-2 xl:mb-5 text-xl text-accent mt-[-1rem]">
            <Socials />
          </motion.div>
        </div>

        <div className="w-[1200px] h-full absolute right-0 bottom-20">
          {/* background image */}
          {/* <div className="bg-back bottom-0 right-[-1%] xl:bg-back xl:bg-cover xl:bg-right xl:bg-no-repeat w-[400px] h-[500px] absolute mix-blend-color-dodge translate-z-0 lg:right-[0%] lg:w-[800px] lg:h-[700px] rotate-1 md:w-[700px] md:h-[500px] md:right-[0%] md:bg-no-repeat md:bottom-0"></div> */}

          {/* particles */}

          {/* avatar */}
          <motion.div
            variants={fadeIn('up', 0.5)}
            initial="hidden"
            animate="show"
            transition={{ duration: 1, ease: easeInOut }}
            className="h-[300px] w-[200px] max-w-[237px] max-h-[278px] absolute -bottom-41 lg:bottom-40 lg:right-[20%] md:right-[27%] right-[7%] bottom-40 pt-5 md:w-[700px] md:h-[700px] md:pt-0 md:bottom-60"
          >
            <Avatar />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
