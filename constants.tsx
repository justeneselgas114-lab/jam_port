import React from 'react';
import { 
  Layout, 
  Settings, 
  UserCheck, 
  Workflow, 
  MessageSquare, 
  Mail, 
  Database,
  BarChart3,
  Cpu,
  Code,
  Globe,
  Terminal
} from 'lucide-react';
import { SkillCategory, ServiceOffer, CaseStudy } from './types';

export const SKILLS: SkillCategory[] = [
  {
    title: "Web Development & Application Engineering",
    icon: <Code className="w-6 h-6 text-blue-400" />,
    skills: [
      "React.js & Modern JavaScript",
      "Next.js (SSR/SSG Optimization)",
      "Angular.js Applications",
      "HTML5 / CSS3 / TailwindCSS",
      "TypeScript Architecture",
      "Vite Build Systems",
      "Responsive & Mobile-First Design",
      "REST API Integration"
    ]
  },
  {
    title: "CRM & Automation Architecture",
    icon: <Database className="w-6 h-6 text-green-400" />,
    skills: [
      "Complete GoHighLevel Account Setup",
      "CRM Pipeline Architecture",
      "Client Journey Mapping",
      "Data Migration & Snapshot Systems",
      "SaaS Mode Deployment Support",
      "Workflow & Trigger Logic Engineering"
    ]
  },
  {
    title: "Lead Generation Systems",
    icon: <UserCheck className="w-6 h-6 text-purple-400" />,
    skills: [
      "Conversion-Optimized Capture Funnels",
      "Messenger Lead Capture Automation",
      "Advanced Qualifying Logic",
      "Automated Lead Routing Systems",
      "Prospect Tagging & Segmentation"
    ]
  },
  {
    title: "Marketing Automation & Orchestration",
    icon: <Workflow className="w-6 h-6 text-orange-400" />,
    skills: [
      "Behavior-Based Automation",
      "Multi-Channel Nurturing Sequences",
      "SMS & Email Ecosystem Architecture",
      "Follow-Up Sequence Engineering",
      "Lifecycle Marketing Systems"
    ]
  },
  {
    title: "Conversational Automation & Booking Systems",
    icon: <MessageSquare className="w-6 h-6 text-cyan-400" />,
    skills: [
      "AI Chatbot Integration",
      "Facebook Messenger Automation",
      "Instagram DM Automation",
      "Appointment Booking Engines",
      "Speed-to-Lead Automation Systems"
    ]
  },
  {
    title: "Systems Integration & Scalability",
    icon: <Globe className="w-6 h-6 text-pink-400" />,
    skills: [
      "Webhook & API Automation",
      "Third-Party Integrations (Stripe, Zapier, Make, etc.)",
      "Custom JavaScript Embedding",
      "SaaS White-Label Structuring",
      "Performance Optimization & Scaling Strategy",
      "Multi-Subaccount Architecture"
    ]
  }
];

export const SERVICES: ServiceOffer[] = [
  {
    title: "The GHL Core Setup",
    description: "Transformation of your GoHighLevel account into a finely-tuned business machine.",
    features: [
      "Account optimization",
      "Custom field mapping",
      "Snapshot deployment",
      "Domain & Email SMTP integration"
    ]
  },
  {
    title: "Lead Flow Systems",
    description: "End-to-end systems that attract, qualify, and route leads without manual intervention.",
    features: [
      "Funnel architecture",
      "Lead scoring workflows",
      "Automated distribution",
      "Sales notification triggers"
    ]
  },
  {
    title: "CRM Automation Audit",
    description: "Fixing broken pipelines and optimizing messy workflows for maximum efficiency.",
    features: [
      "Migration support",
      "Workflow consolidation",
      "Clean data protocols",
      "Process mapping"
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: "High-Ticket Funnel Architecture",
    category: "Funnel Builds",
    description: "Multi-step booking funnel with conditional qualifying logic and automated follow-up sequences.",
    imagePlaceholder: "https://picsum.photos/seed/funnel/400/300",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    title: "The 'Invisible' Sales Team",
    category: "Workflow Automations",
    description: "Complex automation handling lead nurturing for 6 months post-optin.",
    imagePlaceholder: "https://picsum.photos/seed/workflow/400/300",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
  }
];