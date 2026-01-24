
export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  image: string;
  summary: string;
  achievements: string[];
  tools: string[];
  metrics?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  link?: string;
  isGallery?: boolean; // New flag to bypass modal and link directly
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  summary?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year?: string;
}
