import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import profileImage from "../assets/profile-shubham.png";

const Hero = () => {
  return (
    <section className='relative w-full min-h-screen mx-auto pt-28 pb-16'>
      <div className={`max-w-7xl mx-auto ${styles.paddingX} relative z-10`}>
        <div className='flex flex-col lg:flex-row gap-10 lg:gap-16 items-center lg:items-center'>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='flex-shrink-0'
          >
            <div className='w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] rounded-[28px] overflow-hidden shadow-2xl border border-violet-500/40 bg-slate-900/60 p-[2px]'>
              <img
                src={profileImage}
                alt='Shubham Raj profile'
                className='w-full h-full object-cover rounded-[26px]'
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className='max-w-3xl'
          >
            <div className='inline-flex items-center gap-3 rounded-full border border-violet-500/50 bg-violet-500/10 px-4 py-2 text-xs font-medium tracking-[0.2em] uppercase text-violet-200'>
              <span className='w-2 h-2 rounded-full bg-violet-400' />
              Senior AI Engineer
            </div>

            <h1 className={`${styles.heroHeadText} mt-6`}>
              Shubham Raj
            </h1>
            <p className={`${styles.heroSubText} mt-3 text-slate-200`}>
              Building AI systems that turn complex data into reliable, scalable workflows.
            </p>
            <p className='mt-5 max-w-2xl text-base sm:text-lg text-slate-300 leading-8'>
              Senior AI Engineer specializing in LLM applications, Agentic AI, RAG, multi-agent systems, Document AI, NLP, Computer Vision, and MLOps for healthcare and enterprise automation.
            </p>

            <div className='mt-8 flex flex-wrap items-center gap-4'>
              <a
                href='#contact'
                className='inline-flex items-center justify-center rounded-full bg-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition hover:bg-violet-400'
              >
                Let&apos;s Work Together
              </a>
              <a
                href='#projects'
                className='inline-flex items-center justify-center rounded-full border border-slate-600 bg-slate-900/40 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-violet-400 hover:text-white'
              >
                View My Work
              </a>
              <a
                href='https://drive.google.com/file/d/1y_LovCodldjRRohQ0ThA9VSxkKMUWyIg/view?usp=drive_link'
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center justify-center rounded-full border border-slate-600 bg-transparent px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-green-400 hover:text-green-300'
              >
                Download Resume
              </a>
            </div>

            <div className='mt-8 flex items-center gap-5 text-sm text-slate-300'>
              <a href='https://github.com/shubham6760' target='_blank' rel='noreferrer' className='inline-flex items-center gap-2 rounded-full border border-slate-700 px-3 py-2 hover:text-white hover:border-violet-400'>
                GitHub
              </a>
              <a href='https://www.linkedin.com/in/shubhamraj0/' target='_blank' rel='noreferrer' className='inline-flex items-center gap-2 rounded-full border border-slate-700 px-3 py-2 hover:text-white hover:border-violet-400'>
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-20 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-slate-500/80 flex justify-center items-start p-2'>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
              className='w-3 h-3 rounded-full bg-violet-400 mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
