"use client"

import { useState } from "react"
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa"
import "./Projects.css"

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
    document.body.style.overflow = "hidden" // Prevent scrolling when modal is open
  }

  const closeModal = () => {
    setIsModalOpen(false)
    document.body.style.overflow = "auto" // Re-enable scrolling
  }

  // Close modal when clicking outside
  const handleModalClick = (e) => {
    if (e.target.classList.contains("project-modal-overlay")) {
      closeModal()
    }
  }

  const projects = [
    {
      id: 1,
      title: "Hotel Booking Application",
      description:
        "A comprehensive hotel booking platform with an integrated CMS for hotel management. Features include room browsing, booking management, user authentication, and an admin dashboard for CRUD operations. The application allows users to toggle between favorites and includes a robust content management system for hotel administrators.",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      technologies: ["React", "Firebase", "Node.js", "Redux"],
      demoLink: "https://github.com/Xoli-Nxiweni/HotelAppWithRedux",
      codeLink: "https://github.com/Xoli-Nxiweni/HotelAppWithRedux",
    },
    {
      id: 2,
      title: "Restaurant Booking Application",
      description:
        "A full-featured restaurant reservation system built with React Native and the complete MERN stack. The application includes a mobile interface for customers to browse restaurants, make reservations, and manage bookings. A comprehensive CMS provides restaurant owners with tools for managing tables, menus, and customer reservations with complete CRUD functionality.",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      technologies: ["React Native", "MongoDB", "Express", "React", "Node.js"],
      codeLink: "https://github.com/Xoli-Nxiweni",
    },
    {
      id: 3,
      title: "Java Calculator App",
      description:
        "This robust Java application adheres to established coding principles and utilizes comprehensive exception handling. This ensures stability, predictability, and minimizes unexpected disruptions, resulting in a reliable and resilient experience for users.",
      image:
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80",
      technologies: ["Java", "Exception Handling", "OOP"],
      codeLink: "https://github.com/Xoli-Nxiweni/Java-Calculator-App/",
    },
    {
      id: 4,
      title: "Java ATM App",
      description:
        "This program simulates an ATM system. It includes PIN verification, balance management, and transaction history functionalities. Users can check balances, deposit and withdraw funds, and print transaction statements. The code ensures PIN security and handles user input errors, providing a comprehensive and interactive ATM experience.",
      image:
        "https://images.unsplash.com/photo-1564417947365-8dbc9d0e718e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      technologies: ["Java", "OOP", "Transaction Management"],
      codeLink: "https://github.com/Xoli-Nxiweni/JavaATMApp",
    },
    {
      id: 5,
      title: "Java ID Number Checker",
      description:
        "This Java program reads and processes South African ID numbers, extracting and displaying birth year, date, month, gender, citizenship, and validation status. It employs object-oriented programming and exception handling for accuracy and user-friendly interaction, making it valuable for ID verification tasks.",
      image:
        "https://images.unsplash.com/photo-1576444356170-66073046b1bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      technologies: ["Java", "OOP", "Exception Handling", "Data Validation"],
      codeLink: "https://github.com/Xoli-Nxiweni/IdNumberChecker",
    },
    {
      id: 6,
      title: "Employee Registration System",
      description:
        "A system to manage employee records with CRUD operations. The application allows users to add employees, edit employee details, and delete employees from the database.",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
      technologies: ["React", "Node.js", "Local Storage"],
      codeLink: "https://github.com/Xoli-Nxiweni/Employee-Registration-App",
    },
    {
      id: 7,
      title: "Recipe App",
      description:
        "An app to discover and save recipes. Features include searching recipes, saving favorites, and user authentication. The application implements real-time database updates for a seamless user experience.",
      image:
        "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      technologies: ["React", "Firebase", "Authentication"],
      demoLink: "https://github.com/Xoli-Nxiweni/RecipeSystem",
      codeLink: "https://github.com/Xoli-Nxiweni/RecipeSystem",
    },
    {
      id: 8,
      title: "Book Directory App",
      description:
        "Backend application for managing and organizing books with features like book cataloging, search functionality, and categories. The app provides a comprehensive solution for book management.",
      image:
        "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1590&q=80",
      technologies: ["Express", "Node.js", "MongoDB"],
      codeLink: "https://github.com/Xoli-Nxiweni/Node_BookDirectory",
    },
    {
      id: 9,
      title: "Card Guessing Game",
      description:
        "Interactive card guessing game with multiple difficulty levels. The game features score tracking and animations to enhance the user experience. The implementation focuses on game logic and interactive elements.",
      image:
        "https://images.unsplash.com/photo-1511193311914-0346f16efe90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      technologies: ["HTML", "JavaScript", "Node.js", "Game Development"],
      demoLink: "https://github.com/Xoli-Nxiweni/NodeCardGame",
      codeLink: "https://github.com/Xoli-Nxiweni/NodeCardGame",
    },
    {
      id: 10,
      title: "Node Hosting Project",
      description:
        "Project demonstrating Node.js deployment and hosting setup. Features include automated deployment, environment configuration, and monitoring for optimal performance.",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1634&q=80",
      technologies: ["Node.js", "Express", "AWS/Heroku"],
      codeLink: "https://github.com/Xoli-Nxiweni/NodeHosting",
    },
  ]

  return (
    <div className="projects-container" id="projectsSection">
      <div className="projects-header">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Here are some of the projects I've worked on. Each project represents my skills and experience in different
          areas of development, from Java applications to full-stack web and mobile solutions.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-image" onClick={() => openModal(project)}>
              <img src={project.image || "/placeholder.svg"} alt={project.title} />
              <div className="image-overlay">
                <span>View Details</span>
              </div>
            </div>
            <div className="project-content">
              <h3 className="project-title clickable" onClick={() => openModal(project)}>
                {project.title}
              </h3>
              <p className="project-description clickable" onClick={() => openModal(project)}>
                {project.description}
              </p>
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span className="tech-tag" key={index}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="project-link code">
                  <FaGithub /> Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Modal */}
      {isModalOpen && selectedProject && (
        <div className="project-modal-overlay" onClick={handleModalClick}>
          <div className="project-modal">
            <button className="modal-close-btn" onClick={closeModal}>
              <FaTimes />
            </button>
            <div className="modal-content">
              <div className="modal-image">
                <img src={selectedProject.image || "/placeholder.svg"} alt={selectedProject.title} />
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
                <a
                  href={selectedProject.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-link code"
                >
                  <FaGithub /> View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="projects-cta">
        <p className="cta-text">Interested in seeing more of my work?</p>
        <a href="https://github.com/Xoli-Nxiweni" target="_blank" rel="noopener noreferrer" className="cta-button">
          <FaGithub /> View More on GitHub
        </a>
      </div>
    </div>
  )
}

export default Projects