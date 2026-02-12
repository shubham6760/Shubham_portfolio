import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import profileImage from "../assets/profile-shubham.png";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    className='xs:w-[250px] w-full'
    tiltMaxAngleX={45}
    tiltMaxAngleY={45}
    scale={1}
    transitionSpeed={450}
    perspective={1000}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <div className='flex flex-col lg:flex-row gap-8 lg:gap-16 items-start'>
        {/* Profile Image */}
        <motion.div
          variants={fadeIn("right", "spring", 0.2, 0.75)}
          className='flex-shrink-0'
        >
          <div className='relative w-[280px] h-[280px] rounded-[20px] overflow-hidden shadow-lg green-pink-gradient p-[2px]'>
            <img
              src={profileImage}
              alt='Shubham Raj - AI Engineer'
              className='w-full h-full object-cover rounded-[18px]'
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <div className='flex-1'>
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>Overview.</h2>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
            Senior AI Engineer with deep expertise in AI, LLMOps, and NLP, specializing 
            in building scalable, intelligent systems. Skilled in deploying transformer 
            and vision-language models for document automation and healthcare applications. 
            Adept in LLM orchestration and MLOps, enhancing operational efficiency and 
            decision-making.

I bring a unique blend of engineering depth and AI-driven problem solving, enabling 
me to build intelligent, scalable systems that improve performance, reduce manual 
effort, and create measurable business impact. I have hands-on experience architecting 
end-to-end applications, deploying cloud-native solutions, and integrating machine 
learning models into production workflows.

Known for working fast, shipping clean and maintainable code, and solving complex 
technical challenges with clarity and ownership. I thrive in modern, fast-paced 
engineering environments where initiative, innovation, and execution matter. 
Committed to delivering impactful AI solutions that merge data science and engineering innovation.
          </motion.p>
        </div>
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
