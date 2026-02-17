// Import React to fix 'Cannot find namespace React' error when referencing React.ReactNode.
import React from 'react';

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: React.ReactNode;
}

export interface ServiceOffer {
  title: string;
  description: string;
  features: string[];
}

export interface CaseStudy {
  title: string;
  category: string;
  description: string;
  imagePlaceholder: string;
  videoUrl?: string; // Optional video URL for walkthroughs
}