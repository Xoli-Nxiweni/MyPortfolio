import {
    FaMapMarkerAlt,
    FaEnvelope,
    FaPhone,
    FaGlobe,
    FaGithub,
    FaLinkedin,
    FaWhatsapp,
    FaInstagram,
    FaGraduationCap,
    FaCertificate,
    FaCode,
    FaBook,
    FaMusic,
    FaGamepad,
    FaHiking,
    FaCamera,
    FaPlane,
  } from "react-icons/fa"
  import "./Profile.css"
  import image from "../../assets/myImage.jpg"
  
  const Profile = () => {
    return (
      <section className="profile-container" id="profileSection" aria-labelledby="profile-heading">
        <header className="profile-header">
          <h2 id="profile-heading" className="section-title">My Profile</h2>
        </header>
  
        <div className="profile-content">
          <div className="profile-sidebar">
            <div className="profile-card">
              <div className="profile-image">
                <img
                  src={image}
                  alt="Xoli Nxiweni - Full Stack Software Developer and Software Engineer based in Johannesburg, South Africa"
                  loading="lazy"
                  width="300"
                  height="300"
                />
              </div>
              <div className="profile-info">
                <h3 className="profile-name">Xoli Nxiweni</h3>
                <p className="profile-title">Software Engineer</p>
                <div className="profile-details">
                  <div className="profile-detail">
                    <FaMapMarkerAlt className="detail-icon" />
                    <span>Johannesburg, South Africa</span>
                  </div>
                  <div className="profile-detail">
                    <FaEnvelope className="detail-icon" />
                    <span>xolinxiweni@gmail.com</span>
                  </div>
                  <div className="profile-detail">
                    <FaPhone className="detail-icon" />
                    <span>+27 61 751 4638</span>
                  </div>
                </div>
                <div className="profile-social">
                  <a
                    href="https://github.com/Xoli-Nxiweni"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="profile-social-link"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/xolinxiweni/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="profile-social-link"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https:wa.me/+27617514638"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="profile-social-link"
                  >
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
            </div>
  
            <div className="profile-card">
              <div className="profile-info">
                <h3 className="profile-section-title">Languages</h3>
                <div className="languages-list">
                  <div className="language-item">
                    <div className="language-name">English</div>
                    <div className="language-level">
                      <div className="language-progress" style={{ width: "95%" }}></div>
                    </div>
                  </div>
                  <div className="language-item">
                    <div className="language-name">Xhosa</div>
                    <div className="language-level">
                      <div className="language-progress" style={{ width: "100%" }}></div>
                    </div>
                  </div>
                  <div className="language-item">
                    <div className="language-name">Zulu</div>
                    <div className="language-level">
                      <div className="language-progress" style={{ width: "80%" }}></div>
                    </div>
                  </div>
                  <div className="language-item">
                    <div className="language-name">Xitsonga</div>
                    <div className="language-level">
                      <div className="language-progress" style={{ width: "60%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div className="profile-main">
            <section className="profile-section" aria-labelledby="education-heading">
              <h3 id="education-heading" className="profile-section-title">Education</h3>
              <div className="education-item">
                <div className="education-date">2023 - 2024</div>
                <div className="education-degree">NQF Level 5: Systems Development</div>
                <div className="education-school">Dynamic DNA</div>
                <div className="education-description">
                  Completed a comprehensive Systems Development qualification covering software engineering principles, 
                  programming languages (Java, C#), web development technologies, database management, and software 
                  design patterns. This qualification provided a solid foundation in full-stack development and 
                  enterprise software solutions.
                </div>
              </div>
              <div className="education-item">
                <div className="education-date">2011 - 2016</div>
                <div className="education-degree">High School Diploma</div>
                <div className="education-school">Lamula Jubilee Secondary School</div>
                <div className="education-description">
                  Completed high school education with a focus on mathematics and science.
                  Actively participated in various extracurricular activities and leadership roles.
                </div>
              </div>
            </section>
  
            <section className="profile-section" aria-labelledby="certifications-heading">
              <h3 id="certifications-heading" className="profile-section-title">Certifications</h3>
              <div className="certifications-list">
                <div className="certification-item">
                  <FaCertificate className="certification-icon" />
                  <div className="certification-content">
                    <div className="certification-name">IITPSA Full Stack Web and Mobile Development</div>
                    <div className="certification-issuer">CodeTribe</div>
                    <div className="certification-date">Issued: April 2025</div>
                  </div>
                </div>
                {/* <div className="certification-item">
                  <FaCertificate className="certification-icon" />
                  <div className="certification-content">
                    <div className="certification-name">React Native - The Practical Guide</div>
                    <div className="certification-issuer">Coursera</div>
                    <div className="certification-date">Issued: March 2022</div>
                  </div>
                </div> */}
                <div className="certification-item">
                  <FaCertificate className="certification-icon" />
                  <div className="certification-content">
                    <div className="certification-name">NQF Level 5: Systems Development</div>
                    <div className="certification-issuer">Dynamic DNA</div>
                    <div className="certification-date">Issued: November 2024</div>
                  </div>
                </div>
                <div className="certification-item">
                  <FaCertificate className="certification-icon" />
                  <div className="certification-content">
                    <div className="certification-name">OCA Java SE 8</div>
                    <div className="certification-issuer">Oracle</div>
                    <div className="certification-date">Issued: October 2023</div>
                  </div>
                </div>
                <div className="certification-item">
                  <FaCertificate className="certification-icon" />
                  <div className="certification-content">
                    <div className="certification-name">MS AZ-900</div>
                    <div className="certification-issuer">Microsoft</div>
                    <div className="certification-date">Issued: Feb 2023</div>
                  </div>
                </div>

                <div className="certification-item">
                  <FaCertificate className="certification-icon" />    
                  <div className="certification-content">
                    <div className="certification-name">MS DP-900</div>  
                    <div className="certification-issuer">Microsoft</div>
                    <div className="certification-date">Issued: Feb 2023</div>
                  </div>
                </div>
                
              </div>
            </section>
  
         <br />
         <br />
         <br />
          </div>
        </div>
      </section>
    )
  }
  
  export default Profile
  