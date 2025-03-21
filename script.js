// The codes for the Homepage
document.addEventListener("DOMContentLoaded", () => {
    // Create particles and neural network
    createParticles()
    createNeuralNetwork()
  
    // Initialize interactive background
    initInteractiveBackground()
  
    // Simulate loading time (you can remove this in production)
    const loadingTime = 5000 // 5 seconds
  
    // Get elements
    const preloader = document.querySelector(".preloader")
    const mainContent = document.querySelector(".main-content")
    const progressFill = document.querySelector(".progress-fill")
    const progressPercentage = document.querySelector(".progress-percentage")
    const progressMessage = document.querySelector(".progress-message")
    const memoryCapacityFill = document.querySelector(".memory-capacity-fill")
    const neuralConnectionsFill = document.querySelector(".neural-connections-fill")
    const knowledgeIndexFill = document.querySelector(".knowledge-index-fill")
    const synapseCount = document.querySelector(".synapse-count")
    const pathwayCount = document.querySelector(".pathway-count")
  
    // Memory-related loading messages
    const loadingMessages = [
      "Initializing memory systems...",
      "Establishing neural connections...",
      "Allocating memory blocks...",
      "Indexing knowledge database...",
      "Optimizing memory pathways...",
      "Synchronizing brain hemispheres...",
      "Activating synaptic responses...",
      "Loading cognitive frameworks...",
    ]
  
    // Update progress bar and memory stats
    let progress = 0
    let synapses = 0
    let pathways = 0
  
    const progressInterval = setInterval(() => {
      progress += 1
      progressFill.style.width = `${progress}%`
      progressPercentage.textContent = `${progress}%`
  
      // Update memory capacity (fills up gradually)
      if (progress <= 80) {
        memoryCapacityFill.style.width = `${progress * 1.25}%`
      }
  
      // Update neural connections (jumps in increments)
      if (progress % 10 === 0 && progress <= 90) {
        neuralConnectionsFill.style.width = `${progress}%`
      }
  
      // Update knowledge index (fills up faster toward the end)
      if (progress <= 100) {
        const knowledgeProgress = progress < 50 ? progress * 0.5 : 25 + (progress - 50) * 1.5
        knowledgeIndexFill.style.width = `${knowledgeProgress}%`
      }
  
      // Update synapse and pathway counts
      if (progress % 5 === 0) {
        synapses += Math.floor(Math.random() * 50) + 10
        synapseCount.textContent = synapses.toLocaleString()
  
        pathways += Math.floor(Math.random() * 20) + 5
        pathwayCount.textContent = pathways.toLocaleString()
      }
  
      // Change message at certain progress points
      if (progress % 12 === 0 || progress === 1) {
        const messageIndex = Math.floor(progress / 12)
        const message = loadingMessages[messageIndex] || loadingMessages[loadingMessages.length - 1]
        progressMessage.textContent = message
  
        // Add a small animation to the message change
        progressMessage.style.animation = "none"
        void progressMessage.offsetWidth // Trigger reflow
        progressMessage.style.animation = "fade-in 0.5s ease-out forwards"
      }
  
      // Create brain activity at random intervals
      if (Math.random() > 0.9) {
        createBrainActivity()
      }
  
      if (progress >= 100) {
        clearInterval(progressInterval)
        progressMessage.textContent = "Memory systems ready!"
      }
    }, loadingTime / 100)
  
    // Hide preloader and show main content after loading time
    setTimeout(() => {
      // First make the main content visible but still transparent
      mainContent.classList.remove("hidden")
  
      // Force a reflow to ensure the transition works
      void mainContent.offsetWidth
  
      // Add the visible class to fade in the main content
      mainContent.classList.add("visible")
  
      // Fade out the preloader
      preloader.style.opacity = "0"
      preloader.style.visibility = "hidden"
  
      // Remove preloader from DOM after transition completes
      setTimeout(() => {
        preloader.remove()
  
        // Initialize main content animations
        initMainContentAnimations()
  
        // Add floating elements to the background
        addFloatingElements()
  
        // Initialize animations
        initAnimations()
  
        // Initialize theme toggle
        initThemeToggle()
  
        // Animate stats counter
        animateStatCounters()
      }, 800)
    }, loadingTime)
  
    // Create particles function
    function createParticles() {
      const particleContainer = document.querySelector(".particle-container")
      const particleCount = 50
  
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div")
        particle.classList.add("particle")
  
        // Random size between 2px and 6px
        const size = Math.random() * 4 + 2
        particle.style.width = `${size}px`
        particle.style.height = `${size}px`
  
        // Random position
        const posX = Math.random() * 100
        const posY = Math.random() * 100
        particle.style.left = `${posX}%`
        particle.style.top = `${posY}%`
  
        // Random opacity
        const opacity = Math.random() * 0.5 + 0.1
        particle.style.opacity = opacity
  
        // Random animation
        const duration = Math.random() * 20 + 10
        const delay = Math.random() * 5
  
        // Create keyframe animation for each particle
        particle.style.animation = `particle-float ${duration}s ease-in-out ${delay}s infinite`
  
        // Add random color
        const colors = [
          "rgba(99, 102, 241, 0.7)", // primary
          "rgba(236, 72, 153, 0.7)", // secondary
          "rgba(139, 92, 246, 0.7)", // accent1
          "rgba(6, 182, 212, 0.7)", // accent2
          "rgba(16, 185, 129, 0.7)", // accent3
          "rgba(245, 158, 11, 0.7)", // accent4
          "rgba(239, 68, 68, 0.7)", // accent5
        ]
        const randomColor = colors[Math.floor(Math.random() * colors.length)]
        particle.style.backgroundColor = randomColor
        particle.style.boxShadow = `0 0 10px ${randomColor}`
  
        particleContainer.appendChild(particle)
      }
  
      // Add particle animation to stylesheet
      const style = document.createElement("style")
      style.innerHTML = `
              @keyframes particle-float {
                  0%, 100% {
                      transform: translateY(0) translateX(0);
                  }
                  25% {
                      transform: translateY(-${window.innerHeight * 0.2}px) translateX(${window.innerWidth * 0.1}px);
                  }
                  50% {
                      transform: translateY(-${window.innerHeight * 0.1}px) translateX(${window.innerWidth * 0.2}px);
                  }
                  75% {
                      transform: translateY(${window.innerHeight * 0.1}px) translateX(-${window.innerWidth * 0.1}px);
                  }
              }
          `
      document.head.appendChild(style)
    }
  
    // Create neural network function
    function createNeuralNetwork() {
      const neuralNetwork = document.querySelector(".neural-network")
      const neuronCount = 30
      const neurons = []
  
      // Create neurons
      for (let i = 0; i < neuronCount; i++) {
        const neuron = document.createElement("div")
        neuron.classList.add("neuron")
  
        // Random position
        const posX = Math.random() * 100
        const posY = Math.random() * 100
        neuron.style.left = `${posX}%`
        neuron.style.top = `${posY}%`
  
        neuralNetwork.appendChild(neuron)
        neurons.push({
          element: neuron,
          x: posX,
          y: posY,
        })
      }
  
      // Create connections between neurons
      for (let i = 0; i < neurons.length; i++) {
        const neuron = neurons[i]
  
        // Connect to 2-4 closest neurons
        const connections = Math.floor(Math.random() * 3) + 2
  
        // Find closest neurons
        const distances = []
        for (let j = 0; j < neurons.length; j++) {
          if (i !== j) {
            const target = neurons[j]
            const dx = target.x - neuron.x
            const dy = target.y - neuron.y
            const distance = Math.sqrt(dx * dx + dy * dy)
  
            distances.push({
              index: j,
              distance: distance,
            })
          }
        }
  
        // Sort by distance
        distances.sort((a, b) => a.distance - b.distance)
  
        // Create connections to closest neurons
        for (let k = 0; k < connections && k < distances.length; k++) {
          const target = neurons[distances[k].index]
  
          const connection = document.createElement("div")
          connection.classList.add("connection")
  
          // Position and rotate the connection
          const dx = target.x - neuron.x
          const dy = target.y - neuron.y
          const length = Math.sqrt(dx * dx + dy * dy)
          const angle = (Math.atan2(dy, dx) * 180) / Math.PI
  
          connection.style.width = `${length}%`
          connection.style.left = `${neuron.x}%`
          connection.style.top = `${neuron.y}%`
          connection.style.transform = `rotate(${angle}deg)`
  
          neuralNetwork.appendChild(connection)
        }
      }
  
      // Create pulse animations
      setInterval(createPulse, 1000)
  
      function createPulse() {
        if (document.querySelector(".preloader") && document.querySelector(".preloader").style.opacity === "0") return
  
        const pulse = document.createElement("div")
        pulse.classList.add("pulse")
  
        // Start at random neuron
        const startNeuron = neurons[Math.floor(Math.random() * neurons.length)]
        pulse.style.left = `${startNeuron.x}%`
        pulse.style.top = `${startNeuron.y}%`
  
        neuralNetwork.appendChild(pulse)
  
        // Animate pulse along a path
        let currentNeuron = startNeuron
        const steps = Math.floor(Math.random() * 5) + 3
        let currentStep = 0
  
        const pulseInterval = setInterval(() => {
          if (currentStep >= steps) {
            clearInterval(pulseInterval)
            pulse.remove()
            return
          }
  
          // Find a random connected neuron
          const targetIndex = Math.floor(Math.random() * neurons.length)
          const targetNeuron = neurons[targetIndex]
  
          // Animate to target
          pulse.style.transition = `left 0.5s ease-out, top 0.5s ease-out`
          pulse.style.left = `${targetNeuron.x}%`
          pulse.style.top = `${targetNeuron.y}%`
  
          currentNeuron = targetNeuron
          currentStep++
        }, 500)
      }
    }
  
    // Create brain activity function
    function createBrainActivity() {
      const brainActivity = document.querySelector(".brain-activity")
  
      // Create a synapse flash
      const flash = document.createElement("div")
      flash.classList.add("synapse-flash")
  
      // Random position within the brain
      const posX = 20 + Math.random() * 60
      const posY = 20 + Math.random() * 60
      flash.style.left = `${posX}%`
      flash.style.top = `${posY}%`
  
      // Random size
      const size = Math.random() * 6 + 2
      flash.style.width = `${size}px`
      flash.style.height = `${size}px`
  
      // Random color
      const colors = [
        "rgba(139, 92, 246, 0.8)", // accent1
        "rgba(6, 182, 212, 0.8)", // accent2
        "rgba(236, 72, 153, 0.8)", // secondary
      ]
      const randomColor = colors[Math.floor(Math.random() * colors.length)]
      flash.style.backgroundColor = randomColor
      flash.style.boxShadow = `0 0 10px ${randomColor}`
  
      // Add to brain activity
      brainActivity.appendChild(flash)
  
      // Remove after animation
      setTimeout(() => {
        flash.remove()
      }, 500)
    }
  
    // Initialize interactive background
    function initInteractiveBackground() {
      const canvas = document.getElementById("background-canvas")
      const ctx = canvas.getContext("2d")
  
      // Set canvas size
      function resizeCanvas() {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }
  
      resizeCanvas()
      window.addEventListener("resize", resizeCanvas)
  
      // Particle settings
      const particleCount = 80
      const connectionDistance = 150
      const mouseInfluenceRadius = 200
      const particles = []
  
      // Mouse position
      const mouse = {
        x: null,
        y: null,
        radius: mouseInfluenceRadius,
      }
  
      // Track mouse position
      window.addEventListener("mousemove", (event) => {
        mouse.x = event.x
        mouse.y = event.y
      })
  
      // Mouse leaves window
      window.addEventListener("mouseout", () => {
        mouse.x = null
        mouse.y = null
      })
  
      // Create particles
      function createBackgroundParticles() {
        for (let i = 0; i < particleCount; i++) {
          const size = Math.random() * 3 + 1
          const x = Math.random() * canvas.width
          const y = Math.random() * canvas.height
          const directionX = Math.random() * 2 - 1
          const directionY = Math.random() * 2 - 1
          const speed = Math.random() * 0.5 + 0.1
  
          // Random color from theme
          const colors = [
            "rgba(37, 99, 235, 0.5)", // primary
            "rgba(244, 63, 94, 0.5)", // secondary
            "rgba(139, 92, 246, 0.5)", // accent
          ]
          const color = colors[Math.floor(Math.random() * colors.length)]
  
          particles.push({
            x: x,
            y: y,
            size: size,
            color: color,
            directionX: directionX,
            directionY: directionY,
            speed: speed,
            originalSpeed: speed,
            originalSize: size,
          })
        }
      }
  
      // Draw particles and connections
      function animate() {
        requestAnimationFrame(animate)
        ctx.clearRect(0, 0, canvas.width, canvas.height)
  
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i]
  
          // Draw particle
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
          ctx.fillStyle = p.color
          ctx.fill()
  
          // Check for connections
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j]
            const dx = p.x - p2.x
            const dy = p.y - p2.y
            const distance = Math.sqrt(dx * dx + dy * dy)
  
            if (distance < connectionDistance) {
              // Draw connection
              ctx.beginPath()
              ctx.strokeStyle = `rgba(100, 116, 139, ${1 - distance / connectionDistance})`
              ctx.lineWidth = 0.5
              ctx.moveTo(p.x, p.y)
              ctx.lineTo(p2.x, p2.y)
              ctx.stroke()
            }
          }
  
          // Update position
          p.x += p.directionX * p.speed
          p.y += p.directionY * p.speed
  
          // Boundary check
          if (p.x < 0 || p.x > canvas.width) {
            p.directionX = -p.directionX
          }
          if (p.y < 0 || p.y > canvas.height) {
            p.directionY = -p.directionY
          }
  
          // Mouse interaction
          if (mouse.x !== null && mouse.y !== null) {
            const dx = p.x - mouse.x
            const dy = p.y - mouse.y
            const distance = Math.sqrt(dx * dx + dy * dy)
  
            if (distance < mouse.radius) {
              // Increase size and speed when near mouse
              const sizeFactor = 1 + (1 - distance / mouse.radius) * 1.5
              p.size = Math.min(p.originalSize * sizeFactor, p.originalSize * 3)
              p.speed = p.originalSpeed * 2
  
              // Add slight attraction to mouse
              const angle = Math.atan2(dy, dx)
              const pushX = Math.cos(angle) * (1 - distance / mouse.radius) * 0.5
              const pushY = Math.sin(angle) * (1 - distance / mouse.radius) * 0.5
  
              p.directionX -= pushX
              p.directionY -= pushY
            } else {
              // Reset to original size and speed
              p.size = p.originalSize
              p.speed = p.originalSpeed
            }
          } else {
            // Reset when mouse leaves window
            p.size = p.originalSize
            p.speed = p.originalSpeed
          }
        }
      }
  
      createBackgroundParticles()
      animate()
    }
  
    // Add floating elements to the background
    function addFloatingElements() {
      const body = document.body
      const elementCount = 15
  
      for (let i = 0; i < elementCount; i++) {
        const element = document.createElement("div")
        element.classList.add("floating-element")
  
        // Random size
        const size = Math.random() * 80 + 20
        element.style.width = `${size}px`
        element.style.height = `${size}px`
  
        // Random position
        const posX = Math.random() * 100
        const posY = Math.random() * 100
        element.style.left = `${posX}%`
        element.style.top = `${posY}%`
  
        // Random color
        const colors = [
          "rgba(99, 102, 241, 0.1)", // primary
          "rgba(236, 72, 153, 0.1)", // secondary
          "rgba(139, 92, 246, 0.1)", // accent1
          "rgba(6, 182, 212, 0.1)", // accent2
          "rgba(16, 185, 129, 0.1)", // accent3
        ]
        const randomColor = colors[Math.floor(Math.random() * colors.length)]
        element.style.backgroundColor = randomColor
        element.style.boxShadow = `0 0 20px ${randomColor.replace("0.1", "0.3")}`
  
        // Random animation
        const duration = Math.random() * 30 + 20
        const delay = Math.random() * 5
  
        element.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`
  
        body.appendChild(element)
      }
  
      // Add float animation
      const style = document.createElement("style")
      style.innerHTML = `
              @keyframes float {
                  0%, 100% {
                      transform: translate(0, 0) rotate(0deg);
                  }
                  25% {
                      transform: translate(${window.innerWidth * 0.05}px, -${window.innerHeight * 0.05}px) rotate(5deg);
                  }
                  50% {
                      transform: translate(${window.innerWidth * 0.1}px, ${window.innerHeight * 0.05}px) rotate(10deg);
                  }
                  75% {
                      transform: translate(-${window.innerWidth * 0.05}px, ${window.innerHeight * 0.1}px) rotate(5deg);
                  }
              }
          `
      document.head.appendChild(style)
    }
  
    // Initialize main content animations
    function initMainContentAnimations() {
      // Animate counters
      const counters = document.querySelectorAll(".counter")
  
      counters.forEach((counter) => {
        const target = +counter.getAttribute("data-target")
        const duration = 2000 // 2 seconds
        const step = target / (duration / 16) // 60fps
  
        let count = 0
        const updateCounter = () => {
          count += step
          if (count < target) {
            counter.innerText = Math.floor(count)
            requestAnimationFrame(updateCounter)
          } else {
            counter.innerText = target
          }
        }
  
        updateCounter()
      })
  
      // Add hover effects to features
      const features = document.querySelectorAll(".feature")
      features.forEach((feature) => {
        feature.addEventListener("mouseenter", function () {
          this.style.transform = "translateY(-10px)"
          this.style.boxShadow = "0 15px 30px rgba(0, 0, 0, 0.2)"
  
          const img = this.querySelector("img")
          img.style.transform = "scale(1.1)"
        })
  
        feature.addEventListener("mouseleave", function () {
          this.style.transform = "translateY(0)"
          this.style.boxShadow = "none"
  
          const img = this.querySelector("img")
          img.style.transform = "scale(1)"
        })
      })
  
      // Add hover effects to highlight text
      const highlightTexts = document.querySelectorAll(".highlight-text")
      highlightTexts.forEach((text) => {
        text.addEventListener("mouseenter", function () {
          this.style.transform = "translateX(5px)"
          const before = this.querySelector("::before")
          if (before) before.style.transform = "scaleY(1)"
        })
  
        text.addEventListener("mouseleave", function () {
          this.style.transform = "translateX(0)"
          const before = this.querySelector("::before")
          if (before) before.style.transform = "scaleY(0)"
        })
      })
  
      // Add memory recall feature
      checkPreviousVisit()
    }
  
    // Check if user has visited before and store visit data
    function checkPreviousVisit() {
      let visits = localStorage.getItem("studyhub_visits")
      const lastVisit = localStorage.getItem("studyhub_last_visit")
  
      if (!visits) {
        visits = 0
      } else {
        visits = Number.parseInt(visits)
  
        // Create welcome back notification
        const notification = document.createElement("div")
        notification.className = "welcome-notification"
        notification.innerHTML = `
                  <div class="welcome-content">
                      <i class="fas fa-brain"></i>
                      <div>
                          <h3>Welcome back!</h3>
                          <p>Your brain remembers you've visited ${visits} times before.</p>
                          <p>Last visit: ${formatDate(lastVisit)}</p>
                      </div>
                      <button class="close-notification"><i class="fas fa-times"></i></button>
                  </div>
              `
  
        // Style the notification
        const style = document.createElement("style")
        style.textContent = `
                  .welcome-notification {
                      position: fixed;
                      top: 20px;
                      right: 20px;
                      background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
                      color: white;
                      padding: 15px;
                      border-radius: 10px;
                      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
                      z-index: 1000;
                      max-width: 350px;
                      transform: translateX(400px);
                      animation: slideIn 0.5s forwards 1s;
                  }
                  
                  @keyframes slideIn {
                      to { transform: translateX(0); }
                  }
                  
                  .welcome-content {
                      display: flex;
                      align-items: center;
                      gap: 15px;
                  }
                  
                  .welcome-content i.fa-brain {
                      font-size: 24px;
                      color: var(--accent1);
                  }
                  
                  .welcome-content h3 {
                      margin: 0 0 5px 0;
                      font-size: 16px;
                  }
                  
                  .welcome-content p {
                      margin: 0;
                      font-size: 12px;
                      opacity: 0.9;
                  }
                  
                  .close-notification {
                      background: none;
                      border: none;
                      color: white;
                      cursor: pointer;
                      padding: 5px;
                      align-self: flex-start;
                  }
              `
  
        document.head.appendChild(style)
        document.body.appendChild(notification)
  
        // Add close functionality
        const closeButton = notification.querySelector(".close-notification")
        closeButton.addEventListener("click", () => {
          notification.style.animation = "slideOut 0.5s forwards"
          setTimeout(() => {
            notification.remove()
          }, 500)
        })
  
        // Auto-remove after 8 seconds
        setTimeout(() => {
          if (document.body.contains(notification)) {
            notification.style.animation = "slideOut 0.5s forwards"
            setTimeout(() => {
              notification.remove()
            }, 500)
          }
        }, 8000)
  
        // Add slideOut animation
        const slideOutStyle = document.createElement("style")
        slideOutStyle.textContent = `
                  @keyframes slideOut {
                      to { transform: translateX(400px); opacity: 0; }
                  }
              `
        document.head.appendChild(slideOutStyle)
      }
  
      visits++
      localStorage.setItem("studyhub_visits", visits)
      localStorage.setItem("studyhub_last_visit", new Date().toISOString())
    }
  
    // Format date for display
    function formatDate(dateString) {
      if (!dateString) return "First visit"
  
      const date = new Date(dateString)
      const now = new Date()
      const diffTime = Math.abs(now - date)
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
  
      if (diffDays === 0) {
        return "Today"
      } else if (diffDays === 1) {
        return "Yesterday"
      } else if (diffDays < 7) {
        return `${diffDays} days ago`
      } else {
        return date.toLocaleDateString()
      }
    }
  
    // Add interactive elements to the page
    function addInteractiveElements() {
      // Add ripple effect to buttons
      const buttons = document.querySelectorAll("button")
      buttons.forEach((button) => {
        button.addEventListener("click", function (e) {
          const x = e.clientX - e.target.getBoundingClientRect().left
          const y = e.clientY - e.target.getBoundingClientRect().top
  
          const ripple = document.createElement("span")
          ripple.className = "ripple"
          ripple.style.left = `${x}px`
          ripple.style.top = `${y}px`
  
          this.appendChild(ripple)
  
          setTimeout(() => {
            ripple.remove()
          }, 600)
        })
      })
  
      // Add ripple style
      const rippleStyle = document.createElement("style")
      rippleStyle.textContent = `
              button {
                  position: relative;
                  overflow: hidden;
              }
              
              .ripple {
                  position: absolute;
                  background: rgba(255, 255, 255, 0.3);
                  border-radius: 50%;
                  transform: scale(0);
                  animation: ripple 0.6s linear;
                  pointer-events: none;
              }
              
              @keyframes ripple {
                  to {
                      transform: scale(4);
                      opacity: 0;
                  }
              }
          `
      document.head.appendChild(rippleStyle)
    }
  
    // Call interactive elements function when main content is visible
    setTimeout(() => {
      addInteractiveElements()
    }, loadingTime + 1000)
  
    // Search Bar Functionality
    const searchBar = document.querySelector(".search-bar")
    searchBar.addEventListener("input", () => {
      const query = searchBar.value.toLowerCase()
      console.log("Searching for:", query)
      // Future: Filter resources based on search query
    })
  
    // Profile Image Click
    const profileImg = document.querySelector(".profile-img")
    profileImg.addEventListener("click", () => {
      // Future: Profile dropdown menu
    })
  
    // Chat Button Click
    const chatButton = document.querySelector(".chat-button")
    chatButton.addEventListener("click", () => {
      // Future: Open chat interface
      chatButton.classList.add("active")
      setTimeout(() => {
        chatButton.classList.remove("active")
      }, 300)
    })
  
    // Button Click Effects with Ripple
    const buttons = document.querySelectorAll(".feature-button")
    buttons.forEach((button) => {
      button.addEventListener("click", function (e) {
        // Create ripple effect
        const x = e.clientX - e.target.getBoundingClientRect().left
        const y = e.clientY - e.target.getBoundingClientRect().top
  
        const ripple = document.createElement("span")
        ripple.classList.add("ripple")
        ripple.style.left = `${x}px`
        ripple.style.top = `${y}px`
  
        this.appendChild(ripple)
  
        setTimeout(() => {
          ripple.remove()
        }, 600)
      })
    })
  })
  
  // Initialize animations
  function initAnimations() {
    // Add fade-in animation to elements
    const elements = [
      document.querySelector("h2"),
      document.querySelector(".welcome-text"),
      document.querySelector(".buttons"),
      document.querySelector(".quick-stats"),
    ]
  
    elements.forEach((element, index) => {
      element.style.opacity = "0"
      element.style.animation = `fadeIn 0.8s ease forwards ${index * 0.2}s`
    })
  
    // Add floating animation to chat button
    document.querySelector(".chat-button").classList.add("float")
  }
  
  // Initialize theme toggle
  function initThemeToggle() {
    const themeToggle = document.querySelector(".theme-toggle")
  
    // Check for saved theme preference
    const savedTheme = localStorage.getItem("studyhub-theme")
    if (savedTheme === "dark") {
      document.body.classList.add("dark")
    }
  
    // Toggle theme on click
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark")
  
      // Save theme preference
      if (document.body.classList.contains("dark")) {
        localStorage.setItem("studyhub-theme", "dark")
      } else {
        localStorage.setItem("studyhub-theme", "light")
      }
    })
  }
  
  // Animate stat counters
  function animateStatCounters() {
    const statValues = document.querySelectorAll(".stat-value")
  
    statValues.forEach((stat) => {
      const target = Number.parseInt(stat.getAttribute("data-count"))
      const duration = 2000 // 2 seconds
      const increment = target / (duration / 16) // 60fps
  
      let current = 0
      const updateCounter = () => {
        current += increment
        if (current < target) {
          stat.textContent = Math.floor(current)
          requestAnimationFrame(updateCounter)
        } else {
          stat.textContent = target
        }
      }
  
      // Start animation when element is in viewport
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              updateCounter()
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.5 },
      )
  
      observer.observe(stat)
    })
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    // Add theme toggle
    addThemeToggle()
  
    // Add interactive background
    initInteractiveBackground()
  
    // Add HCI enhancements
    initHCIEnhancements()
  
    // Add stats counter
    initStatsCounter()
  
    // Add ripple effect to buttons
    addRippleEffect()
  
    // Add floating elements
    addFloatingElements()
  
    // Search Bar Functionality
    const searchBar = document.querySelector(".search-bar")
    searchBar.addEventListener("input", () => {
      const query = searchBar.value.toLowerCase()
      console.log("Searching for:", query)
      // Future: Filter resources based on search query
    })
  
    // Profile Image Click
    const profileImg = document.querySelector(".profile-img")
    profileImg.addEventListener("click", () => {
      // Future: Profile dropdown menu
    })
  
    // Chat Button Click
    const chatButton = document.querySelector(".chat-button")
    chatButton.addEventListener("click", () => {
      // Future: Open chat interface
      chatButton.classList.add("active")
      setTimeout(() => {
        chatButton.classList.remove("active")
      }, 300)
    })
  
    // Button Click Effects
    const buttons = document.querySelectorAll(".buttons button")
    buttons.forEach((button) => {
      button.addEventListener("mouseenter", () => {
        button.style.transform = "translateY(-5px)"
      })
      button.addEventListener("mouseleave", () => {
        button.style.transform = "scale(1)"
      })
    })
  })
  
  // Add theme toggle functionality
  function addThemeToggle() {
    // Create theme toggle element
    const themeToggle = document.createElement("div")
    themeToggle.className = "theme-toggle"
    themeToggle.innerHTML = `
          <i class="fas fa-moon"></i>
          <i class="fas fa-sun"></i>
          <div class="toggle-ball"></div>
      `
    document.body.appendChild(themeToggle)
  
    // Check for saved theme preference
    const savedTheme = localStorage.getItem("studyhub-theme")
    if (savedTheme === "dark") {
      document.body.classList.add("dark")
    }
  
    // Toggle theme on click
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark")
  
      // Save theme preference
      if (document.body.classList.contains("dark")) {
        localStorage.setItem("studyhub-theme", "dark")
      } else {
        localStorage.setItem("studyhub-theme", "light")
      }
    })
  }
  
  // Initialize interactive background
  function initInteractiveBackground() {
    // Create canvas element
    const canvas = document.createElement("canvas")
    canvas.id = "background-canvas"
    document.body.insertBefore(canvas, document.body.firstChild)
  
    const ctx = canvas.getContext("2d")
  
    // Set canvas size
    function resizeCanvas() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
  
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
  
    // Particle settings
    const particleCount = 80
    const connectionDistance = 150
    const mouseInfluenceRadius = 200
    const particles = []
  
    // Mouse position
    const mouse = {
      x: null,
      y: null,
      radius: mouseInfluenceRadius,
    }
  
    // Track mouse position
    window.addEventListener("mousemove", (event) => {
      mouse.x = event.x
      mouse.y = event.y
    })
  
    // Mouse leaves window
    window.addEventListener("mouseout", () => {
      mouse.x = null
      mouse.y = null
    })
  
    // Create particles
    function createParticles() {
      for (let i = 0; i < particleCount; i++) {
        const size = Math.random() * 3 + 1
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const directionX = Math.random() * 2 - 1
        const directionY = Math.random() * 2 - 1
        const speed = Math.random() * 0.5 + 0.1
  
        // Random color from theme
        const colors = [
          "rgba(37, 99, 235, 0.5)", // primary
          "rgba(244, 63, 94, 0.5)", // secondary
          "rgba(139, 92, 246, 0.5)", // accent
        ]
        const color = colors[Math.floor(Math.random() * colors.length)]
  
        particles.push({
          x: x,
          y: y,
          size: size,
          color: color,
          directionX: directionX,
          directionY: directionY,
          speed: speed,
          originalSpeed: speed,
          originalSize: size,
        })
      }
    }
  
    // Draw particles and connections
    function animate() {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
  
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
  
        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.fill()
  
        // Check for connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)
  
          if (distance < connectionDistance) {
            // Draw connection
            ctx.beginPath()
            ctx.strokeStyle = `rgba(100, 116, 139, ${1 - distance / connectionDistance})`
            ctx.lineWidth = 0.5
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
  
        // Update position
        p.x += p.directionX * p.speed
        p.y += p.directionY * p.speed
  
        // Boundary check
        if (p.x < 0 || p.x > canvas.width) {
          p.directionX = -p.directionX
        }
        if (p.y < 0 || p.y > canvas.height) {
          p.directionY = -p.directionY
        }
  
        // Mouse interaction
        if (mouse.x !== null && mouse.y !== null) {
          const dx = p.x - mouse.x
          const dy = p.y - mouse.y
          const distance = Math.sqrt(dx * dx + dy * dy)
  
          if (distance < mouse.radius) {
            // Increase size and speed when near mouse
            const sizeFactor = 1 + (1 - distance / mouse.radius) * 1.5
            p.size = Math.min(p.originalSize * sizeFactor, p.originalSize * 3)
            p.speed = p.originalSpeed * 2
  
            // Add slight attraction to mouse
            const angle = Math.atan2(dy, dx)
            const pushX = Math.cos(angle) * (1 - distance / mouse.radius) * 0.5
            const pushY = Math.sin(angle) * (1 - distance / mouse.radius) * 0.5
  
            p.directionX -= pushX
            p.directionY -= pushY
          } else {
            // Reset to original size and speed
            p.size = p.originalSize
            p.speed = p.originalSpeed
          }
        } else {
          // Reset when mouse leaves window
          p.size = p.originalSize
          p.speed = p.originalSpeed
        }
      }
    }
  
    createParticles()
    animate()
  }
  
  // Initialize HCI enhancements
  function initHCIEnhancements() {
    // Add custom cursor
    addCustomCursor()
  
    // Add scroll animations
    addScrollAnimations()
  
    // Add chat button tooltip and pulse
    enhanceChatButton()
  
    // Add logo highlight effect
    addLogoHighlight()
  }
  
  // Add custom cursor
  function addCustomCursor() {
    const cursorDot = document.createElement("div")
    cursorDot.className = "cursor-dot"
    document.body.appendChild(cursorDot)
  
    const cursorOutline = document.createElement("div")
    cursorOutline.className = "cursor-outline"
    document.body.appendChild(cursorOutline)
  
    // Add cursor-none class to body
    document.body.classList.add("cursor-none")
  
    // Update cursor position
    document.addEventListener("mousemove", (e) => {
      cursorDot.style.left = `${e.clientX}px`
      cursorDot.style.top = `${e.clientY}px`
  
      cursorOutline.style.left = `${e.clientX}px`
      cursorOutline.style.top = `${e.clientY}px`
    })
  
    // Add click animation
    document.addEventListener("mousedown", () => {
      cursorDot.style.transform = "translate(-50%, -50%) scale(0.5)"
      cursorOutline.style.transform = "translate(-50%, -50%) scale(0.8)"
    })
  
    document.addEventListener("mouseup", () => {
      cursorDot.style.transform = "translate(-50%, -50%) scale(1)"
      cursorOutline.style.transform = "translate(-50%, -50%) scale(1)"
    })
  
    // Handle cursor leaving the window
    document.addEventListener("mouseleave", () => {
      cursorDot.style.opacity = "0"
      cursorOutline.style.opacity = "0"
    })
  
    document.addEventListener("mouseenter", () => {
      cursorDot.style.opacity = "1"
      cursorOutline.style.opacity = "1"
    })
  }
  
  // Add scroll animations
  function addScrollAnimations() {
    // Add progress indicator
    const progressIndicator = document.createElement("div")
    progressIndicator.className = "scroll-progress"
    document.body.appendChild(progressIndicator)
  
    // Update progress indicator on scroll
    window.addEventListener("scroll", () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrollPercentage = (scrollTop / scrollHeight) * 100
  
      progressIndicator.style.width = `${scrollPercentage}%`
    })
  }
  
  // Enhance chat button
  function enhanceChatButton() {
    const chatButton = document.querySelector(".chat-button")
  
    // Add pulse effect
    const chatPulse = document.createElement("div")
    chatPulse.className = "chat-pulse"
    chatButton.prepend(chatPulse)
  
    // Add tooltip
    const tooltip = document.createElement("div")
    tooltip.className = "tooltip"
    tooltip.textContent = "Need help?"
    chatButton.appendChild(tooltip)
  }
  
  // Add logo highlight effect
  function addLogoHighlight() {
    // Create logo container if it doesn't exist
    const header = document.querySelector(".header")
    const h1 = header.querySelector("h1")
  
    if (!header.querySelector(".logo-container")) {
      const logoContainer = document.createElement("div")
      logoContainer.className = "logo-container"
  
      // Move h1 into logo container
      h1.parentNode.insertBefore(logoContainer, h1)
      logoContainer.appendChild(h1)
  
      // Add logo highlight
      const logoHighlight = document.createElement("div")
      logoHighlight.className = "logo-highlight"
      logoContainer.appendChild(logoHighlight)
    }
  
    // Add profile container if it doesn't exist
    const profileImg = header.querySelector(".profile-img")
    if (profileImg && !header.querySelector(".profile-container")) {
      const profileContainer = document.createElement("div")
      profileContainer.className = "profile-container"
  
      // Move profile img into container
      profileImg.parentNode.insertBefore(profileContainer, profileImg)
      profileContainer.appendChild(profileImg)
  
      // Add status indicator
      const profileStatus = document.createElement("div")
      profileStatus.className = "profile-status"
      profileContainer.appendChild(profileStatus)
    }
  }
  
  // Initialize stats counter
  function initStatsCounter() {
    // Create stats section if it doesn't exist
    if (!document.querySelector(".quick-stats")) {
      const mainContent = document.querySelector(".main-content")
      const buttons = document.querySelector(".buttons")
  
      const quickStats = document.createElement("div")
      quickStats.className = "quick-stats"
      quickStats.innerHTML = `
              <div class="stat-item">
                  <div class="stat-value" data-count="5000">0</div>
                  <div class="stat-label">Students</div>
              </div>
              <div class="stat-item">
                  <div class="stat-value" data-count="200">0</div>
                  <div class="stat-label">Resources</div>
              </div>
              <div class="stat-item">
                  <div class="stat-value" data-count="50">0</div>
                  <div class="stat-label">Courses</div>
              </div>
          `
  
      mainContent.insertBefore(quickStats, buttons.nextSibling)
    }
  
    // Animate stats counter
    const statValues = document.querySelectorAll(".stat-value")
  
    statValues.forEach((stat) => {
      const target = Number.parseInt(stat.getAttribute("data-count"))
      const duration = 2000 // 2 seconds
      const increment = target / (duration / 16) // 60fps
  
      let current = 0
      const updateCounter = () => {
        current += increment
        if (current < target) {
          stat.textContent = Math.floor(current)
          requestAnimationFrame(updateCounter)
        } else {
          stat.textContent = target
        }
      }
  
      // Start animation when element is in viewport
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              updateCounter()
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.5 },
      )
  
      observer.observe(stat)
    })
  }
  
  // Add ripple effect to buttons
  function addRippleEffect() {
    const buttons = document.querySelectorAll(".buttons button")
  
    buttons.forEach((button) => {
      button.addEventListener("click", function (e) {
        const x = e.clientX - e.target.getBoundingClientRect().left
        const y = e.clientY - e.target.getBoundingClientRect().top
  
        const ripple = document.createElement("span")
        ripple.className = "ripple"
        ripple.style.left = `${x}px`
        ripple.style.top = `${y}px`
  
        this.appendChild(ripple)
  
        setTimeout(() => {
          ripple.remove()
        }, 600)
      })
    })
  }
  
  // Add floating elements to the background
  function addFloatingElements() {
    const body = document.body
    const elementCount = 15
  
    for (let i = 0; i < elementCount; i++) {
      const element = document.createElement("div")
      element.classList.add("floating-element")
  
      // Random size
      const size = Math.random() * 80 + 20
      element.style.width = `${size}px`
      element.style.height = `${size}px`
  
      // Random position
      const posX = Math.random() * 100
      const posY = Math.random() * 100
      element.style.left = `${posX}%`
      element.style.top = `${posY}%`
  
      // Random color
      const colors = [
        "rgba(37, 99, 235, 0.1)", // primary
        "rgba(244, 63, 94, 0.1)", // secondary
        "rgba(139, 92, 246, 0.1)", // accent
      ]
      const randomColor = colors[Math.floor(Math.random() * colors.length)]
      element.style.backgroundColor = randomColor
      element.style.boxShadow = `0 0 20px ${randomColor.replace("0.1", "0.3")}`
  
      // Random animation
      const duration = Math.random() * 30 + 20
      const delay = Math.random() * 5
  
      element.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`
  
      body.appendChild(element)
    }
  }
  
