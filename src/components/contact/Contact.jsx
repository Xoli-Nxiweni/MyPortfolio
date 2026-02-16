"use client"

import { useState, useEffect, useRef } from "react"
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
  const [touchedFields, setTouchedFields] = useState({})
  const [retryCount, setRetryCount] = useState(0)
  
  // Refs for form inputs to detect autofill
  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const subjectRef = useRef(null)
  const messageRef = useRef(null)

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) {
          return "Hey! Your name would be nice to know"
        }
        if (value.trim().length < 2) {
          return "Name needs at least 2 characters (we're not that formal!)"
        }
        if (value.trim().length > 100) {
          return "Whoa there! Keep it under 100 characters"
        }
        if (!/^[a-zA-Z\s'-]+$/.test(value.trim())) {
          return "Names usually contain letters, spaces, hyphens, or apostrophes"
        }
        return null

      case 'email':
        if (!value.trim()) {
          return "Email is missing! How else will I reach you?"
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(value)) {
          return "That doesn't look like a valid email. Check for typos!"
        }
        // Check for common email issues
        if (value.includes('..')) {
          return "Double dots detected! Check your email address"
        }
        if (value.startsWith('.') || value.endsWith('.')) {
          return "Email can't start or end with a dot"
        }
        return null

      case 'subject':
        if (!value.trim()) {
          return "What's this message about? Give it a subject!"
        }
        if (value.trim().length < 3) {
          return "Subject needs at least 3 characters (be a bit more specific!)"
        }
        if (value.trim().length > 200) {
          return "Subject too long! Keep it concise (under 200 characters)"
        }
        return null

      case 'message':
        if (!value.trim()) {
          return "Don't leave me hanging! What's your message?"
        }
        if (value.trim().length < 10) {
          return `Message too short! You've got ${value.trim().length} characters, need at least 10`
        }
        if (value.trim().length > 1000) {
          return `That's a novel! Keep it under 1000 characters (you're at ${value.trim().length})`
        }
        return null

      default:
        return null
    }
  }

  const validateForm = () => {
    const errors = {}
    let isValid = true

    Object.keys(formData).forEach((field) => {
      const error = validateField(field, formData[field])
      if (error) {
        errors[field] = error
        isValid = false
      }
    })

    setValidationErrors(errors)
    return isValid
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
    
    // Real-time validation for touched fields
    if (touchedFields[name]) {
      const error = validateField(name, value)
      setValidationErrors((prev) => ({
        ...prev,
        [name]: error || undefined
      }))
    }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    setTouchedFields((prev) => ({
      ...prev,
      [name]: true
    }))
    
    // Validate on blur
    const error = validateField(name, value)
    setValidationErrors((prev) => ({
      ...prev,
      [name]: error || undefined
    }))
  }

  // Handle autofill detection
  const handleInput = (e) => {
    const { name, value } = e.target
    
    // Update form data immediately for autofill
    setFormData((prevState) => {
      if (prevState[name] !== value) {
        return {
          ...prevState,
          [name]: value,
        }
      }
      return prevState
    })
    
    // Mark as touched and validate if value changed
    if (formData[name] !== value) {
      setTouchedFields((prev) => ({
        ...prev,
        [name]: true
      }))
      
      const error = validateField(name, value)
      setValidationErrors((prev) => ({
        ...prev,
        [name]: error || undefined
      }))
    }
  }

  // Check for autofilled values on mount and periodically
  useEffect(() => {
    const checkAutofill = () => {
      const fields = [
        { ref: nameRef, name: 'name' },
        { ref: emailRef, name: 'email' },
        { ref: subjectRef, name: 'subject' },
        { ref: messageRef, name: 'message' }
      ]

      fields.forEach(({ ref, name }) => {
        if (ref.current) {
          const currentValue = ref.current.value
          setFormData((prevState) => {
            if (currentValue && currentValue !== prevState[name]) {
              // Autofill detected - update state
              setTimeout(() => {
                setTouchedFields((prev) => ({
                  ...prev,
                  [name]: true
                }))
                
                const error = validateField(name, currentValue)
                setValidationErrors((prev) => ({
                  ...prev,
                  [name]: error || undefined
                }))
              }, 0)
              
              return {
                ...prevState,
                [name]: currentValue,
              }
            }
            return prevState
          })
        }
      })
    }

    // Check immediately
    checkAutofill()

    // Check periodically for autofill (browsers sometimes delay autofill)
    const interval = setInterval(checkAutofill, 300)
    
    // Check after a short delay (autofill often happens after page load)
    const timeout = setTimeout(checkAutofill, 500)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, []) // Empty dependency array - only run on mount

  // Listen for autofill events via animation
  useEffect(() => {
    const handleAnimationStart = (e) => {
      if (e.animationName === 'onAutoFillStart') {
        // Autofill detected, check all fields
        setTimeout(() => {
          const fields = [
            { ref: nameRef, name: 'name' },
            { ref: emailRef, name: 'email' },
            { ref: subjectRef, name: 'subject' },
            { ref: messageRef, name: 'message' }
          ]

          fields.forEach(({ ref, name }) => {
            if (ref.current) {
              const currentValue = ref.current.value
              setFormData((prevState) => {
                if (currentValue && currentValue !== prevState[name]) {
                  setTimeout(() => {
                    setTouchedFields((prev) => ({
                      ...prev,
                      [name]: true
                    }))
                    
                    const error = validateField(name, currentValue)
                    setValidationErrors((prev) => ({
                      ...prev,
                      [name]: error || undefined
                    }))
                  }, 0)
                  
                  return {
                    ...prevState,
                    [name]: currentValue,
                  }
                }
                return prevState
              })
            }
          })
        }, 100)
      }
    }

    document.addEventListener('animationstart', handleAnimationStart, true)
    
    return () => {
      document.removeEventListener('animationstart', handleAnimationStart, true)
    }
  }, []) // Empty dependency array
  
  const openMailtoFallback = () => {
    const subject = encodeURIComponent(formData.subject)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    window.location.href = `mailto:xolinxiweni@gmail.com?subject=${subject}&body=${body}`
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Read actual input values directly (handles autofill)
    const actualFormData = {
      name: nameRef.current?.value || formData.name,
      email: emailRef.current?.value || formData.email,
      subject: subjectRef.current?.value || formData.subject,
      message: messageRef.current?.value || formData.message,
    }
    
    // Update state with actual values if they differ
    setFormData(actualFormData)
    
    // Mark all fields as touched
    const allFieldsTouched = {}
    Object.keys(actualFormData).forEach((field) => {
      allFieldsTouched[field] = true
    })
    setTouchedFields(allFieldsTouched)
    
    // Validate form with actual values
    const errors = {}
    let isValid = true

    Object.keys(actualFormData).forEach((field) => {
      const error = validateField(field, actualFormData[field])
      if (error) {
        errors[field] = error
        isValid = false
      }
    })

    setValidationErrors(errors)
    
    if (!isValid) {
      setSubmitStatus({ 
        success: false, 
        message: "Oops! Please fix the errors before sending." 
      })
      // Scroll to first error
      const firstErrorField = Object.keys(errors)[0]
      if (firstErrorField) {
        const element = document.getElementById(firstErrorField)
        element?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        element?.focus()
      }
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
          body: JSON.stringify(actualFormData),
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
                ref={nameRef}
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onInput={handleInput}
                onBlur={handleBlur}
                autoComplete="name"
                className={`form-input ${validationErrors.name ? 'error' : touchedFields.name && !validationErrors.name ? 'valid' : ''}`}
                disabled={isSubmitting}
                aria-required="true"
                aria-invalid={!!validationErrors.name}
                aria-describedby={validationErrors.name ? "name-error" : undefined}
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
                ref={emailRef}
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onInput={handleInput}
                onBlur={handleBlur}
                autoComplete="email"
                className={`form-input ${validationErrors.email ? 'error' : touchedFields.email && !validationErrors.email ? 'valid' : ''}`}
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
                ref={subjectRef}
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                onInput={handleInput}
                onBlur={handleBlur}
                autoComplete="off"
                className={`form-input ${validationErrors.subject ? 'error' : touchedFields.subject && !validationErrors.subject ? 'valid' : ''}`}
                disabled={isSubmitting}
                aria-required="true"
                aria-invalid={!!validationErrors.subject}
                aria-describedby={validationErrors.subject ? "subject-error" : undefined}
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
                ref={messageRef}
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onInput={handleInput}
                onBlur={handleBlur}
                autoComplete="off"
                className={`form-textarea ${validationErrors.message ? 'error' : touchedFields.message && !validationErrors.message ? 'valid' : ''}`}
                disabled={isSubmitting}
                aria-required="true"
                aria-invalid={!!validationErrors.message}
                aria-describedby={validationErrors.message ? "message-error" : undefined}
                rows="6"
              ></textarea>
              {formData.message && (
                <div className="character-count">
                  {formData.message.trim().length}/1000 characters
                </div>
              )}
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