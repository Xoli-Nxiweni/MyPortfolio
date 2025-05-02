"use client"

import { useState } from "react"
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaTwitter, FaPaperPlane } from "react-icons/fa"
import "./Contact.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData)
    alert("Thank you for your message! I will get back to you soon.")
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <div className="contact-container" id="contactSection">
      <div className="contact-header">
        <h2 className="section-title">Contact Me</h2>
        <p className="section-subtitle">Have a question or want to work together? Feel free to get in touch with me.</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <p className="contact-text">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision. Feel
            free to contact me using your preferred method.
          </p>

          <div className="contact-methods">
            <div className="contact-method">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="contact-details">
                <h3 className="contact-method-title">Location</h3>
                <p className="contact-method-value">Cape Town, South Africa</p>
              </div>
            </div>

            <div className="contact-method">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div className="contact-details">
                <h3 className="contact-method-title">Email</h3>
                <p className="contact-method-value">
                  <a href="mailto:xolinxiweni@gmail.com" className="contact-method-link">
                    xolinxiweni@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="contact-method">
              <div className="contact-icon">
                <FaPhone />
              </div>
              <div className="contact-details">
                <h3 className="contact-method-title">Phone</h3>
                <p className="contact-method-value">
                  <a href="tel:+27712345678" className="contact-method-link">
                    +27 71 234 5678
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="contact-social">
            <a
              href="https://github.com/Xoli-Nxiweni"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-link"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/xolinxiweni/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-link"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/xolinxiweni"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-link"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                required
              ></textarea>
            </div>
            <button type="submit" className="form-submit">
              <FaPaperPlane /> Send Message
            </button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Contact
