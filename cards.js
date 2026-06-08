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

const activites = [
    {
        id: 'activity1',
        name: 'Apple Picking',
        description: 'Experience the joy of harvesting fresh apples in our picturesque orchards.',
        image: './Client Files/Client Files/activityPhotos/activity-apple-picking.png',
        background: '#f1eee8',
        season: 'Fall',
    },
     {
        id: 'activity2',
        name: 'Blueberry U-Pick',
        description: 'Experience the joy of harvesting fresh blueberries in our picturesque orchards.',
        image: './Client Files/Client Files/activityPhotos/activity-blueberry-u-pick.png',
        background: '#f1eee8',
        season: 'Summer',
    },
     {
        id: 'activity3',
        name: 'Baby Animal Petting Zoo',
        description: 'pet the adorable baby animals in our petting zoo, where you can interact with and learn about our furry friends.',
        image: './Client Files/Client Files/activityPhotos/activity-baby-animal-petting-zoo.png',
        background: '#f1eee8',
        season: 'Fall',
    },
     {
        id: 'activity4',
        name: 'Sunflower U-Pick',
        description: 'Experience the joy of harvesting fresh sunflowers in our picturesque fields.',
        image: './Client Files/Client Files/activityPhotos/activity-sunflower-u-pick.png',
        background: '#f1eee8',
        season: 'Fall',
    },
     {
        id: 'activity5',
        name: 'Pumpkin Patch',
        description: 'Experience the joy of harvesting fresh pumpkins in our picturesque fields.',
        image: './Client Files/Client Files/activityPhotos/activity-pumpkin-patch.png',
        background: '#f1eee8',
        season: 'Fall',
    },
     {
        id: 'activity6',
        name: 'Christmas Tree Farm ',
        description: 'omg santa bro',
        image: './Client Files/Client Files/activityPhotos/activity-christmas-tree-farm.png',
        background: '#f1eee8',
        season: 'winter',
    },

];

function createProductCard(product, index) {
    const container = document.createElement('div');
    container.className =
        'product-container d-flex m-auto my-5 shadow align-items-center text-center p-5 justify-content-center gap-5 observe';
    container.dataset.animation = 'scale';

    if (product.background) {
        container.style.backgroundColor = product.background;
    }

    const img = document.createElement('img');
    img.className = 'product-img rounded-circle shadow observe';
    img.id = `${product.id}-img`;
    img.src = product.image;
    img.alt = product.name;
    img.dataset.animation = 'scale';

    const content = document.createElement('div');
    content.className = 'd-flex flex-column gap-2 p-5';

    const heading = document.createElement('h2');
    heading.className = 'subheading fw-bold fs-1 text-start';
    heading.textContent = product.name;

    const description = document.createElement('p');
    description.textContent = product.description;

    const buttonGroup = document.createElement('div');
    buttonGroup.className = 'd-flex gap-3';

    const detailsBtn = document.createElement('button');
    detailsBtn.className = 'btn btn-primary col-6';
    detailsBtn.textContent = 'View Details';

    const cartBtn = document.createElement('button');
    cartBtn.className = 'btn btn-secondary col-6';
    cartBtn.textContent = 'Add to Cart';

    buttonGroup.append(detailsBtn, cartBtn);
    content.append(heading, description, buttonGroup);

    if (index % 2 === 1) {
        container.append(content, img);
    } else {
        container.append(img, content);
    }

    return container;
}

const productsSection = document.getElementById('products-section');

productContainers.forEach((product, index) => {
    productsSection.appendChild(createProductCard(product, index));
});