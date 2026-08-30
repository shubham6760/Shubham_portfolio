import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { ineuronLogo } from "../assets";

const ExperienceCard = ({ experience }) => {
  const isIneuron = experience.company_name.includes("iNeuron.ai");

  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#111827", color: "#fff", border: "1px solid rgba(168,85,247,0.30)" }}
      contentArrowStyle={{ borderRight: "7px solid #111827" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg, color: "#fff", fontWeight: 700 }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          {isIneuron ? (
            <img src={ineuronLogo} alt='iNeuron.ai logo' className='w-[72%] h-[72%] object-contain rounded-full bg-white/90 p-1' />
          ) : (
            <div className='text-sm font-bold'>{experience.icon}</div>
          )}
        </div>
      }
    >
      <div>
        <div className='flex items-center justify-between gap-3 flex-wrap'>
          <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
          <span className='rounded-full border border-violet-400/40 bg-violet-500/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-violet-200'>
            {experience.type}
          </span>
        </div>
        <p className='text-violet-200 text-[16px] font-semibold mt-2' style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`} className='text-slate-200 text-[14px] leading-6 pl-1'>
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <p className={`${styles.sectionSubText} text-center`}>Experience</p>
      <h2 className={`${styles.sectionHeadText} text-center`}>AI engineering experience.</h2>

      <div className='mt-16 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
