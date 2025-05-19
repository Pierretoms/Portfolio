// Ajoutez ce code au début de votre fichier JavaScript
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Données des projets
const projects = [
    {
        title: "Oh My Food",
        image: "./assets/Oh-my-food-screen.webp",
        technologies: ["HTML", "SASS"]
    },
    {
        title: "Sophie Bluel",
        image: "https://placehold.co/900x500",
        technologies: ["HTML", "CSS", "JavaScript", "Node.js"]
    },
    {
        title: "Kasa",
        image: "https://placehold.co/900x500",
        technologies: ["React", "SASS", "JavaScript", "Node.js"]
    },
    {
        title: "Nina Carducci",
        image: "https://placehold.co/900x500",
        technologies: ["HTML", "CSS", "JavaScript"]
    },
    {
        title: "724 Events",
        image: "https://placehold.co/900x500",
        technologies: ["React", "SASS", "JavaScript"]
    },
    {
        title: "Argent Bank",
        image: "https://placehold.co/900x500",
        technologies: ["React", "SASS", "JavaScript", "Node.js", "Redux"]
    }
];

// Fonction pour afficher les projets
function displayProjects() {
    const portfolioGrid = document.querySelector('.portfolio-grid');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <div class="project-info">
                <h3>${project.title}</h3>
                <div class="technologies">
                    ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                </div>
            </div>
        `;
        
        portfolioGrid.appendChild(projectCard);
    });
}

// Animation de défilement fluide
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    displayProjects();
});