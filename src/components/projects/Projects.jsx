/* eslint-disable no-unused-vars */
"use client"

import { useState, useEffect, useCallback, memo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaGithub, FaExternalLinkAlt, FaTimes, FaSearch } from "react-icons/fa"
import "./Projects.css"
import { projectsData } from "./projectsData"

// Memoized project card component for performance
const ProjectCard = memo(({ project, openModal, index }) => (
  <motion.div 
    className="project-card"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -8, transition: { duration: 0.2 } }}
    layout
  >
    <div className="project-image" onClick={() => openModal(project)}>
      <img 
        src={project.image || "/placeholder.svg"} 
        alt={`${project.title} - ${project.description.substring(0, 100)} project preview image`}
        loading="lazy"
        width="600"
        height="400"
      />
      <div className="image-overlay">
        <span>View Details</span>
      </div>
    </div>
    <div className="project-content">
      <h3 className="project-title clickable" onClick={() => openModal(project)}>
        {project.title}
      </h3>
      <p className="project-description clickable" onClick={() => openModal(project)}>
        {project.description.length > 100 
          ? `${project.description.substring(0, 100)}...` 
          : project.description}
      </p>
      <div className="project-tech">
        {project.technologies.slice(0, 4).map((tech, index) => (
          <span className="tech-tag" key={index}>
            {tech}
          </span>
        ))}
        {project.technologies.length > 4 && (
          <span className="tech-tag more">+{project.technologies.length - 4}</span>
        )}
      </div>
      <div className="project-links">
        {project.demoLink && (
          <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-link demo">
            <FaExternalLinkAlt /> Demo
          </a>
        )}
        {project.codeLink && (
          <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="project-link code">
            <FaGithub /> Code
          </a>
        )}
      </div>
    </div>
  </motion.div>
));

// Memoized project modal component
const ProjectModal = memo(({ selectedProject, closeModal, handleModalClick }) => (
  <motion.div 
    className="project-modal-overlay" 
    onClick={handleModalClick}
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-title"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.2 }}
  >
    <motion.div 
      className="project-modal"
      initial={{ scale: 0.9, y: 20 }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0.9, y: 20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <button 
        className="modal-close-btn" 
        onClick={closeModal} 
        aria-label="Close project details modal"
        type="button"
      >
        <FaTimes />
      </button>
      <div className="modal-content">
        <div className="modal-image">
          <img 
            src={selectedProject.image || "/placeholder.svg"} 
            alt={`${selectedProject.title} - Full project preview showing ${selectedProject.description.substring(0, 80)}`}
            loading="lazy"
            width="800"
            height="500"
          />
        </div>
        <h2 id="modal-title" className="modal-title">{selectedProject.title}</h2>
        <p className="modal-description">{selectedProject.description}</p>
        <div className="modal-tech-title">Technologies Used:</div>
        <div className="modal-tech" role="list" aria-label="Technologies used in this project">
          {selectedProject.technologies.map((tech, index) => (
            <motion.span 
              className="tech-tag" 
              key={index} 
              role="listitem"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
        <div className="modal-links">
          {selectedProject.demoLink && (
            <a
              href={selectedProject.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-link demo"
              aria-label={`View demo of ${selectedProject.title}`}
            >
              <FaExternalLinkAlt aria-hidden="true" /> View Demo
            </a>
          )}
          {selectedProject.codeLink && (
            <a
              href={selectedProject.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-link code"
              aria-label={`View source code of ${selectedProject.title} on GitHub`}
            >
              <FaGithub aria-hidden="true" /> View Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  </motion.div>
));

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState("");
  const [activeTag, setActiveTag] = useState("");

  

  // Get all unique categories and tech tags
  const categories = ["All", ...new Set(projectsData.map(project => project.category))];
  
  // OpenModal using useCallback to prevent unnecessary re-renders
  const openModal = useCallback((project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  // CloseModal using useCallback
  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  }, []);

  // Handle modal click using useCallback
  const handleModalClick = useCallback((e) => {
    if (e.target.classList.contains("project-modal-overlay")) {
      closeModal();
    }
  }, [closeModal]);

  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isModalOpen) {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isModalOpen, closeModal]);

  // Filter projects based on search and category
  const filteredProjects = projectsData.filter(project => {
    const matchesSearch = filter === "" || 
      project.title.toLowerCase().includes(filter.toLowerCase()) ||
      project.description.toLowerCase().includes(filter.toLowerCase()) ||
      project.technologies.some(tech => tech.toLowerCase().includes(filter.toLowerCase()));
    
    const matchesCategory = activeTag === "All" || project.category === activeTag;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="projects-container" id="projectsSection" aria-labelledby="projects-heading">
      <header className="projects-header">
        <h2 id="projects-heading" className="section-title">My Projects</h2>
        <p className="section-subtitle">
          A collection of my recent work showcasing web apps, mobile apps, and Java-based desktop software.
        </p>
      </header>

      <div className="projects-filter">
        <div className="filter-categories" role="group" aria-label="Filter projects by category">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeTag === category ? 'active' : ''}`}
              onClick={() => setActiveTag(category)}
              aria-label={`Filter by ${category}`}
              aria-pressed={activeTag === category}
              type="button"
            >
              {category}
            </button>
          ))}
        </div>
        <div className="search-container">
          <FaSearch className="search-icon" aria-hidden="true" />
          <input
            type="search"
            placeholder="Search projects..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="search-input"
            aria-label="Search projects by name, description, or technology"
          />
        </div>
      </div>

      {filteredProjects.length > 0 ? (
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              openModal={openModal}
              index={index}
            />
          ))}
        </div>
      ) : (
        <motion.div 
          className="no-projects"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p>No projects match this search category, please select preferred category above or the button below.</p>
          <button className="reset-btn" onClick={() => {setFilter(""); setActiveTag("All");}}>
            Show All Projects
          </button>
        </motion.div>
      )}

      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <ProjectModal
            selectedProject={selectedProject}
            closeModal={closeModal}
            handleModalClick={handleModalClick}
          />
        )}
      </AnimatePresence>

      <div className="projects-cta">
        <p className="cta-text">Interested in seeing more of my work?</p>
        <a href="https://github.com/Xoli-Nxiweni" target="_blank" rel="noopener noreferrer" className="cta-button">
          <FaGithub /> View More on GitHub
        </a>
      </div>
    </section>
  )
}

export default Projects