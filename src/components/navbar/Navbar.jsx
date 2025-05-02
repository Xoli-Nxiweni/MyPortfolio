"use client"
import { useEffect, useState } from "react";
import { FaHome, FaUser, FaEnvelope, FaProjectDiagram, FaAddressCard } from "react-icons/fa";
import "./Navbar.css";

const Navbar = ({ activeSection, setActiveSection }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Add scroll listener to hide navbar when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show/hide based on scroll direction
      if (currentScrollY > lastScrollY + 0) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY - 10) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (section) => {
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
      setActiveSection(section);
    }
  };

  // Detect active section on scroll
  useEffect(() => {
    const handleScrollForActiveSection = () => {
      const sections = document.querySelectorAll("section[id]");
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop - 100 && 
            window.scrollY < sectionTop + sectionHeight - 100) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScrollForActiveSection);
    return () => window.removeEventListener("scroll", handleScrollForActiveSection);
  }, [setActiveSection]);

  const sections = [
    { label: "Home", id: "homeSection", icon: <FaHome /> },
    { label: "About", id: "aboutSection", icon: <FaUser /> },
    { label: "Profile", id: "profileSection", icon: <FaAddressCard /> },
    { label: "Projects", id: "projectsSection", icon: <FaProjectDiagram /> },
    { label: "Contact", id: "contactSection", icon: <FaEnvelope /> },
  ];

  return (
    <nav className="navbar" style={{ 
      opacity: isVisible ? 1 : 0,
      transform: isVisible 
        ? "translate(-50%, 0)" 
        : "translate(-50%, 20px)",
    }}>
      <div className="navbar-container">
        {sections.map(({ label, id, icon }) => (
          <div
            key={id}
            className={`navbar-item ${activeSection === id ? "active" : ""}`}
            onClick={() => scrollToSection(id)}
            title={label}
          >
            <div className="navbar-icon">{icon}</div>
            <span className="navbar-label">{label}</span>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;