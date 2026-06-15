const siteIndex = [
    {
        title: "Home Page",
        description: "Welcome to our company website. Learn about our mission and core values. Plan a visit if you have too",
        url: "./index.html",
        keywords: "home welcome main about page visit schedule open hours"
    },
    {
        title: "List of Products",
        description: "We offer a variety of fresh produce, homemade goods, and seasonal items.",
        url: "./products.html",
        keywords: "products farm fresh organic seasonal apple cider honey eggs jam shop farm store strawberry bread "
    },
    {
        title: "Contact Us",
        description: "Get in touch with our support team or request a quote. Located in Point Pleasant.",
        url: "./contact.html",
        keywords: "contact email phone location support help address"
    },
    {
        title: "Activites Page",
        description: "Join us for a variety of fun and engaging activities throughout the year.",
        url: "./activities.html",
        keywords: "activities events fun things to do family friendly tractor blueberry apple picking pumpkin picking animals petting zoo christmas christmas tree lighting winter winter shop farm dinner corn maze "
    },
    {
        title: "Seasonal Highlights",
        description: "Discover the unique flavors and events each season brings to our farm.",
        url: "./Seasons.html",
        keywords: "seasonal highlights events farm fresh produce autumn winter spring summer"
    },
    {
        title: "About page",
        description: "Learn more about our company, our values, and our team.",
        url: "./about.html",
        keywords: "about company values team family family tree history"
    }
];

const searchVal = document.getElementById("search-input");
const resultsContainer = document.getElementById('resultsContainer');

        searchVal.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            
            if (query.length === 0) {
                resultsContainer.style.display = 'none';
                resultsContainer.innerHTML = '';
                return;
            }

            const filteredResults = siteIndex.filter(page => {
                return page.title.toLowerCase().includes(query) || 
                       page.description.toLowerCase().includes(query) || 
                       page.keywords.toLowerCase().includes(query);
            });

      
            displayResults(filteredResults);
        });

        function displayResults(results) {
            resultsContainer.innerHTML = '';

            if (results.length === 0) {
                resultsContainer.innerHTML = `<div class="list-group-item text-muted">No results found</div>`;
                resultsContainer.style.display = 'block';
                return;
            }

            results.forEach(page => {
                const resultItem = document.createElement('a');
                resultItem.href = page.url;
                resultItem.className = 'list-group-item list-group-item-action p-3';
                resultItem.innerHTML = `
                    <div class="fw-bold text-primary">${page.title}</div>
                    <small class="text-muted">${page.description}</small>
                `;
                resultsContainer.appendChild(resultItem);
            });

            resultsContainer.style.display = 'block';
        }

        // Hide dropdown if user clicks outside of the search box
        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !resultsContainer.contains(e.target)) {
                resultsContainer.style.display = 'none';
            }
        });
