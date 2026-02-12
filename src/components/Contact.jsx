import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className='mt-8 flex flex-col gap-6 text-white text-[18px]'>
<div className="flex items-center gap-4">
            <span className="text-[24px]">📄</span>
            <a 
              href="https://drive.google.com/file/d/1EPFuArZ1AQzdiFxXIn9uU0RRLl36E2Sc/view?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#915EFF] transition"
            >
              View Resume.pdf
            </a>
          </div>
          {/* GitHub */}
          <div className="flex items-center gap-4">
<svg 
  xmlns="http://www.w3.org/2000/svg" 
  width="28" 
  height="28" 
  viewBox="0 0 24 24" 
  fill="white"
>
  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 
   3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 
   0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61 
   -.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.084-.729.084-.729 
   1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.809 1.305 
   3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 
   0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 
   0 0 1.005-.322 3.3 1.23a11.52 11.52 0 0 1 3.003-.404 
   c1.02.005 2.045.138 3.003.404 2.28-1.552 3.285-1.23 
   3.285-1.23 .645 1.653.24 2.873.12 3.176.765.84 
   1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 
   5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 
   3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 
   24 12.297c0-6.627-5.373-12-12-12"/>
</svg>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#915EFF] transition"
            >
              github.com
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center gap-4">
            <span className="text-[24px]">🔗</span>
            <a 
              href="https://www.linkedin.com/in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#915EFF] transition"
            >
              linkedin.com/in/shubham-raj
            </a>
          </div>

          {/* Gmail */}
          <div className="flex items-center gap-4">
            <span className="text-[24px]">📧</span>
            <a 
              href="mailto:sr6760.sr@gmail.com"
              className="hover:text-[#915EFF] transition"
            >
              sr6760.sr@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4">
            <span className="text-[24px]">📞</span>
            <a 
              href="tel: +919661188989"
              className="hover:text-[#915EFF] transition"
            >
              +91 9661188989
            </a>
          </div>

          {/* Address */}
          <div className="flex items-center gap-4">
            <span className="text-[24px]">📍</span>
            <p>
              Pune, MH 411011, India
            </p>
          </div>

        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
