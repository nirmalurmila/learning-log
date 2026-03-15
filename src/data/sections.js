import { Code2, FunctionSquare, Cpu, Palette, LineChart, Briefcase } from 'lucide-react';

export const SECTIONS = [
  {
    id: 'portfolio',
    title: 'Portfolio',
    icon: Briefcase,
    description: 'Full personal profile, learning journey, and social links from the portfolio.',
    focus: 'Personal brand and learning story',
    recentExperiment: 'Consolidated portfolio details into the Learning Log app.',
    progress: 100,
    portfolio: {
      hero: {
        badge: '🚀 Currently Learning',
        headline: "Hi, I'm Urmila Nirmal",
        tagline: 'A 21-year-old curious learner on a mission to master AI, coding, and math — while documenting every step of the journey.',
        note: 'Building skills from scratch. Every expert was once a beginner.',
        interests: [
          '🤖 AI & Machine Learning',
          '💻 Coding',
          '🔢 Mathematics',
          '🎬 Content Creation'
        ],
        ctas: [
          {
            label: 'See My Journey',
            href: '#portfolio-journey',
            variant: 'primary'
          },
          {
            label: '📸 Follow @dailylearninglog',
            href: 'https://instagram.com/dailylearninglog',
            variant: 'secondary',
            external: true
          }
        ]
      },
      journey: {
        title: 'My Learning Journey',
        subtitle: 'Documenting the process of becoming a skilled developer and content creator — failures, wins, and everything in between.',
        items: [
          {
            title: 'Current Focus',
            icon: '🎯',
            text: 'Building foundational skills in Python, web development, and understanding AI concepts from the ground up.'
          },
          {
            title: 'Learning Approach',
            icon: '📚',
            text: 'Consistent daily practice, building small projects, and breaking down complex topics into digestible pieces.'
          },
          {
            title: 'Content Creation',
            icon: '🎬',
            text: 'Sharing learnings on Instagram @dailylearninglog to inspire others and track personal growth publicly.'
          },
          {
            title: 'Goal',
            icon: '🌟',
            text: "Become a skilled AI developer and content creator — helping others learn while building a career I'm passionate about."
          },
          {
            title: 'Strength',
            icon: '💪',
            text: "Curiosity and determination. Starting with zero skills doesn't stop me — it motivates me to learn faster."
          },
          {
            title: 'Growth Mindset',
            icon: '🔄',
            text: 'Every error is a lesson. Every tutorial completed is a win. Embracing the journey, not just the destination.'
          }
        ]
      },
      learnings: {
        title: "What I'm Learning",
        subtitle: 'Currently exploring these exciting areas! documenting my journey every step of the way.',
        items: [
          {
            tag: '🤖 AI Tools',
            title: 'Exploring AI Tools',
            content: 'Learning about various AI tools that can help with coding, content creation, and productivity. Experimenting with different AI assistants to understand their capabilities.',
            status: 'Currently Learning'
          },
          {
            tag: '🎵 Vibe Coding',
            title: 'Vibe Coding',
            content: 'Discovering the art of coding with the right mood! Using AI assistance to code faster while maintaining creativity and fun in the process.',
            status: 'Currently Learning'
          },
          {
            tag: '🎬 Content Creation',
            title: 'Documenting My Learning',
            content: 'Creating content about my learning journey on Instagram @dailylearninglog. Sharing tips, struggles, and wins to inspire others who are just starting their coding journey.',
            status: 'Currently Learning'
          }
        ]
      },
      connect: {
        title: "📱 Let's Connect",
        handle: '@dailylearninglog',
        handleUrl: 'https://instagram.com/dailylearninglog',
        description: 'Documenting my learning journey in real-time. Have questions or want to collaborate? Send me a DM!',
        primaryCta: {
          label: 'Send a Message',
          href: 'https://instagram.com/dailylearninglog'
        },
        secondaryCta: {
          label: 'GitHub',
          href: 'https://github.com/nirmalurmila'
        },
        stats: [
          {
            value: '📝',
            label: 'Learning Posts'
          },
          {
            value: '🌱',
            label: 'Growing'
          },
          {
            value: '💡',
            label: 'Daily Updates'
          }
        ],
        note: 'Or follow me on GitHub:'
      },
      footer: 'Made with ❤️ by Urmila Nirmal | Learning every day 🌟'
    }
  },
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
