import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services, metrics } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import profileImage from "../assets/profile-shubham.png";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    className='xs:w-[250px] w-full'
    tiltMaxAngleX={18}
    tiltMaxAngleY={18}
    scale={1.02}
    transitionSpeed={450}
    perspective={1000}
  >
    <motion.div
      variants={fadeIn("up", "spring", index * 0.08, 0.7)}
      className='w-full rounded-[24px] border border-slate-700/80 bg-slate-900/70 p-[1px] shadow-[0_20px_60px_rgba(76,29,149,0.15)]'
    >
      <div className='bg-slate-950/90 rounded-[23px] py-6 px-5 min-h-[220px] flex flex-col justify-center items-center text-center'>
        <img src={icon} alt={title} className='w-14 h-14 object-contain mb-5 opacity-90' />
        <h3 className='text-white text-[20px] font-semibold leading-7'>{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <div className='flex flex-col lg:flex-row gap-8 lg:gap-16 items-start'>
        <motion.div variants={fadeIn("right", "spring", 0.2, 0.75)} className='flex-shrink-0'>
          <div className='relative w-[260px] h-[260px] sm:w-[280px] sm:h-[280px] rounded-[24px] overflow-hidden shadow-[0_24px_80px_rgba(76,29,149,0.28)] border border-violet-500/40 bg-slate-900 p-[2px]'>
            <img
              src={profileImage}
              alt='Shubham Raj - Senior AI Engineer'
              className='w-full h-full object-cover rounded-[22px]'
            />
          </div>
        </motion.div>

        <div className='flex-1'>
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>About</p>
            <h2 className={styles.sectionHeadText}>Building AI systems for real-world applications.</h2>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-6 text-slate-300 text-[17px] max-w-3xl leading-[30px]'
          >
            Senior AI Engineer with 3+ years of experience across AI, machine learning, LLM applications, NLP, and computer vision. My work focuses on building reliable AI systems that turn complex operational data into scalable workflows.
          </motion.p>

          <motion.p
            variants={fadeIn("", "", 0.12, 1)}
            className='mt-4 text-slate-300 text-[17px] max-w-3xl leading-[30px]'
          >
            I work across Agentic AI, AI agents, RAG, multi-agent systems, document intelligence, OCR, computer vision, LLM evaluation, and MLOps. My background includes healthcare AI, claims automation, enterprise document processing, and production deployment for workflows that require accuracy, traceability, and operational reliability.
          </motion.p>

          <motion.div variants={fadeIn("", "", 0.16, 1)} className='mt-8'>
            <div className='text-xs font-semibold uppercase tracking-[0.2em] text-slate-400'>Core focus</div>
            <div className='mt-4 flex flex-wrap gap-2'>
              {['LLM Applications', 'Agentic AI', 'AI Agents', 'RAG', 'Multi-Agent Systems', 'Document AI', 'NLP', 'Computer Vision', 'LLMOps', 'MLOps', 'Automation'].map((item) => (
                <span key={item} className='rounded-full border border-violet-500/40 bg-violet-500/10 px-3 py-1.5 text-sm text-violet-100'>
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className='mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      <div className='mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
        {metrics.map((metric, index) => (
          <div key={metric.label} className='rounded-2xl border border-slate-700 bg-slate-900/60 p-5 text-left'>
            <div className='text-3xl font-black text-violet-300'>{metric.value}</div>
            <div className='mt-2 text-sm text-slate-300'>{metric.label}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
