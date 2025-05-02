"use client"

import { useState, useEffect } from "react"
import { FaSun, FaMoon } from "react-icons/fa"

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    // Check for saved theme preference or use device preference
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark")
    } else {
      // Use device preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      setIsDarkMode(prefersDark)
    }
  }, [])

  useEffect(() => {
    // Apply theme class to body
    if (isDarkMode) {
      document.body.classList.remove("light-theme")
    } else {
      document.body.classList.add("light-theme")
    }

    // Save preference
    localStorage.setItem("theme", isDarkMode ? "dark" : "light")
  }, [isDarkMode])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
      {isDarkMode ? <FaSun /> : <FaMoon />}
    </button>
  )
}

export default ThemeToggle
