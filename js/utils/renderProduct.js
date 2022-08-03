const renderProductCart = (id,title,price,url) => {
 ` <div class="cart-container">
        <img src="${url}" alt="" class="img-fluid">
        <div>
          <h4>${title}</h4>
          <h5>$ ${price}</h5>
          <span id="remove-${id}" class="remove-item">remove</span>
        </div>
        <div class="item-number">
          <i class="bi bi-chevron-compact-up text-warning .increase"></i>
          <h6 class="item-amount text-center">1</h6>
          <i class="bi bi-chevron-compact-down text-warning decrease"></i>
        </div>
      </div>`
}

export default renderProductCart;

