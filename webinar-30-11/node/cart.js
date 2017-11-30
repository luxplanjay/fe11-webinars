var cart = {
  products: []
};

function addToCart(prod) {
  cart.products.push(prod);
}

function showCart() {
  console.log(cart.products);
}

module.exports = {
  addToCart: addToCart,
  showCart: showCart
};
