// Projects Data - Replace with your actual projects
const projects = [
    {
        id: 1,
        title: "E-commerce Platform",
        category: "django",
        description: "Full-featured e-commerce platform with payment integration built with Django.",
        image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        tags: ["Django", "Python", "PostgreSQL", "Stripe"],
        github: "https://github.com/yourusername/ecommerce-platform",
        live: "https://yourapp.com"
    },
    {
        id: 2,
        title: "REST API Service",
        category: "fastapi",
        description: "High-performance REST API built with FastAPI and MongoDB.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        tags: ["FastAPI", "Python", "MongoDB", "JWT"],
        github: "https://github.com/yourusername/fastapi-service",
        live: "https://api.yourapp.com"
    },
    {
        id: 3,
        title: "Task Management App",
        category: "javascript",
        description: "React application for task management with drag-and-drop functionality.",
        image: "https://images.unsplash.com/photo-1545239351-ef35f43d514b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
        tags: ["React", "JavaScript", "Tailwind CSS", "DnD"],
        github: "https://github.com/yourusername/task-manager",
        live: "https://tasks.yourapp.com"
    },
    {
        id: 4,
        title: "Data Analysis Tool",
        category: "python",
        description: "Python application for analyzing and visualizing datasets.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80",
        tags: ["Python", "Pandas", "Matplotlib", "NumPy"],
        github: "https://github.com/yourusername/data-analysis",
        live: "https://data.yourapp.com"
    },
    {
        id: 5,
        title: "Social Media Dashboard",
        category: "django",
        description: "Analytics dashboard for social media metrics built with Django.",
        image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
        tags: ["Django", "Python", "Chart.js", "REST"],
        github: "https://github.com/yourusername/social-dashboard",
        live: "https://dashboard.yourapp.com"
    },
    {
        id: 6,
        title: "Real-time Chat App",
        category: "javascript",
        description: "Real-time chat application using Socket.io and React.",
        image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
        tags: ["React", "Node.js", "Socket.io", "MongoDB"],
        github: "https://github.com/yourusername/chat-app",
        live: "https://chat.yourapp.com"
    }
];

// DOM Elements
const projectsGrid = document.querySelector('.projects-grid');
const filterButtons = document.querySelectorAll('.filter-btn');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('.nav');
const contactForm = document.getElementById('contactForm');
const yearElement = document.getElementById('year');

// Display Projects
function displayProjects(items) {
    projectsGrid.innerHTML = '';

    items.forEach(item => {
        const projectItem = document.createElement('div');
        projectItem.className = `project-item ${item.category}`;
        projectItem.innerHTML = `
            <div class="project-img">
                <img src="${item.image}" alt="${item.title}">
            </div>
            <div class="project-info">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <div class="project-tags">
                    ${item.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${item.github}" class="btn btn-primary" target="_blank">Code</a>
                    <a href="${item.live}" class="btn btn-secondary" target="_blank">Live Demo</a>
                </div>
            </div>
        `;
        projectsGrid.appendChild(projectItem);
    });
}

// Filter Projects
function filterProjects(category) {
    if (category === 'all') {
        displayProjects(projects);
    } else {
        const filteredProjects = projects.filter(project => project.category === category);
        displayProjects(filteredProjects);
    }
}

// Initialize Projects
displayProjects(projects);

// Filter Button Event Listeners
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        // Filter projects
        filterProjects(button.dataset.filter);
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
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Here you would typically send the form data to a server
    // For this example, we'll just show an alert
    alert(`Thank you, ${name}! Your message has been sent. I'll get back to you soon.`);

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