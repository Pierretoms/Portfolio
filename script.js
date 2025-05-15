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
        title: "Projet E-commerce",
        description: "Site e-commerce responsive avec panier d'achat",
        image: "https://placehold.co/900x500",
        technologies: ["React", "Node.js", "MongoDB"]
    },
    {
        title: "Application de Gestion",
        description: "Dashboard administratif pour la gestion de données",
        image: "https://placehold.co/900x500",
        technologies: ["Vue.js", "Express", "MySQL"]
    },
    {
        title: "Site Vitrine",
        description: "Site vitrine moderne pour une entreprise locale",
        image: "https://placehold.co/900x500",
        technologies: ["HTML", "CSS", "JavaScript"]
    },
    {
        title: "Site Vitrine",
        description: "Site vitrine moderne pour une entreprise locale",
        image: "https://placehold.co/900x500",
        technologies: ["HTML", "CSS", "JavaScript"]
    },
    {
        title: "Site Vitrine",
        description: "Site vitrine moderne pour une entreprise locale",
        image: "https://placehold.co/900x500",
        technologies: ["HTML", "CSS", "JavaScript"]
    },
    {
        title: "Site Vitrine",
        description: "Site vitrine moderne pour une entreprise locale",
        image: "https://placehold.co/900x500",
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

// Configuration du graphique des compétences avec animation au scroll
document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('skillsChart').getContext('2d');
    let chartInstance = null;
    
    const skillsData = {
        labels: ['HTML/CSS', 'JavaScript', 'React.js', 'Node.js', 'Redux'],
        datasets: [{
            data: [90, 85, 80, 60, 50],
            backgroundColor: [
                '#FF6384',
                '#FFCE56',
                '#36A2EB',
                '#4BC0C0',
                '#9966FF'
            ],
            borderWidth: 2,
            borderColor: '#fff'
        }]
    };

    const config = {
        type: 'pie',
        data: skillsData,
        options: {
            responsive: true,
            animation: {
                animateScale: true,
                animateRotate: true,
                duration: 2000
            },
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        font: {
                            size: 14
                        },
                        padding: 20
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.label}: ${context.raw}%`;
                        }
                    }
                }
            }
        }
    };

    // Création de l'Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !chartInstance) {
                // Création du graphique uniquement lorsqu'il devient visible
                chartInstance = new Chart(ctx, config);
            }
        });
    }, {
        threshold: 0.5 // Déclenche l'animation quand 50% du graphique est visible
    });

    // Observation du canvas
    observer.observe(document.getElementById('skillsChart'));
});

