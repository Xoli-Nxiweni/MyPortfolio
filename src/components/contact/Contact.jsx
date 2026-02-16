"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaTwitter, FaPaperPlane, FaExternalLinkAlt } from "react-icons/fa"
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
  const [validationErrors, setValidationErrors] = useState({})
  const [retryCount, setRetryCount] = useState(0)

  const validateForm = () => {
    const errors = {}
    
    if (!formData.name.trim() || formData.name.length < 2) {
      errors.name = "Name must be at least 2 characters long"
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      errors.email = "Please enter a valid email address"
    }
    
    if (!formData.subject.trim() || formData.subject.length < 3) {
      errors.subject = "Subject must be at least 3 characters long"
    }
    
    if (!formData.message.trim() || formData.message.length < 10) {
      errors.message = "Message must be at least 10 characters long"
    }
    
    setValidationErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
    
    // Clear validation error for this field when user types
    if (validationErrors[name]) {
      setValidationErrors((prev) => ({
        ...prev,
        [name]: undefined
      }))
    }
  }
  
  const openMailtoFallback = () => {
    const subject = encodeURIComponent(formData.subject)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    window.location.href = `mailto:xolinxiweni@gmail.com?subject=${subject}&body=${body}`
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validate form
    if (!validateForm()) {
      setSubmitStatus({ 
        success: false, 
        message: "Please fix the errors in the form before submitting." 
      })
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus({ success: null, message: "" })
    
    const maxRetries = 2
    let attempt = 0
    
    while (attempt <= maxRetries) {
      try {
        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), 10000) // 10 second timeout
        
        const response = await fetch('https://myportfolioemailservice.vercel.app/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
          signal: controller.signal
        })
        
        clearTimeout(timeoutId)
        
        if (response.ok) {
          const data = await response.json()
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
          setRetryCount(0)
          setIsSubmitting(false)
          return
        } else {
          const data = await response.json().catch(() => ({}))
          throw new Error(data.message || `Server error: ${response.status}`)
        }
      } catch (error) {
        console.error(`Attempt ${attempt + 1} failed:`, error)
        attempt++
        
        if (attempt > maxRetries) {
          setSubmitStatus({ 
            success: false, 
            message: "Unable to send message. The server might be temporarily unavailable." 
          })
          setRetryCount(attempt)
          break
        }
        
        // Wait before retrying (exponential backoff)
        await new Promise(resolve => setTimeout(resolve, 1000 * attempt))
      }
    }
    
    setIsSubmitting(false)
  }

  return (
    <section className="contact-container" id="contactSection" aria-labelledby="contact-heading">
      <div className="contact-header">
        <h2 id="contact-heading" className="section-title">Contact Me</h2>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <p className="contact-text">
            I'm always open to discussing new projects, creative ideas, or opportunities
            to be part of your vision. Whether you're looking for a developer to join your
            team or need assistance with a project, feel free to reach out using your
            preferred method.
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
                  <a href="tel:+27 61 751 4638" className="contact-method-link">
                    +27 61 751 4638
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
          <form className="contact-form" onSubmit={handleSubmit} aria-label="Contact form">
            {submitStatus.success === true && (
              <div className="form-status success" role="alert" aria-live="polite">
                {submitStatus.message}
              </div>
            )}
            
            {submitStatus.success === false && (
              <div className="form-status error" role="alert" aria-live="assertive">
                {submitStatus.message}
              </div>
            )}
            
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Name <span aria-label="required">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`form-input ${validationErrors.name ? 'error' : ''}`}
                required
                disabled={isSubmitting}
                aria-required="true"
                aria-invalid={!!validationErrors.name}
                aria-describedby={validationErrors.name ? "name-error" : undefined}
                minLength="2"
                maxLength="100"
              />
              {validationErrors.name && (
                <span id="name-error" className="field-error" role="alert">
                  {validationErrors.name}
                </span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email <span aria-label="required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`form-input ${validationErrors.email ? 'error' : ''}`}
                required
                disabled={isSubmitting}
                aria-required="true"
                aria-invalid={!!validationErrors.email}
                aria-describedby={validationErrors.email ? "email-error" : undefined}
              />
              {validationErrors.email && (
                <span id="email-error" className="field-error" role="alert">
                  {validationErrors.email}
                </span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="subject" className="form-label">
                Subject <span aria-label="required">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`form-input ${validationErrors.subject ? 'error' : ''}`}
                required
                disabled={isSubmitting}
                aria-required="true"
                aria-invalid={!!validationErrors.subject}
                aria-describedby={validationErrors.subject ? "subject-error" : undefined}
                minLength="3"
                maxLength="200"
              />
              {validationErrors.subject && (
                <span id="subject-error" className="field-error" role="alert">
                  {validationErrors.subject}
                </span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message <span aria-label="required">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`form-textarea ${validationErrors.message ? 'error' : ''}`}
                required
                disabled={isSubmitting}
                aria-required="true"
                aria-invalid={!!validationErrors.message}
                aria-describedby={validationErrors.message ? "message-error" : undefined}
                minLength="10"
                maxLength="1000"
                rows="6"
              ></textarea>
              {validationErrors.message && (
                <span id="message-error" className="field-error" role="alert">
                  {validationErrors.message}
                </span>
              )}
            </div>
            <button 
              type="submit" 
              className="form-submit"
              disabled={isSubmitting}
              aria-label={isSubmitting ? "Sending message" : "Send message"}
            >
              {isSubmitting ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    style={{ display: "inline-block" }}
                  >
                    <FaPaperPlane aria-hidden="true" />
                  </motion.div>
                  {" "}Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane aria-hidden="true" /> Send Message
                </>
              )}
            </button>
            
            {submitStatus.success === false && retryCount >= 2 && (
              <motion.div 
                className="mailto-fallback"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="fallback-text">Having trouble? Try sending an email directly:</p>
                <button
                  type="button"
                  onClick={openMailtoFallback}
                  className="fallback-button"
                  aria-label="Open email client to send message"
                >
                  <FaExternalLinkAlt aria-hidden="true" /> Open Email Client
                </button>
              </motion.div>
            )}
          </form>
        </div>
      </div>

    </section>
  )
}

export default Contact