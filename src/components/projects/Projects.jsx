"use client"

import { useState, useEffect, useCallback, memo } from "react"
import { FaGithub, FaExternalLinkAlt, FaTimes, FaSearch } from "react-icons/fa"
import "./Projects.css"

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
  const [activeTag, setActiveTag] = useState("All");

  const projectsData = [
    {
      id: 1,
      title: "Hotel Booking Application",
      description:
        "A comprehensive hotel booking platform with CMS features, room browsing, booking, and admin CRUD operations.",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1470&q=80",
      technologies: ["React", "Firebase", "Node.js", "Redux"],
      category: "Web",
      demoLink: "https://hotelappredux-firebase.onrender.com/",
      codeLink: "https://github.com/Xoli-Nxiweni/HotelAppWithRedux"
    },
    {
      id: 2,
      title: "Hotel Booking Application CMS",
      description:
        "Customer Management System for a hotel booking platform. Manages everything about the hotel, including room browsing, booking, and admin CRUD operations.",
      image:
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1470&q=80", 
      technologies: ["React", "Firebase", "Node.js", "Redux"],
      category: "Web",
      demoLink: "https://hotelappcms.onrender.com/",
      codeLink: "https://github.com/Xoli-Nxiweni/HotelAppCMS"
    },
    {
      id: 3,
      title: "Restaurant Booking Application",
      description:
        "A full-featured restaurant reservation system with a mobile interface and CMS built using the MERN stack.",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1470&q=80",
      technologies: ["React Native", "MongoDB", "Express", "React", "Node.js"],
      category: "Mobile",
      codeLink: "https://github.com/Asiphile1/Restaurant-Reservation-App-Pair"
    },
    {
      id: 4,
      title: "Java Calculator App",
      description:
        "A robust calculator with exception handling and stable Java logic for reliable user experience.",
      image:
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=1631&q=80",
      technologies: ["Java", "Exception Handling", "OOP"],
      category: "Desktop",
      codeLink: "https://github.com/Xoli-Nxiweni/Java-Calculator-App/"
    },
    {
      id: 5,
      title: "Java ATM App",
      description:
        "An ATM simulator with PIN validation, transaction logs, deposits, and balance checks.",
      image:
        "https://images.unsplash.com/photo-1564417947365-8dbc9d0e718e?auto=format&fit=crop&w=1374&q=80",
      technologies: ["Java", "OOP", "Transaction Management"],
      category: "Desktop",
      codeLink: "https://github.com/Xoli-Nxiweni/JavaATMApp"
    },
    {
      id: 6,
      title: "Java ID Number Checker",
      description:
        "Reads and validates South African IDs, extracts details, and checks citizenship using Java OOP.",
      image:
        "https://images.unsplash.com/photo-1576444356170-66073046b1bc?auto=format&fit=crop&w=1470&q=80",
      technologies: ["Java", "OOP", "Exception Handling", "Data Validation"],
      category: "Desktop",
      codeLink: "https://github.com/Xoli-Nxiweni/IdNumberChecker"
    },
    {
      id: 7,
      title: "Employee Registration System",
      description:
        "Manages employee data with add, update, and delete functionality using local storage.",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1472&q=80",
      technologies: ["React", "Node.js", "Local Storage"],
      category: "Web",
      codeLink: "https://github.com/Xoli-Nxiweni/Employee-Registration-App"
    },
    {
      id: 8,
      title: "Recipe App",
      description:
        "Search and save recipes with real-time updates, user authentication, and Firebase integration.",
      image:
        "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1470&q=80",
      technologies: ["React", "Firebase", "Authentication"],
      category: "Web",
      demoLink: "https://github.com/Xoli-Nxiweni/RecipeSystem",
      codeLink: "https://github.com/Xoli-Nxiweni/RecipeSystem"
    },
    {
      id: 9,
      title: "Book Directory App",
      description:
        "Backend application for organizing books with cataloging and search using Express and MongoDB.",
      image:
        "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1590&q=80",
      technologies: ["Express", "Node.js", "MongoDB"],
      category: "Backend",
      codeLink: "https://github.com/Xoli-Nxiweni/Node_BookDirectory"
    },
    {
      id: 10,
      title: "Card Guessing Game",
      description:
        "Interactive card game with animations, difficulty levels, and score tracking.",
      image:
        "https://images.unsplash.com/photo-1511193311914-0346f16efe90?auto=format&fit=crop&w=1470&q=80",
      technologies: ["HTML", "JavaScript", "Node.js", "Game Development"],
      category: "Game",
      demoLink: "https://github.com/Xoli-Nxiweni/ReactNodeCardGuessingGame",
      codeLink: "https://github.com/Xoli-Nxiweni/ReactNodeCardGuessingGame"
    },
    {
      id: 11,
      title: "Node Hosting Project",
      description:
        "Node.js deployment project with automated setup, monitoring, and environment configs.",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1634&q=80",
      technologies: ["Node.js", "Express", "AWS/Heroku"],
      category: "Backend",
      codeLink: "https://github.com/Xoli-Nxiweni/NodeHosting"
    }
  ];

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
          <p>No projects match your search criteria.</p>
          <button className="reset-btn" onClick={() => {setFilter(""); setActiveTag("All");}}>
            Reset Filters
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