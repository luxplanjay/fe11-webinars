var CART_MODULE = (function () {
  var cart = {
    products: []
  };

  function addToCart(prod) {
    cart.products.push(prod);
  }

  function showCart() {
    console.log(cart.products);
  }

  return {
    addToCart: addToCart,
    showCart: showCart
  };
})();
