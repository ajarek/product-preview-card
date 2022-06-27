export class Cart {
  name: string;
  price: string;
  constructor(name: string, price: string) {
    this.name = name;
    this.price = price;
  }
  render() {
    const cart = document.createElement("div");
    cart.classList.add("cart");
    cart.innerHTML = `
        <div class="close">❌</div>
        <div class="cart-name">${this.name}</div>
        <div class="cart-price">${this.price}</div>
        <div class="cart-btn">💳 Pay for the cart</div>`;
    return cart;
  }
}
