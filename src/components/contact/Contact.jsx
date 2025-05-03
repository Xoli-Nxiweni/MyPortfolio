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
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ success: null, message: "" })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ success: null, message: "" })
    
    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      const data = await response.json()
      
      if (response.ok) {
        setSubmitStatus({ 
          success: true, 
          message: data.message || "Thank you for your message! I will get back to you soon." 
        })
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      } else {
        setSubmitStatus({ 
          success: false, 
          message: data.message || "Something went wrong. Please try again later." 
        })
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus({ 
        success: false, 
        message: "Unable to connect to server. Please try again later." 
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="contact-container" id="contactSection">
      <div className="contact-header">
        <h2 className="section-title">Contact Me</h2>
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
                <p className="contact-method-value">Johannesburg, South Africa</p>
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
                  <a href="tel:+27 60 545 0493" className="contact-method-link">
                    +27 60 545 0493
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* <div className="contact-social">
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
          </div> */}
        </div>

        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            {submitStatus.success === true && (
              <div className="form-status success">
                {submitStatus.message}
              </div>
            )}
            
            {submitStatus.success === false && (
              <div className="form-status error">
                {submitStatus.message}
              </div>
            )}
            
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="form-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  <FaPaperPlane /> Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Contact