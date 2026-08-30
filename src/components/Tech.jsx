import React from "react";

import { SectionWrapper } from "../hoc";
import { skillGroups } from "../constants";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <p className={`${styles.sectionSubText} text-center`}>Capabilities</p>
      <h2 className={`${styles.sectionHeadText} text-center`}>Technical expertise.</h2>

      <div className='mt-12 grid gap-6 lg:grid-cols-2'>
        {skillGroups.map((group) => (
          <div key={group.title} className='rounded-3xl border border-slate-700 bg-slate-900/60 p-6 shadow-[0_16px_40px_rgba(15,23,42,0.45)]'>
            <h3 className='text-xl font-semibold text-white mb-5'>{group.title}</h3>
            <div className='flex flex-wrap gap-2.5'>
              {group.skills.map((skill) => (
                <span
                  key={`${group.title}-${skill}`}
                  className='rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1.5 text-sm text-violet-100'
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
