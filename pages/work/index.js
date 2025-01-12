import WorkSlider from '../../components/WorkSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      {/* <Circles /> */}
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row -gap-x-8 ">
          {/*text  */}
          <div className="text-center justify-center items-center flex lg:text-left flex-col xl:w-[30vw] mb-4 xl:mb-0">
            <h2 className="h2 xl:mt-12">
              My <span className="text-kuning"> Work</span>
            </h2>
          </div>
          {/* slider */}
          <motion.div variants={fadeIn('down', 0.6)} initial="hidden" animate="show" exit="hidden" className="w-full xl:w-[600px] xl:max-[65%] xl:pt-[100px]">
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      {/* <Bulb /> */}
    </div>
  );
};

export default Work;
