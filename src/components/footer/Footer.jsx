import {
    FaCode,
    FaChevronRight,
    FaMapMarkerAlt,
    FaEnvelope,
    FaPhone,
    FaGithub,
    FaLinkedin,
    FaTwitter,
  } from "react-icons/fa"
  import "./Footer.css"
  
  const Footer = () => {
    return (
      <footer className="footer" id="footerSection">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-section">
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
                  href="https://twitter.com/xolinxiweni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
  
            {/* <div className="footer-section">
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
                <a href="#profileSection" className="footer-link">
                  <FaChevronRight className="footer-link-icon" /> Profile
                </a>
                <a href="#contactSection" className="footer-link">
                  <FaChevronRight className="footer-link-icon" /> Contact
                </a>
              </div>
            </div> */}
  
            {/* <div className="footer-section">
              <h4 className="footer-title">Services</h4>
              <div className="footer-links">
                <a href="#" className="footer-link">
                  <FaChevronRight className="footer-link-icon" /> Web Development
                </a>
                <a href="#" className="footer-link">
                  <FaChevronRight className="footer-link-icon" /> Mobile Development
                </a>
                <a href="#" className="footer-link">
                  <FaChevronRight className="footer-link-icon" /> UI/UX Design
                </a>
                <a href="#" className="footer-link">
                  <FaChevronRight className="footer-link-icon" /> Database Design
                </a>
                <a href="#" className="footer-link">
                  <FaChevronRight className="footer-link-icon" /> API Development
                </a>
              </div>
            </div> */}
  
            <div className="footer-section">
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
            <div className="footer-bottom-links">
              <a href="#" className="footer-bottom-link">
                Privacy Policy
              </a>
              <a href="#" className="footer-bottom-link">
                Terms of Service
              </a>
              <a href="#" className="footer-bottom-link">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer
  