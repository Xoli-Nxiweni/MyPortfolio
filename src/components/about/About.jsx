import { motion } from "framer-motion"
import { FaCode, FaServer, FaMobile, FaDatabase, FaTools, FaLaptopCode } from "react-icons/fa"
import "./About.css"

const About = () => {
  return (
    <section className="about-container" id="aboutSection" aria-labelledby="about-heading">
      <header className="about-header">
        <h2 id="about-heading" className="section-title">About Me</h2>
      </header>

      <div className="about-content">
        <div className="about-text">
          <p>
            I'm Xolile Nxiweni, a dedicated Software Developer specializing in
            building modern web and mobile applications. My journey in software
            development has been driven by a passion for creating elegant and
            effective solutions to complex problems.
          </p>
          <p>
            I specialize in full-stack development using the MERN stack (MongoDB,
            Express, React, Node.js), and continuously expand my expertise in
            emerging technologies. I am committed to writing clean, maintainable
            code and delivering intuitive user experiences that drive business value.
          </p>
          <p>
            Beyond coding, I actively explore new technologies and deepen my
            knowledge through technical documentation and hands-on practice. I am
            passionate about continuous learning and professional growth in the
            ever-evolving field of software development.
          </p>
        </div>
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Xoli Nxiweni - Full Stack Software Developer working on modern web and mobile applications using MERN stack technologies"
            loading="lazy"
            width="600"
            height="400"
          />
        </div>
      </div>

      <section className="skills-container" aria-labelledby="skills-heading">
        <h3 id="skills-heading" className="section-title">My Tech Stack & Tools</h3>

        <div className="skills-grid">
          <motion.div 
            className="skill-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="skill-header">
              <div className="skill-icon">
                <FaCode />
              </div>
              <h4 className="skill-title">Frontend</h4>
            </div>
            <ul className="skill-list">
              <li className="skill-item">React.js</li>
              <li className="skill-item">JavaScript (ES6+)</li>
              <li className="skill-item">TypeScript</li>
              <li className="skill-item">HTML5 & CSS3</li>
              <li className="skill-item">Redux State Management</li>
              <li className="skill-item">Tailwind CSS</li>
            </ul>
          </motion.div>

          <motion.div 
            className="skill-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="skill-header">
              <div className="skill-icon">
                <FaServer />
              </div>
              <h4 className="skill-title">Backend</h4>
            </div>
            <ul className="skill-list">
              <li className="skill-item">Java</li>
              <li className="skill-item">C#</li>
              <li className="skill-item">Node.js</li>
              <li className="skill-item">Express.js</li>
              <li className="skill-item">RESTful APIs</li>
              <li className="skill-item">Authentication & Authorization</li>
              <li className="skill-item">Server-side Rendering</li>
            </ul>
          </motion.div>

          <motion.div 
            className="skill-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="skill-header">
              <div className="skill-icon">
                <FaDatabase />
              </div>
              <h4 className="skill-title">Database</h4>
            </div>
            <ul className="skill-list">
              <li className="skill-item">MongoDB</li>
              <li className="skill-item">Firebase</li>
              <li className="skill-item">SQLite</li>
              <li className="skill-item">Data Modeling</li>
              <li className="skill-item">Database Optimization</li>
            </ul>
          </motion.div>

          <motion.div 
            className="skill-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="skill-header">
              <div className="skill-icon">
                <FaMobile />
              </div>
              <h4 className="skill-title">Mobile</h4>
            </div>
            <ul className="skill-list">
              <li className="skill-item">Expo</li>
              <li className="skill-item">React Native</li>
              <li className="skill-item">Responsive Design</li>
              <li className="skill-item">Mobile-First Approach</li>
              <li className="skill-item">Cross-platform Development</li>
            </ul>
          </motion.div>

          <motion.div 
            className="skill-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="skill-header">
              <div className="skill-icon">
                <FaTools />
              </div>
              <h4 className="skill-title">Tools</h4>
            </div>
            <ul className="skill-list">
              <li className="skill-item">GitHub</li>
              <li className="skill-item">VS Code</li>
              <li className="skill-item">Postman</li>
              <li className="skill-item">Figma</li>
              <li className="skill-item">MongoDB Atlas & Compass</li>
              <li className="skill-item">Trello</li>
              <li className="skill-item">Slack</li>
              <li className="skill-item">Microsoft Teams</li>
              <li className="skill-item">Google Workspace</li>
            </ul>
          </motion.div>

          <motion.div 
            className="skill-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="skill-header">
              <div className="skill-icon">
                <FaLaptopCode />
              </div>
              <h4 className="skill-title">Other</h4>
            </div>
            <ul className="skill-list">
              <li className="skill-item">Agile Methodology</li>
              {/* <li className="skill-item">CI/CD</li> */}
              <li className="skill-item">
                Testing (Jest, React Testing Library)
              </li>
              <li className="skill-item">Problem Solving</li>
              <li className="skill-item">Technical Documentation</li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="experience-container" aria-labelledby="experience-heading">
        <h3 id="experience-heading" className="section-title">Experience</h3>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-date">August 2024 - December 2024</div>
              <h4 className="timeline-title">Intern Software Engineer</h4>
              <div className="timeline-company">Yooko Technologies (Pty) Ltd</div>
              <p className="timeline-description">
                Designed, developed, and maintained full-stack internal software solutions,
                including web applications for employee use. Collaborated with the development
                team to deliver scalable and efficient software solutions.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-date">May 2024 - March 2025</div>
              <h4 className="timeline-title">CodeTribe Trainee</h4>
              <div className="timeline-company">mLab Southern Africa</div>
              <p className="timeline-description">
                Developed full-stack web and mobile applications using the MERN stack
                (React and React Native). Built responsive UIs for mobile and web
                applications, implemented server-side rendering, created RESTful APIs,
                and integrated with databases. Collaborated with cross-functional teams
                to deliver high-quality software solutions.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-date">Feb 2023 - Feb 2024</div>
              <h4 className="timeline-title">Software Development Trainee NQF Level 5</h4>
              <div className="timeline-company">Dynamic DNA</div>
              <p className="timeline-description">
                Earned international certifications including Microsoft AZ-900, DP-900,
                and Oracle OCA Java SE 8. Mentored a team of trainees on a web development
                project, guiding them in building responsive portfolios using HTML, CSS,
                and JavaScript. Developed technical training materials and provided
                hands-on guidance.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-date">Jan 2022 - Jan 2023</div>
              <h4 className="timeline-title">Software Development Trainee NQF Level 4</h4>
              <div className="timeline-company">Dynamic DNA</div>
              <p className="timeline-description">
                Developed educational websites and created technical assessments,
                examinations, and projects for web development using HTML, CSS, JavaScript,
                Java, and C#. Gained foundational knowledge in data analysis using MS Excel
                and network fundamentals.
              </p>
            </div>
          </div>
          
        </div>
      </section>
    </section>
  );
}

export default About
