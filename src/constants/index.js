import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  sql,
  css,
  aws,
  azure,
  gcp,
  tfs,
  reactjs,
  flask,
  python,
  net,
  spring,
  mongodb,
  git,
  tf,
  sl,
  ml,
  nlp,
  cv,
  da,
  docker,
  postgres,
  agents,
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "experience", title: "Experience" },
  { id: "projects", title: "Work" },
  { id: "skills", title: "Skills" },
  { id: "education", title: "Education" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "AI & LLM Applications", icon: web },
  { title: "Multi-Agent Systems", icon: mobile },
  { title: "Document AI & OCR", icon: backend },
  { title: "AI Automation", icon: creator },
  { title: "Computer Vision", icon: ml },
  { title: "MLOps & AI Infrastructure", icon: docker },
];

const metrics = [
  { value: "3+ Years", label: "AI & Data Experience" },
  { value: "47%", label: "Fraud Detection Accuracy Improvement" },
  { value: "90%+", label: "Manual Mapping Reduction" },
  { value: "70%", label: "Claim Processing Efficiency" },
  { value: "80%+", label: "Manual Video Review Reduction" },
  { value: "100K+", label: "OCR Samples Processed" },
  { value: "22%", label: "GPU Inference Cost Reduction" },
];

const skillGroups = [
  {
    title: "LLM & Agentic AI",
    skills: [
      "LLMs",
      "Generative AI",
      "Agentic AI",
      "AI Agents",
      "Multi-Agent Systems",
      "LangGraph",
      "LangChain",
      "RAG",
      "Embeddings",
      "Vector Databases",
      "Semantic Search",
      "Prompt Engineering",
      "LLM Evaluation",
      "Tool Calling",
      "LLM Orchestration",
    ],
  },
  {
    title: "Document AI",
    skills: [
      "Document AI",
      "OCR",
      "PDF Processing",
      "Vision-Language Models",
      "Handwriting Recognition",
      "Document Extraction",
      "EDI",
      "FHIR",
      "EHR",
      "Data Modeling",
    ],
  },
  {
    title: "Machine Learning & Computer Vision",
    skills: [
      "Computer Vision",
      "NLP",
      "Anomaly Detection",
      "Predictive Modeling",
      "Fine-Tuning",
      "LoRA",
      "QLoRA",
      "PEFT",
      "FTRL",
      "RLHF",
    ],
  },
  {
    title: "Engineering & MLOps",
    skills: [
      "Python",
      "Docker",
      "Azure",
      "Azure OpenAI",
      "MLflow",
      "CI/CD",
      "Git",
      "MS SQL",
      "PostgreSQL",
      "Power BI",
    ],
  },
];

const selectedWork = [
  {
    name: "Multimodal Document Intelligence",
    summary:
      "Built document intelligence pipelines to extract and structure information from EDI, XML, JSON, scanned PDFs, and handwritten forms for healthcare and insurance workflows.",
    tags: ["OCR", "LLMs", "Document AI", "RAG"],
    outcome: "40% reduction in manual data-entry errors",
    source_code_link: "",
  },
  {
    name: "Healthcare Claims AI",
    summary:
      "Built AI workflows for claim extraction, similarity analysis, fraud detection, policy validation, and appeal automation across healthcare insurance processes.",
    tags: ["NLP", "Fraud Detection", "Automation", "Claims AI"],
    outcome: "47% improvement in fraud detection accuracy",
    source_code_link: "",
  },
  {
    name: "Multi-Agent RAG",
    summary:
      "Developed LangGraph-based multi-agent workflows for document classification, routing, retrieval, reasoning, summarization, and validation.",
    tags: ["LangGraph", "LangChain", "RAG", "AI Agents", "Multi-Agent Systems"],
    outcome: "90%+ reduction in manual mapping",
    source_code_link: "",
  },
  {
    name: "Appeal Automation",
    summary:
      "Developed an AI-driven email and claims processing workflow that classifies appeal requests, extracts claim information, and automates downstream processing.",
    tags: ["Kafka", "LLMs", "AI Agents", "Workflow Automation"],
    outcome: "Reduced processing time from 2 days to under 3 hours",
    source_code_link: "",
  },
  {
    name: "Computer Vision Intelligence",
    summary:
      "Built a computer vision pipeline for long-form surveillance video analysis, incident detection, timestamp extraction, and automated report generation.",
    tags: ["Computer Vision", "Video AI", "Automation", "Analytics"],
    outcome: "80%+ reduction in manual video review",
    source_code_link: "",
  },
  {
    name: "AI Model Evaluation",
    summary:
      "Developed evaluation workflows for OCR and LLM systems using metrics such as WER, CER, F1, BERTScore, faithfulness, coverage, and precision.",
    tags: ["OCR Evaluation", "LLM Evaluation", "LLMOps", "Metrics"],
    outcome: "19% improvement in handwriting recognition accuracy",
    source_code_link: "",
  },
];

const experiences = [
  {
    title: "Senior AI Engineer",
    company_name: "Trulogik — Hyderabad (Remote)",
    location: "Hyderabad, Remote",
    icon: "TL",
    iconBg: "#7c3aed",
    date: "Jun 2024 – Present",
    type: "Current Role",
    points: [
      "Led design and deployment of a multimodal data extraction agent for EDI, XML, JSON, scanned PDFs, and handwritten forms.",
      "Built an LLM-powered appeal automation pipeline using Qwen2-1.5B-Instruct and Kafka to classify appeals, extract claim data, and validate policy rules.",
      "Developed FHIR-aligned EHR and EDI automation pipelines for 837/835 and CMS1500/UB-05 document workflows.",
      "Created claim similarity and fraud scoring systems using vector embeddings, cosine distance, and temporal patterns.",
      "Evaluated six vision-language OCR models and fine-tuned models with LoRA adapters across 100K+ annotated samples.",
      "Architected a multi-agent RAG framework using LangGraph, FAISS, ChromaDB, Docker, and GPU-based workflows.",
      "Built a computer vision pipeline for surveillance incident detection and AI-generated reporting from 6+ hours of footage.",
      "Established MLflow-based model registry, pipeline automation, live drift detection telemetry, and CI/CD improvements for AI infrastructure.",
    ],
  },
  {
    title: "Data Scientist (Advanced Data Analyst)",
    company_name: "Hyster-Yale Group",
    location: "Pune / Remote",
    icon: "HY",
    iconBg: "#0f766e",
    date: "Jul 2023 – Jun 2024",
    type: "Analytics",
    points: [
      "Built customer churn prediction models and decision-support dashboards for business stakeholders.",
      "Applied NLP for warranty claim processing and automated text-driven triage workflows.",
      "Created Power BI dashboards and Azure SQL-integrated chatbot experiences for operational analysis.",
      "Developed predictive maintenance models focused on minimizing downtime and supporting field service decisions.",
    ],
  },
  {
    title: "Data Science Intern",
    company_name: "iNeuron.ai",
    location: "Remote",
    icon: "IN",
    iconBg: "#1d4ed8",
    date: "Nov 2022 – Jul 2023",
    type: "Internship",
    points: [
      "Built a GPT-based text summarization application using OpenAI models and Streamlit for concise report extraction from Excel data.",
      "Developed a document question-answering system using OpenAI NLP APIs and Streamlit to query uploaded documents effortlessly.",
    ],
  },
];

const education = [
  {
    degree: "Master of Technology (M.Tech)",
    field: "Artificial Intelligence",
    institution: "Symbiosis Institute of Technology (SIT)",
    date: "Jun 2024",
  },
  {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Information Technology",
    institution: "Symbiosis Institute of Technology (SIT)",
    date: "Jan 2022",
  },
];

const certifications = [
  { name: "The Full Stack — Meta", issuer: "Meta", date: "Nov 2023" },
  { name: "SQL for Data Science", issuer: "UC Davis, Coursera", date: "Jan 2023" },
];

const technologies = [
  { name: "Large Language Models", icon: ml },
  { name: "Vision-Language Models", icon: cv },
  { name: "Retrieval Augmented Generation", icon: da },
  { name: "NLP & Text Processing", icon: nlp },
  { name: "Fine-tuning & LoRA", icon: tf },
  { name: "Vector Embeddings", icon: sl },
  { name: "LangChain", icon: reactjs },
  { name: "LangGraph", icon: flask },
  { name: "OpenAI", icon: net },
  { name: "Python", icon: python },
  { name: "SQL", icon: sql },
  { name: "Azure", icon: azure },
  { name: "Docker", icon: docker },
  { name: "Git", icon: git },
  { name: "PostgreSQL", icon: postgres },
  { name: "MongoDB", icon: mongodb },
  { name: "CI/CD", icon: aws },
  { name: "MLflow", icon: gcp },
  { name: "Power BI", icon: tfs },
  { name: "AI Safety", icon: css },
  { name: "Computer Vision", icon: cv },
  { name: "Prompt Engineering", icon: html },
  { name: "Document AI", icon: javascript },
  { name: "Model Evaluation", icon: agents },
];

const frameworks = [];
const languages = [];
const cloudcomputing = [];
const databases = [];

const testimonials = [];

const projects = selectedWork;
const projects2 = [];

const socialLinks = {
  linkedin: "https://www.linkedin.com/in/shubhamraj0/",
  github: "https://github.com/shubham6760",
  email: "mailto:sr6760.sr@gmail.com",
  phone: "tel:+919661188989",
};

export {
  services,
  metrics,
  skillGroups,
  selectedWork,
  experiences,
  education,
  certifications,
  technologies,
  testimonials,
  projects,
  projects2,
  frameworks,
  languages,
  cloudcomputing,
  databases,
  socialLinks,
};
