import React, { useState } from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaWordpress, FaFigma, FaLaravel } from 'react-icons/fa';
import { SiNextdotjs, SiFramer, SiAdobexd, SiAdobephotoshop, SiTailwindcss } from 'react-icons/si';
import ParticlesContainer from '../../components/ParticlesContainer';
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import CountUp from 'react-countup';

// Data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Fullstack Developer',
        icons: [<FaHtml5 key="html5" />, <FaCss3 key="css3" />, <SiTailwindcss key="tailwind" />, <FaJs key="js" />, <FaReact key="react" />, <FaLaravel key="laravel" />, <SiNextdotjs key="nextjs" />],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma key="figma" />, <SiAdobexd key="xd" />, <SiAdobephotoshop key="photoshop" />],
      },
    ],
  },
  {
    title: 'Experience',
    info: [
      { title: 'Frontend Developer & Laravel Developer', stage: '2023 - 2024' },
      { title: 'Mengembangkan aplikasi web responsif dan interaktif menggunakan HTML, CSS, JavaScript, React, dan Vue.js', stage: '2023 - 2024' },
      { title: 'Membangun aplikasi backend dengan Laravel, mencakup autentikasi pengguna, integrasi API, dan manajemen database', stage: '2023 - 2024' },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left lg:max-w[48%] ">
      {/* Background Circles */}
      <ParticlesContainer />
      <motion.div variants={fadeIn('right', 0.2)} initial="hidden" animate="show" exit="hidden" className="hidden xl:flex absolute bottom-0 -left-[370px]">
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row lg:flex-rowgap-x-6 ">
        {/* Text Section */}
        <div className="flex-1 flex flex-col justify-center ">
          <motion.h2 variants={fadeIn('right', 0.2)} initial="hidden" animate="show" exit="hidden" className="h2">
            Skills <span className="text-kuning">End</span> Experience
          </motion.h2>

          {/* Counters */}
          <motion.div variants={fadeIn('right', 0.6)} initial="hidden" animate="show" exit="hidden" className="hidden md:flex md:max-w-xl xl:max-w-none lg:max-w-none mx-auto xl:mx-0 lg:mx-auto mb-8 ">
            <div className="flex flex-1 xl:gap-x-6">
              <div className="relative flex-1 after:w-[1px] after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl lg:text-4xl font-extrabold text-kuning mb-2">
                  <CountUp start={0} end={10} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Years of experience</div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl lg:text-4xl font-extrabold text-kuning mb-2">
                  <CountUp start={0} end={250} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Satisfied clients</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Info Section */}
        <motion.div variants={fadeIn('left', 0.4)} initial="hidden" animate="show" exit="hidden" className="flex flex-col w-full xl:max-w-[48%] lg:max-w-[30%] h-[400px] items-center">
          {/* Tabs */}
          <div className="flex  gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 lg:gap-x-8 lg:mx-0">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`${
                  index === itemIndex && 'text-kuning after:w-[100%] after:bg-kuning after:transition-all after:duration-300'
                } cursor-pointer capitalize xl:text-lg lg:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>

          {/* Info Content */}
          <div className="bg-pink-400/10 py-2 lg:px-4 lg:py-4 lg:w-[80%] xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 lg:gap-y-4 items-center">
            {aboutData[index].info.map((item, itemIndex) => (
              <div key={itemIndex} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-kuning/80">
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex"></div>
                {item.stage && <div>{item.stage}</div>}
                <div className="flex gap-x-4">
                  {item.icons?.map((icon, iconIndex) => (
                    <div key={iconIndex} className="text-2xl">
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
