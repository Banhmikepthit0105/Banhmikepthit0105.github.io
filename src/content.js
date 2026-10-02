// Add confirmed entries here. Drafts never appear in production.
export const profile = {
  news: [
    { date: '2026', text: 'Entity-Constrained CBCT Retrieval has been accepted at MICCAIW 2026 (ODIN Workshop).' },
    { date: '2026', text: 'G-MORDA has been accepted at KES 2026.' },
    { date: '2026', text: 'Received the Odon Vallet Scholarship 2026.', highlight: true },
    { date: '2026', text: 'Recognized for an Outstanding Thesis with a score of 10/10.' },
  ],
  // Title links open on hover/click; `image` is a real figure, `art` is the drawn fallback in PaperArt.jsx.
  publications: [
    { topic: 'Medical Imaging & Retrieval', title: 'Entity-Constrained CBCT Retrieval for Low-Resource Dental Record Completion', authors: '', venue: 'MICCAIW 2026 (ODIN Workshop).', distinction: 'First Place, MICCAI STSR Challenge', badge: 'MICCAIW 2026', art: 'cbct', image: '/assets/papers/cbct-retrieval.png' },
    { topic: 'Vision-Language Learning', title: 'G-MORDA: Graph-guided Compression with Locally Distinct Selection for Efficient VideoLLM Reasoning', url: 'https://github.com/Banhmikepthit0105/G-MORDA', authors: 'Thai Nguyen, Thanh Long Tran, Thanh Le', venue: 'KES 2026.', badge: 'KES 2026', art: 'gmorda', image: '/assets/papers/g-morda.png' },
    { topic: 'Vision-Language Learning', title: 'KWordinaryVQA: A Keyword-Driven Generative Visual Question Answering System for Culinary Exploration', url: 'https://aclanthology.org/2025.paclic-1.31/', authors: 'Huy Trieu, Thanh Thai Nguyen, Thanh Nghia Vo, Thinh Vuong Vo, Thanh Tu Dang, Tung Le', venue: 'PACLIC 2025.', badge: 'PACLIC 2025', art: 'kwordinaryvqa', image: '/assets/papers/kwordinaryvqa.png' },
    { topic: 'Information Retrieval & NLP', title: 'Flame Reavers@ALQAC 2025: Integrating Learned Rankers and LLM Reasoning in a Dynamic Hybrid Architecture for Legal Retrieval', url: 'https://kse2025.kse-conferences.org/wp-content/uploads/sites/10/2025/10/kse-2025-proceedings.pdf', authors: 'Huy Trieu, Dang-Phuong-Nam Doan, Anh-Kiet Nguyen, Thanh-Thai Nguyen, Thanh-Nghia Vo, Tung Le, Huy Tien Nguyen', venue: 'KSE 2025.', distinction: 'First Place, ALQAC 2025 Retrieval Task', badge: 'KSE 2025', art: 'flamereavers', image: '/assets/papers/flame-reavers.png' },
  ],
  experience: [
    { period: '05/2026 - Present', role: 'Research Assistant', organization: 'VinUni-Illinois Smart Health Center (VISHC)', arrangement: 'Remote · Prof. Kok-Seng Wong', description: 'Research on LoRA adaptation for vision-language-action (VLA) models and robot learning.' },
    { period: '05/2025 - 05/2026', role: 'Undergraduate Student Researcher', organization: 'University of Science, VNU-HCM', arrangement: 'Part-time', description: 'Advisor: Dr. Thanh Le (HCMUS).' },
  ],
  education: [
    { period: '10/2022 - 10/2026', institution: 'University of Science, VNU-HCM', degree: 'Bachelor’s degree in Information Technology', details: ['GPA: 9.06/10 (3.81/4.0).', 'Top 5% of the Information Technology CLC cohort by GPA; highest GPA in the cohort.', 'Dean’s List for Academic Year 2024-2025.', 'Odon Vallet Scholarship 2026.'] },
    { period: '2019 - 2022', institution: 'Nguyen Quang Dieu High School for the Gifted', degree: 'High School Diploma · Chemistry', details: ['Traditional Flag for Academic Excellence - sole recipient.', 'Third Prize, Vietnam National Chemistry Olympiad.'] },
  ],
  // Project titles link to their public repositories.
  projects: [
    { icon: 'database', image: '/assets/projects/vector-db-benchmark.svg', period: '06/2025 - 08/2025', role: 'Vector Database Benchmarking', organization: 'Qdrant · Milvus · Pinecone', description: 'Compared database architectures and indexing methods using VectorDBBench, with SIFT, GIST, and Wikipedia embeddings at 100K-10M vectors. Evaluated throughput, p99 latency, and filtered search for RAG and semantic retrieval.' },
    { icon: 'game', image: '/assets/projects/vcs-arena-dashboard.jpg', period: '04/2025 - 05/2025', role: 'VCS Arena Analysis: League of Legends Data Visualization', url: 'https://github.com/Banhmikepthit0105/VCSArenaAnalysis', organization: 'Data visualization · Esports analytics', description: 'Crawled player and champion statistics from the Vietnam Championship Series (VCS, 2018-2024) and cleaned them into analysis-ready tables. Built a Flask dashboard where users describe a chart in natural language and DeepSeek generates the Plotly visualization.' },
    { icon: 'scroll', image: '/assets/projects/sino-nom-ocr.png', period: '11/2024 - 01/2025', role: 'Historical Sino-Nom / Chinese OCR Alignment', url: 'https://github.com/Banhmikepthit0105/BuildingParallelCorpus_for_SinoNom', organization: 'Natural language processing · Digital humanities', description: 'Developed an end-to-end pipeline for scanned historical texts, from crawling and OCR to character-level alignment. Applied string-matching techniques and parallel processing across more than 22,000 lines and 330,000 characters.' },
  ],
  languages: [
    { name: 'Vietnamese', level: 'Native' },
    { name: 'English', level: 'Professional working proficiency · TOEIC 830' },
    { name: 'Chinese', level: 'Currently learning' },
  ],
  // Dates use MM/YYYY and appear at the right of each award.
  awards: [
    { date: '2026', title: 'Outstanding Thesis (10/10)', description: 'Recognized for an outstanding thesis, awarded the maximum score of 10/10.' },
    { title: 'Odon Vallet Scholarship', featured: true, issuer: 'Rencontres du Vietnam', url: 'https://www.fondationvallet.org/bourses/vietnam/', description: 'Awarded twice, at two stages of study.',
      rounds: [
        { date: '2026', stage: 'University', description: 'Awarded to top-performing students. Approximately 30 students across HCMUS received it, including 5-6 from the Faculty of Information Technology; I was the only recipient from the K22 cohort.' },
        { date: '08/2022', stage: 'High school', description: 'Awarded to one of 4-5 students from Nguyen Quang Dieu High School for the Gifted, selected for outstanding academic performance in the natural sciences.' },
      ] },
    { date: '01/2026', title: 'Dean’s List, Academic Year 2024-2025', featured: true, issuer: 'Faculty of Information Technology, University of Science, VNU-HCM', description: 'Highest GPA among recipients in the Faculty of Information Technology; recognizes the top 5% in academic performance.' },
    { date: '07/2025', title: 'First Place in the Retrieval Task, ALQAC 2025', issuer: 'JAIST · Program committee: JAIST, NII, VNU-HCMUS and VNU-UET', description: 'Winning legal-document retrieval system at the Automated Legal Question Answering Competition.' },
    { date: '05/2025', title: 'Academic Excellence Scholarship (Winter 2024 & Spring 2025)', issuer: 'University of Science, VNU-HCM', description: 'Awarded for a top-20 GPA in the academic year.' },
    { date: '05/2022', title: 'Third Prize, Vietnam National Olympiad', issuer: 'Vietnam Ministry of Education and Training', description: 'National-level recognition in Chemistry for high-school students.' },
    { date: '04/2022', title: 'Traditional Flag for Academic Excellence', issuer: 'Nguyen Quang Dieu High School for the Gifted', description: 'Traditional Flag awarded to the sole recipient for outstanding academic performance and dedication.' },
    { date: '01/2022', title: 'First Prize, Provincial Excellent Student Contest', issuer: 'Dong Thap Department of Education and Training', description: 'Valedictorian in the provincial Chemistry competition.' },
    { date: '08/2021', title: 'Silver Medal, Southern Olympiad', issuer: 'Organizing Board of the Southern Chemistry Olympiad', description: 'Recognizes achievement in the regional Chemistry Olympiad.' },
    { date: '04/2021', title: 'Silver Medal, 30/4 Traditional Olympiad', issuer: 'HCMC Department of Education and Training', description: 'Chemistry distinction at the inter-school academic competition for high-school students.' },
    { date: '01/2021', title: 'Third Prize, Provincial Excellent Student Contest', issuer: 'Dong Thap Department of Education and Training', description: 'Provincial-level recognition for achievement in Chemistry.' },
  ],
};
// Blog & Notes posts live in /content/posts/*.md (see src/posts.js and .pages.yml).
