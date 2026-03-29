import React from 'react';
import { Link } from 'react-router-dom';

const Prompt = () => {
  return (
    <div className="page">
      <Link to="/course" className="back-btn">← Back to Course</Link>
      <h1 className="title">Prompt Engineering</h1>
      <div className="content">
        <p>Prompt engineering is the art of crafting effective prompts to get the best responses from AI language models. A well-designed prompt can significantly improve the quality and relevance of the AI's output.</p>
        <h2>Bad Prompt vs Good Prompt</h2>
        <div className="example bad">
          <h3>Bad Prompt:</h3>
          <p>"Write about cats"</p>
          <p><em>Result:</em> Generic, unfocused response that may not meet specific needs.</p>
        </div>
        <div className="example good">
          <h3>Good Prompt:</h3>
          <p>"Write a 300-word article about the benefits of adopting cats for families with children, including tips for introducing a new cat to the home and common behavioral issues."</p>
          <p><em>Result:</em> Specific, detailed, and targeted response that addresses the user's exact requirements.</p>
        </div>
        <h2>Tips for Effective Prompts:</h2>
        <ul>
          <li>Be specific about the desired output format and length.</li>
          <li>Provide context and background information.</li>
          <li>Use clear, concise language.</li>
          <li>Include examples if appropriate.</li>
          <li>Specify the tone or style you want.</li>
        </ul>
      </div>

      <h2>References & Further Reading</h2>
      <div className="content">
        <h3>Prompt Engineering Guides</h3>
        <ul>
          <li><a href="https://platform.openai.com/docs/guides/prompt-engineering" target="_blank" rel="noopener noreferrer">OpenAI: Prompt Engineering Guide</a></li>
          <li><a href="https://docs.anthropic.com/claude/docs/prompt-engineering" target="_blank" rel="noopener noreferrer">Anthropic: Prompt Engineering</a></li>
          <li><a href="https://learnprompting.org/" target="_blank" rel="noopener noreferrer">Learn Prompting (Comprehensive Guide)</a></li>
        </ul>

        <h3>Research Papers</h3>
        <ul>
          <li><a href="https://arxiv.org/abs/2107.13586" target="_blank" rel="noopener noreferrer">"Chain-of-Thought Prompting Elicits Reasoning" (Wei et al.)</a></li>
          <li><a href="https://arxiv.org/abs/2201.11903" target="_blank" rel="noopener noreferrer">"Large Language Models are Zero-Shot Reasoners" (Kojima et al.)</a></li>
        </ul>

        <h3>Practical Resources</h3>
        <ul>
          <li><a href="https://www.promptingguide.ai/" target="_blank" rel="noopener noreferrer">Prompt Engineering Guide</a></li>
          <li><a href="https://docs.google.com/spreadsheets/d/1E6CJyYgCnwXhWRK6vGOmG8T7BvP0-Gawh8l5cW5iKQ/edit" target="_blank" rel="noopener noreferrer">Prompt Engineering Cheat Sheet</a></li>
          <li><a href="https://github.com/dair-ai/Prompt-Engineering-Guide" target="_blank" rel="noopener noreferrer">GitHub: Prompt Engineering Guide</a></li>
        </ul>

        <h3>Tools & Platforms</h3>
        <ul>
          <li><a href="https://chat.openai.com/" target="_blank" rel="noopener noreferrer">ChatGPT (for practice)</a></li>
          <li><a href="https://claude.ai/" target="_blank" rel="noopener noreferrer">Claude Chat (for practice)</a></li>
          <li><a href="https://www.promptperfect.jina.ai/" target="_blank" rel="noopener noreferrer">PromptPerfect (optimization tool)</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Prompt;