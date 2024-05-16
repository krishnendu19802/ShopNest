const fs = require('fs'); // File system module for file operations

// Function to fetch product data
async function fetchProducts() {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    return null;
  }
}

// Function to save products to a JSON file
async function saveProducts(products) {
  try {
    const data = JSON.stringify(products, null, 2); // Stringify with indentation
    await fs.promises.writeFile('products.json', data);
    console.log('Products saved to products.json');
  } catch (error) {
    console.error('Error saving products:', error);
  }
}

// Run the functions
fetchProducts()
  .then(products => (products ? saveProducts(products) : null))
  .catch(error => console.error('Error:', error));
