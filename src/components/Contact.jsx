import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const initialFormState = {
  name: "",
  email: "",
  company: "",
  project: "",
  message: "",
};

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState(initialFormState);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: "error",
        message: "Email service is not configured yet. Please email me directly at sr6760.sr@gmail.com or use the contact links below.",
      });
      return;
    }

    setLoading(true);
    setStatus({ type: "", message: "" });

    emailjs
      .send(serviceId, templateId, {
        from_name: form.name,
        email: form.email,
        company: form.company || "Not provided",
        project: form.project || "Not provided",
        message: form.message,
        to_email: "sr6760.sr@gmail.com",
      }, {
        publicKey,
      })
      .then(() => {
        setStatus({
          type: "success",
          message: "Thanks for reaching out. Your message has been sent successfully.",
        });
        setForm(initialFormState);
        formRef.current?.reset();
      })
      .catch(() => {
        setStatus({
          type: "error",
          message: "Something went wrong while sending the message. Please email me directly at sr6760.sr@gmail.com.",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className='xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-slate-950/80 border border-slate-700 rounded-[28px] p-8 shadow-[0_18px_50px_rgba(15,23,42,0.45)]'
      >
        <p className={styles.sectionSubText}>Let&apos;s connect</p>
        <h3 className={styles.sectionHeadText}>Have an AI problem to solve?</h3>

        <p className='mt-5 max-w-xl text-slate-300 leading-7'>
          I&apos;m interested in building production-ready AI systems across LLM applications, Agentic AI, document intelligence, automation, computer vision, and enterprise data workflows.
        </p>

        <div className='mt-8 grid gap-4 text-white text-[16px]'>
          <div className='flex items-center gap-4'>
            <span className='text-[24px]'>📧</span>
            <a href='mailto:sr6760.sr@gmail.com' className='text-violet-200 hover:text-white transition'>sr6760.sr@gmail.com</a>
          </div>
          <div className='flex items-center gap-4'>
            <span className='text-[24px]'>🔗</span>
            <a href='https://www.linkedin.com/in/shubhamraj0/' target='_blank' rel='noreferrer' className='text-violet-200 hover:text-white transition'>linkedin.com/in/shubhamraj0</a>
          </div>
          <div className='flex items-center gap-4'>
            <span className='text-[24px]'>💻</span>
            <a href='https://github.com/shubham6760' target='_blank' rel='noreferrer' className='text-violet-200 hover:text-white transition'>github.com/shubham6760</a>
          </div>
          <div className='flex items-center gap-4'>
            <span className='text-[24px]'>📞</span>
            <a href='tel:+919661188989' className='text-violet-200 hover:text-white transition'>+91 9661188989</a>
          </div>
          <div className='flex items-center gap-4'>
            <span className='text-[24px]'>📍</span>
            <p className='text-slate-300'>Pune, Maharashtra 411011</p>
          </div>
        </div>

        <div className='mt-8 rounded-2xl border border-slate-700 bg-slate-900/60 p-5'>
          <div className='mb-4 text-lg font-semibold text-white'>Start a Conversation</div>
          <form ref={formRef} onSubmit={handleSubmit} className='grid gap-4'>
            <div className='grid gap-4 md:grid-cols-2'>
              <label className='grid gap-2 text-sm text-slate-300'>
                Name
                <input
                  type='text'
                  name='name'
                  value={form.name}
                  onChange={handleChange}
                  className='rounded-xl border border-slate-600 bg-slate-950 px-3 py-2.5 text-white outline-none focus:border-violet-400'
                  required
                />
              </label>
              <label className='grid gap-2 text-sm text-slate-300'>
                Email
                <input
                  type='email'
                  name='email'
                  value={form.email}
                  onChange={handleChange}
                  className='rounded-xl border border-slate-600 bg-slate-950 px-3 py-2.5 text-white outline-none focus:border-violet-400'
                  required
                />
              </label>
            </div>
            <label className='grid gap-2 text-sm text-slate-300'>
              Company (optional)
              <input
                type='text'
                name='company'
                value={form.company}
                onChange={handleChange}
                className='rounded-xl border border-slate-600 bg-slate-950 px-3 py-2.5 text-white outline-none focus:border-violet-400'
              />
            </label>
            <label className='grid gap-2 text-sm text-slate-300'>
              What are you looking to build?
              <input
                type='text'
                name='project'
                value={form.project}
                onChange={handleChange}
                className='rounded-xl border border-slate-600 bg-slate-950 px-3 py-2.5 text-white outline-none focus:border-violet-400'
              />
            </label>
            <label className='grid gap-2 text-sm text-slate-300'>
              Message
              <textarea
                name='message'
                rows='5'
                value={form.message}
                onChange={handleChange}
                className='rounded-xl border border-slate-600 bg-slate-950 px-3 py-2.5 text-white outline-none focus:border-violet-400'
                required
              />
            </label>

            {status.message && (
              <div className={`rounded-xl border px-3 py-2 text-sm ${status.type === "success" ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-200" : "border-red-500/40 bg-red-500/10 text-red-200"}`}>
                {status.message}
              </div>
            )}

            <button
              type='submit'
              disabled={loading}
              className='mt-2 inline-flex w-fit items-center justify-center rounded-full bg-violet-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-400 disabled:cursor-not-allowed disabled:opacity-70'
            >
              {loading ? "Sending..." : "Start a Conversation"}
            </button>
          </form>
        </div>
      </motion.div>

      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
