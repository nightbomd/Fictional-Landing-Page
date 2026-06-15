const productContainers = [
    {
        id: 'product-1',
        name: 'Blueberry Preserves',
        description: 'Discover our range of fresh, locally-sourced goods.',
        image: './Client Files/Client Files/productPhotos/product-blueberry-preserves-jar.png',
        background: '#E4CEEA',
        cost: "$8.99",
        review: '⭐'.repeat(4)
    },
    {
        id: 'product-2',
        name: 'Apple Pie',
        description: 'Discover our range of fresh, locally-sourced goods.',
        image: './Client Files/Client Files/productPhotos/product-apple-pie-bakery.png',
        background: '#FFEFD2',
        cost: "$12.99",
        review: '⭐'.repeat(3)
    },
    {
        id: 'product-3',
        name: 'Apple Cider',
        description: 'Discover our range of fresh, locally-sourced goods.',
        image: './Client Files/Client Files/productPhotos/product-fresh-apple-cider-jug.png',
        background: '#f0d7aa',
        cost: "$8.99",
        review: '⭐'.repeat(5)
    },
    {
        id: 'product-4',
        name: 'Fresh Eggs',
        description: 'Discover our range of fresh, locally-sourced goods.',
        image: './Client Files/Client Files/productPhotos/product-fresh-eggs-dozen-carton.png',
        background: '#f1eee8',
        cost: "$4.99",
        review: '⭐'.repeat(4)
    },
    {
        id: 'product-5',
        name: 'Raw Honey',
        description: 'Discover our range of fresh, locally-sourced goods.',
        image: './Client Files/Client Files/productPhotos/product-raw-honey-jar.png',
        background: '#f1e9d2',
        cost: "$12.99",
        review: '⭐'.repeat(2)
    },
    {
        id: 'product-6',
        name: 'Produce Basket',
        description: 'Discover our range of fresh, locally-sourced goods.',
        image: './Client Files/Client Files/productPhotos/product-seasonal-produce-basket.png',
        background: '#f1eee8',
        cost: "$24.99",
        review: '⭐'.repeat(3)
    },
    {
        id: 'product-7',
        name: 'Sourdough Bread',
        description: 'Discover our range of fresh, locally-sourced goods.',
        image: './Client Files/Client Files/productPhotos/product-sourdough-bread-loaf.png',
        background: '#fafae3',
        cost: "$5.99",
        review: '⭐'.repeat(4)
    },
    {
        id: 'product-8',
        name: 'Strawberry Preserves',
        description: 'Discover our range of fresh, locally-sourced goods.',
        image: './Client Files/Client Files/productPhotos/product-strawberry-preserves-jar.png',
        background: '#ffb49d',
        cost: "$8.99",
        review: '⭐'.repeat(5)
    }
];

const activities = [
    {
        id: 'activity-1',
        name: 'Apple Cider Pressing',
        description: 'Experience the joy of harvesting fresh apples and pressing delicious cider with the family.',
        image: './Client Files/Client Files/Events/event-apple-cider-pressing-family.png',
        background: '#4A3728',
        color: '#f1eee8',
        season: 'Fall',
    },
    {
        id: 'activity-2',
        name: 'Baby Animals Petting Zoo',
        description: 'Interact with and learn about our adorable baby goats and chicks arriving this spring.',
        image: './Client Files/Client Files/Events/event-baby-animals-goats-chicks-spring.png',
        background: '#8B2500',
        color: "white",
        season: 'Spring',
    },
    {
        id: 'activity-3',
        name: 'Blueberry U-Pick',
        description: 'Gather the family to harvest plump, juicy blueberries directly from our summer patches.',
        image: './Client Files/Client Files/Events/event-blueberry-upick-family-summer.png',
        background: '#D4A017',
        color: "white",
        season: 'Summer',
    },
    {
        id: 'activity-4',
        name: 'Christmas Tree Farm',
        description: 'Explore the fields to choose and cut your own perfect tree for the holiday season.',
        image: './Client Files/Client Files/Events/event-christmas-tree-farm-choose-cut.png',
        background: '#154368',
        color: "white",
        season: 'Winter',
    },
    {
        id: 'activity-5',
        name: 'Corn Maze Adventure',
        description: 'Gather the whole family and see if you can navigate your way through our massive corn maze entrance.',
        image: './Client Files/Client Files/Events/event-corn-maze-entrance-family.png',
        background: '#4A3728',
        color: '#f1eee8',
        season: 'Fall',
    },
    {
        id: 'activity-6',
        name: 'Fall Harvest Festival',
        description: 'Join the festival crowds for a celebration of local food, crafts, and classic autumn fun.',
        image: './Client Files/Client Files/Events/event-fall-harvest-festival-crowds.png',
        background: '#4A3728',
        color: '#f1eee8',
        season: 'Fall',
    },
    {
        id: 'activity-7',
        name: 'Farm-to-Table Dinner',
        description: 'Enjoy an open-air dining experience featuring fresh farm ingredients under beautiful string lights.',
        image: './Client Files/Client Files/Events/event-farm-to-table-dinner-string-lights.png',
        background: '#D4A017',
        color: "white",
        season: 'Summer',
    },
    {
        id: 'activity-8',
        name: 'Tractor Wagon Hayride',
        description: 'Take a relaxing tractor-pulled wagon ride across the farm landscape during a beautiful sunset.',
        image: './Client Files/Client Files/Events/event-hayride-tractor-wagon-sunset.png',
        background: '#4A3728',
        color: '#f1eee8',

        season: 'Fall',
    },
    {
        id: 'activity-9',
        name: 'Holiday Market',
        description: 'Shop local artisan crafts and gifts inside our cozy, glowing winter barn.',
        image: './Client Files/Client Files/Events/event-holiday-market-barn-lights-winter.png',
        background: '#154368',
        color: "white",
        season: 'Winter',
    },
    {
        id: 'activity-10',
        name: 'Pumpkin Patch',
        description: 'Take a wagon ride out to the field with family to pick out the perfect pumpkin.',
        image: './Client Files/Client Files/Events/event-pumpkin-patch-father-son-wagon.png',
        background: '#4A3728',
        color: '#f1eee8',
        season: 'Fall',
    },
    {
        id: 'activity-11',
        name: 'Strawberry U-Pick',
        description: 'Bring the kids along to fill baskets with sweet, sun-ripened strawberries.',
        image: './Client Files/Client Files/Events/event-strawberry-upick-child-basket.png',
        background: '#8B2500',
        color: "white",
        season: 'Spring',
    },
    {
        id: 'activity-12',
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
        'product-container row g-4 m-auto my-5 shadow align-items-center text-center p-4 p-md-5 justify-content-center product';
    container.dataset.animation = 'scale';
    container.dataset.index = index;
    container.id = `product-${index + 1}`;

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
    heading.className = `${product.id === "product-8" ? "text-dark" : "subheading"} fw-bold display-6 text-center text-md-start`;
    heading.textContent = product.name;

    const description = document.createElement('p');
    description.className = 'text-center text-md-start fs-5 text-muted';
    description.textContent = product.description;

    const buttonGroup = document.createElement('div');
    buttonGroup.className = 'd-flex gap-3 justify-content-center justify-content-md-start mt-2';

    const detailsBtn = document.createElement('button');
    detailsBtn.className = 'btn btn-primary px-4 py-2 fw-semibold detail';
    detailsBtn.textContent = 'View Details';

    const cartBtn = document.createElement('button');
    cartBtn.className = 'btn btn-secondary px-4 py-2 fw-semibold cart-btn';
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
                            <a href="activities.html#${activity.id}" style="color: ${activity.color || 'black'} !important;" class="fs-5">View → </a>
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
function createProductModal(index) {
    // Select just the single product matching the clicked button's index
    const product = productContainers[index];
    console.log("Clicked button index:", index);
    console.log("Found product data:", productContainers[index]);

    // Safety check just in case the index doesn't exist
    if (!product) return '';


    const title = product.name || "Blue-Berry Jam";
    const description = product.description || "Discover our range of fresh, locally-sourced goods.";
    const imgSrc = product.image || "./Client Files/Client Files/productPhotos/product-blueberry-preserves-jar.png";
    // Extract just the number from product.cost (e.g., "$67.69" becomes 67.69)
    const basePrice = typeof product.cost === 'string' ? parseFloat(product.cost.replace(/[^0-9.]/g, '')) : (product.cost || 0);
    const formattedInitialPrice = `$${basePrice.toFixed(2)}`;


    // Return just the single string template (no .map() or .join('') needed!)
    return `
       <div class="product-modal-card" id="modal-${product.id}" style="
           background-color: #FAF3E0;
           font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
           width: 100%;
           max-width: 550px;
           display: flex;
           align-items: center;
           gap: 30px;
           padding: 30px;
           border-radius: 12px;
           box-sizing: border-box;
       ">
           <div class="modal-img-container" style="flex: 1; display: flex; justify-content: center; align-items: center;">
               <img src="${imgSrc}" alt="${title}" style="max-width: 100%; height: auto; object-fit: contain;">
           </div>


           <div class="modal-details-container" style="flex: 1.2; display: flex; flex-direction: column; justify-content: center;">
               <h2 style="color: #1A4329; font-size: 32px; font-weight: 700; margin: 0 0 12px 0; border-bottom: 2px solid #D6D2C4; padding-bottom: 8px;">
                   ${title}
               </h2>
               <p style="color: #000000; font-size: 14px; font-weight: 700; line-height: 1.4; margin: 0 0 20px 0;">
                   ${description}
               </p>
               <div class="review-display" style="margin: 0 0 20px 0;">
                   ${product.review}
               </div>
               <div class="modal-price-display" style="color: #1aa71aff; font-size: 36px; font-weight: 800; margin: 0 0 20px 0; border-bottom: 2px solid #D6D2C4; padding-bottom: 12px;">
                   ${formattedInitialPrice}
               </div>
               <div style="display: flex; align-items: center; gap: 12px;">
                   <div style="display: flex; align-items: center; justify-content: space-between; border: 2px solid #1A4329; border-radius: 25px; padding: 6px 16px; width: 110px; height: 42px; box-sizing: border-box; background: #FFFFFF;">
                       
                       <button class="qty-btn" onclick="
                           const qtySpan = this.nextElementSibling;
                           const newQty = Math.max(1, parseInt(qtySpan.innerText) - 1);
                           qtySpan.innerText = newQty;
                           const priceDiv = this.closest('.modal-details-container').querySelector('.modal-price-display');
                           priceDiv.innerText = '$' + (${basePrice} * newQty).toFixed(2);
                       " style="background: none; border: none; font-size: 20px; cursor: pointer; color: #1A4329; font-weight: bold; padding: 0; line-height: 1;">&minus;</button>
                       
                       <span style="font-size: 16px; font-weight: bold; color: #1A4329;">1</span>
                       
                       <button class="qty-btn" onclick="
                           const qtySpan = this.previousElementSibling;
                           const newQty = parseInt(qtySpan.innerText) + 1;
                           qtySpan.innerText = newQty;
                           const priceDiv = this.closest('.modal-details-container').querySelector('.modal-price-display');
                           priceDiv.innerText = '$' + (${basePrice} * newQty).toFixed(2);
                       " style="background: none; border: none; font-size: 18px; cursor: pointer; color: #1A4329; font-weight: bold; padding: 0; line-height: 1;">&#43;</button>
                       
                   </div>
                   <button class="cart-btn" style="background-color: #1A4329; color: #FFFFFF; font-size: 14px; font-weight: 700; border: none; border-radius: 25px; padding: 0 24px; height: 42px; cursor: pointer; flex-grow: 1;">
                       Add to cart
                   </button>
               </div>
           </div>
       </div>
   `;
}


// Grab the overlay container we just created
const modalOverlay = document.getElementById("product-modal-overlay");


document.querySelectorAll(".detail").forEach((btn, index) => {
    btn.addEventListener("click", () => {
        // 1. Generate the product HTML string
        const singleModalHtml = createProductModal(index);

        // 2. Inject it into the overlay container
        modalOverlay.innerHTML = singleModalHtml;

        // 3. Select the freshly rendered modal card element
        const modalElement = modalOverlay.querySelector(".product-modal-card");

        // 4. Reveal the overlay overlay wrapper
        modalOverlay.style.display = "flex";


        // 5. Fire your scale animation directly on the element
        modalElement.animate([
            { opacity: 0, transform: "scale(0)" },
            { opacity: 1, transform: "scale(1)" }
        ], {
            duration: 200,
            easing: "ease-out",
            fill: "forwards"
        });
    });
});

if (modalOverlay) {
    // Close click handler with a matching smooth scale-down exit animation
    modalOverlay.addEventListener("click", (e) => {
        if (e.target === modalOverlay) {
            const modalElement = modalOverlay.querySelector(".product-modal-card");


            if (modalElement) {
                // Run scale out keyframes
                const closeAnim = modalElement.animate([
                    { opacity: 1, transform: "scale(1)" },
                    { opacity: 0, transform: "scale(0)" }
                ], {
                    duration: 200,
                    easing: "ease-in",
                    fill: "forwards"
                });


                // Hide overlay box entirely after the visual scaling finishes
                closeAnim.onfinish = () => {
                    modalOverlay.style.display = "none";
                    modalOverlay.innerHTML = "";
                };
            }
        }
    });

}
