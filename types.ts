import React from 'react';

export interface Skill {
  name: string;
  icon: React.ReactNode;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date?: string;
  image: string; // URL or local path
}

export interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
  longDescription?: string;
  technologies?: string[];
  demoUrl?: string;
  repoUrl?: string;
}
