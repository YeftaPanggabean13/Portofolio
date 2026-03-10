
export interface Project {
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
  logo?: string;
  layout: 'logo' | 'image';
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Achievement {
  title: string;
  issuer: string;
  year: string;
}
