import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      name: 'AI Resume Analyzer',
      description: 'Build an intelligent resume analyzer that uses AI to parse, analyze, and provide insights on job applications. Learn to integrate LLMs for document processing and feedback generation.',
      icon: '📄',
      difficulty: 'Intermediate',
      technologies: ['Python', 'OpenAI API', 'LangChain', 'PDF processing'],
      useCases: ['HR tools', 'Recruitment automation', 'Resume optimization'],
      references: [
        { title: 'LangChain Document Processing', url: 'https://python.langchain.com/docs/use_cases/summarization' },
        { title: 'OpenAI Document Analysis', url: 'https://platform.openai.com/docs/guides/vision' },
        { title: 'PDF Processing in Python', url: 'https://github.com/projects/pdf-processing-ai' }
      ]
    },
    {
      name: 'AI Chatbot',
      description: 'Create a conversational AI chatbot using modern language models. Implement context awareness, memory, and natural language understanding for engaging user interactions.',
      icon: '💬',
      difficulty: 'Advanced',
      technologies: ['React', 'Node.js', 'OpenAI/Claude API', 'WebSocket'],
      useCases: ['Customer support', 'Mental health assistance', 'Educational tool'],
      references: [
        { title: 'LangChain Conversation', url: 'https://python.langchain.com/docs/use_cases/chatbots' },
        { title: 'Building Conversational AI', url: 'https://www.deeplearning.ai/short-courses/building-systems-with-chatgpt/' },
        { title: 'OpenAI Chat API', url: 'https://platform.openai.com/docs/guides/gpt/chat-completions' }
      ]
    },
    {
      name: 'SQL Generator',
      description: 'Develop an AI-powered SQL query generator that converts natural language descriptions into optimized database queries. Perfect for learning prompt engineering and database integration.',
      icon: '🗄️',
      difficulty: 'Intermediate',
      technologies: ['Python', 'LLMs', 'SQL', 'Database (PostgreSQL/MySQL)'],
      useCases: ['Data analysis', 'BI tools', 'Database assistance'],
      references: [
        { title: 'Text-to-SQL with LLMs', url: 'https://arxiv.org/abs/2204.00498' },
        { title: 'OpenAI Text-to-SQL Examples', url: 'https://platform.openai.com/docs/guides/function-calling' },
        { title: 'LLMs for Code Generation', url: 'https://github.com/openai/gpt-sql-examples' }
      ]
    },
    {
      name: 'Sentiment Analysis Tool',
      description: 'Build a sentiment analysis system that classifies text into positive, negative, or neutral sentiments. Great for analyzing social media, customer reviews, and feedback.',
      icon: '😊',
      difficulty: 'Beginner',
      technologies: ['Python', 'Hugging Face Transformers', 'Flask', 'NLTK'],
      useCases: ['Social media monitoring', 'Review analysis', 'Customer feedback'],
      references: [
        { title: 'Hugging Face Sentiment Analysis', url: 'https://huggingface.co/tasks/text-classification' },
        { title: 'Transformers Sentiment Example', url: 'https://huggingface.co/docs/transformers/tasks/sequence_classification' },
        { title: 'Sentiment Analysis Best Practices', url: 'https://arxiv.org/abs/2210.01452' }
      ]
    },
    {
      name: 'Email Spam Detector',
      description: 'Create a machine learning model that identifies and filters spam emails. Learn about text classification, feature engineering, and model deployment.',
      icon: '📧',
      difficulty: 'Intermediate',
      technologies: ['Python', 'Scikit-learn', 'NLP', 'Machine Learning'],
      useCases: ['Email filtering', 'Security systems', 'Data protection'],
      references: [
        { title: 'Spam Detection with ML', url: 'https://www.kaggle.com/competitions/enron-spam' },
        { title: 'Text Classification Models', url: 'https://scikit-learn.org/stable/modules/feature_extraction.html#text-feature-extraction' },
        { title: 'Real-time Spam Detection', url: 'https://github.com/topics/spam-detection' }
      ]
    },
    {
      name: 'Text Summarization Tool',
      description: 'Develop an AI tool that automatically generates summaries from long documents or articles. Learn about abstractive and extractive summarization techniques.',
      icon: '📝',
      difficulty: 'Intermediate',
      technologies: ['Python', 'Transformers', 'Hugging Face', 'LangChain'],
      useCases: ['News aggregation', 'Document processing', 'Research tools'],
      references: [
        { title: 'Hugging Face Summarization', url: 'https://huggingface.co/tasks/summarization' },
        { title: 'LangChain Summarization', url: 'https://python.langchain.com/docs/use_cases/summarization' },
        { title: 'Text Summarization Models', url: 'https://arxiv.org/abs/1905.13322' }
      ]
    },
    {
      name: 'Question Answering System',
      description: 'Build a QA system using Retrieval Augmented Generation (RAG). Extract answers from documents and knowledge bases using AI.',
      icon: '❓',
      difficulty: 'Advanced',
      technologies: ['Python', 'LangChain', 'Vector DB', 'Embedding Models'],
      useCases: ['Knowledge base Q&A', 'Documentation search', 'Customer support'],
      references: [
        { title: 'Building RAG Applications', url: 'https://www.deeplearning.ai/short-courses/building-agentic-rag-applications/' },
        { title: 'LlamaIndex QA', url: 'https://docs.llamaindex.ai/en/stable/use_cases/q_and_a' },
        { title: 'Open Domain QA', url: 'https://huggingface.co/tasks/question-answering' }
      ]
    },
    {
      name: 'Image Classification System',
      description: 'Create a deep learning model for image classification. Learn about CNNs, transfer learning, and how to build production-ready image recognition systems.',
      icon: '🖼️',
      difficulty: 'Advanced',
      technologies: ['Python', 'PyTorch/TensorFlow', 'Computer Vision', 'CNN'],
      useCases: ['Medical imaging', 'Quality control', 'Content moderation'],
      references: [
        { title: 'PyTorch Image Classification', url: 'https://pytorch.org/tutorials/beginner/transfer_learning_tutorial.html' },
        { title: 'TensorFlow Image Models', url: 'https://www.tensorflow.org/hub' },
        { title: 'Computer Vision with Python', url: 'https://github.com/opencv/opencv-python' }
      ]
    },
    {
      name: 'Content Recommendation Engine',
      description: 'Build a machine learning system that recommends content based on user behavior. Learn about collaborative filtering and content-based recommendations.',
      icon: '⭐',
      difficulty: 'Advanced',
      technologies: ['Python', 'Scikit-learn', 'Collaborative Filtering', 'Vector DB'],
      useCases: ['E-commerce', 'Video platforms', 'Content platforms'],
      references: [
        { title: 'Recommendation Systems', url: 'https://github.com/topics/recommendation-system' },
        { title: 'Collaborative Filtering', url: 'https://surprise.readthedocs.io/' },
        { title: 'Deep Learning for Recommendations', url: 'https://arxiv.org/abs/1906.04284' }
      ]
    },
    {
      name: 'Voice Assistant',
      description: 'Develop a voice-activated AI assistant with speech-to-text, natural language understanding, and text-to-speech capabilities.',
      icon: '🎤',
      difficulty: 'Advanced',
      technologies: ['Python', 'OpenAI Whisper', 'Text-to-Speech', 'LLMs'],
      useCases: ['Smart home control', 'Personal assistant', 'Accessibility tools'],
      references: [
        { title: 'OpenAI Whisper', url: 'https://github.com/openai/whisper' },
        { title: 'Speech Recognition Tutorial', url: 'https://www.deeplearning.ai/short-courses/developing-llm-applications-with-python/' },
        { title: 'Text-to-Speech Models', url: 'https://github.com/topics/text-to-speech' }
      ]
    }
  ];

  return (
    <div className="page">
      <Link to="/course" className="back-btn">← Back to Course</Link>
      <h1 className="title">Hands-on Projects</h1>
      <p className="subtitle">Apply your Generative AI knowledge with these real-world projects</p>

      {projects.map((project, index) => (
        <div key={index} style={{ marginBottom: '40px', backgroundColor: '#ffffff', border: '1px solid #e8eaed', borderRadius: '12px', padding: '24px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)'; e.currentTarget.style.transform = 'translateY(-4px)'; }} onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
            <span style={{ fontSize: '2.5rem', marginRight: '16px' }}>{project.icon}</span>
            <div>
              <h2 style={{ margin: 0, color: '#0f9d58', fontSize: '1.6rem' }}>{project.name}</h2>
              <span style={{ backgroundColor: project.difficulty === 'Advanced' ? '#ea4335' : project.difficulty === 'Intermediate' ? '#fbbc04' : '#34a853', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '500' }}>
                {project.difficulty}
              </span>
            </div>
          </div>

          <p style={{ marginBottom: '16px', lineHeight: '1.6', color: '#202124' }}>{project.description}</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '20px' }}>
            <div>
              <strong style={{ color: '#0f9d58' }}>Technologies:</strong>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '8px' }}>
                {project.technologies.map((tech, idx) => (
                  <span key={idx} style={{ backgroundColor: '#f1f3f4', padding: '4px 8px', borderRadius: '4px', fontSize: '0.85rem', color: '#202124', border: '1px solid #dadce0' }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <strong style={{ color: '#0f9d58' }}>Use Cases:</strong>
              <ul style={{ margin: '8px 0 0 0', paddingLeft: '20px', fontSize: '0.9rem' }}>
                {project.useCases.map((useCase, idx) => (
                  <li key={idx} style={{ marginBottom: '4px' }}>{useCase}</li>
                ))}
              </ul>
            </div>
          </div>

          <div style={{ borderTop: '1px solid #e8eaed', paddingTop: '16px' }}>
            <strong style={{ color: '#0f9d58', display: 'block', marginBottom: '12px' }}>📚 Reference Links:</strong>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '12px' }}>
              {project.references.map((ref, idx) => (
                <a
                  key={idx}
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 12px',
                    backgroundColor: '#f1f3f4',
                    border: '1px solid #dadce0',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    color: '#0f9d58',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#e8eaed';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#f1f3f4';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <span>→</span>
                  <span>{ref.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}

      <div className="example" style={{ backgroundColor: '#e8f5e8', borderLeftColor: '#34a853', marginTop: '40px' }}>
        <h3>🚀 Getting Started with Projects</h3>
        <ul>
          <li><strong>Start with Beginner Projects:</strong> Build confidence with simpler projects before tackling advanced ones.</li>
          <li><strong>Use Free APIs & Models:</strong> Most LLMs offer free tiers - start there before scaling.</li>
          <li><strong>Follow Best Practices:</strong> Use version control (Git), write documentation, and test thoroughly.</li>
          <li><strong>Deploy Your Projects:</strong> Use platforms like Heroku, Vercel, or AWS to deploy your applications.</li>
          <li><strong>Share Your Work:</strong> Create portfolios on GitHub to showcase your projects to potential employers.</li>
        </ul>
      </div>

      <div className="example" style={{ backgroundColor: '#f3e5f5', borderLeftColor: '#9c27b0', marginTop: '20px' }}>
        <h3>💡 Project Development Tips</h3>
        <ul>
          <li><strong>Combine Multiple Projects:</strong> Create a portfolio by building variations of projects with different technologies.</li>
          <li><strong>Add User Interfaces:</strong> Build web interfaces (React/Vue) for your AI models to make them more interactive.</li>
          <li><strong>Implement Error Handling:</strong> Handle edge cases and errors gracefully in production.</li>
          <li><strong>Optimize Performance:</strong> Use caching, batching, and efficient algorithms to improve speed.</li>
          <li><strong>Gather Feedback:</strong> User feedback is valuable - iterate and improve continuously.</li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;