import React, { useEffect, useRef, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
// Import additional Prism language components
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-java";
import "prismjs/components/prism-python";
import "prismjs/components/prism-csharp";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";
import { FiMinimize2, FiMaximize2, FiX } from "react-icons/fi";
import Resume from "../../assets/Xolile-Nxiweni-myCV.pdf";
import "./Home.css";

const Home = () => {
  const [isClosed, setIsClosed] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("javascript");
  
  // Code samples for different languages
  const codeSamples = {
    javascript: `class Developer {
  constructor() {
    this.name = 'Xoli Nxiweni';
    this.role = 'Software Engineer';
    this.skills = [
      'MERN Stack',
      'React Native',
      'Firebase',
      'Redux'
    ];
  }
  buildSolution() {
    return 'Innovative & Efficient';
  }
}`,
    typescript: `class Developer {
  name: string;
  role: string;
  skills: string[];

  constructor() {
    this.name = 'Xoli Nxiweni';
    this.role = 'Software Engineer';
    this.skills = [
      'MERN Stack', 
      'React Native',
      'Firebase',
      'Redux'
    ];
  }

  buildSolution(): string {
    return 'Innovative & Efficient';
  }
}`,
    java: `public class Developer {
  private String name;
  private String role;
  private String[] skills;

  public Developer() {
    this.name = "Xoli Nxiweni";
    this.role = "Software Engineer";
    this.skills = new String[] {
      "MERN Stack", 
      "React Native",
      "Firebase",
      "Redux"
    };
  }

  public String buildSolution() {
    return "Innovative & Efficient";
  }
}`,
    python: `class Developer:
  def __init__(self):
    self.name = 'Xoli Nxiweni'
    self.role = 'Software Engineer'
    self.skills = [
      'MERN Stack', 
      'React Native',
      'Firebase',
      'Redux'
    ]
  
  def build_solution(self):
    return 'Innovative & Efficient'`,
    csharp: `public class Developer 
{
  public string Name { get; set; }
  public string Role { get; set; }
  public List<string> Skills { get; set; }

  public Developer() 
  {
    Name = "Xoli Nxiweni";
    Role = "Software Engineer";
    Skills = new List<string> {
      "MERN Stack",
      "React Native",
      "Firebase",
      "Redux"
    };
  }

  public string BuildSolution() 
  {
    return "Innovative & Efficient";
  }
}`
  };

  const [code, setCode] = useState(codeSamples.javascript);
  const codeDisplayRef = useRef(null);
  const codeWindowRef = useRef(null);
  const [rgbPosition, setRgbPosition] = useState(0);
  const [rgbActive, setRgbActive] = useState(true);

  // Handle language change
  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    setCurrentLanguage(lang);
    setCode(codeSamples[lang]);
  };

  // Handle fullscreen toggle
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      codeWindowRef.current?.requestFullscreen().then(() => setIsFullscreen(true)).catch(console.error);
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(console.error);
    }
  };

  // Highlight code using Prism.js
  useEffect(() => {
    if (codeDisplayRef.current) {
      codeDisplayRef.current.innerHTML = Prism.highlight(
        code,
        Prism.languages[currentLanguage],
        currentLanguage
      );
    }
  }, [code, currentLanguage]);

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  // Handle RGB background animation
  useEffect(() => {
    const interval = setInterval(() => {
      if (rgbActive) {
        setRgbPosition(prev => (prev + 1) % 360);
      }
    }, 50);
    
    return () => clearInterval(interval);
  }, [rgbActive]);

  useEffect(() => {
    // Toggle RGB lights on/off every 30 seconds
    const toggleInterval = setInterval(() => {
      setRgbActive(prev => !prev);
    }, 30000);
    
    return () => clearInterval(toggleInterval);
  }, []);

  // Tech stack data - Updated as requested
  const techStack = [
    { name: "React", icon: "react/react-original" },
    { name: "Node.js", icon: "nodejs/nodejs-original" },
    { name: "MongoDB", icon: "mongodb/mongodb-original" },
    { name: "Express", icon: "express/express-original" },
    { name: "Redux", icon: "redux/redux-original" },
    { name: "Firebase", icon: "firebase/firebase-plain" },
    { name: "JavaScript", icon: "javascript/javascript-original" },
    { name: "TypeScript", icon: "typescript/typescript-original" },
    { name: "HTML5", icon: "html5/html5-original" },
    { name: "CSS3", icon: "css3/css3-original" },
    { name: "SQLite", icon: "sqlite/sqlite-original" },
    { name: "GitHub", icon: "github/github-original" },
  ];

  return (
    <div id="homeSection" className={`homeScreen ${rgbActive ? 'rgb-active' : ''}`} style={{"--rgb-position": `${rgbPosition}deg`}}>
      {/* Header */}
      <header className="header">
        <a href={Resume} download className="resume-btn">
          <FaDownload /> Download Resume
        </a>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Left Section */}
        <div className="left-section">
          <h1 className="name">
            Hi, I'm <span className="highlight">Xoli</span> Nxiweni
          </h1>
          <h2 className="title">A Junior Software Engineer</h2>
          <p className="bio">
            I'm a full-stack developer focusing on MERN stack.
            I build innovative solutions with clean, efficient code and a focus on data integrity, user experience along with user-friendly interfaces.
          </p>
          <div className="social-links">
            <a
              href="https://github.com/Xoli-Nxiweni"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/xolinxiweni/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaLinkedin />
            </a>
            <a href="mailto:xolinxiweni@gmail.com" className="social-link">
              <FaEnvelope />
            </a>
          </div>
          <div className="tech-stack">
            <h3>Tech Stack</h3>
            <div className="tech-badges">
              {techStack.map((tech, index) => (
                <span key={index} className="tech-badge">
                  <img
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}.svg`}
                    alt={tech.name}
                    className="tech-badge-icon"
                  />
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <div className="hero-image">
            {!isClosed && (
              <div
                className={`code-window ${isFullscreen ? "fullscreen" : ""}`}
                ref={codeWindowRef}
              >
                <div className="code-header">
                  <div className="code-dots">
                    <button className="code-dot close" onClick={() => setIsClosed(true)}>
                      <FiX className="window-icon" />
                    </button>
                    <button
                      className="code-dot minimize"
                      onClick={() => setIsMinimized(!isMinimized)}
                    >
                      <FiMinimize2 className="window-icon" />
                    </button>
                    <button className="code-dot fullscreen" onClick={toggleFullscreen}>
                      <FiMaximize2 className="window-icon" />
                    </button>
                  </div>
                  <div className="code-title">
                    <select value={currentLanguage} onChange={handleLanguageChange}>
                      <option value="javascript">JavaScript</option>
                      <option value="typescript">TypeScript</option>
                      <option value="java">Java</option>
                      <option value="python">Python</option>
                      <option value="csharp">C#</option>
                    </select>
                  </div>
                </div>
                {!isMinimized && (
                  <div className="editor-container">
                    <pre className="code-display">
                      <code ref={codeDisplayRef} className={`language-${currentLanguage}`} />
                    </pre>
                  </div>
                )}
              </div>
            )}
            {isClosed && (
              <button
                className="restore-btn"
                onClick={() => {
                  setIsClosed(false);
                  setIsMinimized(false);
                }}
              >
                Open Code Editor
              </button>
            )}
            <div className="tech-orbit">
              <div className="orbit-circle"></div>
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="tech-icon orbit-item"
                  style={{
                    transform: `
                      rotate(${(360 / techStack.length) * index}deg) 
                      translateX(180px) 
                      rotate(-${(360 / techStack.length) * index}deg)
                    `,
                  }}
                >
                  <img
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}.svg`}
                    alt={tech.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;