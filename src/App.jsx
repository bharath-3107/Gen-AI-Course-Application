import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Breadcrumbs from './components/Breadcrumbs';
import Home from './pages/Home';
import Course from './pages/Course';
import Intro from './pages/Intro';
import LLM from './pages/LLM';
import Prompt from './pages/Prompt';
import Agents from './pages/Agents';
import Tools from './pages/Tools';
import Projects from './pages/Projects';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          
          <Navbar />

          <div className="main-layout">
            
            <Sidebar />

            <main className="main-content">
              
              <Breadcrumbs />

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/course" element={<Course />} />
                <Route path="/intro" element={<Intro />} />
                <Route path="/llm" element={<LLM />} />
                <Route path="/prompt" element={<Prompt />} />
                <Route path="/agents" element={<Agents />} />
                <Route path="/tools" element={<Tools />} />
                <Route path="/projects" element={<Projects />} />
              </Routes>

            </main>

          </div>

        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;