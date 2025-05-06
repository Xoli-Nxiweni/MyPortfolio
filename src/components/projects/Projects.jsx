"use client"

import { useState, useEffect, useCallback, memo } from "react"
import { FaGithub, FaExternalLinkAlt, FaTimes, FaSearch } from "react-icons/fa"
import "./Projects.css"
import { projectsData } from "./projectsData"

// Memoized project card component for performance
const ProjectCard = memo(({ project, openModal }) => (
  <div className="project-card" data-aos="fade-up">
    <div className="project-image" onClick={() => openModal(project)}>
      <img 
        src={project.image || "/placeholder.svg"} 
        alt={project.title} 
        loading="lazy" 
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
  </div>
));

// Memoized project modal component
const ProjectModal = memo(({ selectedProject, closeModal, handleModalClick }) => (
  <div className="project-modal-overlay" onClick={handleModalClick}>
    <div className="project-modal">
      <button className="modal-close-btn" onClick={closeModal} aria-label="Close modal">
        <FaTimes />
      </button>
      <div className="modal-content">
        <div className="modal-image">
          <img 
            src={selectedProject.image || "/placeholder.svg"} 
            alt={selectedProject.title} 
          />
        </div>
        <h2 className="modal-title">{selectedProject.title}</h2>
        <p className="modal-description">{selectedProject.description}</p>
        <div className="modal-tech-title">Technologies Used:</div>
        <div className="modal-tech">
          {selectedProject.technologies.map((tech, index) => (
            <span className="tech-tag" key={index}>
              {tech}
            </span>
          ))}
        </div>
        <div className="modal-links">
          {selectedProject.demoLink && (
            <a
              href={selectedProject.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-link demo"
            >
              <FaExternalLinkAlt /> View Demo
            </a>
          )}
          {selectedProject.codeLink && (
            <a
              href={selectedProject.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-link code"
            >
              <FaGithub /> View Code
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
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
    <section className="projects-container" id="projectsSection">
      <div className="projects-header">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          A collection of my recent work showcasing web apps, mobile apps, and Java-based desktop software.
        </p>
      </div>

      <div className="projects-filter">
        <div className="filter-categories">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeTag === category ? 'active' : ''}`}
              onClick={() => setActiveTag(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search projects..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      {filteredProjects.length > 0 ? (
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              openModal={openModal} 
            />
          ))}
        </div>
      ) : (
        <div className="no-projects">
          <p>No projects match this search category, please select preferred category above or the button below.</p>
          <button className="reset-btn" onClick={() => {setFilter(""); setActiveTag("All");}}>
            Show All Projects
          </button>
        </div>
      )}

      {isModalOpen && selectedProject && (
        <ProjectModal
          selectedProject={selectedProject}
          closeModal={closeModal}
          handleModalClick={handleModalClick}
        />
      )}

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