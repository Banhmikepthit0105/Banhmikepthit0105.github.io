// Add confirmed entries here. Drafts never appear in production.
export const profile = {
  news: [
    { date: '2026', text: 'G-MORDA has been accepted at KES 2026.' },
    { date: '2026', text: 'Received the Odon Vallet Scholarship.', highlight: true },
    { date: '2026', text: 'Recognized for an Outstanding Thesis with a score of 10/10.' },
    { date: '2025', text: 'KWordinaryVQA appeared at PACLIC 2025.', url: 'https://aclanthology.org/2025.paclic-1.31/' },
    { date: '2025', text: 'Won first place in the Retrieval Task at ALQAC 2025.' },
  ],
  publications: [
    { topic: 'Vision–Language Learning', title: 'G-MORDA: Graph-guided Compression with Locally Distinct Selection for Efficient VideoLLM Reasoning', authors: 'Thai Nguyen, Thanh Long Tran, Thanh Le', venue: 'KES 2026 · Accepted.', badge: 'KES 2026', art: 'gmorda', image: '/assets/papers/g-morda.png', links: [{ label: 'Code', url: 'https://github.com/Banhmikepthit0105/G-MORDA' }] },
    { topic: 'Vision–Language Learning', title: 'KWordinaryVQA: A Keyword-Driven Generative Visual Question Answering System for Culinary Exploration', url: 'https://aclanthology.org/2025.paclic-1.31/', authors: 'Huy Trieu, Thanh Thai Nguyen, Thanh Nghia Vo, Thinh Vuong Vo, Thanh Tu Dang, Tung Le', venue: 'PACLIC 2025.', badge: 'PACLIC 2025', art: 'kwordinaryvqa', links: [{ label: 'ACL Anthology', url: 'https://aclanthology.org/2025.paclic-1.31/' }] },
    { topic: 'Information Retrieval & NLP', title: 'Flame Reavers@ALQAC 2025: Integrating Learned Rankers and LLM Reasoning in a Dynamic Hybrid Architecture for Legal Retrieval', url: 'https://kse2025.kse-conferences.org/wp-content/uploads/sites/10/2025/10/kse-2025-proceedings.pdf', authors: 'Huy Trieu, Dang-Phuong-Nam Doan, Anh-Kiet Nguyen, Thanh-Thai Nguyen, Thanh-Nghia Vo, Tung Le, Huy Tien Nguyen', venue: 'KSE 2025.', distinction: 'First Place — ALQAC 2025 Retrieval Task', badge: 'KSE 2025', art: 'flamereavers', links: [{ label: 'Proceedings (PDF)', url: 'https://kse2025.kse-conferences.org/wp-content/uploads/sites/10/2025/10/kse-2025-proceedings.pdf' }] },
  ],
  experience: [
    { period: 'May 2026 – Present', role: 'Research Assistant', organization: 'VinUni-Illinois Smart Health Center (VISHC)', arrangement: 'Remote' },
    { period: 'May 2025 – May 2026', role: 'Undergraduate Student Researcher', organization: 'University of Science, VNU-HCM', arrangement: 'Part-time', description: 'Advisor: Dr. Thanh Le (HCMUS).' },
    { period: 'Since 2019', role: 'Private Tutor — Mathematics & Natural Sciences', organization: 'Independent tutoring', description: 'Tutoring secondary and high-school students in mathematics, physics, and chemistry, including preparation for specialized-school entrance examinations.' },
    { period: '2022', role: 'Academic Mentor — Chemistry', organization: 'Dong Thap provincial student team', description: 'Supported students preparing for the Vietnam National Excellent Student Competition.' },
  ],
  education: [
    { period: 'Oct 2022 – Sep 2026', institution: 'University of Science, VNU-HCM', degree: 'Bachelor’s degree in Information Technology', details: ['GPA: 9.06/10 (3.81/4.0).', 'Dean’s List — Top 5% academic performance (AY 2024–2025); highest GPA recipient.', 'Top-20 GPA Academic Merit Scholarship — Semesters 7 & 8.'] },
    { period: '2019 – 2022', institution: 'Nguyen Quang Dieu High School for the Gifted', degree: 'High School Diploma · Chemistry', details: [] },
  ],
  projects: [
    { icon: 'database', period: 'Jun–Aug 2025', role: 'Vector Database Benchmarking', organization: 'Qdrant · Milvus · Pinecone', description: 'Compared database architectures and indexing methods using VectorDBBench, with SIFT, GIST, and Wikipedia embeddings at 100K–10M vectors. Evaluated throughput, p99 latency, and filtered search for RAG and semantic retrieval.' },
    { icon: 'food', period: 'Feb–Jun 2025', role: 'FoodieVQA — Food Visual Question Answering', organization: 'Vision–language learning', description: 'Built an image-to-question-answer pipeline with automated captions and synthetic QA, evaluated zero-shot prompting and retrieval, and fine-tuned vision–language transformers. Integrated the system into a Flask application.', links: [{ label: 'Code', url: 'https://github.com/Banhmikepthit0105/FoodVQA' }] },
    { icon: 'learning', period: 'Jan–May 2025', role: 'DeepShark — E-learning Platform', organization: 'Semantic search · Retrieval-augmented generation', description: 'Led development of an educational platform with question answering and code review. Combined fine-tuned Sentence Transformers, PostgreSQL IVFFLAT retrieval, and Gemini with learning resources collected from arXiv and Stack Overflow.', links: [{ label: 'Code', url: 'https://github.com/Banhmikepthit0105/DeepShark-ELearningWebsite' }] },
    { icon: 'scroll', period: 'Nov 2024 – Jan 2025', role: 'Historical Sino-Nom / Chinese OCR Alignment', organization: 'Natural language processing · Digital humanities', description: 'Developed an end-to-end pipeline for scanned historical texts, from crawling and OCR to character-level alignment. Applied string-matching techniques and parallel processing across more than 22,000 lines and 330,000 characters.', links: [{ label: 'Code', url: 'https://github.com/Banhmikepthit0105/BuildingParallelCorpus_for_SinoNom' }] },
  ],
  languages: [
    { name: 'Vietnamese', level: 'Native' },
    { name: 'English', level: 'Professional working proficiency · TOEIC 830' },
    { name: 'Chinese', level: 'Currently learning' },
  ],
  awards: [
    { year: '2026', title: 'Outstanding Thesis — 10/10', description: 'Recognized for an outstanding thesis, awarded the maximum score of 10/10.' },
    { year: '2026 · Aug 2022', title: 'Odon Vallet Scholarship', featured: true, issuer: 'Rencontres du Vietnam', description: 'For outstanding students with academic and research excellence. Awarded in 2026 and August 2022.', url: 'https://www.fondationvallet.org/bourses/vietnam/' },
    { year: 'Jan 2026', title: 'Dean’s List — Academic Year 2024–2025', featured: true, issuer: 'Faculty of Information Technology, University of Science, VNU-HCM', description: 'Ranked first by GPA among recipients; recognizes the top 5% in academic performance.' },
    { year: 'Jul 2025', title: 'First Place — Retrieval Task, ALQAC 2025', issuer: 'JAIST · Program committee: JAIST, NII, VNU-HCMUS and VNU-UET', description: 'Winning legal-document retrieval system at the Automated Legal Question Answering Competition.' },
    { year: 'May 2025', title: 'Academic Excellence Scholarship — Winter 2024 & Spring 2025', issuer: 'University of Science, VNU-HCM', description: 'Awarded for a top-20 GPA in the academic year.' },
    { year: 'May 2022', title: 'Third Prize — Vietnam National Chemistry Olympiad', issuer: 'Vietnam Ministry of Education and Training', description: 'National-level recognition in Chemistry for high-school students.' },
    { year: 'Apr 2022', title: 'Traditional Flag for Academic Excellence', issuer: 'Nguyen Quang Dieu High School for the Gifted', description: 'Recognizes outstanding academic performance and dedication.' },
    { year: 'Jan 2022', title: 'First Prize — Provincial Excellent Student in Chemistry Contest', issuer: 'Dong Thap Department of Education and Training', description: 'Valedictorian in the provincial Chemistry competition.' },
    { year: 'Aug 2021', title: 'Silver Medal — Southern Chemistry Olympiad', issuer: 'Organizing Board of the Southern Chemistry Olympiad', description: 'Recognizes achievement in the regional Chemistry Olympiad.' },
    { year: 'Apr 2021', title: 'Silver Medal — 30/4 Traditional Olympic Competition in Chemistry', issuer: 'HCMC Department of Education and Training', description: 'Chemistry distinction at the inter-school academic competition for high-school students.' },
    { year: 'Jan 2021', title: 'Third Prize — Provincial Excellent Student in Chemistry Contest', issuer: 'Dong Thap Department of Education and Training', description: 'Provincial-level recognition for achievement in Chemistry.' },
  ],
};
// First article: title and topic supplied by the owner. Body awaits their writing.
export const posts = [
  {
    slug: 'life-at-22',
    title: 'Life at 22',
    category: 'Blog',
    excerpt: 'Cuộc sống đại học.',
    language: 'vi',
    body: [],
  },
];
