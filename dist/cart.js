export class Cart {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    render() {
        const cart = document.createElement('div');
        cart.classList.add('cart');
        cart.innerHTML = `
        <div class="close">❌</div>
        <div class="cart-name">${this.name}</div>
        <div class="cart-price">${this.price}</div>
        <div class="cart-btn">💳 Pay for the cart</div>`;
        return cart;
    }
}
