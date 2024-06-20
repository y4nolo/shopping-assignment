export default basket =
  // list products
  function lookupBasketItems(basket, products) {
    // Initialize an empty array to store the looked up items
    const basketItems = [];

    // Loop through each item in the shopping basket
    for (const basketItem of basket.items) {
      products.then((resolvedProductsData) => {
        const actualProducts = resolvedProductsData.products;

        // Find the matching product in the catalogue (inside then)
        if (actualProducts && actualProducts.length > 0) {
          const catalogueProduct = actualProducts.find(
            (product) => product.id === basketItem.productId
          );
          // ... rest of the logic using catalogueProduct
        } else {
          console.warn("No products found in the catalogue");
          // Handle the case where there are no products
        }

        // Check if a matching product was found (inside then)
        if (product) {
          // Create a new object with details from both basket and catalogue
          const lookedUpItem = {
            ...basketItem,
            name: product.name,
            price: product.price,
            promotion: product.promotion,
          };

          // Add the looked up item to the basketItems array
          basketItems.push(lookedUpItem);
        } else {
          console.warn(
            `Product with id ${basketItem.productId} not found in catalogue`
          );
        }
      });
    }

    // Return the array of looked up basket items (may be empty initially)
    return basketItems;
  };

// subtotal - without discount
function calculateSubtotal(basketItems) {
  // Initialize a variable to store the subtotal
  let subtotal = 0;

  // Loop through each item in the basketItems array
  for (const item of basketItems) {
    // Multiply the price by the quantity and add it to the subtotal
    subtotal += item.price * item.quantity;
  }

  // Return the subtotal
  return subtotal;
}

//discount: The amount of money which must be subtracted from the subtotal in order to calculate the final price of the goods in the basket.
//check promotion exists
function hasProductPromotion(product) {
  // Extract the promotion details from the product line
  const promotionString = product.promotion;

  // Check if a function with the promotion name exists in basketpricer.js
  if (typeof basketpricer[promotionString] === "function") {
    return true;
  }

  return false;
}

function calculateDiscountedPrice(item) {
  // Discount logic based on promotion type
  let discount = 0;
  const promotion = item.promotion;
}

// Total - subtotal minus discount

function calculateTotal(subtotal) {
  return subtotal - discountPrice;
}
