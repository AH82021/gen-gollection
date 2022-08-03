import renderProductCart from "../js/utils/renderProduct.js"
//Cashing Variables
const productsDOM = document.querySelector('.shop-products')
const prodctsTotalPrice = document.querySelector('.cart-total')
const prodctTotal = document.querySelector('.product-total')

const clearCart = document.querySelector('.clear-cart')



export default class Cart {
  constructor(){
    this.totalPrice =0;
    this.totalProducts =0;
    this.items = new Map();
    //event listeners
    this.addClearCartEvent();
    this.removeItem = this.removeItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.clearDisplayItem = this.clearDisplayItem.bind(this);
  }

  addItem(item){
    const productOnCart = this.items.get(item.id) 
    this.totalPrice += item.price;
    this.totalPrice++;

		if (productOnCart) {
			const currentAmount = productOnCart.amount;

			return this.updateAmountItem(item.id, currentAmount + 1);
		}
    this.items.set(item.id,item);
    this.renderItem(item);
  }
 
  removeItem(id){
    const removePoduct = this.items.get(id);

    this.totalPrice -=removePoduct.amount * removePoduct.price;
    this.totalProducts -=removePoduct.amount;
    this.clearDisplayItem (id);
    this.items.delete(id);
    this.setItemVlues();
  }

  createItem(id,title,url,price,amount){
    let model = document.createElement('div');
    model.classList.add('cart-container');
    model.id=`product-${id}`
    model.innerHTML = renderProductCart(id,title,url,price,amount)

    // const increaseButton = model.querySelector(`.increase`);
		// const decreaseButton = model.querySelector(`.decrease`);
		// const removeButton = model.querySelector(`#remove-${id}`);

   return model
    //listeners

    // removeButton.addEventListener("click", () => this.removeItem(id));
 
    // increaseButton.addEventListener("click", () =>
		// 	this.handleUpdateButton(id, "increase")
		// );
    // decreaseButton.addEventListener("click", () => {
		// 	const { amount: currentAmount } = this.items.get(id);
	
		// 	this.handleUpdateButton(id, "decrease");
			
		// 	currentAmount - 1 === 0 && this.removeItem(id);
		// });

		// return modal;


  }

  handleUpdateButton(id, action) {
    const toUpdate = this.items.get(id)
    if(action ===  "increase"){
      this.totalPrice += toUpdate.price;
      this.totalProducts++;
      this.updateAmountItem(id, toUpdate.amount + 1);
      return this.setItemValues();

    } else if (action ===  "decrease"){
      this.totalPrice -= toUpdate.price;
      this.totalProducts--;
      this.updateAmountItem(id, toUpdate.amount - 1);
      return this.setItemValues();
    } else 
    return;
  }

  addClearCartEvent() {
		clearCart.addEventListener("click", () => {
			this.totalPrice = 0;
			this.totalProducts = 0;

			this.items = new Map();

			this.deleteDisplayAllItems();
			this.setItemValues();
		});
	}

  renderItem({ id, title, url, price, amount }) {
    productsDOM.append(this.createItem(id, title, url, price, amount));
	}

  updateAmountItem(id, newAmount) {
		const toUpdate = this.items.get(id);
		this.items.set(id, { ...toUpdate, amount: newAmount });
	

		const input = productsDOM.querySelector(`#product-${id} input.item__amount`);
		input.value = newAmount.toString();
	}


	clearDisplayItem(id) {
    productsDOM.querySelector(`#product-${id}`).remove();
	}


	deleteDisplayAllItems() {
		removeAllChildNodes(cartDOM);
	}


	setItemValues() {
    prodctsTotalPrice.innerText = this.totalProducts;
		prodctTotal.innerText = parseFloat(this.totalPrice.toFixed(2));
	}
}




