// Données des projets
const projects = [
    {
        title: "Projet E-commerce",
        description: "Site e-commerce responsive avec panier d'achat",
        image: "placeholder-project1.jpg",
        technologies: ["React", "Node.js", "MongoDB"]
    },
    {
        title: "Application de Gestion",
        description: "Dashboard administratif pour la gestion de données",
        image: "placeholder-project2.jpg",
        technologies: ["Vue.js", "Express", "MySQL"]
    },
    {
        title: "Site Vitrine",
        description: "Site vitrine moderne pour une entreprise locale",
        image: "placeholder-project3.jpg",
        technologies: ["HTML", "CSS", "JavaScript"]
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
                <p>${project.description}</p>
                <div class="technologies">
                    ${project.technologies.map(tech => `<span>${tech}</span>`).join(' ')}
                </div>
            </div>
        `;
        
        portfolioGrid.appendChild(projectCard);
    });
}

// Gestion du formulaire de contact
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    
    // Simulation d'envoi du formulaire
    alert('Message envoyé avec succès !');
    this.reset();
});

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