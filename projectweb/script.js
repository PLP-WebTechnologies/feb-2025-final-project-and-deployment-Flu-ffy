// JavaScript for interactivity
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Back to Top button functionality
    const backToTopBtn = document.createElement('button');
    backToTopBtn.id = 'backToTop';
    backToTopBtn.textContent = '↑ Top';
    document.body.appendChild(backToTopBtn);

    backToTopBtn.style.display = 'none'; // Initially hidden

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }

        // Highlight active section in the nav menu
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const link = document.querySelector(`nav ul li a[href="#${section.id}"]`);
            if (rect.top <= 50 && rect.bottom >= 50) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    });

    // Modal popup for article previews
    const articles = document.querySelectorAll('article');
    articles.forEach(article => {
        const link = article.querySelector('a');
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const modal = createModal(article);
            document.body.appendChild(modal);
            modal.querySelector('.close-modal').addEventListener('click', () => {
                modal.remove();
            });
        });
    });

    function createModal(article) {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <h2>${article.querySelector('h3').textContent}</h2>
                <img src="${article.querySelector('img').src}" alt="${article.querySelector('img').alt}">
                <p>${article.querySelector('p').textContent}</p>
                <a href="blog.html">Read Full Article</a>
            </div>
        `;
        return modal;
    }
});

// JavaScript for interactivity and dynamic content
document.addEventListener('DOMContentLoaded', () => {
    // Articles database
    const articles = {
        skincare: {
            title: "Top 5 Skincare Tips",
            content: `
                <p>Good skincare is essential for a healthy and glowing complexion. Follow these tips:</p>
                <ul>
                    <li>Cleanse your face daily with a mild cleanser.</li>
                    <li>Use a moisturizer that suits your skin type.</li>
                    <li>Apply sunscreen every day, even when indoors.</li>
                    <li>Stay hydrated by drinking plenty of water.</li>
                    <li>Get enough sleep to allow your skin to repair itself.</li>
                </ul>
            `,
            image: "images/skincare.jpg",
        },
        fashion: {
            title: "Teen Fashion Trends 2025",
            content: `
                <p>Fashion is all about self-expression. Here are the top trends:</p>
                <ul>
                    <li>Oversized jackets and hoodies.</li>
                    <li>Chunky sneakers and boots.</li>
                    <li>Bold patterns and vibrant colors.</li>
                    <li>Baggy jeans and cargo pants.</li>
                    <li>Accessorize with layered necklaces and bucket hats.</li>
                </ul>
            `,
            image: "images/fashion.jpg",
        },
        makeup: {
            title: "10 Makeup Tips for Teens",
            content: `
                <p>Want to enhance your natural beauty? These makeup tips are perfect:</p>
                <ul>
                    <li>Start with a clean and moisturized face.</li>
                    <li>Use a lightweight BB cream instead of foundation.</li>
                    <li>Apply mascara for fuller-looking lashes.</li>
                    <li>Use a tinted lip balm for a natural pop of color.</li>
                    <li>Don't forget to remove your makeup before bed!</li>
                </ul>
            `,
            image: "images/makeup.jpg",
        },
        haircare: {
            title: "Essential Haircare Tips",
            content: `
                <p>Healthy hair requires consistent care. Try these tips:</p>
                <ul>
                    <li>Wash your hair 2-3 times a week to avoid dryness.</li>
                    <li>Use a conditioner to keep your hair soft and manageable.</li>
                    <li>Trim your hair every 6-8 weeks to avoid split ends.</li>
                    <li>Protect your hair from heat by using a heat protectant.</li>
                    <li>Eat a balanced diet to promote hair growth.</li>
                </ul>
            `,
            image: "images/haircare.jpg",
        },
    };

    // Check if on blog page and query parameter exists
    const articleContent = document.getElementById('article-content');
    const params = new URLSearchParams(window.location.search);
    const articleKey = params.get('article');

    if (articleKey && articles[articleKey]) {
        // Load the selected article's content
        const article = articles[articleKey];
        articleContent.innerHTML = `
            <h2>${article.title}</h2>
            <img src="${article.image}" alt="${article.title}" />
            ${article.content}
        `;
    } else {
        // Show a default message if no article is selected
        articleContent.innerHTML = `
            <p>Please select an article from the <a href="index.html">Home Page</a>.</p>
        `;
    }
});

// about page 
// JavaScript to enhance interactivity on the About Page
document.addEventListener('DOMContentLoaded', () => {
    // Team data
    const team = [
        {
            name: "Sophia Johnson",
            role: "Founder & Editor-in-Chief",
            bio: "Sophia is the visionary behind Beauty Blog. With a passion for teenage lifestyle and fashion, she started this platform to inspire and empower readers. In her free time, she loves experimenting with new skincare routines and traveling the world.",
            img: "images/sophia.jpg",
        },
        {
            name: "Emily Carter",
            role: "Content Creator",
            bio: "Emily is a dedicated content creator who brings the latest trends in fashion and beauty to life. She enjoys writing, photography, and exploring the newest beauty products on the market.",
            img: "images/emily.jpg",
        },
        {
            name: "Liam Brown",
            role: "Tech Guru",
            bio: "Liam ensures the Beauty Blog runs smoothly. From website development to SEO, he handles all the technical aspects. When he's not coding, you can find him gaming or hiking.",
            img: "images/liam.jpg",
        },
    ];

    // Fun facts
    const funFacts = [
        "The global beauty industry is worth over $500 billion!",
        "The first lipstick dates back to 5,000 BC in ancient Mesopotamia.",
        "Mascara was invented in 1917 by a chemist named Eugene Rimmel.",
        "The average person spends about $15,000 on beauty products in their lifetime.",
        "Coconut oil is one of the most versatile natural beauty products.",
    ];

    // Load team profiles dynamically
    const teamContainer = document.getElementById('team-container');
    team.forEach(member => {
        const profile = document.createElement('div');
        profile.className = 'team-member';

        profile.innerHTML = `
            <img src="${member.img}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p class="role">${member.role}</p>
            <p class="bio">${member.bio.substring(0, 100)}... <span class="read-more">Read More</span></p>
        `;

        // Add functionality to expand/collapse bio
        const readMoreBtn = profile.querySelector('.read-more');
        readMoreBtn.addEventListener('click', () => {
            const bio = profile.querySelector('.bio');
            if (bio.textContent.includes('Read More')) {
                bio.innerHTML = `${member.bio} <span class="read-more">Read Less</span>`;
            } else {
                bio.innerHTML = `${member.bio.substring(0, 100)}... <span class="read-more">Read More</span>`;
            }
        });

        teamContainer.appendChild(profile);
    });

    // Show random fun fact
    const factDisplay = document.getElementById('fact');
    const factButton = document.getElementById('show-fact');
    factButton.addEventListener('click', () => {
        const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
        factDisplay.textContent = randomFact;
    });
});