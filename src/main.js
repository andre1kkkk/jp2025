// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", () => {
  // Navbar scroll effect
  const navbar = document.querySelector(".navbar")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled")
    } else {
      navbar.classList.remove("scrolled")
    }
  })

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        const offsetTop = target.offsetTop - 80 // Account for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }
    })
  })

  // Fade in animation on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible")
      }
    })
  }, observerOptions)

  // Add fade-in class to elements and observe them
  document.querySelectorAll("section").forEach((section) => {
    section.classList.add("fade-in")
    observer.observe(section)
  })

  // Contact form handling
  const contactForm = document.getElementById("contactForm")
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault()

      const submitBtn = this.querySelector('button[type="submit"]')
      const originalText = submitBtn.innerHTML

      // Show loading state
      submitBtn.innerHTML = '<span class="loading"></span> Enviando...'
      submitBtn.disabled = true

      // Simulate form submission
      setTimeout(() => {
        // Show success message
        const alertDiv = document.createElement("div")
        alertDiv.className = "alert alert-success mt-3"
        alertDiv.innerHTML =
          '<i class="bi bi-check-circle me-2"></i>Mensagem enviada com sucesso! Entraremos em contato em breve.'

        this.appendChild(alertDiv)

        // Reset form
        this.reset()

        // Reset button
        submitBtn.innerHTML = originalText
        submitBtn.disabled = false

        // Remove alert after 5 seconds
        setTimeout(() => {
          alertDiv.remove()
        }, 5000)
      }, 2000)
    })
  }

  // Auto-advance testimonials carousel
  const testimonialsCarousel = document.getElementById("testimonialsCarousel")
  if (testimonialsCarousel) {
    const bootstrap = window.bootstrap // Declare the bootstrap variable
    const carousel = new bootstrap.Carousel(testimonialsCarousel, {
      interval: 5000,
      wrap: true,
    })
  }

  // Pricing button animation
  const pricingButtons = document.querySelectorAll(".btn-primary, .btn-accent")
  pricingButtons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px)"
    })

    button.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
    })
  })
})

// Checkout function (placeholder)
function openCheckout() {
  // Show loading state
  const button = event.target
  const originalText = button.innerHTML
  button.innerHTML = '<span class="loading"></span> Processando...'
  button.disabled = true

  // Simulate checkout process
  setTimeout(() => {
    alert(
      "Redirecionando para o checkout seguro...\n\nEm uma implementação real, aqui você integraria com um gateway de pagamento como Stripe, PagSeguro, ou Mercado Pago.",
    )

    // Reset button
    button.innerHTML = originalText
    button.disabled = false
  }, 2000)
}

// Add some interactive features
document.addEventListener("DOMContentLoaded", () => {
  // Add click tracking for analytics (placeholder)
  document.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener("click", function () {
      const buttonText = this.textContent.trim()
      console.log(`Button clicked: ${buttonText}`)
      // Here you would send data to your analytics service
    })
  })

  // Add hover effects to feature cards
  document.querySelectorAll(".d-flex").forEach((card) => {
    card.addEventListener("mouseenter", function () {
      const icon = this.querySelector("i")
      if (icon) {
        icon.style.transform = "scale(1.1)"
        icon.style.transition = "transform 0.3s ease"
      }
    })

    card.addEventListener("mouseleave", function () {
      const icon = this.querySelector("i")
      if (icon) {
        icon.style.transform = "scale(1)"
      }
    })
  })
})
