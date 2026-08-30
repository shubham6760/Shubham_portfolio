import React from "react";

const Footer = () => {
  return (
    <footer className='border-t border-slate-800 bg-slate-950/90 mt-20'>
      <div className='max-w-7xl mx-auto px-6 py-10 sm:px-16'>
        <div className='flex flex-col gap-8 md:flex-row md:items-end md:justify-between'>
          <div>
            <div className='text-2xl font-bold text-white'>Shubham Raj</div>
            <p className='mt-2 text-slate-300'>Senior AI Engineer — LLMOps, NLP & Computer Vision</p>
            <p className='mt-1 text-slate-400'>Pune, Maharashtra</p>
          </div>

          <div className='flex flex-wrap gap-4 text-sm text-slate-300'>
            <a href='https://www.linkedin.com/in/shubhamraj0/' target='_blank' rel='noreferrer' className='hover:text-violet-300'>LinkedIn</a>
            <a href='https://github.com/shubham6760' target='_blank' rel='noreferrer' className='hover:text-violet-300'>GitHub</a>
            <a href='mailto:sr6760.sr@gmail.com' className='hover:text-violet-300'>Email</a>
          </div>
        </div>

        <div className='mt-8 border-t border-slate-800 pt-6 text-sm text-slate-500'>
          © 2026 Shubham Raj. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
