
// fecting products from database
export default class productsData {
  async fetechProducts() {
    try {
      const dataUrl = '../data/products.json';
      const result = await fetch(dataUrl);
      const data = await result.json();
      const products = data.products;
      return products;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
}