import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { links } from "../assets";

import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { projects2 } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
        tiltMaxAngleX={45}
        tiltMaxAngleY={45}
        scale={1}
        transitionSpeed={450}
        perspective={1000}
        glareEnable={false}
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={links}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
    
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
            <div className="mt-20 flex flex-wrap gap-7">
        {projects2.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      <br/><br/><br/><br/>
            <h2 className={`${styles.sectionHeadText} text-center`}>
        Certifications
      </h2>
      <br /><br/><br/>

      <div className="flex flex-wrap justify-center gap-6 text-white text-[16px] items-center">
        {/* AZURE */}
        <a
          href="https://www.credly.com/badges/dab1b268-470f-4b1e-80a8-b99d1b2a1cc5/linked_in_profile"
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center bg-[#151030] px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 hover:bg-[#1f1843] w-[300px] text-center"
        >
          <div className="flex items-center justify-center mb-1">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original-wordmark.svg"
              alt="Azure Logo"
              className="w-9 h-9 mr-3 brightness-[350%] invert-[90%]"
            />
            <span>Microsoft Azure Fundamentals (AZ-900)</span>
          </div>
          <p className="text-[13px] text-gray-400">Cert ID: I307 - 1829</p>
        </a>

        {/* GCP */}
        <a
          href="https://drive.google.com/file/d/1YU_Xj_dnnAdd5NETR7_pDkED2YNHxw0m/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center bg-[#151030] px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 hover:bg-[#1f1843] w-[300px] text-center"
        >
          <div className="flex items-center justify-center mb-1">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg"
              alt="GCP Logo"
              className="w-9 h-9 mr-3 brightness-[350%] invert-[90%]"
            />
            <span>Google Cloud Certified Associate Cloud Engineer</span>
          </div>
          <p className="text-[13px] text-gray-400">Cert ID: |fEK0g</p>
        </a>

       
      
      </div>
    </>
  );
};

export default SectionWrapper(Works, "project");
