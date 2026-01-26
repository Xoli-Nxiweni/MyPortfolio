"use client"

import { useState } from "react"
import Navbar from "./components/navbar/Navbar"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Home from "./components/home/Home"
import Profile from "./components/profile/Profile"
import Footer from "./components/footer/Footer"
import Projects from "./components/projects/Projects"
import "./globalStyles.css"

const App = () => {
  const [activeSection, setActiveSection] = useState("homeSection")

  return (
    <>
      {/* <ThemeToggle /> */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <section id="homeSection" aria-label="Home">
          <Home />
        </section>
        <section id="aboutSection" aria-label="About">
          <About />
        </section>
        <section id="profileSection" aria-label="Profile">
          <Profile />
        </section>
        <section id="projectsSection" aria-label="Projects">
          <Projects />
        </section>
        <section id="contactSection" aria-label="Contact">
          <Contact />
        </section>
      </main>
      <footer id="footerSection" aria-label="Footer">
        <Footer />
      </footer>
    </>
  )
}

export default App
