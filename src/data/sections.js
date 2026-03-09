import { Code2, FunctionSquare, Cpu, Palette, LineChart } from 'lucide-react';

export const SECTIONS = [
  {
    id: 'coding-lab',
    title: 'Coding Lab',
    icon: Code2,
    description: 'Where logic meets creativity. Building scalable applications and exploring new frameworks.',
    focus: 'React 19, Node.js, and TypeScript',
    recentExperiment: 'Built a real-time collaborative code editor with WebSockets.',
    progress: 85
  },
  {
    id: 'math-thinking',
    title: 'Math Thinking',
    icon: FunctionSquare,
    description: 'Exploration of abstract patterns and algorithmic problem-solving.',
    focus: 'Linear Algebra and Graph Theory',
    recentExperiment: 'Implemented a custom pathfinding algorithm for complex 2D grids.',
    progress: 70
  },
  {
    id: 'ai-experiments',
    title: 'AI Experiments',
    icon: Cpu,
    description: 'Prototyping with LLMs and exploring the boundaries of machine intelligence.',
    focus: 'Retrieval Augmented Generation (RAG)',
    recentExperiment: 'Fine-tuned a localized model for creative writing assistance.',
    progress: 60
  },
  {
    id: 'content-studio',
    title: 'Content Studio',
    icon: Palette,
    description: 'Visual storytelling and digital design experiments.',
    focus: 'Motion Graphics and UI/UX Design',
    recentExperiment: 'Designed a completely gesture-based mobile interface concept.',
    progress: 75
  },
  {
    id: 'growth-tracker',
    title: 'Growth Tracker',
    icon: LineChart,
    description: 'Measuring progress and documenting the journey of continuous learning.',
    focus: 'Productivity Systems and Knowledge Management',
    recentExperiment: 'Developed a personalized learning dashboard using Notion API.',
    progress: 90
  }
];
