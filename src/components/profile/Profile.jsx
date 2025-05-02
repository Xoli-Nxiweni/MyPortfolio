import {
    FaMapMarkerAlt,
    FaEnvelope,
    FaPhone,
    FaGlobe,
    FaGithub,
    FaLinkedin,
    FaTwitter,
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
  import image from "../../assets/myPhoto.JPG"
  
  const Profile = () => {
    return (
      <div className="profile-container" id="profileSection">
        <div className="profile-header">
          <h2 className="section-title">My Profile</h2>
          <p className="section-subtitle">Personal information, education, certifications, and interests</p>
        </div>
  
        <div className="profile-content">
          <div className="profile-sidebar">
            <div className="profile-card">
              <div className="profile-image">
                <img
                  src={image}
                  alt="Xoli Nxiweni"
                />
              </div>
              <div className="profile-info">
                <h3 className="profile-name">Xoli Nxiweni</h3>
                <p className="profile-title">Junior Software Engineer</p>
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
                    <span>+27 60 545 0493</span>
                  </div>
                  {/* <div className="profile-detail">
                    <FaGlobe className="detail-icon" />
                    <span>www.xolinxiweni.com</span>
                  </div> */}
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
                    href="https://twitter.com/xolinxiweni"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="profile-social-link"
                  >
                    <FaTwitter />
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
            <div className="profile-section">
              <h3 className="profile-section-title">Education</h3>
              {/* <div className="education-item">
                <div className="education-date">2019 - 2022</div>
                <div className="education-degree">Bachelor of Science in Computer Science</div>
                <div className="education-school">University of Cape Town</div>
                <div className="education-description">
                  Focused on software engineering, web development, and database management. Completed coursework in
                  algorithms, data structures, and software design patterns.
                </div>
              </div> */}
              <div className="education-item">
                <div className="education-date">3 Months</div>
                <div className="education-degree">Self Taught</div>
                <div className="education-school">Solo Learn</div>
                <div className="education-description">
                  Completed various online courses in web development, including HTML, CSS, JavaScript, and React, 
                  python, java, sql and various other tools and languages all in a space of 3 months.
                </div>
              </div>
              <div className="education-item">
                <div className="education-date">2011 - 2016</div>
                <div className="education-degree">High School Diploma</div>
                <div className="education-school">Lamula Jubilee Secondary School</div>
                <div className="education-description">
                  Graduated with from the school, participated in various extracurricular activities.
                </div>
              </div>
            </div>
  
            <div className="profile-section">
              <h3 className="profile-section-title">Certifications</h3>
              <div className="certifications-list">
                <div className="certification-item">
                  <FaCertificate className="certification-icon" />
                  <div className="certification-content">
                    <div className="certification-name">Full Stack Web and Mobile Development</div>
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
                    <div className="certification-name">NQF Level 5</div>
                    <div className="certification-issuer">Dynamic DNA</div>
                    <div className="certification-date">Issued: November 2024</div>
                  </div>
                </div>
                <div className="certification-item">
                  <FaCertificate className="certification-icon" />
                  <div className="certification-content">
                    <div className="certification-name">OCAJava SE 8</div>
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
            </div>
  
            <div className="profile-section">
              <h3 className="profile-section-title">Interests</h3>
              <div className="interests-list">
                <div className="interest-item">
                  <FaCode className="interest-icon" />
                  <span className="interest-name">Coding</span>
                </div>
                <div className="interest-item">
                  <FaBook className="interest-icon" />
                  <span className="interest-name">Reading</span>
                </div>
                <div className="interest-item">
                  <FaMusic className="interest-icon" />
                  <span className="interest-name">Music</span>
                </div>
                {/* <div className="interest-item">
                  <FaGamepad className="interest-icon" />
                  <span className="interest-name">Gaming</span>
                </div>
                <div className="interest-item">
                  <FaHiking className="interest-icon" />
                  <span className="interest-name">Hiking</span>
                </div> */}
                <div className="interest-item">
                  <FaCamera className="interest-icon" />
                  <span className="interest-name">Photography</span>
                </div>
                <div className="interest-item">
                  <FaPlane className="interest-icon" />
                  <span className="interest-name">Travel</span>
                </div>
                <div className="interest-item">
                  <FaGraduationCap className="interest-icon" />
                  <span className="interest-name">Learning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Profile
  