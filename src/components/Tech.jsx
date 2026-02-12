import React from "react";

import { SectionWrapper } from "../hoc";
import { databases, technologies } from "../constants";
import { frameworks } from "../constants";
import { languages } from "../constants";
import { cloudcomputing } from "../constants";

import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <h2 className={`${styles.sectionHeadText} text-center`}>
        Skills
      </h2>

      <br />

      <div>
        {/* Framework */}
        <h2 className={`${styles.sectionSubText} text-center`}>
          Framework
        </h2>
        <div className="flex flex-row flex-wrap justify-center gap-10">
          {frameworks.map((technology) => (
            <div className="w-28 h-28 flex items-center justify-center" key={technology.name}>
              <img 
                src={technology.icon} 
                alt={technology.name} 
                className="w-20 h-20 object-contain"
              />
            </div>
          ))}
        </div>

        <br />

        {/* Languages */}
        <h2 className={`${styles.sectionSubText} text-center`}>
          Languages
        </h2>
        <div className="flex flex-row flex-wrap justify-center gap-10">
          {languages.map((technology) => (
            <div className="w-28 h-28 flex items-center justify-center" key={technology.name}>
              <img 
                src={technology.icon} 
                alt={technology.name} 
                className="w-20 h-20 object-contain"
              />
            </div>
          ))}
        </div>

        <br />

        {/* Databases */}
        <h2 className={`${styles.sectionSubText} text-center`}>
          Databases
        </h2>
        <div className="flex flex-row flex-wrap justify-center gap-10">
          {databases.map((technology) => (
            <div className="w-28 h-28 flex items-center justify-center" key={technology.name}>
              <img 
                src={technology.icon} 
                alt={technology.name} 
                className="w-20 h-20 object-contain"
              />
            </div>
          ))}
        </div>

        <br />

        {/* Cloud Computing */}
        <h2 className={`${styles.sectionSubText} text-center`}>
          Cloud Computing
        </h2>
        <div className="flex flex-row flex-wrap justify-center gap-10">
          {cloudcomputing.map((technology) => (
            <div className="w-28 h-28 flex items-center justify-center" key={technology.name}>
              <img 
                src={technology.icon} 
                alt={technology.name} 
                className="w-20 h-20 object-contain"
              />
            </div>
          ))}
        </div>
        <br />

        {/* AIML  */}
        <h2 className={`${styles.sectionSubText} text-center`}>
         AI / ML  
        </h2>
        <div className="flex flex-row flex-wrap justify-center gap-10">
          {technologies.map((technology) => (
            <div className="w-28 h-28 flex items-center justify-center" key={technology.name}>
              <img 
                src={technology.icon} 
                alt={technology.name} 
                className="w-20 h-20 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skill");
