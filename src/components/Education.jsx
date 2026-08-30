import React from "react";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { education } from "../constants";
import { sitLogo } from "../assets";

const Education = () => {
  return (
    <>
      <p className={`${styles.sectionSubText} text-center`}>Education</p>
      <h2 className={`${styles.sectionHeadText} text-center`}>Education</h2>

      <div className='mt-12 grid gap-6 lg:grid-cols-2'>
        {education.map((item) => (
          <div key={item.degree} className='rounded-3xl border border-slate-700 bg-slate-900/60 p-4 sm:p-6 shadow-[0_18px_45px_rgba(15,23,42,0.45)]'>
            <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
              <div className='flex items-center gap-3 sm:gap-4'>
                <img src={sitLogo} alt='Symbiosis Institute of Technology logo' className='h-20 w-auto max-w-[150px] rounded-xl bg-black object-contain sm:h-24 sm:max-w-[180px]' />
                <div className='min-w-0'>
                  <div className='text-[10px] uppercase tracking-[0.18em] text-violet-200 sm:text-[11px]'>Institution</div>
                  <div className='text-xs text-slate-300 sm:text-sm'>Symbiosis Institute of Technology (SIT)</div>
                </div>
              </div>
              <div className='text-xs font-semibold text-slate-200 sm:text-sm'>{item.date}</div>
            </div>

            <div className='mt-6'>
              <div className='text-xl font-semibold text-white sm:text-2xl'>{item.degree}</div>
              <div className='mt-2 text-base text-violet-200 sm:text-lg'>{item.field}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
