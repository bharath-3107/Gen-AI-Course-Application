import React from 'react';
import { Link } from 'react-router-dom';

const Intro = () => {
  return (
    <div className="page">
      <Link to="/course" className="back-btn">← Back to Course</Link>
      <h1 className="title">Introduction to AI</h1>
      <div className="content">
        <p>Generative AI refers to artificial intelligence systems that can create new content, such as text, images, music, or code. Unlike traditional AI that focuses on analysis and prediction, generative AI produces original outputs based on patterns learned from training data.</p>
        <h2>Examples of Generative AI:</h2>
        <ul>
          <li><strong>Text Generation:</strong> Creating articles, stories, or code using models like GPT.</li>
          <li><strong>Image Creation:</strong> Generating images from descriptions using tools like DALL-E.</li>
          <li><strong>Music Composition:</strong> Creating new melodies or harmonies.</li>
          <li><strong>Code Generation:</strong> Writing code snippets based on natural language prompts.</li>
        </ul>
        <p>Generative AI has applications in content creation, design, education, and many other fields, making it easier for humans to produce creative work with the help of machines.</p>
      </div>

      <h2>References & Further Reading</h2>
      <div className="content">
        <h3>Official Resources</h3>
        <ul>
          <li><a href="https://en.wikipedia.org/wiki/Generative_artificial_intelligence" target="_blank" rel="noopener noreferrer">Wikipedia: Generative AI</a></li>
          <li><a href="https://www.deeplearning.ai/courses/generative-ai-with-llms/" target="_blank" rel="noopener noreferrer">DeepLearning.AI: Generative AI with LLMs</a></li>
          <li><a href="https://developers.google.com/machine-learning/generative-ai" target="_blank" rel="noopener noreferrer">Google AI: Generative AI</a></li>
        </ul>

        <h3>Research Papers</h3>
        <ul>
          <li><a href="https://arxiv.org/abs/2005.14165" target="_blank" rel="noopener noreferrer">"Generative Adversarial Networks" (Goodfellow et al.)</a></li>
          <li><a href="https://arxiv.org/abs/1706.03762" target="_blank" rel="noopener noreferrer">"Attention Is All You Need" (Vaswani et al.)</a></li>
        </ul>

        <h3>Learning Platforms</h3>
        <ul>
          <li><a href="https://www.coursera.org/learn/ai-for-everyone" target="_blank" rel="noopener noreferrer">Coursera: AI For Everyone</a></li>
          <li><a href="https://www.edx.org/learn/artificial-intelligence" target="_blank" rel="noopener noreferrer">edX: Artificial Intelligence Courses</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Intro;