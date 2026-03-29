import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="page">
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 className="title" style={{ fontSize: '3rem', marginBottom: '20px' }}>
          Generative AI Course
        </h1>
        <p className="subtitle" style={{ fontSize: '1.4rem', maxWidth: '600px', margin: '0 auto 40px' }}>
          Learn AI from scratch to real projects. Master the fundamentals of Generative AI and build amazing applications.
        </p>
        <Link to="/course" className="btn" style={{ fontSize: '1.2rem', padding: '16px 32px' }}>
          Start Learning Now
        </Link>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '60px' }}>
        <div className="module-item" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🎯</div>
          <h3>Structured Learning Path</h3>
          <p>Follow a carefully designed curriculum that takes you from beginner to advanced AI practitioner.</p>
        </div>
        <div className="module-item" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🚀</div>
          <h3>Hands-on Projects</h3>
          <p>Build real-world applications including AI chatbots, resume analyzers, and more.</p>
        </div>
        <div className="module-item" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', marginBottom: '20px' }}>💡</div>
          <h3>Expert Guidance</h3>
          <p>Learn from comprehensive tutorials covering theory, practical implementation, and best practices.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;