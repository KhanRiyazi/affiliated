// Portfolio Data - Replace with your actual Canva designs
const portfolioItems = [
    {
        id: 1,
        title: "Instagram Post Template",
        category: "social",
        description: "Eye-catching template for your Instagram feed",
        image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
        link: "https://www.canva.com/canvassador/"
    },
    {
        id: 2,
        title: "Business Branding Kit",
        category: "branding",
        description: "Complete branding package for small businesses",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        link: "https://www.canva.com/canvassador/"
    },
    {
        id: 3,
        title: "Marketing Flyer",
        category: "marketing",
        description: "Professional flyer for promotions and events",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        link: "https://www.canva.com/canvassador/"
    },
    {
        id: 4,
        title: "Facebook Cover Design",
        category: "social",
        description: "Customizable cover for your Facebook page",
        image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
        link: "https://www.canva.com/canvassador/"
    },
    {
        id: 5,
        title: "Business Card Template",
        category: "branding",
        description: "Elegant business card design",
        image: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        link: "https://www.canva.com/canvassador/"
    },
    {
        id: 6,
        title: "Product Brochure",
        category: "print",
        description: "Tri-fold brochure for product showcases",
        image: "https://images.unsplash.com/photo-1545239351-ef35f43d514b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
        link: "https://www.canva.com/canvassador/"
    },
    {
        id: 7,
        title: "LinkedIn Banner",
        category: "social",
        description: "Professional banner for your LinkedIn profile",
        image: "https://images.unsplash.com/photo-1611162617263-4ec3060a058e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
        link: "https://www.canva.com/canvassador/"
    },
    {
        id: 8,
        title: "Email Header Template",
        category: "marketing",
        description: "Beautiful header for your email campaigns",
        image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
        link: "https://www.canva.com/canvassador/"
    }
];

// DOM Elements
const portfolioGrid = document.querySelector('.portfolio-grid');
const filterButtons = document.querySelectorAll('.filter-btn');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('.nav');
const contactForm = document.getElementById('contactForm');
const yearElement = document.getElementById('year');

// Display Portfolio Items
function displayPortfolioItems(items) {
    portfolioGrid.innerHTML = '';

    items.forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = `portfolio-item ${item.category}`;
        portfolioItem.innerHTML = `
            <div class="portfolio-img">
                <img src="${item.image}" alt="${item.title}">
            </div>
            <div class="portfolio-info">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <a href="${item.link}" class="btn btn-secondary" target="_blank">View on Canvassador</a>
            </div>
        `;
        portfolioGrid.appendChild(portfolioItem);
    });
}

// Filter Portfolio Items
function filterPortfolio(category) {
    if (category === 'all') {
        displayPortfolioItems(portfolioItems);
    } else {
        const filteredItems = portfolioItems.filter(item => item.category === category);
        displayPortfolioItems(filteredItems);
    }
}

// Initialize Portfolio
displayPortfolioItems(portfolioItems);

// Filter Button Event Listeners
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        // Filter portfolio
        filterPortfolio(button.dataset.filter);
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