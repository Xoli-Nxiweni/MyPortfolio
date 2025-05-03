import { FaCode, FaServer, FaMobile, FaDatabase, FaTools, FaLaptopCode } from "react-icons/fa"
import "./About.css"

const About = () => {
  return (
    <div className="about-container" id="aboutSection">
      <div className="about-header">
        <h2 className="section-title">About Me</h2>
      </div>

      <div className="about-content">
        <div className="about-text">
          <p>
            Hi again, I'm Xolile Nxiweni, a Junior Software Developer with a
            focus on building modern web and mobile applications. My journey in
            software development began very funny, but I discovered my passion
            for creating elegant and profound solutions to complex problems.
          </p>
          <p>
            In my Full-Stack development, I'm using the MERN stack (MongoDB,
            Express, React, Node.js), and I'm constantly expanding my knowledge
            in emerging technologies. I believe in writing clean, maintainable
            code and creating intuitive user experiences.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies,
            expanding my knowledge through technical documentation. I'm always
            eager to learn and grow as a developer.
          </p>
        </div>
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Developer working on code"
          />
        </div>
      </div>

      <div className="skills-container">
        <h3 className="section-title">My Tech Stack & Tools</h3>

        <div className="skills-grid">
          <div className="skill-card">
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
          </div>

          <div className="skill-card">
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
          </div>

          <div className="skill-card">
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
          </div>

          <div className="skill-card">
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
          </div>

          <div className="skill-card">
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
          </div>

          <div className="skill-card">
            <div className="skill-header">
              <div className="skill-icon">
                <FaLaptopCode />
              </div>
              <h4 className="skill-title">Other</h4>
            </div>
            <ul className="skill-list">
              <li className="skill-item">Agile Methodology</li>
              <li className="skill-item">CI/CD</li>
              <li className="skill-item">
                Testing (Jest, React Testing Library)
              </li>
              <li className="skill-item">Problem Solving</li>
              <li className="skill-item">Technical Documentation</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="experience-container">
        <h3 className="section-title">Experience</h3>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-date">May 2024 - March 2025</div>
              <h4 className="timeline-title">CodeTribe Trainee</h4>
              <div className="timeline-company">mLab Southern Africa</div>
              <p className="timeline-description">
                Working on Full-Stack web and mobile applications using the MERN stack 
                (React and React Native). Developing responsive UIs for mobile and web 
                applications, building server-side rendering apps, implementing 
                RESTful APIs, and integrating with databases. Collaborating with 
                a cross-functional team to deliver high-quality software solutions.
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
                Focused on international certificates, including AZ-900, DP-900,
                OCA JAVA SE 8. I also worked on mentoring a group of trainees within
                the company for a month for a Web Development project using HTML, CSS,
                and JavaScript to build personal responsive and visually appealing 
                portfolios.
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
                Developed websites for educational purposes, wrote technical
                tests, examinations and projects for web development using HTML,
                CSS, Javascript, Java, C# and a bit of other skills like Solving
                math problems using MS Excel and a bit of Networks. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About
