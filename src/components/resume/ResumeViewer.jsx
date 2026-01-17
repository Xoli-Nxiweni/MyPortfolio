"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaTimes, FaDownload, FaExpand, FaCompress, FaExternalLinkAlt } from "react-icons/fa"
import "./ResumeViewer.css"

const ResumeViewer = ({ isOpen, onClose, resumeUrl }) => {
  const [isFullscreen, setIsFullscreen] = useState(false)

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = resumeUrl
    link.download = 'Xolile-Nxiweni-Resume-2025.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleOpenInNewTab = () => {
    window.open(resumeUrl, '_blank', 'noopener,noreferrer')
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        className="resume-viewer-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-viewer-title"
      >
        <motion.div
          className={`resume-viewer-container ${isFullscreen ? 'fullscreen' : ''}`}
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="resume-viewer-header">
            <h2 id="resume-viewer-title" className="resume-viewer-title">
              Resume - Xolile Nxiweni
            </h2>
            <div className="resume-viewer-controls">
              <button
                onClick={toggleFullscreen}
                className="resume-viewer-control-btn"
                aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
                title={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
              >
                {isFullscreen ? <FaCompress /> : <FaExpand />}
              </button>
              <button
                onClick={handleOpenInNewTab}
                className="resume-viewer-control-btn"
                aria-label="Open resume in new tab"
                title="Open in new tab"
              >
                <FaExternalLinkAlt />
              </button>
              <button
                onClick={handleDownload}
                className="resume-viewer-control-btn download"
                aria-label="Download resume"
                title="Download resume"
              >
                <FaDownload />
              </button>
              <button
                onClick={onClose}
                className="resume-viewer-control-btn close"
                aria-label="Close resume viewer"
                title="Close"
              >
                <FaTimes />
              </button>
            </div>
          </div>

          {/* PDF Viewer */}
          <div className="resume-viewer-content">
            <iframe
              src={`${resumeUrl}#toolbar=1&navpanes=0&scrollbar=1`}
              className="resume-viewer-iframe"
              title="Resume PDF Viewer"
              loading="lazy"
            />
            
            {/* Fallback message for browsers that don't support iframe PDF viewing */}
            <div className="resume-viewer-fallback">
              <p>Can't see the PDF? </p>
              <div className="fallback-actions">
                <button onClick={handleDownload} className="fallback-btn">
                  <FaDownload /> Download PDF
                </button>
                <button onClick={handleOpenInNewTab} className="fallback-btn">
                  <FaExternalLinkAlt /> Open in New Tab
                </button>
              </div>
            </div>
          </div>

          {/* Footer with quick actions */}
          <div className="resume-viewer-footer">
            <button onClick={handleDownload} className="resume-action-btn primary">
              <FaDownload /> Download Resume
            </button>
            <button onClick={onClose} className="resume-action-btn secondary">
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ResumeViewer


