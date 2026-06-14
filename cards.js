const productContainers = [
    {
        id: 'product1',
        name: 'Blueberry Preserves',
        description: 'Discover our range of fresh, locally-sourced goods.',
        image: './Client Files/Client Files/productPhotos/product-blueberry-preserves-jar.png',
        background: '#E4CEEA',
    },
    {
        id: 'product2',
        name: 'Apple Pie',
        description: 'Discover our range of fresh, locally-sourced goods.',
        image: './Client Files/Client Files/productPhotos/product-apple-pie-bakery.png',
        background: '#FFEFD2',
    },
    {
        id: 'product3',
        name: 'Apple Cider',
        description: 'Discover our range of fresh, locally-sourced goods.',
        image: './Client Files/Client Files/productPhotos/product-fresh-apple-cider-jug.png',
        background: '#f0d7aa',
    },
    {
        id: 'product4',
        name: 'Fresh Eggs',
        description: 'Discover our range of fresh, locally-sourced goods.',
        image: './Client Files/Client Files/productPhotos/product-fresh-eggs-dozen-carton.png',
        background: '#f1eee8',
    },
    {
        id: 'product5',
        name: 'Raw Honey',
        description: 'Discover our range of fresh, locally-sourced goods.',
        image: './Client Files/Client Files/productPhotos/product-raw-honey-jar.png',
        background: '#f1e9d2',
    },
    {
        id: 'product6',
        name: 'Produce Basket',
        description: 'Discover our range of fresh, locally-sourced goods.',
        image: './Client Files/Client Files/productPhotos/product-seasonal-produce-basket.png',
        background: '#f1eee8',
    },
    {
        id: 'product7',
        name: 'Sourdough Bread',
        description: 'Discover our range of fresh, locally-sourced goods.',
        image: './Client Files/Client Files/productPhotos/product-sourdough-bread-loaf.png',
        background: '#fafae3',
    },
    {
        id: 'product8',
        name: 'Sourdough Bread',
        description: 'Discover our range of fresh, locally-sourced goods.',
        image: './Client Files/Client Files/productPhotos/product-strawberry-preserves-jar.png',
        background: '#ffb49d',
    }
];

const activities = [
    {
        id: 'activity1',
        name: 'Apple Cider Pressing',
        description: 'Experience the joy of harvesting fresh apples and pressing delicious cider with the family.',
        image: './Client Files/Client Files/Events/event-apple-cider-pressing-family.png',
        background: '#4A3728',
        color: '#f1eee8',
        season: 'Fall',
    },
    {
        id: 'activity2',
        name: 'Baby Animals Petting Zoo',
        description: 'Interact with and learn about our adorable baby goats and chicks arriving this spring.',
        image: './Client Files/Client Files/Events/event-baby-animals-goats-chicks-spring.png',
        background: '#8B2500',
        color: "white",
        season: 'Spring',
    },
    {
        id: 'activity3',
        name: 'Blueberry U-Pick',
        description: 'Gather the family to harvest plump, juicy blueberries directly from our summer patches.',
        image: './Client Files/Client Files/Events/event-blueberry-upick-family-summer.png',
        background: '#D4A017',
        color: "white",
        season: 'Summer',
    },
    {
        id: 'activity4',
        name: 'Christmas Tree Farm',
        description: 'Explore the fields to choose and cut your own perfect tree for the holiday season.',
        image: './Client Files/Client Files/Events/event-christmas-tree-farm-choose-cut.png',
        background: '#154368',
        color: "white",
        season: 'Winter',
    },
    {
        id: 'activity5',
        name: 'Corn Maze Adventure',
        description: 'Gather the whole family and see if you can navigate your way through our massive corn maze entrance.',
        image: './Client Files/Client Files/Events/event-corn-maze-entrance-family.png',
        background: '#4A3728',
        color: '#f1eee8',
        season: 'Fall',
    },
    {
        id: 'activity6',
        name: 'Fall Harvest Festival',
        description: 'Join the festival crowds for a celebration of local food, crafts, and classic autumn fun.',
        image: './Client Files/Client Files/Events/event-fall-harvest-festival-crowds.png',
        background: '#4A3728',
        color: '#f1eee8',
        season: 'Fall',
    },
    {
        id: 'activity7',
        name: 'Farm-to-Table Dinner',
        description: 'Enjoy an open-air dining experience featuring fresh farm ingredients under beautiful string lights.',
        image: './Client Files/Client Files/Events/event-farm-to-table-dinner-string-lights.png',
        background: '#D4A017',
        color: "white",
        season: 'Summer',
    },
    {
        id: 'activity8',
        name: 'Tractor Wagon Hayride',
        description: 'Take a relaxing tractor-pulled wagon ride across the farm landscape during a beautiful sunset.',
        image: './Client Files/Client Files/Events/event-hayride-tractor-wagon-sunset.png',
        background: '#4A3728',
        color: '#f1eee8',

        season: 'Fall',
    },
    {
        id: 'activity9',
        name: 'Holiday Market',
        description: 'Shop local artisan crafts and gifts inside our cozy, glowing winter barn.',
        image: './Client Files/Client Files/Events/event-holiday-market-barn-lights-winter.png',
        background: '#154368',
        color: "white",
        season: 'Winter',
    },
    {
        id: 'activity10',
        name: 'Pumpkin Patch',
        description: 'Take a wagon ride out to the field with family to pick out the perfect pumpkin.',
        image: './Client Files/Client Files/Events/event-pumpkin-patch-father-son-wagon.png',
        background: '#4A3728',
        color: '#f1eee8',
        season: 'Fall',
    },
    {
        id: 'activity11',
        name: 'Strawberry U-Pick',
        description: 'Bring the kids along to fill baskets with sweet, sun-ripened strawberries.',
        image: './Client Files/Client Files/Events/event-strawberry-upick-child-basket.png',
        background: '#8B2500',
        color: "white",
        season: 'Spring',
    },
    {
        id: 'activity12',
        name: 'Sunflower U-Pick',
        description: 'Stroll through picturesque fields to harvest fresh sunflowers at sunset.',
        image: './Client Files/Client Files/Events/event-sunflower-upick-family-sunset.png',
        background: '#4A3728',
        color: '#f1eee8',
        season: 'Fall',
    },
];

function createProductCard(product, index) {
    const container = document.createElement('div');
    // Changed 'd-flex' to 'row g-4 align-items-center' to turn the container into a responsive grid row
    container.className =
        'product-container row g-4 m-auto my-5 shadow align-items-center text-center p-4 p-md-5 justify-content-center';
    container.dataset.animation = 'scale';

    if (product.background) {
        container.style.backgroundColor = product.background;
    }

    // 1. Image Wrapper to control grid footprint
    const imgWrapper = document.createElement('div');
    // Full width (12 columns) on mobile, half width (6 columns) on medium screens and up
    imgWrapper.className = 'col-12 col-md-6 d-flex justify-content-center';

    const img = document.createElement('img');
    // Swapped 'product-img' logic to clean responsive image classes
    img.className = 'img-fluid rounded-circle shadow observe w-75';
    img.id = `${product.id}-img`;
    img.src = product.image;
    img.alt = product.name;
    img.dataset.animation = 'scale';
    img.style.aspectRatio = '1 / 1';
    img.style.objectFit = 'cover';
    
    imgWrapper.append(img);

    // 2. Content Wrapper
    const content = document.createElement('div');
    // Full width (12 columns) on mobile, half width (6 columns) on medium screens and up
    content.className = 'col-12 col-md-6 d-flex flex-column gap-2 text-md-start p-3 p-md-4';

    const heading = document.createElement('h2');
    // Changed text-start to display-6 for cleaner responsive title scaling
    heading.className = 'subheading fw-bold display-6 text-center text-md-start';
    heading.textContent = product.name;

    const description = document.createElement('p');
    description.className = 'text-center text-md-start fs-5 text-muted';
    description.textContent = product.description;

    const buttonGroup = document.createElement('div');
    buttonGroup.className = 'd-flex gap-3 justify-content-center justify-content-md-start mt-2';

    const detailsBtn = document.createElement('button');
    detailsBtn.className = 'btn btn-primary px-4 py-2 fw-semibold';
    detailsBtn.textContent = 'View Details';

    const cartBtn = document.createElement('button');
    cartBtn.className = 'btn btn-secondary px-4 py-2 fw-semibold';
    cartBtn.textContent = 'Add to Cart';

    buttonGroup.append(detailsBtn, cartBtn);
    content.append(heading, description, buttonGroup);

    // 3. Alternating Layout Injection Logic
    // If it's an odd index, use the 'order-md-2' style paradigm to naturally handle layout flipping on desktop while preserving straight standard column stacking order on mobile phones.
    if (index % 2 === 1) {
        imgWrapper.classList.add('order-md-2');
        content.classList.add('order-md-1');
    }

    container.append(imgWrapper, content);

    return container;
}
function displayActivities(container, array) {


    // Safety check: if the element doesn't exist, stop immediately
    if (!container) return;

    const activitiesHTML = array.map(activity => {
        return `
            <div class="col">
               <div class="card activity h-100 shadow"  style="background-color: ${activity.background || '#e47928'} !important; color: ${activity.color || '#f1eee8'} !important; border: none; ">
                    <img src="${activity.image}" class="card-img-top" alt="${activity.name}">
                    <div class="card-body  p-3">
                        <div class="d-flex justify-content-between align-items-center mb-2 ">
                            <h5 class="card-title text-start fs-3 m-0 fw-bold">${activity.name}</h5>
                            <span class="text-muted p-2 rounded-5 text-white" style="background: rgb(244, 139, 58); color: white !important; font-size: 0.85rem;">
                                ${activity.season}
                            </span>
                        </div>
                        <p class="text-start">${activity.description}</p>
                        <br>
                        <div class="text-start mt-auto">
                            <a href="#" style="color: ${activity.color || 'black'} !important;" class="fs-5">View → </a>
                        </div>
                    </div>
                </div>
                
            </div>
        `;
    }).join('');

    container.innerHTML = activitiesHTML;

    if (container.id === "drag-carosuel-container") {
        container.innerHTML = activitiesHTML + activitiesHTML;


        const sensitivity = 0.75; // Lower = more friction. Higher = faster.
        let isResetting = false;

        requestAnimationFrame(() => {
            container.scrollLeft = container.scrollWidth / 2;
        });

        // Infinite scroll logic
        container.addEventListener("scroll", () => {
            if (isResetting) return;
            const half = container.scrollWidth / 2;

            if (container.scrollLeft >= half * 1.5) {
                isResetting = true;
                container.scrollLeft -= half;
                isResetting = false;
            }
            if (container.scrollLeft <= half * 0.5) {
                isResetting = true;
                container.scrollLeft += half;
                isResetting = false;
            }
        });

        container.querySelectorAll(".col").forEach(col => {
            col.style.flex = "0 0 350px";
        });

        let isDown = false;
        let startX;
        let scrollLeft;

        container.addEventListener("mousedown", (e) => {
            isDown = true;
            container.style.cursor = "grabbing";

            // CRITICAL FIX 1: Prevent text/image selection ghosting
            e.preventDefault();

            startX = e.pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
        });

        container.addEventListener("mouseup", () => {
            isDown = false;
            container.style.cursor = "grab";
        });

        container.addEventListener("mouseleave", () => {
            isDown = false;
            container.style.cursor = "grab";
        });

        container.addEventListener("mousemove", (e) => {
            if (!isDown) return;

            // CRITICAL FIX 2: Prevent browser default scrolling/dragging actions
            e.preventDefault();

            const x = e.pageX - container.offsetLeft;
            const distance = x - startX;
            const walk = distance * sensitivity;

            container.scrollLeft = scrollLeft - walk;
        });

        // CRITICAL FIX 3: Disable HTML5 native dragging on the container
        container.addEventListener("dragstart", (e) => {
            e.preventDefault();
        });

        container.style.cursor = "grab";
    }
}
const mainContainer = document.getElementById("activities-grid");
document.addEventListener("DOMContentLoaded", () => {
    if (mainContainer) {
        displayActivities(mainContainer, activities);
    }
});

const activityDragCarosuel = document.getElementById('drag-carosuel-container')

if (activityDragCarosuel) {
    displayActivities(activityDragCarosuel, activities);
}

const productsSection = document.getElementById('products-section');

if (productsSection) {
    productContainers.forEach((product, index) => {
        productsSection.appendChild(createProductCard(product, index));
    });
};

const seasonSelect = document.getElementById("season-select");

if (seasonSelect) {
    seasonSelect.addEventListener("change", (e) => {
        const selectedSeason = e.target.value.toLowerCase();
        const filteredActivities =
            selectedSeason === "season"
                ? activities
                : activities.filter(
                    activity => activity.season.toLowerCase() === selectedSeason
                );

        displayActivities(mainContainer, filteredActivities);

        console.log(filteredActivities);
        console.log(selectedSeason);
        
    });
}
    

const searchInput = document.getElementById("search-input")

if (searchInput) {
    searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredActivities = activities.filter(activity => activity.name.toLowerCase().includes(searchTerm));

    console.log(filteredActivities);
    console.log(searchTerm);
    displayActivities(mainContainer, filteredActivities);
});
}