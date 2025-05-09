import '../styles/globals.css';

// components
import Layout from '../components/Layout';
import Transition from '../components/Transition';
// router
import { useRouter } from 'next/router';

// frome motion
import { AnimatePresence, motion } from 'framer-motion';
import ParticlesContainer from '../components/ParticlesContainer';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <ParticlesContainer />
        <motion.div key={router.route} className="h-full">
          <Transition />

          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
