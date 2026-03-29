import React from 'react';
import { Link } from 'react-router-dom';

const Course = () => {
  const modules = [
    {
      name: 'Introduction to AI',
      path: '/intro',
      description: 'Learn the fundamentals of Artificial Intelligence and understand what Generative AI is all about.',
      icon: '🤖'
    },
    {
      name: 'LLM (Large Language Models)',
      path: '/llm',
      description: 'Dive deep into Large Language Models, how they work, and their applications in modern AI.',
      icon: '🧠'
    },
    {
      name: 'Prompt Engineering',
      path: '/prompt',
      description: 'Master the art of crafting effective prompts to get the best results from AI models.',
      icon: '💬'
    },
    {
      name: 'Creating AI Agents',
      path: '/agents',
      description: 'Learn how to build intelligent AI agents that can perform tasks, make decisions, and interact autonomously.',
      icon: '⚡'
    },
    {
      name: 'AI Tools & Frameworks',
      path: '/tools',
      description: 'Explore essential AI tools, frameworks, and platforms for building intelligent applications.',
      icon: '🛠️'
    },
    {
      name: 'Projects',
      path: '/projects',
      description: 'Apply your knowledge with hands-on projects including AI Resume Analyzer, Chatbot, and SQL Generator.',
      icon: '🚀'
    }
  ];

  return (
    <div className="page">
      <h1 className="title">Generative AI Course Modules</h1>
      <p className="subtitle">Master Generative AI from basics to building real-world applications</p>

      <div className="module-list">
        {modules.map((module, index) => (
          <Link key={index} to={module.path} className="module-item">
            <div style={{ fontSize: '2rem', marginBottom: '16px' }}>{module.icon}</div>
            <h3>{module.name}</h3>
            <p>{module.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Course;