import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();

  const getBreadcrumbs = () => {
    const pathnames = location.pathname.split('/').filter(x => x);

    const breadcrumbs = [
      { name: 'Home', path: '/' }
    ];

    if (pathnames.includes('course')) {
      breadcrumbs.push({ name: 'Courses', path: '/course' });
    }

    const moduleMap = {
      'intro': 'Introduction to AI',
      'llm': 'LLM (Large Language Models)',
      'prompt': 'Prompt Engineering',
      'agents': 'Creating AI Agents',
      'tools': 'AI Tools & Frameworks',
      'projects': 'Projects'
    };

    if (pathnames.length > 1 && moduleMap[pathnames[1]]) {
      breadcrumbs.push({
        name: moduleMap[pathnames[1]],
        path: `/${pathnames[1]}`
      });
    }

    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  if (breadcrumbs.length <= 1) return null;

  return (
    <nav className="breadcrumbs">
      <div className="breadcrumb-container">
        {breadcrumbs.map((crumb, index) => (
          <span key={index} className="breadcrumb-item">
            {index > 0 && <span className="breadcrumb-separator">›</span>}
            {index === breadcrumbs.length - 1 ? (
              <span className="breadcrumb-current">{crumb.name}</span>
            ) : (
              <Link to={crumb.path} className="breadcrumb-link">{crumb.name}</Link>
            )}
          </span>
        ))}
      </div>
    </nav>
  );
};

export default Breadcrumbs;