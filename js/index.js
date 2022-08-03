import Products from '../models/Products.js'
import DisplayProducts from './utils/DisplayProducts.js';
import LocalStorage from './utils/LocalStorage.js';
import Cart from '../models/Cart.js';




//caseing DOM elements 
const prodctsTotalPrice = document.querySelector('.cart-total')
const prodctTotal = document.querySelector('.product-total')
const clearCart = document.querySelector('.clear-cart')

let cart =[]
let cartModel = new Cart()
const getCartIcons =()=>{
  //cahsing all bag icons
  const cartIcons = document.querySelectorAll('.bi-bag');
  const bagIcons = [...cartIcons]
    bagIcons.forEach((bagIcon)=>{
      const id = bagIcon.dataset.id;
    const inCart = cart.find((item)=> item.id === id)

     if(inCart){
      bagIcon.diable = false;
    } 
      bagIcon.addEventListener('click',(event)=>{
        event.target.disable= false;
        const cartItem = {...LocalStorage.getProduct(id),amount:1}
   

        cartModel.addItem(cartItem);
        cart = [...cart,cartItem]

        LocalStorage.storeCart(cart)  
      })
      
    })
}


const setItemValues = () =>{
  prodctTotal.innerText = cartModel.totalProducts
  prodctsTotalPrice.innerText=parseFloat(cartModel.totalPrice.toFixed(2))
}


const app = async ()=>{
  const productsList = new Products();
  const products = await productsList.fetechProducts()
  const displayProductsUI = new DisplayProducts()
displayProductsUI.displayProducts(products)
getCartIcons();
setItemValues();
LocalStorage.storeProduct(products)
}



app();










// //cashed elements
// const cartBtnIconNav = document.querySelector(".badge");
// const clearCartBtn = document.querySelector(".clear-cart");
// const cartOffCanvas = document.querySelector(".cart-offCanvas");
// const cartIContentOffCanvas = document.querySelector(".cart-container");
// const cartTotalOffCanvas = document.querySelector(".cart-total");
// const productShopList = document.querySelector(".shop-products");

// //cart
// let cartArray = [];
// //cart icons
// let cartIconsDOM = [];
// // fecting products
// class Products {
//   async fetechProducts() {
//     try {
//       let dataUrl = "data/products.json";
//       let result = await fetch(dataUrl);
//       let data = await result.json();
//       let products = data.products;
//       return products;
//     } catch (error) {
//       console.log(error.message);
//     }
//   }
// }

// // displapy UI  products
// // class DisplapyUI {
// //   displayProducts(products) {
// //     let outPut = "";
// //     products.forEach((product) => {
// //       outPut += `<div class="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3 ">
// //     <div class="product"> 
// //       <img src="${product.url}" alt="">
// //         <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
// //             <li class="icon"><a href=""><i class="bi bi-share"></i></a></i></li>
// //             <li class="icon mx-3"><a href=""><i class="bi bi-bag-heart"></i></a></i></li>
// //             <li class="icon"><a ><i id="bi-bag" data-id=${product.id} class="bi bi-bag"></i></a></i></li>
// //         </ul>
// //     </div>
// //     <div class="tag bg-${product.badgeID} ">${product.market}</div>
// //     <div class="title pt-4 pb-1 text-light fw-bold">${product.title}</div>
// //     <div class="d-flex align-content-center justify-content-center"> <i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i> <i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i> </div>
// //     <div class="price">$ ${product.price}</div>
// // </div>`;
// //     });
// //     productShopList.innerHTML = outPut;
// //   }

//   //cashing cart icons after products loads on page
//   getCartIcons() {
//     const cartIcons = [...document.querySelectorAll(".bi-bag")];
//     cartIconsDOM = cartIcons;
//     cartIcons.forEach((cartIcon) => {
//       let id = cartIcon.dataset.id;
//       let inCart = cartArray.find((item) => item.id === id);
//       if (inCart) {
//         cartIcon.disabled = true;
//       } else {
//         cartIcon.addEventListener("click", (event) => {
//           event.target.disabled = true;
//           //retrive prodct form localDatabase
//           let cartItem = {...LocalDataBase.getProduct(id),amount:1};
          
//           console.log( cartItem  );
//           // add product to the cart
//           cartArray = [...cartArray,cartItem];
//           // store product to the cart
//           LocalDataBase.storeProducts(cartArray)
//           this.setCartValue(cartArray);
//         });
//       }














//     });
    
//   }
//   setCartValue(items){
//     let intialTotal = 0;
//     let productsTotal = 0;
//     items.map(item=>{
//       console.log(item.price);
//       productsTotal +=item.amount;
//       intialTotal +=item.price * item.amount;
//     })
//     cartTotalOffCanvas.innerText = parseFloat(intialTotal.toFixed(2))
//     cartBtnIconNav.innerText = productsTotal;
//     console.log( cartTotalOffCanvas,cartBtnIconNav );
//   }
// }

// class DisplayCartUI{
//    disPlayCartItem(products){
//      let outPut = ""
//      products.forEach((product) => {
//      outPut +=`<div class="cart-container">
//      <img src="${product.url}" alt="" class="img-fluid">
//      <div>
//        <h4>Mug</h4>
//        <h5>$16.00</h5>
//        <span class="remove-item">remove</span>
//      </div>
//      <div class="item-number">
//        <i class="bi bi-chevron-compact-up text-warning .increase"></i>
//        <h6 class="item-amount text-center">1</h6>
//        <i class="bi bi-chevron-compact-down text-warning decrease"></i>
//      </div>
//    </div>`
//   });
//   cartOffCanvas.innerHTML = outPut;
//    }
// }
// //dataBase

// class LocalDataBase {
//   static storeProducts(items) {
//     localStorage.setItem("items", JSON.stringify(items));
//   }
//   static getProduct(id) {
//     let products = JSON.parse(localStorage.getItem("items"));
//     return products.find((product) => product.id === id);
//   }

//   static saveCart(item){
//     localStorage.setItem('item',JSON.stringify(item))
//   }
// }

// document.addEventListener("DOMContentLoaded", () => {
//   const displapyUI = new DisplapyUI();
//   const disPlayProductCart = new DisplayCartUI();
//   const products = new Products();
//   //fetch all products from database
//   products
//     .fetechProducts()
//     .then((products) => {
//       displapyUI.displayProducts(products);
//       LocalDataBase.storeProducts(products);
//     })
//     .then(() => {
//       displapyUI.getCartIcons();
//     });
// });
// import DisplayProducts from './utils/DisplayProducts.js';
