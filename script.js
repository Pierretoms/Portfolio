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
        technologies: ["HTML", "SASS"],
        description: "Oh My Food est un site “mobile first” qui répertorie les menus de restaurants gastronomiques. En plus des systèmes classiques de réservation, les clients pourront composer le menu de leur repas pour que les plats soient prêts à leur arrivée. Ici est proposée une interface moderne et intuitive avec des animations CSS élégantes.",
        codeLink: "https://github.com/Pierretoms/Oh-My-Food",
        siteLink: "https://pierretoms.github.io/Oh-My-Food/"
    },
    {
        title: "Sophie Bluel",
        image: "./assets/Sophie-Bluel-screen.webp",
        technologies: ["HTML", "CSS", "JavaScript", "Node.js"],
        description: "Portfolio d'une architecte d'intérieur avec une interface d'administration permettant la gestion dynamique des projets. Développement d'une API RESTful et intégration front-end complète.",
        codeLink: "https://github.com/Pierretoms/Sophie-Bluel"
    },
    {
        title: "Kasa",
        image: "./assets/Kasa-screen.webp",
        technologies: ["React", "SASS", "JavaScript", "Node.js"],
        description: "Kasa est un site web qui permet aux utilisateurs de trouver des hébergements et des activités dans la ville de leur choix. L'application est construite avec React et utilise un back end sous fichier json pour récupérer les données.",
        codeLink: "https://github.com/Pierretoms/Kasa"
    },
    {
        title: "Nina Carducci",
        image: "./assets/Nina-Carducci-screen.webp",
        technologies: ["HTML", "CSS", "JavaScript"],
        description: "Portfolio d'une photographe freelance avec une interface d'administration permettant la gestion dynamique des projets. Le but de ce projet est de travailler sur une optimisations du code & images ainsi que du SEO via audit lighthouse et wave.",
        codeLink: "https://github.com/Pierretoms/Nina-carducci",
        siteLink: "https://pierretoms.github.io/Nina-carducci/"
    },
    {
        title: "724 Events",
        image: "./assets/724-events-screen.webp",
        technologies: ["React", "SASS", "JavaScript", "Node.js"],
        description: "724 Events est le site web d'une agence évènementielle. L'application est construite avec React et utilise un back end sous fichier js pour récupérer les données. Ici le défi était de reprendre le code d'un ancien développeur ayant laisser énormement de bugs.",
        codeLink: "https://github.com/Pierretoms/724-events"
    },
    {
        title: "Argent Bank",
        image: "./assets/Argent-Bank-screen.webp",
        technologies: ["React", "SASS", "JavaScript", "Node.js", "Redux"],
        description: "Argent Bank est un site web d'une banque en ligne. L'application est construite avec React et utilise une API et mongoDB pour récupérer les données. Pour le state de l'ensemble de l'application ici il sera gérer via Redux & Reduxtoolkit, l'intégration sera optimisé pour convenir au bonnes pratiques de green code.",
        codeLink: "https://github.com/Pierretoms/Argent-Bank",
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
        
        projectCard.addEventListener('click', () => openModal(project));
        portfolioGrid.appendChild(projectCard);
    });
}

function openModal(project) {
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalImage = document.getElementById('modalImage');
    const modalDescription = document.getElementById('modalDescription');
    const modalTechnologies = document.querySelector('.modal-technologies');
    const codeLink = document.getElementById('codeLink');
    const siteLink = document.getElementById('siteLink');

    modalTitle.textContent = project.title;
    modalImage.src = project.image;
    modalImage.alt = project.title;
    modalDescription.textContent = project.description;
    
    modalTechnologies.innerHTML = project.technologies
        .map(tech => `<span class="tech-badge">${tech}</span>`)
        .join('');

    if (project.codeLink) {
        codeLink.href = project.codeLink;
        codeLink.style.display = 'inline-block';
    } else {
        codeLink.style.display = 'none';
    }

    if (project.siteLink) {
        siteLink.href = project.siteLink;
        siteLink.style.display = 'inline-block';
    } else {
        siteLink.style.display = 'none';
    }

    modal.style.display = 'block';
}

// Fermeture de la modal
document.querySelector('.close-modal').addEventListener('click', () => {
    document.getElementById('projectModal').style.display = 'none';
});

// Fermeture en cliquant en dehors de la modal
window.addEventListener('click', (e) => {
    const modal = document.getElementById('projectModal');
    if (e.target === modal) {
        modal.style.display = 'none';
    }
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