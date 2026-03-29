import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const modules = [
    { name: 'Introduction to AI', path: '/intro', icon: '🤖' },
    { name: 'LLM (Large Language Models)', path: '/llm', icon: '🧠' },
    { name: 'Prompt Engineering', path: '/prompt', icon: '💬' },
    { name: 'Creating AI Agents', path: '/agents', icon: '⚡' },
    { name: 'AI Tools & Frameworks', path: '/tools', icon: '🛠️' },
    { name: 'Projects', path: '/projects', icon: '🚀' }
  ];

  const isCoursePage = location.pathname === '/course' || modules.some(m => m.path === location.pathname);

  if (!isCoursePage) return null;

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h3>Course Modules</h3>
      </div>
      <nav className="sidebar-nav">
        <Link to="/course" className={`sidebar-link ${location.pathname === '/course' ? 'active' : ''}`}>
          <span className="link-icon">📚</span>
          <span>All Modules</span>
        </Link>
        {modules.map((module, index) => (
          <Link
            key={index}
            to={module.path}
            className={`sidebar-link ${location.pathname === module.path ? 'active' : ''}`}
          >
            <span className="link-icon">{module.icon}</span>
            <span>{module.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;