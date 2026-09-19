export interface Project {
  id: string;
  name: string;
  category: string;
  year: string;
  tagline: string;
  thumbnail: string;
  description: string;
  technologies: string[];
  results: string;
  caseStudy: {
    challenge: string;
    research: string;
    process: string;
    solution: string;
    outcome: string;
  };
  details: {
    client: string;
    role: string;
    services: string[];
  };
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
}

export interface SkillCategory {
  title: string;
  skills: { name: string; proficiency: number }[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}
