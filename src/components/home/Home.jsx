/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useEffect, useRef, useState } from "react"
import Prism from "prismjs"
import "prismjs/themes/prism-tomorrow.css"
import "prismjs/components/prism-typescript"
import "prismjs/components/prism-java"
import "prismjs/components/prism-python"
import "prismjs/components/prism-csharp"
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaWhatsapp, FaInstagram } from "react-icons/fa"
import { FiMinimize2, FiMaximize2, FiX } from "react-icons/fi"
import Resume from "../../assets/Xolile-Nxiweni-Resume-2025.pdf"
import "./Home.css"

const Home = () => {
  const [isClosed, setIsClosed] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState("javascript")
  const [techIcons, setTechIcons] = useState([])
  const [rgbPosition, setRgbPosition] = useState(0)
  const [rgbActive, setRgbActive] = useState(true)
  const codeWindowRef = useRef(null)
  const codeDisplayRef = useRef(null)
  
  // States for typing effect
  const [displayedCode, setDisplayedCode] = useState('')
  const [isTyping, setIsTyping] = useState(true) // Start with typing active
  const [typingComplete, setTypingComplete] = useState(false)
  const typingTimerRef = useRef(null)
  const currentPosRef = useRef(0) // To track typing position between renders

  const codeSamples = {
    javascript: `class Developer {
  constructor() {
    this.name = 'Xoli Nxiweni';
    this.role = 'Software Developer';
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
    this.role = 'Software Developer';
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
    this.role = "Software Developer";
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
    self.role = 'Software Developer'
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
    Role = "Software Developer";
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
  }

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
  ]

  // Function to start typing animation
  const startTypingAnimation = () => {
    // Clear any existing typing timer
    if (typingTimerRef.current) {
      clearInterval(typingTimerRef.current)
    }
    
    // Reset states
    setDisplayedCode('')
    setIsTyping(true)
    setTypingComplete(false)
    currentPosRef.current = 0
    
    // Get the code for the current language
    const fullCode = codeSamples[currentLanguage]
    
    // Start the typing interval
    typingTimerRef.current = setInterval(() => {
      if (currentPosRef.current < fullCode.length) {
        setDisplayedCode(fullCode.substring(0, currentPosRef.current + 1))
        currentPosRef.current++
      } else {
        // Typing is complete
        setIsTyping(false)
        setTypingComplete(true)
        clearInterval(typingTimerRef.current)
      }
    }, 10) // Faster typing speed (10ms)
  }
  
  // Function to pause typing animation
  const pauseTypingAnimation = () => {
    if (typingTimerRef.current) {
      clearInterval(typingTimerRef.current)
      typingTimerRef.current = null
    }
  }
  
  // Function to resume typing animation
  const resumeTypingAnimation = () => {
    if (!typingComplete && typingTimerRef.current === null) {
      const fullCode = codeSamples[currentLanguage]
      
      typingTimerRef.current = setInterval(() => {
        if (currentPosRef.current < fullCode.length) {
          setDisplayedCode(fullCode.substring(0, currentPosRef.current + 1))
          currentPosRef.current++
        } else {
          // Typing is complete
          setIsTyping(false)
          setTypingComplete(true)
          clearInterval(typingTimerRef.current)
        }
      }, 10)
    }
  }

  const handleLanguageChange = (e) => {
    const lang = e.target.value
    setCurrentLanguage(lang)
    // Start typing animation when language changes
    startTypingAnimation()
  }

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      codeWindowRef.current?.requestFullscreen()
        .then(() => setIsFullscreen(true))
        .catch(console.error)
    } else {
      document.exitFullscreen()
        .then(() => setIsFullscreen(false))
        .catch(console.error)
    }
  }
  
  const handleMinimize = () => {
    if (!isMinimized) {
      // If minimizing, pause the typing animation
      pauseTypingAnimation()
    } else {
      // If maximizing, resume the typing animation if not complete
      if (!typingComplete) {
        resumeTypingAnimation()
      }
    }
    setIsMinimized(!isMinimized)
  }

  // Start typing animation when component mounts
  useEffect(() => {
    if (!isClosed && !isMinimized) {
      startTypingAnimation()
    }
    // Cleanup typing timer on unmount
    return () => {
      if (typingTimerRef.current) {
        clearInterval(typingTimerRef.current)
      }
    }
  }, [])

  // Handle editor reopening
  useEffect(() => {
    if (!isClosed && !isMinimized) {
      startTypingAnimation()
    }
  }, [isClosed])
  
  // Handle minimize/maximize state changes
  useEffect(() => {
    if (isMinimized) {
      pauseTypingAnimation()
    } else if (!isClosed && !typingComplete) {
      resumeTypingAnimation()
    }
  }, [isMinimized, isClosed, typingComplete])

  // Apply syntax highlighting to the displayed code
  useEffect(() => {
    if (codeDisplayRef.current && displayedCode) {
      codeDisplayRef.current.innerHTML = Prism.highlight(
        displayedCode,
        Prism.languages[currentLanguage],
        currentLanguage
      )
    }
  }, [displayedCode, currentLanguage])

  // Monitor fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => 
      setIsFullscreen(!!document.fullscreenElement)
    document.addEventListener("fullscreenchange", handleFullscreenChange)
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange)
  }, [])

  // RGB animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (rgbActive) setRgbPosition((prev) => (prev + 1) % 360)
    }, 50)

    return () => clearInterval(interval)
  }, [rgbActive])

  useEffect(() => {
    const toggleInterval = setInterval(() => {
      setRgbActive((prev) => !prev)
    }, 30000)

    return () => clearInterval(toggleInterval)
  }, [])

  // Initialize tech icons
  useEffect(() => {
    const icons = techStack.map((tech, index) => ({
      id: index,
      name: tech.name,
      icon: tech.icon,
      angle: (Math.PI * 2 * index) / techStack.length,
      radius: 150 + Math.random() * 100,
      speed: 0.002 + Math.random() * 0.003,
      size: 30 + Math.random() * 15,
      yOffset: 0,
      pulse: Math.random() * 2
    }))
    setTechIcons(icons)
  }, [])

  // Animate tech icons
  useEffect(() => {
    let animationFrameId
    const animate = () => {
      setTechIcons((prevIcons) => 
        prevIcons.map((icon) => ({
          ...icon,
          angle: icon.angle + icon.speed,
          yOffset: Math.sin(Date.now() * 0.002 + icon.id) * 20,
          pulse: icon.pulse + 0.01
        }))
      )
      animationFrameId = requestAnimationFrame(animate)
    }
    animationFrameId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  return (
    <div
      id="homeSection"
      className={`homeScreen ${rgbActive ? "rgb-active" : ""}`}
      style={{ "--rgb-position": `${rgbPosition}deg` }}
    >
      <header className="header">
        <a href={Resume} download className="resume-btn">
          <FaDownload /> <p> Resume</p>
        </a>
      </header>

      <main className="main-content">
        <div className="left-section">
          <h1 className="name">
            Hi, I'm <span className="highlight">Xoli</span> Nxiweni
          </h1>
          <h2 className="title">A Software Developer</h2>
          <p className="bio">
            I'm a Full-Stack developer focusing on MERN stack. I build innovative solutions with clean, efficient code
            and a focus on data integrity, user experience along with user-friendly interfaces.
          </p>
          <div className="social-links">
            <a href="https://github.com/Xoli-Nxiweni" target="_blank" rel="noopener noreferrer" className="social-link">
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
            <a href="https://wa.me/+27617514638" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaWhatsapp />
            </a>
            <a 
                              href="https://www.instagram.com/sbala_eks/" 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="profile-social-link">
                                <FaInstagram />
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

        <div className="right-section">
          <div className="hero-image">
            {!isClosed && (
              <div className={`code-window ${isFullscreen ? "fullscreen" : ""}`} ref={codeWindowRef}>
                <div className="code-header">
                  <div className="code-dots">
                    <button className="code-dot close" onClick={() => setIsClosed(true)}>
                      <FiX className="window-icon" />
                    </button>
                    <button className="code-dot minimize" onClick={handleMinimize}>
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
                      <code 
                        ref={codeDisplayRef} 
                        className={`language-${currentLanguage}`} 
                      />
                      {isTyping && (
                        <span className="typing-cursor">|</span>
                      )}
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

            <div className="orbital-tech-container">
              {techIcons.map((icon) => {
                const x = Math.cos(icon.angle) * icon.radius
                const y = Math.sin(icon.angle) * icon.radius
                const pulseScale = 1 + Math.sin(icon.pulse) * 0.1
                
                return (
                  <div
                    key={icon.id}
                    className="orbital-tech-icon"
                    style={{
                      transform: `
                        translate(
                          calc(50% + ${x}px), 
                          calc(50% + ${y}px + ${icon.yOffset}px)
                        )
                        scale(${pulseScale})
                        rotate(${icon.angle * 180/Math.PI}deg)
                      `,
                      width: `${icon.size}px`,
                      height: `${icon.size}px`,
                      filter: `brightness(${1.2 + Math.abs(icon.yOffset / 30)})`,
                      zIndex: Math.round(icon.size)
                    }}
                  >
                    <img 
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon.icon}.svg`} 
                      alt={icon.name}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home