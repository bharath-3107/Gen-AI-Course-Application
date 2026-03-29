import React from 'react';
import { Link } from 'react-router-dom';

const LLM = () => {
  return (
    <div className="page">
      <Link to="/course" className="back-btn">← Back to Course</Link>
      <h1 className="title">LLM (Large Language Models)</h1>
      <div className="content">
        <p>Large Language Models (LLMs) are advanced AI systems trained on vast amounts of text data to understand and generate human-like language. They use deep learning techniques, particularly transformer architectures, to process and predict text.</p>
        <h2>How LLMs Work:</h2>
        <ol>
          <li><strong>Training:</strong> The model is trained on billions of text examples to learn patterns in language.</li>
          <li><strong>Tokenization:</strong> Text is broken down into smaller units called tokens (words, subwords, or characters).</li>
          <li><strong>Prediction:</strong> The model predicts the next token based on the context of previous tokens.</li>
          <li><strong>Fine-tuning:</strong> The model can be further trained on specific tasks or domains for better performance.</li>
        </ol>
        <p>Popular LLMs include GPT series, BERT, and LLaMA. They power applications like chatbots, translation services, and content generation tools.</p>
      </div>

      <h2>References & Further Reading</h2>
      <div className="content">
        <h3>Official Documentation</h3>
        <ul>
          <li><a href="https://platform.openai.com/docs/introduction" target="_blank" rel="noopener noreferrer">OpenAI API Documentation</a></li>
          <li><a href="https://docs.anthropic.com/claude/docs" target="_blank" rel="noopener noreferrer">Anthropic Claude Documentation</a></li>
          <li><a href="https://huggingface.co/docs/transformers/index" target="_blank" rel="noopener noreferrer">Hugging Face Transformers</a></li>
        </ul>

        <h3>Research Papers</h3>
        <ul>
          <li><a href="https://arxiv.org/abs/2005.14165" target="_blank" rel="noopener noreferrer">"Language Models are Few-Shot Learners" (Brown et al.)</a></li>
          <li><a href="https://arxiv.org/abs/1810.04805" target="_blank" rel="noopener noreferrer">"BERT: Pre-training of Deep Bidirectional Transformers" (Devlin et al.)</a></li>
          <li><a href="https://arxiv.org/abs/2302.13971" target="_blank" rel="noopener noreferrer">"LLaMA: Open and Efficient Foundation Language Models" (Touvron et al.)</a></li>
        </ul>

        <h3>Learning Resources</h3>
        <ul>
          <li><a href="https://www.coursera.org/learn/natural-language-processing" target="_blank" rel="noopener noreferrer">Coursera: Natural Language Processing</a></li>
          <li><a href="https://huggingface.co/learn/nlp-course" target="_blank" rel="noopener noreferrer">Hugging Face NLP Course</a></li>
          <li><a href="https://fullstackdeeplearning.com/course/2022/" target="_blank" rel="noopener noreferrer">Full Stack Deep Learning</a></li>
        </ul>

        <h3>Communities</h3>
        <ul>
          <li><a href="https://www.reddit.com/r/MachineLearning/" target="_blank" rel="noopener noreferrer">Reddit: r/MachineLearning</a></li>
          <li><a href="https://www.reddit.com/r/LanguageTechnology/" target="_blank" rel="noopener noreferrer">Reddit: r/LanguageTechnology</a></li>
        </ul>
      </div>
    </div>
  );
};

export default LLM;