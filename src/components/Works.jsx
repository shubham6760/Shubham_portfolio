import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects, certifications } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, summary, tags, outcome, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.08, 0.7)}>
      <Tilt
        className='bg-slate-900/70 p-5 rounded-3xl w-full border border-slate-700 shadow-[0_18px_48px_rgba(15,23,42,0.55)]'
        tiltMaxAngleX={12}
        tiltMaxAngleY={12}
        scale={1.01}
        transitionSpeed={450}
        perspective={1000}
        glareEnable={false}
      >
        <div className='flex h-full flex-col'>
          <div className='flex items-center justify-between gap-3'>
            <h3 className='text-white font-bold text-[22px] leading-7'>{name}</h3>
            {source_code_link ? (
              <a href={source_code_link} target='_blank' rel='noreferrer' className='text-violet-300 text-xs uppercase tracking-[0.16em]'>Case Study</a>
            ) : (
              <span className='text-slate-400 text-xs uppercase tracking-[0.16em]'>Professional Project</span>
            )}
          </div>

          <p className='mt-4 text-slate-300 text-[15px] leading-7'>{summary}</p>

          <div className='mt-5 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <span key={`${name}-${tag}`} className='rounded-full border border-slate-600 bg-slate-800/80 px-2.5 py-1 text-[12px] text-violet-100'>
                {tag}
              </span>
            ))}
          </div>

          <div className='mt-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200'>
            {outcome}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Selected AI work</p>
        <h2 className={`${styles.sectionHeadText}`}>Selected AI engineering work.</h2>
        <p className='mt-4 max-w-3xl text-slate-300 text-[17px] leading-8'>
          I build and deploy AI systems that reduce manual work, improve decision quality, and scale complex operational workflows with a focus on reliability and production use.
        </p>
      </motion.div>

      <div className='mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

      <div className='mt-24'>
        <h2 className={`${styles.sectionHeadText} text-center`}>Certifications</h2>
        <div className='mt-10 flex flex-wrap justify-center gap-4'>
          {certifications.map((cert) => (
            <div key={cert.name} className='rounded-2xl border border-slate-700 bg-slate-900/60 px-6 py-4 text-center min-w-[240px]'>
              <div className='text-white font-semibold'>{cert.name}</div>
              <div className='mt-2 text-sm text-slate-400'>{cert.issuer}</div>
              <div className='mt-1 text-xs uppercase tracking-[0.14em] text-violet-200'>{cert.date}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
