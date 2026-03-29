import React from 'react';
import { Link } from 'react-router-dom';

const Tools = () => {
  const toolCategories = [
    {
      title: "Large Language Models & APIs",
      tools: [
        {
          name: "OpenAI GPT-4",
          description: "Most advanced LLM for text generation, code completion, and complex reasoning tasks.",
          useCases: ["Content creation", "Code generation", "Data analysis", "Chatbots"],
          pricing: "Pay-per-use",
          link: "https://openai.com/gpt-4",
          docs: "https://platform.openai.com/docs"
        },
        {
          name: "Claude (Anthropic)",
          description: "Safety-focused LLM with strong reasoning capabilities and long context windows.",
          useCases: ["Research assistance", "Legal analysis", "Complex reasoning", "Creative writing"],
          pricing: "Pay-per-use",
          link: "https://www.anthropic.com/claude",
          docs: "https://docs.anthropic.com/claude/docs"
        },
        {
          name: "Google Gemini",
          description: "Multimodal LLM that can process text, images, and code simultaneously.",
          useCases: ["Image analysis", "Code review", "Multimodal applications", "Research"],
          pricing: "Free tier + Paid",
          link: "https://gemini.google.com",
          docs: "https://ai.google.dev/docs"
        },
        {
          name: "Hugging Face Models",
          description: "Open-source models and community platform for AI development.",
          useCases: ["Fine-tuning", "Model hosting", "Research", "Custom AI solutions"],
          pricing: "Free + Paid tiers",
          link: "https://huggingface.co",
          docs: "https://huggingface.co/docs"
        }
      ]
    },
    {
      title: "AI Development Frameworks",
      tools: [
        {
          name: "LangChain",
          description: "Framework for building applications with LLMs, chains, and agent systems.",
          useCases: ["Agent development", "LLM applications", "RAG systems", "Tool integration"],
          pricing: "Open source",
          link: "https://www.langchain.com",
          docs: "https://python.langchain.com/docs"
        },
        {
          name: "LlamaIndex (formerly GPT Index)",
          description: "Data framework for LLM applications, specializing in RAG and data ingestion.",
          useCases: ["Document Q&A", "Knowledge bases", "Data indexing", "RAG applications"],
          pricing: "Open source",
          link: "https://www.llamaindex.ai",
          docs: "https://docs.llamaindex.ai"
        },
        {
          name: "AutoGen",
          description: "Microsoft's framework for building multi-agent AI systems.",
          useCases: ["Multi-agent systems", "Conversational AI", "Task automation", "Agent orchestration"],
          pricing: "Open source",
          link: "https://microsoft.github.io/autogen",
          docs: "https://microsoft.github.io/autogen/docs"
        },
        {
          name: "CrewAI",
          description: "Framework for orchestrating role-playing AI agents in collaborative teams.",
          useCases: ["Agent collaboration", "Role-based AI", "Complex workflows", "Team automation"],
          pricing: "Open source",
          link: "https://www.crewai.com",
          docs: "https://docs.crewai.com"
        }
      ]
    },
    {
      title: "AI Development Platforms",
      tools: [
        {
          name: "Replit",
          description: "Online IDE with AI coding assistance and collaborative development.",
          useCases: ["AI-assisted coding", "Prototyping", "Learning", "Team collaboration"],
          pricing: "Free + Paid",
          link: "https://replit.com",
          docs: "https://docs.replit.com"
        },
        {
          name: "Cursor",
          description: "AI-first code editor built on VS Code with advanced AI features.",
          useCases: ["AI coding", "Code completion", "Refactoring", "Debugging"],
          pricing: "Free + Paid",
          link: "https://cursor.sh",
          docs: "https://docs.cursor.sh"
        },
        {
          name: "GitHub Copilot",
          description: "AI pair programmer that suggests code and entire functions.",
          useCases: ["Code completion", "Code review", "Documentation", "Testing"],
          pricing: "Paid (subscription)",
          link: "https://github.com/features/copilot",
          docs: "https://docs.github.com/en/copilot"
        },
        {
          name: "Vercel AI SDK",
          description: "Full-stack AI development platform with edge deployment.",
          useCases: ["AI app deployment", "Edge computing", "Full-stack AI", "Real-time applications"],
          pricing: "Free tier + Paid",
          link: "https://vercel.com/docs/ai",
          docs: "https://sdk.vercel.ai/docs"
        }
      ]
    },
    {
      title: "Specialized AI Tools",
      tools: [
        {
          name: "Midjourney",
          description: "AI-powered image generation with artistic and creative capabilities.",
          useCases: ["Art creation", "Design concepts", "Visual storytelling", "Marketing materials"],
          pricing: "Paid (subscription)",
          link: "https://www.midjourney.com",
          docs: "https://docs.midjourney.com"
        },
        {
          name: "Stable Diffusion",
          description: "Open-source image generation model with extensive customization options.",
          useCases: ["Custom image generation", "Art creation", "Research", "Fine-tuning"],
          pricing: "Open source",
          link: "https://stability.ai",
          docs: "https://stability.ai/stable-diffusion"
        },
        {
          name: "Whisper (OpenAI)",
          description: "State-of-the-art speech recognition and transcription model.",
          useCases: ["Audio transcription", "Voice interfaces", "Language translation", "Accessibility"],
          pricing: "Open source",
          link: "https://openai.com/research/whisper",
          docs: "https://github.com/openai/whisper"
        },
        {
          name: "Pinecone",
          description: "Vector database for AI applications, specializing in similarity search.",
          useCases: ["Semantic search", "Recommendation systems", "RAG applications", "Similarity matching"],
          pricing: "Free tier + Paid",
          link: "https://www.pinecone.io",
          docs: "https://docs.pinecone.io"
        }
      ]
    },
    {
      title: "AI Ethics & Safety Tools",
      tools: [
        {
          name: "OpenAI Moderation API",
          description: "Content moderation and safety classification for AI-generated content.",
          useCases: ["Content filtering", "Safety checks", "Compliance", "Risk assessment"],
          pricing: "Pay-per-use",
          link: "https://platform.openai.com/docs/guides/moderation",
          docs: "https://platform.openai.com/docs/api-reference/moderation"
        },
        {
          name: "Hugging Face Evaluate",
          description: "Comprehensive evaluation framework for AI models and datasets.",
          useCases: ["Model evaluation", "Bias detection", "Performance metrics", "Benchmarking"],
          pricing: "Open source",
          link: "https://huggingface.co/evaluate",
          docs: "https://huggingface.co/docs/evaluate"
        },
        {
          name: "Arthur AI",
          description: "AI model monitoring and governance platform.",
          useCases: ["Model monitoring", "Drift detection", "Performance tracking", "Compliance"],
          pricing: "Paid (enterprise)",
          link: "https://www.arthur.ai",
          docs: "https://docs.arthur.ai"
        }
      ]
    }
  ];

  return (
    <div className="page">
      <Link to="/course" className="back-btn">← Back to Course</Link>
      <h1 className="title">AI Tools & Frameworks</h1>
      <div className="content">
        <p>Explore the essential tools and frameworks for building AI applications. This comprehensive guide covers everything from large language models to development platforms, with practical use cases and learning resources.</p>

        {toolCategories.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <h2 style={{ color: '#0f9d58', borderBottom: '2px solid #0f9d58', paddingBottom: '8px', marginTop: '40px' }}>
              {category.title}
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '20px', marginTop: '20px' }}>
              {category.tools.map((tool, toolIndex) => (
                <div key={toolIndex} className="project-item" style={{ margin: 0 }}>
                  <h3 style={{ color: '#0f9d58', marginBottom: '10px' }}>{tool.name}</h3>
                  <p style={{ marginBottom: '15px', lineHeight: '1.6' }}>{tool.description}</p>

                  <div style={{ marginBottom: '15px' }}>
                    <strong style={{ color: '#202124' }}>Use Cases:</strong>
                    <ul style={{ marginTop: '5px', paddingLeft: '20px' }}>
                      {tool.useCases.map((useCase, useIndex) => (
                        <li key={useIndex} style={{ marginBottom: '3px', fontSize: '0.9rem' }}>{useCase}</li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ marginBottom: '15px' }}>
                    <strong style={{ color: '#202124' }}>Pricing:</strong>
                    <span style={{ marginLeft: '8px', fontSize: '0.9rem', color: '#5f6368' }}>{tool.pricing}</span>
                  </div>

                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    <a
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn"
                      style={{ fontSize: '0.85rem', padding: '6px 12px', textDecoration: 'none' }}
                    >
                      Visit Site
                    </a>
                    <a
                      href={tool.docs}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: '0.85rem',
                        padding: '6px 12px',
                        backgroundColor: '#f8f9fa',
                        color: '#202124',
                        border: '1px solid #dadce0',
                        borderRadius: '4px',
                        textDecoration: 'none',
                        display: 'inline-block',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseOver={(e) => e.target.style.backgroundColor = '#e8eaed'}
                      onMouseOut={(e) => e.target.style.backgroundColor = '#f8f9fa'}
                    >
                      Documentation
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="example" style={{ backgroundColor: '#e8f5e8', borderLeftColor: '#34a853', marginTop: '40px' }}>
          <h3>💡 Getting Started Tips</h3>
          <ul>
            <li><strong>Start with Free Tiers:</strong> Most platforms offer generous free tiers for learning and experimentation.</li>
            <li><strong>Combine Tools:</strong> Use multiple tools together - e.g., LangChain with OpenAI API for agent development.</li>
            <li><strong>Check Documentation:</strong> Always refer to official documentation for the most up-to-date information.</li>
            <li><strong>Community Support:</strong> Join communities like Reddit (r/MachineLearning), Discord servers, and GitHub discussions.</li>
            <li><strong>Stay Updated:</strong> AI tools evolve rapidly - follow official blogs and newsletters for updates.</li>
          </ul>
        </div>

        <h2>Learning Resources</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginTop: '20px' }}>
          <div className="project-item" style={{ margin: 0 }}>
            <h3>Official Documentation</h3>
            <p>Always start with official documentation for accurate, up-to-date information.</p>
            <ul>
              <li><a href="https://platform.openai.com/docs" target="_blank" rel="noopener noreferrer">OpenAI API Docs</a></li>
              <li><a href="https://docs.anthropic.com" target="_blank" rel="noopener noreferrer">Anthropic Claude Docs</a></li>
              <li><a href="https://python.langchain.com" target="_blank" rel="noopener noreferrer">LangChain Docs</a></li>
            </ul>
          </div>

          <div className="project-item" style={{ margin: 0 }}>
            <h3>Learning Platforms</h3>
            <p>Structured courses and tutorials for AI development.</p>
            <ul>
              <li><a href="https://www.coursera.org" target="_blank" rel="noopener noreferrer">Coursera AI Courses</a></li>
              <li><a href="https://www.udacity.com" target="_blank" rel="noopener noreferrer">Udacity AI Nanodegree</a></li>
              <li><a href="https://www.fast.ai" target="_blank" rel="noopener noreferrer">Fast.ai Deep Learning</a></li>
            </ul>
          </div>

          <div className="project-item" style={{ margin: 0 }}>
            <h3>Communities</h3>
            <p>Connect with other AI developers and learners.</p>
            <ul>
              <li><a href="https://www.reddit.com/r/MachineLearning" target="_blank" rel="noopener noreferrer">r/MachineLearning</a></li>
              <li><a href="https://www.reddit.com/r/LangChain" target="_blank" rel="noopener noreferrer">r/LangChain</a></li>
              <li><a href="https://discord.gg/ai" target="_blank" rel="noopener noreferrer">AI Discord Communities</a></li>
            </ul>
          </div>
        </div>

        <div className="example" style={{ backgroundColor: '#fff3cd', borderLeftColor: '#ffc107', marginTop: '30px' }}>
          <h3>⚠️ Important Notes</h3>
          <ul>
            <li><strong>API Costs:</strong> Monitor your usage as API calls can accumulate costs quickly.</li>
            <li><strong>Rate Limits:</strong> Most APIs have rate limits - design your applications accordingly.</li>
            <li><strong>Data Privacy:</strong> Be mindful of data privacy laws (GDPR, CCPA) when handling user data.</li>
            <li><strong>Model Limitations:</strong> Understand the limitations and biases of different AI models.</li>
            <li><strong>Ethical AI:</strong> Always consider the ethical implications of your AI applications.</li>
          </ul>
        </div>

        <h2>Additional References & Resources</h2>
        <div className="content">
          <h3>AI Ethics & Governance</h3>
          <ul>
            <li><a href="https://www.partnershiponai.org/" target="_blank" rel="noopener noreferrer">Partnership on AI</a> - Industry consortium for responsible AI</li>
            <li><a href="https://aiethicsguidelines.com/" target="_blank" rel="noopener noreferrer">AI Ethics Guidelines Global Inventory</a></li>
            <li><a href="https://www.aiforgood.itu.int/" target="_blank" rel="noopener noreferrer">AI for Good (ITU)</a></li>
          </ul>

          <h3>Research & Academic Resources</h3>
          <ul>
            <li><a href="https://arxiv.org/list/cs.AI/recent" target="_blank" rel="noopener noreferrer">ArXiv AI Papers</a> - Latest AI research papers</li>
            <li><a href="https://paperswithcode.com/" target="_blank" rel="noopener noreferrer">Papers with Code</a> - Research papers with implementations</li>
            <li><a href="https://www.openai.com/research/" target="_blank" rel="noopener noreferrer">OpenAI Research</a></li>
          </ul>

          <h3>Industry Reports & Trends</h3>
          <ul>
            <li><a href="https://www.mckinsey.com/business-functions/mckinsey-digital/our-insights/the-state-of-ai" target="_blank" rel="noopener noreferrer">McKinsey AI Reports</a></li>
            <li><a href="https://www.gartner.com/en/topics/ai" target="_blank" rel="noopener noreferrer">Gartner AI Research</a></li>
            <li><a href="https://www.statest.ai/" target="_blank" rel="noopener noreferrer">State of AI Report</a></li>
          </ul>

          <h3>Certification & Career Resources</h3>
          <ul>
            <li><a href="https://www.tensorflow.org/certificate" target="_blank" rel="noopener noreferrer">TensorFlow Developer Certificate</a></li>
            <li><a href="https://aws.amazon.com/certification/certified-machine-learning-specialty/" target="_blank" rel="noopener noreferrer">AWS Machine Learning Certification</a></li>
            <li><a href="https://www.coursera.org/professional-certificates/google-cloud-professional-cloud-architect" target="_blank" rel="noopener noreferrer">Google Cloud AI Certifications</a></li>
          </ul>

          <h3>News & Updates</h3>
          <ul>
            <li><a href="https://www.technologyreview.com/topic/artificial-intelligence/" target="_blank" rel="noopener noreferrer">MIT Technology Review AI</a></li>
            <li><a href="https://venturebeat.com/ai/" target="_blank" rel="noopener noreferrer">VentureBeat AI News</a></li>
            <li><a href="https://www.artificialintelligence-news.com/" target="_blank" rel="noopener noreferrer">AI News</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tools;