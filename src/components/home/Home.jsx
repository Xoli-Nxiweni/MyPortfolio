/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useEffect, useRef, useState } from "react"
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaWhatsapp, FaInstagram, FaEye } from "react-icons/fa"
import { FiMinimize2, FiMaximize2, FiX } from "react-icons/fi"
import Resume from "../../assets/Xolile-Nxiweni-Resume-2025.pdf"
import ResumeViewer from "../resume/ResumeViewer"
import "./Home.css"

const MATRIX_CHARS =
  "アイウエオカキクケコサシスセソタチツテト0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"

/**
 * Drives a falling-character "matrix rain" animation on a canvas.
 *
 * `active` turns the loop on/off.
 * `resetKey` should change whenever the underlying <canvas> DOM node
 * might have been unmounted/remounted or otherwise needs a clean
 * restart (closing/reopening the window, toggling fullscreen, etc) —
 * without this, the effect wouldn't know to grab the fresh canvas
 * node and would keep drawing to a detached one.
 */
function useMatrixRain(canvasRef, { active = true, color = "#00ed64", fontSize = 14, fps = 30, resetKey } = {}) {
  useEffect(() => {
    if (!active) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")

    let drops = []
    const frameSize = fontSize

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      const width = Math.max(1, Math.round(rect.width))
      const height = Math.max(1, Math.round(rect.height))
      if (canvas.width !== width) canvas.width = width
      if (canvas.height !== height) canvas.height = height

      const columns = Math.max(1, Math.floor(canvas.width / frameSize))
      drops = new Array(columns).fill(0).map(() => Math.random() * -50)
    }

    // Clear any stale pixels left on this node before we start drawing.
    resize()
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(canvas)
    window.addEventListener("resize", resize)

    const draw = () => {
      ctx.fillStyle = "rgba(13, 17, 23, 0.08)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = color
      ctx.font = `${frameSize}px "JetBrains Mono", monospace`

      for (let i = 0; i < drops.length; i++) {
        const char = MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)]
        const x = i * frameSize
        const y = drops[i] * frameSize

        ctx.fillText(char, x, y)

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 1000 / fps)

    return () => {
      clearInterval(interval)
      resizeObserver.disconnect()
      window.removeEventListener("resize", resize)
    }
  }, [canvasRef, active, color, fontSize, fps, resetKey])
}

const Home = () => {
  const [isClosed, setIsClosed] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [techIcons, setTechIcons] = useState([])
  const [rgbPosition, setRgbPosition] = useState(0)
  const [rgbActive, setRgbActive] = useState(true)
  const codeWindowRef = useRef(null)
  const matrixCanvasRef = useRef(null)

  // State for resume viewer
  const [isResumeViewerOpen, setIsResumeViewerOpen] = useState(false)

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
    setIsMinimized((prev) => !prev)
  }

  // Rain animation. resetKey forces a clean restart whenever the
  // window is closed/reopened (the <canvas> node gets unmounted and a
  // fresh one mounted), minimized/restored, or fullscreen is toggled.
  // Now runs on mobile too — the window is no longer hidden below 768px.
  useMatrixRain(matrixCanvasRef, {
    active: !isClosed,
    resetKey: `${isClosed}|${isMinimized}|${isFullscreen}`,
  })

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
    <section
      id="homeSection"
      className={`homeScreen ${rgbActive ? "rgb-active" : ""}`}
      style={{ "--rgb-position": `${rgbPosition}deg` }}
      aria-label="Home section"
    >
      <main className="main-content">
        <div className="left-section">
          <h1 className="name">
            Hi, I'm <span className="highlight">Xoli</span> Nxiweni
          </h1>
          <h2 className="title">Infrastructure-Aware Full Stack Systems Engineer</h2>
          <p className="bio">
            I am a Software Developer & an IT Technician ,
            blending MERN stack and React Native development with practical
            network & cloud administration, firewall, and server infrastructure experience.
          </p>
          <p className="bio">
            My NQF Level 4 Technical Support foundation means I write application
            code with operational awareness of IP routing, DNS, firewalls, and
            network topology.
          </p>
          <div className="social-links">
            <a
              href="https://github.com/Xoli-Nxiweni"
              target="_blank"
              title="GitHub"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/xolinxiweni/"
              target="_blank"
              title="LinkedIn"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaLinkedin />
            </a>
            <a href="mailto:xolinxiweni@gmail.com" title="Email" className="social-link">
              <FaEnvelope />
            </a>
            <a
              href="https://wa.me/+27617514638"
              target="_blank"
              title="WhatsApp"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.instagram.com/sbala_eks/"
              target="_blank"
              title="Instagram"
              rel="noopener noreferrer"
              className="profile-social-link"
            >
              <FaInstagram />
            </a>
            {/* <button
              onClick={() => setIsResumeViewerOpen(true)}
              title="View Resume"
              className="social-link resume-btn"
              aria-label="View resume"
            >
              <FaEye />
            </button>
            <a
              href={Resume}
              download="Xolile-Nxiweni-Resume-2025.pdf"
              title="Download Resume"
              className="social-link"
              aria-label="Download resume"
            >
              <FaDownload />
            </a> */}

          </div>
          <section className="tech-stack" aria-labelledby="tech-stack-heading">
            <h3 id="tech-stack-heading">Tech Stack</h3>
            <div className="tech-badges" role="list" aria-label="Technologies and tools used">
              {techStack.map((tech, index) => (
                <span key={index} className="tech-badge" role="listitem">
                  <img
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}.svg`}
                    alt={`${tech.name} technology icon`}
                    className="tech-badge-icon"
                    loading="lazy"
                    width="40"
                    height="40"
                  />
                </span>
              ))}
            </div>
          </section>
        </div>

        <div className="right-section">
          <div className="hero-image">
            {!isClosed && (
              <div
                className={`code-window ${isFullscreen ? "fullscreen" : ""} ${isMinimized ? "minimized" : ""}`}
                ref={codeWindowRef}
              >
                <div className="code-header">
                  <div className="code-dots">
                    <button
                      className="code-dot close"
                      onClick={() => setIsClosed(true)}
                    >
                      <FiX className="window-icon" />
                    </button>
                    <button
                      className="code-dot minimize"
                      onClick={handleMinimize}
                    >
                      <FiMinimize2 className="window-icon" />
                    </button>
                    <button
                      className="code-dot fullscreen"
                      onClick={toggleFullscreen}
                    >
                      <FiMaximize2 className="window-icon" />
                    </button>
                  </div>
                  <div className="code-title">MATRIX</div>
                </div>
                <div className="editor-container">
                  <canvas ref={matrixCanvasRef} className="matrix-canvas" aria-hidden="true" />
                </div>
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
                Open The Matrix
              </button>
            )}

            <div className="orbital-tech-container">
              {techIcons.map((icon) => {
                const x = Math.cos(icon.angle) * icon.radius;
                const y = Math.sin(icon.angle) * icon.radius;
                const pulseScale = 1 + Math.sin(icon.pulse) * 0.1;

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
                        rotate(${(icon.angle * 180) / Math.PI}deg)
                      `,
                      width: `${icon.size}px`,
                      height: `${icon.size}px`,
                      filter: `brightness(${
                        1.2 + Math.abs(icon.yOffset / 30)
                      })`,
                      zIndex: Math.round(icon.size),
                    }}
                  >
                    <img
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon.icon}.svg`}
                      alt={`${icon.name} technology icon in orbital animation`}
                      loading="lazy"
                      width={icon.size}
                      height={icon.size}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      {/* Resume Viewer Modal */}
      <ResumeViewer
        isOpen={isResumeViewerOpen}
        onClose={() => setIsResumeViewerOpen(false)}
        resumeUrl={Resume}
      />
    </section>
  );
}

export default Home