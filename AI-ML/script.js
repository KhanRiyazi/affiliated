// Solutions Data - Replace with your actual AI/ML projects
const solutions = [
    {
        id: 1,
        title: "Sentiment Analysis API",
        category: "nlp",
        description: "Real-time sentiment analysis for customer feedback with 92% accuracy.",
        image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
        tags: ["Python", "TensorFlow", "Flask", "BERT"],
        github: "https://github.com/yourusername/sentiment-analysis",
        demo: "https://demo.yourapp.com"
    },
    {
        id: 2,
        title: "Object Detection System",
        category: "cv",
        description: "Custom object detection model for industrial quality control.",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1085&q=80",
        tags: ["PyTorch", "YOLO", "OpenCV", "Docker"],
        github: "https://github.com/yourusername/object-detection",
        demo: "https://demo.yourapp.com"
    },
    {
        id: 3,
        title: "Demand Forecasting",
        category: "timeseries",
        description: "LSTM model for retail demand prediction with 87% accuracy.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        tags: ["TensorFlow", "LSTM", "Pandas", "FastAPI"],
        github: "https://github.com/yourusername/demand-forecasting",
        demo: "https://demo.yourapp.com"
    },
    {
        id: 4,
        title: "Recommendation Engine",
        category: "recommendation",
        description: "Personalized content recommendations using collaborative filtering.",
        image: "https://images.unsplash.com/photo-1545239351-ef35f43d514b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
        tags: ["Scikit-learn", "Surprise", "Flask", "Redis"],
        github: "https://github.com/yourusername/recommendation-engine",
        demo: "https://demo.yourapp.com"
    },
    {
        id: 5,
        title: "Chatbot Framework",
        category: "nlp",
        description: "Modular chatbot framework with intent recognition and response generation.",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1085&q=80",
        tags: ["Rasa", "Transformers", "Docker", "WebSockets"],
        github: "https://github.com/yourusername/chatbot-framework",
        demo: "https://demo.yourapp.com"
    },
    {
        id: 6,
        title: "Anomaly Detection",
        category: "timeseries",
        description: "Unsupervised anomaly detection for IoT sensor data.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80",
        tags: ["PyOD", "Isolation Forest", "Grafana", "Kafka"],
        github: "https://github.com/yourusername/anomaly-detection",
        demo: "https://demo.yourapp.com"
    }
];

// DOM Elements
const solutionsGrid = document.querySelector('.solutions-grid');
const filterButtons = document.querySelectorAll('.filter-btn');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('.nav');
const contactForm = document.getElementById('contactForm');
const yearElement = document.getElementById('year');

// Display Solutions
function displaySolutions(items) {
    solutionsGrid.innerHTML = '';

    items.forEach(item => {
        const solutionItem = document.createElement('div');
        solutionItem.className = `solution-item ${item.category}`;
        solutionItem.innerHTML = `
            <div class="solution-img">
                <img src="${item.image}" alt="${item.title}">
            </div>
            <div class="solution-info">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <div class="solution-tags">
                    ${item.tags.map(tag => `<span class="solution-tag">${tag}</span>`).join('')}
                </div>
                <div class="solution-links">
                    <a href="${item.github}" class="btn btn-primary" target="_blank">Code</a>
                    <a href="${item.demo}" class="btn btn-secondary" target="_blank">Demo</a>
                </div>
            </div>
        `;
        solutionsGrid.appendChild(solutionItem);
    });
}

// Filter Solutions
function filterSolutions(category) {
    if (category === 'all') {
        displaySolutions(solutions);
    } else {
        const filteredSolutions = solutions.filter(solution => solution.category === category);
        displaySolutions(filteredSolutions);
    }
}

// Initialize Solutions
displaySolutions(solutions);

// Filter Button Event Listeners
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        // Filter solutions
        filterSolutions(button.dataset.filter);
    });
});

// Mobile Menu Toggle
mobileMenuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
    mobileMenuBtn.innerHTML = nav.classList.contains('active') ?
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking a nav link
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Contact Form Submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const company = document.getElementById('company').value;
    const project = document.getElementById('project').value;
    const message = document.getElementById('message').value;

    // Here you would typically send the form data to a server
    // For this example, we'll just show an alert
    alert(`Thank you, ${name}! Your project consultation request has been received. I'll contact you soon to discuss your ${project} project.`);

    // Reset form
    contactForm.reset();
});

// Set current year in footer
yearElement.textContent = new Date().getFullYear();

// Header scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        document.querySelector('.header').classList.add('scrolled');
    } else {
        document.querySelector('.header').classList.remove('scrolled');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});