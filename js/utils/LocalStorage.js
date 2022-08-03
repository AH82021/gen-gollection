export default class LocalStorage{

 static storeProduct(object){

  localStorage.setItem('products',JSON.stringify(object));
 }

  static storeCart(cart){
    localStorage.setItem('cart',JSON.stringify(cart))
  }

  static getProduct(id){
    const products = JSON.parse(localStorage.getItem('products'))
    return products.find((item)=>item.id===parseInt(id))
  }

  static removeCart(cart){
    localStorage.removeItem('carts',JSON.stringify(cart))
  }

}