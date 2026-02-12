import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  sql,
  css,
  aws,
  azure,
  gcp,
  tfs,
  reactjs,
  flask,
  cl,
  java,
  python,
  net,
  spring,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  tf,
  sl,
  pandas,
  ml,
  nlp,
  cv,
  da,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  ocr,
  postgres,
  agents,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Education & Work",
  },

  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "LLM Engineering",
    icon: web,
  },
  {
    title: "ML Operations",
    icon: mobile,
  },
  {
    title: "Document AI / OCR",
    icon: backend,
  },
  {
    title: "AI Research",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Large Language Models",
    icon: ml,
  },
  {
    name: "Vision-Language Models",
    icon: cv,
  },
  {
    name: "Retrieval Augmented Generation",
    icon: da,
  },
  {
    name: "NLP & Text Processing",
    icon: nlp,
  },
  {
    name: "Fine-tuning & LoRA",
    icon: tf,
  },
  {
    name: "Vector Embeddings",
    icon: sl,
  },
];

const frameworks = [
  {
    name: "LangChain",
    icon: reactjs,
  },
  {
    name: "LangGraph",
    icon: flask,
  },
  {
    name: "AutoGen",
    icon: net,
  },
  {
    name: "FastAPI",
    icon: spring,
  },
  {
    name: "PyTorch",
    icon: reactjs,
  },
  {
    name: "React JS",
    icon: flask,
  },
];

const languages = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Python (Advanced)",
    icon: javascript,
  },
  {
    name: "SQL",
    icon: sql,
  },
];

const cloudcomputing = [
  {
    name: "Azure",
    icon: azure,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Kubernetes",
    icon: tfs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "GCP",
    icon: gcp,
  },
];

const databases = [
  {
    name: "PostgreSQL",
    icon: postgres,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Vector DBs",
    icon: sql,
  },
];
const experiences = [
  {
    title: "Senior AI Engineer",
    company_name: "Trulogik • Hyderabad (Remote)",
    icon: starbucks,
    iconBg: "#383E56",
    date: "06/2024 - Current",
    points: [
      "Multimodal Data Extraction Agent: Led design and deployment of production-grade AI agent for extracting structured data from complex unstructured sources including EDI, XML, JSON, PDFs, and handwritten forms.",
      "Fine-tuned transformer-based OCR models (OlmOCR-2, DeepSeek-OCR, Qwen2-VL) achieving 40% reduction in manual data-entry errors.",
      "Appeal Agent Automation: Designed LLM-powered system classifying appeal emails and triggering decision workflows, reducing handling time from 2 days to under 3 hours.",
      "EHR & EDI Automation: Developed FHIR-aligned ingestion pipeline processing EDI 837/835, eliminating 90% of manual data mapping.",
      "Claim Similarity & Modification Scoring: Built ML-based scoring systems using vector embeddings, improving fraud detection accuracy by 47%.",
      "OCR Model Research & Fine-Tuning: Led evaluation of multiple OCR models with LoRA fine-tuning on 100K+ samples, achieving +19% accuracy improvement.",
      "Multi-Agent RAG Framework: Architected LangGraph-based system for document classification, routing, and summarization.",
      "AI Infrastructure & MLOps: Established model registry, experiment tracking, reducing GPU cost by 22% and improving efficiency by 70%.",
    ],
  },
  {
    title: "Data Scientist (Advance Data Analyst)",
    company_name: "Hyster-Yale Group",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "07/2023 - 06/2024",
    points: [
      "Implemented Customer Churn prediction model, reducing customer churn by 26%.",
      "Automated warranty claim processing with NLP, reducing fault risk by 53%.",
      "Developed predictive models for fleet maintenance, reducing downtime by 65%.",
      "Orchestrated Azure chatbot deployment with SQL database integration.",
      "Created interactive Power BI dashboards for data-driven decision-making.",
    ],
  },
  {
    title: "Data Science Intern",
    company_name: "iNeuron.ai",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "11/2022 - 07/2023",
    points: [
      "Developed Text Summarization and Document Q&A systems using OpenAI and Streamlit.",
      "Implemented NLP pipelines for document processing and analysis.",
      "Collaborated with senior engineers on AI model deployment and optimization.",
    ],
  },
  {
    title: "Master of Technology (M.Tech): Artificial Intelligence",
    company_name: "SIT - Symbiosis Institute of Technology",
    icon: shopify,
    iconBg: "#383E56",
    date: "06/2024",
    points: [
      "Conducted research on Vision-Language Models and their applications in document understanding.",
      "Explored fine-tuning strategies for transformer models on domain-specific datasets.",
      "Developed OCR and document extraction systems using state-of-the-art deep learning techniques.",
      "Published research on LLM applications in healthcare and enterprise automation.",
    ],
  },
  {
    title: "Bachelor of Technology (B.Tech): Information Technology",
    company_name: "SIT - Symbiosis Institute of Technology",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "01/2022",
    points: [
      "Specialized in AI, Machine Learning, Natural Language Processing, and Computer Vision.",
      "Completed coursework in Deep Learning, Statistical Modeling, and Advanced AI algorithms.",
      "Participated in hackathons and AI competitions.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Shubham's AI solutions have transformed how we handle document processing. The accuracy and speed improvements are remarkable.",
    name: "Rajesh Kumar",
    designation: "VP Engineering",
    company: "Data Systems Inc",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    testimonial:
      "Working with Shubham on LLM integration was seamless. His deep understanding of production ML systems is exceptional.",
    name: "Priya Patel",
    designation: "CTO",
    company: "FinTech Solutions",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    testimonial:
      "Shubham delivered our multi-agent RAG system on time and it exceeded all our performance benchmarks. Highly recommended!",
    name: "Amir Hassan",
    designation: "CEO",
    company: "Enterprise AI Corp",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
];

const projects = [
  {
    name: "Intelligent Document Processing Agent",
    description: [
      "Production-grade AI agent for extracting structured data from complex unstructured sources including EDI, XML, JSON, PDFs, and handwritten forms.",
      "Fine-tuned transformer-based OCR models (OlmOCR-2, DeepSeek-OCR, Qwen2-VL) with distributed inference pipelines.",
      "Automated retraining and model versioning achieving 40% reduction in manual data-entry errors.",
      "Deployed with MLOps dashboards for drift detection and anomaly tracking.",
    ],
    tags: [
      { name: "OCR", color: "blue-text-gradient" },
      { name: "LLMs", color: "green-text-gradient" },
      { name: "Document AI", color: "pink-text-gradient" },
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    source_code_link: "https://github.com/shubham6760",
  },
  {
    name: "Intelligent Email Classification & Workflow System",
    description: [
      "LLM-powered system that classifies and processes emails, extracts relevant data, and validates business rules.",
      "Integrated advanced language models with Kafka-based event pipelines and CI/CD tracking.",
      "Reduced processing time from 2 days to under 3 hours with automated decision workflows.",
      "Triggers automated workflow actions for improved operational efficiency.",
    ],
    tags: [
      { name: "LLMs", color: "blue-text-gradient" },
      { name: "NLP", color: "green-text-gradient" },
      { name: "Automation", color: "pink-text-gradient" },
    ],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    source_code_link: "https://github.com/shubham6760",
  },
  {
    name: "Enterprise Data Pipeline & Validation System",
    description: [
      "Automated ingestion pipeline for processing complex business data formats and standards.",
      "Used advanced parsing with domain-specific fine-tuning for data extraction and schema validation.",
      "Eliminated over 90% of manual data mapping with automated validation systems.",
      "Implemented comprehensive monitoring dashboards for data quality and drift detection.",
    ],
    tags: [
      { name: "Pipeline", color: "blue-text-gradient" },
      { name: "Data Processing", color: "green-text-gradient" },
      { name: "Automation", color: "pink-text-gradient" },
    ],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=300&fit=crop",
    source_code_link: "https://github.com/shubham6760",
  },
];
const projects2 = [
  {
    name: "Similarity Detection & Fraud Prevention System",
    description: [
      "Mathematical and ML-based scoring systems to detect duplicate or altered records.",
      "Used vector embeddings and advanced distance metrics for similarity analysis.",
      "Deployed batch and streaming inference services with real-time dashboards.",
      "Improved detection accuracy by 47% with ensemble scoring techniques.",
    ],
    tags: [
      { name: "ML", color: "blue-text-gradient" },
      { name: "Vector DB", color: "green-text-gradient" },
      { name: "Analytics", color: "pink-text-gradient" },
    ],
    image: "https://images.unsplash.com/photo-1590019894967-8ac28acebad0?w=500&h=300&fit=crop",
    source_code_link: "https://github.com/shubham6760",
  },
  {
    name: "Multi-Agent AI Framework for Document Intelligence",
    description: [
      "Advanced multi-agent system for intelligent document processing, classification, and analysis.",
      "Integrated Retrieval-Augmented Generation with vector database embeddings.",
      "Optimized GPU workflows through containerization and cloud orchestration.",
      "Enables intelligent information extraction with context-aware responses.",
    ],
    tags: [
      { name: "RAG", color: "blue-text-gradient" },
      { name: "Multi-Agent", color: "green-text-gradient" },
      { name: "LLMs", color: "pink-text-gradient" },
    ],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8e7ce338?w=500&h=300&fit=crop",
    source_code_link: "https://github.com/shubham6760",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  projects2,
  frameworks,
  languages,
  cloudcomputing,
  databases,
};
