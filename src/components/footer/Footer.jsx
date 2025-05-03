import {
  FaCode,
  FaChevronRight,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa"
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer" id="footerSection">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section about-section">
            <div className="footer-logo">
              <FaCode className="footer-logo-icon" />
              <span className="footer-logo-text">Xoli Nxiweni</span>
            </div>
            <p className="footer-description">
              A passionate Junior Software Engineer focused on creating clean, efficient, and user-friendly web
              applications.
            </p>
            <div className="footer-social">
              <a
                href="https://github.com/Xoli-Nxiweni"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/xolinxiweni/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:xolinxiweni@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                <FaEnvelope />
              </a>
              <a href='https://wa.me/+27617514638' target="_blank" rel="noopener noreferrer" className="footer-social-link">
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
          </div>

          <div className="footer-section links-section">
            <h4 className="footer-title">Quick Links</h4>
            <div className="footer-links">
              <a href="#homeSection" className="footer-link">
                <FaChevronRight className="footer-link-icon" /> Home
              </a>
              <a href="#aboutSection" className="footer-link">
                <FaChevronRight className="footer-link-icon" /> About
              </a>
              <a href="#projectsSection" className="footer-link">
                <FaChevronRight className="footer-link-icon" /> Projects
              </a>
              <a href="#contactSection" className="footer-link">
                <FaChevronRight className="footer-link-icon" /> Contact
              </a>
            </div>
          </div>

          <div className="footer-section contact-section">
            <h4 className="footer-title">Contact Info</h4>
            <div className="footer-links">
              <div className="footer-contact-item">
                <FaMapMarkerAlt className="footer-contact-icon" />
                <span>Johannesburg, South Africa</span>
              </div>
              <div className="footer-contact-item">
                <FaEnvelope className="footer-contact-icon" />
                <span>xolinxiweni@gmail.com</span>
              </div>
              <div className="footer-contact-item">
                <FaPhone className="footer-contact-icon" />
                <span>+27 60 545 0493</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Xoli Nxiweni. All Rights Reserved.</p>

        </div>
      </div>
    </footer>
  )
}

export default Footer