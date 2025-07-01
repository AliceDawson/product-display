// Sample product data
const products = [
  // Each object represents a product with basic details
  {
    name: "Wireless Headphones",
    image: "images/headphones 1.jpg",
    price: "GHc49.99",
    description:
      "Experience the best sound quality with our wireless headphones.",
  },
  {
    name: "Smart Watch",
    image: "images/smart-watch.jpg",
    price: "GHc89.99",
    description: "Track your health and stay connected on the go.",
  },
  {
    name: "Bluetooth Speaker",
    image: "images/speaker.jpg",
    price: "GHc29.99",
    description: "Portable speaker with powerful sound and long battery life.",
  },
  {
    name: "Fitness Tracker",
    image: "images/tracker.jpg",
    price: "GHc39.99",
    description: "Monitor your fitness activities in style.",
  },
  {
    name: "LED Desk Lamp",
    image: "images/lamp.jpg",
    price: "GHc19.99",
    description: "Adjustable brightness and sleek modern design.",
  },
];

// Get the product grid container from the DOM
const grid = document.getElementById("product-grid");

// Function to render product cards on the page
function renderProducts(filteredProducts) {
  grid.innerHTML = "";

  // Show message if no matching products found
  if (filteredProducts.length === 0) {
    grid.innerHTML =
      "<p class='text-center text-gray-500 col-span-full'>No products match your search.</p>";
    return;
  }

  // Loop through each product and create a card
  filteredProducts.forEach((product) => {
    const card = document.createElement("div");
    card.className =
      "bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300";

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="mb-4 w-full h-48 object-cover rounded-md" />
      <h2 class="text-xl font-semibold text-purple-700 mb-2">${product.name}</h2>
      <p class="text-gray-600 text-sm mb-2">${product.description}</p>
      <span class="font-bold text-teal-600 text-lg mb-4">${product.price}</span>
      <button onclick="addToCart('${product.name}')" class="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition">
        Add to Cart
      </button>
    `;

    grid.appendChild(card);
  });
}

// Initial render of all products
renderProducts(products);

// Handle search input and filter products accordingly
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();

  const filtered = products.filter((product) =>
    product.name.toLowerCase().includes(query)
  );

  renderProducts(filtered);
});

// Toast notification for "Add to Cart" action
function addToCart(productName) {
  Toastify({
    text: `"${productName}" added to cart!`,
    duration: 2000, // disappears faster (2 seconds)
    close: true, // shows a close (X) button
    gravity: "top",
    position: "right",
    backgroundColor: "#ffffff", // white background
    className:
      "text-purple-700 border border-purple-300 rounded shadow px-4 py-2 font-medium",
    stopOnFocus: true,
  }).showToast();
}
