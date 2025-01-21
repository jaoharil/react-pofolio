import ServiceSlider from '../../components/ServiceSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import HTMLFlipBook from 'react-pageflip';
import Page from '../../components/Page';
import Cover from '../../components/cover';
import FirstPage from '../FirstPage';
import PageTwo from '../PageTwo';
import PageThree from '../PageThree';
import PageFour from '../PageFour';
import PageFive from '../PageFive';
import PageSix from '../PageSix';

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      {/* <Circles /> */}
      <div className="container mx-auto ">
        <div className="flex flex-col xl:flex-row gap-x-6 ">
          {/*text  */}
          <div>
            <h2 className="h2 xl:mt-8">
              My<span className="text-kuning"> Certificate</span>
            </h2>
            <p className="hidden lg:block xl:block mb-4 max-w-[400px] text-white ">
              These certificates reflect my accomplishments in learning programming. They validate my skills in specific languages or technologies and demonstrate my ability to develop effective solutions. Each certification marks a key
              milestone in my growth as a programmer.{' '}
            </p>
            {/* <p>Through these certifications, I continually strengthen my expertise as a capable programmer, staying updated with the latest trends and advancements in the tech industry.</p> */}
          </div>
          {/* slider */}
          <HTMLFlipBook width={350} height={400} showCover="true" className="pt-5">
            <Page number={1}>
              <Cover></Cover>
            </Page>
            <Page number={2}>
              <FirstPage />
            </Page>
            <Page number={7}>
              <PageSix />
            </Page>
            <Page number={3}>
              <PageTwo />
            </Page>
            <Page number={4}>
              <PageThree />
            </Page>
            <Page number={5}>
              <PageFour />
            </Page>
            <Page number={6}>
              <PageFive />
            </Page>
            {/* <Page number={7}>
              <PageSix />
            </Page> */}
          </HTMLFlipBook>
        </div>
      </div>
      {/* <Bulb /> */}
    </div>
  );
};

export default Services;
