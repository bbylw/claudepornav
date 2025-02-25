document.addEventListener('DOMContentLoaded', function() {
    // Website data
    const websites = [
        {
            name: "Google",
            url: "https://www.google.com",
            description: "World's largest search engine",
            icon: "fab fa-google",
            category: "tech"
        },
        {
            name: "YouTube",
            url: "https://www.youtube.com",
            description: "World's largest video sharing platform",
            icon: "fab fa-youtube",
            category: "video"
        },
        {
            name: "Facebook",
            url: "https://www.facebook.com",
            description: "Leading social media platform",
            icon: "fab fa-facebook",
            category: "social"
        },
        {
            name: "Twitter",
            url: "https://twitter.com",
            description: "Real-time information network",
            icon: "fab fa-twitter",
            category: "social"
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com",
            description: "Photo and video sharing app",
            icon: "fab fa-instagram",
            category: "social"
        },
        {
            name: "Amazon",
            url: "https://www.amazon.com",
            description: "World's largest online marketplace",
            icon: "fab fa-amazon",
            category: "shopping"
        },
        {
            name: "Netflix",
            url: "https://www.netflix.com",
            description: "Popular streaming service",
            icon: "fab fa-netflix",
            category: "video"
        },
        {
            name: "Wikipedia",
            url: "https://www.wikipedia.org",
            description: "Free online encyclopedia",
            icon: "fab fa-wikipedia-w",
            category: "news"
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com",
            description: "Professional networking platform",
            icon: "fab fa-linkedin",
            category: "social"
        },
        {
            name: "Reddit",
            url: "https://www.reddit.com",
            description: "Social news and discussion website",
            icon: "fab fa-reddit",
            category: "social"
        },
        {
            name: "Microsoft",
            url: "https://www.microsoft.com",
            description: "Leading software and hardware company",
            icon: "fab fa-microsoft",
            category: "tech"
        },
        {
            name: "Apple",
            url: "https://www.apple.com",
            description: "Innovative tech company",
            icon: "fab fa-apple",
            category: "tech"
        },
        {
            name: "GitHub",
            url: "https://github.com",
            description: "Code hosting platform for developers",
            icon: "fab fa-github",
            category: "tech"
        },
        {
            name: "WhatsApp",
            url: "https://www.whatsapp.com",
            description: "Global messaging app",
            icon: "fab fa-whatsapp",
            category: "social"
        },
        {
            name: "Spotify",
            url: "https://www.spotify.com",
            description: "Music streaming service",
            icon: "fab fa-spotify",
            category: "video"
        },
        {
            name: "TikTok",
            url: "https://www.tiktok.com",
            description: "Short-form video platform",
            icon: "fab fa-tiktok",
            category: "social"
        },
        {
            name: "Alibaba",
            url: "https://www.alibaba.com",
            description: "Global B2B e-commerce platform",
            icon: "fas fa-shopping-cart",
            category: "shopping"
        },
        {
            name: "CNN",
            url: "https://www.cnn.com",
            description: "Leading global news network",
            icon: "fas fa-newspaper",
            category: "news"
        },
        {
            name: "BBC",
            url: "https://www.bbc.com",
            description: "British Broadcasting Corporation",
            icon: "fas fa-newspaper",
            category: "news"
        },
        {
            name: "PayPal",
            url: "https://www.paypal.com",
            description: "Online payment system",
            icon: "fab fa-paypal",
            category: "tools"
        },
        {
            name: "Dropbox",
            url: "https://www.dropbox.com",
            description: "File hosting and synchronization",
            icon: "fab fa-dropbox",
            category: "tools"
        },
        {
            name: "Slack",
            url: "https://slack.com",
            description: "Team collaboration platform",
            icon: "fab fa-slack",
            category: "tools"
        },
        {
            name: "Zoom",
            url: "https://zoom.us",
            description: "Video conferencing tool",
            icon: "fas fa-video",
            category: "tools"
        },
        {
            name: "The New York Times",
            url: "https://www.nytimes.com",
            description: "American news organization",
            icon: "fas fa-newspaper",
            category: "news"
        }
    ];

    const sitesContainer = document.getElementById('sites-container');
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const tabs = document.querySelectorAll('.tab');
    const themeToggleBtn = document.getElementById('theme-toggle-btn');

    // Render website cards
    function renderWebsites(sites) {
        sitesContainer.innerHTML = '';
        
        sites.forEach(site => {
            const card = document.createElement('div');
            card.className = 'site-card';
            card.setAttribute('data-url', site.url);
            
            card.innerHTML = `
                <div class="site-icon">
                    <i class="${site.icon}"></i>
                </div>
                <div class="site-info">
                    <h3>${site.name}</h3>
                    <p>${site.description}</p>
                    <a href="${site.url}" target="_blank" onclick="event.stopPropagation()">Visit Site</a>
                </div>
            `;
            
            // Make the entire card clickable
            card.addEventListener('click', function() {
                window.open(this.getAttribute('data-url'), '_blank');
            });
            
            sitesContainer.appendChild(card);
        });
    }

    // Initial render of all websites
    renderWebsites(websites);

    // Search functionality
    function searchWebsites() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredSites = websites.filter(site => 
            site.name.toLowerCase().includes(searchTerm) || 
            site.description.toLowerCase().includes(searchTerm)
        );
        renderWebsites(filteredSites);
        
        // Reset category tab states
        tabs.forEach(tab => {
            if (tab.dataset.category === 'all') {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });
    }

    searchBtn.addEventListener('click', searchWebsites);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchWebsites();
        }
    });

    // Category switching functionality
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const category = this.dataset.category;
            
            // Update tab states
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Filter websites
            if (category === 'all') {
                renderWebsites(websites);
            } else {
                const filteredSites = websites.filter(site => site.category === category);
                renderWebsites(filteredSites);
            }
            
            // Clear search box
            searchInput.value = '';
        });
    });

    // Theme toggle functionality
    themeToggleBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        
        // Change icon
        if (document.body.classList.contains('dark-theme')) {
            themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
        }
    });

    // Save theme preference in local storage
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
        themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }

    themeToggleBtn.addEventListener('click', function() {
        if (document.body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    // Add hover effects to cards with smoother animations
    function addCardHoverEffects() {
        const cards = document.querySelectorAll('.site-card');
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                // Animation handled by CSS transitions
            });
            card.addEventListener('mouseleave', function() {
                // Animation handled by CSS transitions
            });
        });
    }

    // Initialize card effects
    addCardHoverEffects();

    // Re-add card effects when DOM changes
    const observer = new MutationObserver(function() {
        addCardHoverEffects();
    });
    
    observer.observe(sitesContainer, { childList: true });
});