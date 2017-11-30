// именованые экпорты
// export const cart = {...};

// export function addToCart(prod) {
//   cart.products.push(prod);
// }


// Экспорт по умолчанию
export default {
  products: [],
  addToCart(prod) {
    this.products.push(prod);
  },
  showCart() {
    console.log(rhis.products);
  }
};
