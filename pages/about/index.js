import React, { useState } from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaWordpress, FaFigma, FaLaravel } from 'react-icons/fa';

import { SiNextdotjs, SiFramer, SiAdobexd, SiAdobephotoshop, SiTailwindcss } from 'react-icons/si';

//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [<FaHtml5 />, <FaCss3 />, <SiTailwindcss />, <FaJs />, <FaReact />, <FaLaravel />, <SiNextdotjs />],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: 'pengalaman',
    info: [
      {
        title: 'Webby Awards - Honoree',
        stage: '2011 - 2012',
      },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: '2009 - 2010',
      },
    ],
  },
];

import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// counters
import CountUp from 'react-countup';

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left lg:max-w[48%] ">
      {/* <Circles /> */}
      <motion.div variants={fadeIn('right', 0.2)} initial="hidden" animate="show" exit="hidden" className="hidden xl:flex absolute bottom-0 -left-[370px]">
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row lg:flex-rowgap-x-6 ">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center ">
          <motion.h2 variants={fadeIn('right', 0.2)} initial="hidden" animate="show" exit="hidden" className="h2">
            Skills <span className="text-kuning">End</span> Experience{' '}
          </motion.h2>
          {/* <motion.p variants={fadeIn('right', 0.4)} initial="hidden" animate="show" exit="hidden" className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 lg:mx-0  lg:mb-12 lg:px-0 ">
            lorem
          </motion.p> */}
          {/* conters */}
          <motion.div variants={fadeIn('right', 0.6)} initial="hidden" animate="show" exit="hidden" className="hidden md:flex md:max-w-xl xl:max-w-none lg:max-w-none mx-auto xl:mx-0 lg:mx-auto mb-8 ">
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:bg-white/10 after:absolute after:top-0 after:right-0 ">
                <div className="text-2xl xl:text-4xl lg:text-4xl font-extrabold text-kuning  mb-2 ">
                  <CountUp start={0} end={10} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Years of experience</div>
              </div>
              {/* clienst */}
              <div className="relative flex-1 after:w-[1px] after:bg-white/10 after:absolute after:top-0 after:right-0 ">
                <div className="text-2xl xl:text-4xl lg:text-4xl font-extrabold text-kuning  mb-2 ">
                  <CountUp start={0} end={250} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">stastified clients</div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div variants={fadeIn('left', 0.4)} initial="hidden" animate="show" exit="hidden" className="flex flex-col w-full xl:max-w[48%] lg:max-w[30%] h-[400px] items-center">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 lg:gap-x-8 lg:mx-0">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex && 'text-kuning after:w-[100%] after:bg-kuning after:transition-all after:duration-300'
                  } cursor-pointer  capitalize xl:text-lg lg:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 `}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="bg-pink-400/10 py-2 lg:px-4 lg:py-4 lg:w-[50%] xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 lg:gap-y-4 items-center xl:items-center  lg:items-center   ">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div key={itemIndex} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2  items-center text-kuning/80 ">
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex"></div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/* icons */}
                    {item.icons?.map((icon, itemIndex) => {
                      return <div className="text-2xl ">{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;