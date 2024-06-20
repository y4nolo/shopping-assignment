//apply functions to product?

// discounts:
export default basketPricer =
  //Baked Beans: buy 2 get 1 free
  function calculateBuy2Get1Free(product) {
    if (product.promotion === "buy 2 get 1 free") {
      return 1 / 3; // Discount of 1 item free for every 3 purchased
    } else {
      return 0; // No discount for other promotions or no promotion
    }
  };

//Sardines: 25% discount
function applyDiscount(product, discountPercentage = 25) {
  // Validate discount percentage (optional)
  if (discountPercentage < 0 || discountPercentage > 100) {
    console.warn("Invalid discount percentage. Must be between 0 and 100.");
    return product.price; // Return original price for invalid discount
  }

  // Calculate discount amount
  const discountAmount = product.price * (discountPercentage / 100);

  // Apply discount and return discounted price
  return product.price - discountAmount;
}

//Buy three, get the cheapest one for free with any of the following: Shampoo (Large), Shampoo (Medium), Shampoo (Small)
function calculateBuy3GetCheapestFree(products) {
  // Filter products with the "buy 3 get 1 free" promotion
  const promotionalProducts = products.filter(
    (product) => product.promotion === "buy 3 get 1 free"
  );

  // Check if there are any promotional products
  if (!promotionalProducts.length) {
    return 0; // No products with the promotion, no discount
  }

  // Sort promotional products by price (ascending)
  const sortedProducts = promotionalProducts
    .slice()
    .sort((a, b) => a.price - b.price);

  // Calculate total price without discount
  let totalPrice = sortedProducts.reduce(
    (acc, product) => acc + product.price,
    0
  );

  // Apply discount (cheapest free)
  if (sortedProducts.length >= 3) {
    totalPrice -= sortedProducts[0].price; // Discount the cheapest item
  }

  return totalPrice;
}
