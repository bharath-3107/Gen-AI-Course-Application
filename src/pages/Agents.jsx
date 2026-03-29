import React from 'react';
import { Link } from 'react-router-dom';

const Agents = () => {
  return (
    <div className="page">
      <Link to="/course" className="back-btn">← Back to Course</Link>
      <h1 className="title">Creating AI Agents</h1>
      <div className="content">
        <p>AI agents are autonomous systems that can perceive their environment, make decisions, and take actions to achieve specific goals. Learn how to design, build, and deploy intelligent agents using modern AI frameworks and tools.</p>

        <h2>What is an AI Agent?</h2>
        <p>An AI agent is a software entity that can:</p>
        <ul>
          <li><strong>Perceive</strong> its environment through sensors or APIs</li>
          <li><strong>Reason</strong> about situations and make decisions</li>
          <li><strong>Act</strong> upon the environment to achieve goals</li>
          <li><strong>Learn</strong> from experience to improve performance</li>
        </ul>

        <h2>Types of AI Agents</h2>

        <h3>1. Reactive Agents</h3>
        <p>Simple agents that respond directly to current perceptions without maintaining internal state.</p>
        <div className="example">
          <h4>Example: Simple Chatbot</h4>
          <p>Responds to user messages based on predefined rules or pattern matching.</p>
        </div>

        <h3>2. Model-Based Agents</h3>
        <p>Agents that maintain an internal model of the world and use it to plan actions.</p>
        <div className="example">
          <h4>Example: Navigation Agent</h4>
          <p>Uses maps and current location to plan routes and navigate to destinations.</p>
        </div>

        <h3>3. Goal-Based Agents</h3>
        <p>Agents that are designed to achieve specific objectives, using search and planning algorithms.</p>
        <div className="example">
          <h4>Example: Task Management Agent</h4>
          <p>Plans and executes complex multi-step tasks to achieve user-defined goals.</p>
        </div>

        <h3>4. Learning Agents</h3>
        <p>Advanced agents that can learn from experience and improve their performance over time.</p>
        <div className="example">
          <h4>Example: Personal Assistant</h4>
          <p>Learns user preferences and adapts behavior to provide better assistance.</p>
        </div>

        <h2>Building AI Agents: Step-by-Step</h2>

        <h3>Step 1: Define the Problem</h3>
        <p>Clearly identify what problem your agent will solve and what goals it should achieve.</p>
        <div className="example">
          <strong>Problem Statement:</strong> "Build an agent that can automatically categorize and respond to customer support emails."
        </div>

        <h3>Step 2: Choose the Right Tools and Frameworks</h3>

        <h4>Popular Frameworks for AI Agents:</h4>
        <ul>
          <li><strong>LangChain</strong> - Framework for building applications with LLMs</li>
          <li><strong>AutoGen</strong> - Multi-agent conversation framework</li>
          <li><strong>CrewAI</strong> - Framework for orchestrating role-playing AI agents</li>
          <li><strong>SmolAgents</strong> - Lightweight agent framework by Hugging Face</li>
          <li><strong>AgentVerse</strong> - Platform for creating and deploying AI agents</li>
        </ul>

        <h3>Step 3: Design the Agent Architecture</h3>
        <p>Plan the components of your agent:</p>
        <ul>
          <li><strong>Perception Module</strong> - How the agent gathers information</li>
          <li><strong>Reasoning Engine</strong> - Decision-making logic</li>
          <li><strong>Action Module</strong> - How the agent executes tasks</li>
          <li><strong>Memory System</strong> - How the agent stores and retrieves information</li>
          <li><strong>Learning Component</strong> - How the agent improves over time</li>
        </ul>

        <h3>Step 4: Implement Core Functionality</h3>

        <h4>Basic Agent Structure (Python with LangChain):</h4>
        <div className="example">
          <pre style={{ backgroundColor: '#f1f3f4', padding: '15px', borderRadius: '5px', overflow: 'auto' }}>
{`from langchain.agents import Agent
from langchain.llms import OpenAI
from langchain.tools import Tool

class MyAgent(Agent):
    def __init__(self):
        self.llm = OpenAI(temperature=0.7)
        self.tools = self.load_tools()
        self.memory = []

    def load_tools(self):
        # Define available tools
        return [
            Tool(name="Search", func=self.search_web),
            Tool(name="Calculator", func=self.calculate),
            Tool(name="Email", func=self.send_email)
        ]

    def perceive(self, input_data):
        # Process input from environment
        return self.process_input(input_data)

    def reason(self, perception):
        # Make decisions based on perception
        return self.llm.predict(f"Based on {perception}, what should I do?")

    def act(self, decision):
        # Execute the chosen action
        return self.execute_action(decision)

    def run(self, task):
        perception = self.perceive(task)
        decision = self.reason(perception)
        result = self.act(decision)
        return result`}
          </pre>
        </div>

        <h3>Step 5: Add Intelligence and Learning</h3>
        <p>Enhance your agent with advanced capabilities:</p>
        <ul>
          <li><strong>Natural Language Processing</strong> - Understand and generate human language</li>
          <li><strong>Machine Learning</strong> - Learn patterns from data</li>
          <li><strong>Reinforcement Learning</strong> - Learn through trial and error</li>
          <li><strong>Multi-modal Processing</strong> - Handle text, images, and other data types</li>
        </ul>

        <h3>Step 6: Test and Deploy</h3>
        <p>Thoroughly test your agent and deploy it to production:</p>
        <ul>
          <li>Unit testing for individual components</li>
          <li>Integration testing for agent workflows</li>
          <li>Performance testing under load</li>
          <li>Security and safety testing</li>
          <li>Continuous monitoring and improvement</li>
        </ul>

        <h2>Advanced Agent Patterns</h2>

        <h3>Multi-Agent Systems</h3>
        <p>Multiple agents working together to solve complex problems:</p>
        <ul>
          <li><strong>Coordinator Pattern</strong> - One agent manages others</li>
          <li><strong>Collaborative Pattern</strong> - Agents work as a team</li>
          <li><strong>Competitive Pattern</strong> - Agents compete for resources</li>
        </ul>

        <h3>Tool Integration</h3>
        <p>Connect your agent to external tools and APIs:</p>
        <ul>
          <li><strong>API Integration</strong> - Connect to web services</li>
          <li><strong>Database Access</strong> - Query and update data</li>
          <li><strong>File System Operations</strong> - Read and write files</li>
          <li><strong>External Tools</strong> - Use calculators, search engines, etc.</li>
        </ul>

        <h2>Best Practices for AI Agents</h2>

        <h3>Design Principles</h3>
        <ul>
          <li><strong>Modularity</strong> - Build reusable components</li>
          <li><strong>Transparency</strong> - Make agent decisions explainable</li>
          <li><strong>Safety</strong> - Implement guardrails and error handling</li>
          <li><strong>Efficiency</strong> - Optimize for performance and cost</li>
        </ul>

        <h3>Ethical Considerations</h3>
        <ul>
          <li><strong>Privacy</strong> - Protect user data and maintain confidentiality</li>
          <li><strong>Bias Mitigation</strong> - Ensure fair and unbiased decision-making</li>
          <li><strong>Accountability</strong> - Track agent actions and decisions</li>
          <li><strong>Human Oversight</strong> - Include human-in-the-loop mechanisms</li>
        </ul>

        <h2>Real-World Applications</h2>

        <div className="example">
          <h4>Customer Service Agent</h4>
          <p>Handles customer inquiries, provides support, and escalates complex issues to human representatives.</p>
        </div>

        <div className="example">
          <h4>Research Assistant</h4>
          <p>Conducts literature reviews, summarizes papers, and helps with data analysis for research projects.</p>
        </div>

        <div className="example">
          <h4>Trading Agent</h4>
          <p>Analyzes market data, makes investment decisions, and executes trades based on predefined strategies.</p>
        </div>

        <h2>Getting Started with Agent Development</h2>

        <h3>Recommended Learning Path</h3>
        <ol>
          <li>Learn Python programming fundamentals</li>
          <li>Study machine learning and NLP concepts</li>
          <li>Explore LangChain or similar frameworks</li>
          <li>Build simple reactive agents</li>
          <li>Implement more complex goal-based agents</li>
          <li>Experiment with multi-agent systems</li>
        </ol>

        <h3>Resources</h3>
        <ul>
          <li><strong>LangChain Documentation</strong> - Comprehensive guide for building LLM applications</li>
          <li><strong>OpenAI API</strong> - Access to powerful language models</li>
          <li><strong>Hugging Face Transformers</strong> - Pre-trained models and tools</li>
          <li><strong>AutoGen GitHub</strong> - Multi-agent conversation framework</li>
          <li><strong>AgentVerse</strong> - Platform for agent development and deployment</li>
        </ul>

        <div className="example" style={{ backgroundColor: '#e8f5e8', borderLeftColor: '#34a853' }}>
          <h4>💡 Pro Tip</h4>
          <p>Start with simple agents and gradually add complexity. Focus on solving real problems rather than building overly complex systems. Remember that the best agents are those that provide clear value to users while maintaining safety and reliability.</p>
        </div>
      </div>

      <h2>References & Further Reading</h2>
      <div className="content">
        <h3>Agent Frameworks Documentation</h3>
        <ul>
          <li><a href="https://python.langchain.com/docs/modules/agents/" target="_blank" rel="noopener noreferrer">LangChain Agents Documentation</a></li>
          <li><a href="https://microsoft.github.io/autogen/docs/" target="_blank" rel="noopener noreferrer">AutoGen Documentation</a></li>
          <li><a href="https://docs.crewai.com/" target="_blank" rel="noopener noreferrer">CrewAI Documentation</a></li>
          <li><a href="https://www.llamaindex.ai/documentation/" target="_blank" rel="noopener noreferrer">LlamaIndex Documentation</a></li>
        </ul>

        <h3>Research Papers</h3>
        <ul>
          <li><a href="https://arxiv.org/abs/2308.11421" target="_blank" rel="noopener noreferrer">"AutoGen: Enabling Next-Gen LLM Applications" (Wu et al.)</a></li>
          <li><a href="https://arxiv.org/abs/2210.03629" target="_blank" rel="noopener noreferrer">"Toolformer: Language Models Can Teach Themselves" (Schick et al.)</a></li>
          <li><a href="https://arxiv.org/abs/2303.17760" target="_blank" rel="noopener noreferrer">"HuggingGPT: Solving AI Tasks with ChatGPT" (Shen et al.)</a></li>
        </ul>

        <h3>Learning Resources</h3>
        <ul>
          <li><a href="https://www.coursera.org/learn/ai-agents" target="_blank" rel="noopener noreferrer">Coursera: AI Agents and Multi-Agent Systems</a></li>
          <li><a href="https://www.deeplearning.ai/short-courses/building-agentic-rag-applications/" target="_blank" rel="noopener noreferrer">DeepLearning.AI: Building Agentic RAG Applications</a></li>
          <li><a href="https://www.udacity.com/course/artificial-intelligence-nanodegree--nd889" target="_blank" rel="noopener noreferrer">Udacity: Artificial Intelligence Nanodegree</a></li>
        </ul>

        <h3>Practical Examples & Tutorials</h3>
        <ul>
          <li><a href="https://github.com/microsoft/autogen/tree/main/samples" target="_blank" rel="noopener noreferrer">AutoGen Code Examples</a></li>
          <li><a href="https://python.langchain.com/docs/use_cases/agents" target="_blank" rel="noopener noreferrer">LangChain Agent Examples</a></li>
          <li><a href="https://github.com/joaomdmoura/crewAI-examples" target="_blank" rel="noopener noreferrer">CrewAI Example Projects</a></li>
        </ul>

        <h3>Communities & Forums</h3>
        <ul>
          <li><a href="https://www.reddit.com/r/LangChain/" target="_blank" rel="noopener noreferrer">Reddit: r/LangChain</a></li>
          <li><a href="https://www.reddit.com/r/AI_Agents/" target="_blank" rel="noopener noreferrer">Reddit: r/AI_Agents</a></li>
          <li><a href="https://discord.gg/pAbnFJrkgZ" target="_blank" rel="noopener noreferrer">LangChain Discord</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Agents;