"use client"

import { useState } from "react"
import Navbar from "./components/navbar/Navbar"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Home from "./components/home/Home"
import Profile from "./components/profile/Profile"
import Footer from "./components/footer/Footer"
import Projects from "./components/projects/Projects"
import ThemeToggle from "./ThemeToggle"
import "./globalStyles.css"

const App = () => {
  const [activeSection, setActiveSection] = useState("homeSection")

  return (
    <div>
      <ThemeToggle />
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <section id="homeSection">
        <Home />
      </section>
      <section id="aboutSection">
        <About />
      </section>
      <section id="profileSection">
        <Profile />
      </section>
      <section id="projectsSection">
        <Projects />
      </section>
      <section id="contactSection">
        <Contact />
      </section>
      <section id="footerSection">
        <Footer />
      </section>
    </div>
  )
}

export default App
