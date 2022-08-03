const productsDOM = document.querySelector('.shop-products')

// displapy UI  products
export default class DisplayProducts {
  displayProducts(products) {
    let outPut = "";
    products.forEach((product) => {
      outPut += `<div class="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3 ">
    <div class="product"> 
      <img src="${product.url}" alt="">
        <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
            <li class="icon"><a href=""><i class="bi bi-share"></i></a></i></li>
            <li class="icon mx-3"><a href=""><i class="bi bi-bag-heart"></i></a></i></li>
            <li class="icon"><a ><i id="bi-bag" data-id=${product.id} class="bi bi-bag"></i></a></i></li>
        </ul>
    </div>
    <div class="tag bg-${product.badgeID} ">${product.market}</div>
    <div class="title pt-4 pb-1 text-light fw-bold">${product.title}</div>
    <div class="d-flex align-content-center justify-content-center"> <i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i> <i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i> </div>
    <div class="price">$ ${product.price}</div>
</div>`;
    });
    productsDOM.innerHTML = outPut;
  }
}

