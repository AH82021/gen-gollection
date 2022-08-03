// Create a ItemsController class
class ProductController {
  // Set up the products and currentId property in the contructor
  constructor(currentId = 0) {
    this.products = [];
    this.currentId = currentId;
  }

  // Create the addItem method
  addProduct(title, description, imageUrl) {
    const product = {
      // Increment the currentId property
      id: this.currentId++,
      title: title,
      description: description,
      imageUrl: imageUrl,
    };

    // Push the item to the items property
    this.products.push(product);
  }

  loadProductsFromLocalStorage() {
    const storageProducts = localStorage.getItem("products");
    if (storageProducts) {
      const products = JSON.parse(storageProducts);
      for (var i = 0, size = products.length; i < size; i++) {
        const product = products[i];
        this.products.push(product);
      }
    }
  }
}
