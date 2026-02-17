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
  Cpu
} from 'lucide-react';
import { SkillCategory, ServiceOffer, CaseStudy } from './types';

export const SKILLS: SkillCategory[] = [
  {
    title: "CRM & System Architecture",
    icon: <Database className="w-6 h-6 text-blue-400" />,
    skills: [
      "Full GoHighLevel Account Setup",
      "CRM Pipeline Architecture",
      "Client Journey Mapping",
      "Data Migration & Snapshot Creation",
      "SaaS Mode Deployment Support"
    ]
  },
  {
    title: "Lead Generation Engines",
    icon: <UserCheck className="w-6 h-6 text-purple-400" />,
    skills: [
      "High-Conversion Capture Funnels",
      "Messenger Lead Capture Automation",
      "Qualifying Logic & Lead Routing",
      "Automated Prospect Tagging Systems"
    ]
  },
  {
    title: "Marketing Orchestration",
    icon: <Workflow className="w-6 h-6 text-green-400" />,
    skills: [
      "Multi-Channel Nurturing Workflows",
      "Behavior-Based Automation",
      "SMS & Email Ecosystem Setup",
      "Follow-up Sequence Engineering"
    ]
  },
  {
    title: "Conversation Automation",
    icon: <MessageSquare className="w-6 h-6 text-pink-400" />,
    skills: [
      "AI Chatbot Integration",
      "FB Messenger & IG Automation",
      "Appointment Booking Engines",
      "Instant Speed-to-Lead Systems"
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
    description: "Multi-step booking funnel with conditional qualifying logic.",
    imagePlaceholder: "https://picsum.photos/seed/funnel/800/600",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    title: "The 'Invisible' Sales Team",
    category: "Workflow Automations",
    description: "Complex automation handling lead nurturing for 6 months post-optin.",
    imagePlaceholder: "https://picsum.photos/seed/workflow/800/600",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    title: "Real Estate Pipeline Engine",
    category: "CRM Pipelines",
    description: "Customized CRM stages with automated status-triggered follow-ups.",
    imagePlaceholder: "https://picsum.photos/seed/crm/800/600",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    title: "Instant Response Messenger Bot",
    category: "Messenger Bots",
    description: "FB/IG bot that qualifies leads before sending booking links.",
    imagePlaceholder: "https://picsum.photos/seed/bot/800/600",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
  }
];