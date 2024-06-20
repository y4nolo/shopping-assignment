const catalogue = import("./src/index/catalogue");
import lookupBasketItems from "./src/components/basket";
import calculateSubtotal from "./src/components/basket";
const basketPricer = import("./src/utils/basketPricer");

//Basket 1: Baked Beans x 4, Biscuits x 1
const shoppingBasketOne = {
  items: [
    { productId: 2, quantity: 4 },
    { productId: 3, quantity: 1 },
  ],
};

//Basket 2: Baked Beans x 2, Biscuits x 1, Sardines x 2
const shoppingBasketTwo = {
  items: [
    { productId: 2, quantity: 2 },
    { productId: 3, quantity: 1 },
    { productId: 1, quantity: 2 },
  ],
};

//Basket 3: Shampoo (Large) * 3, Shampoo (Medium) x 1, Shampoo (Small) x 2
const shoppingBasketThree = {
  items: [
    { productId: 6, quantity: 3 },
    { productId: 5, quantity: 1 },
    { productId: 4, quantity: 2 },
  ],
};

test("Basket One: 4 Baked Beans, 1 Biscuit", () => {
  const basket = shoppingBasketOne;

  // Lookup basket items with actual catalogue
  const lookedUpBasket = lookupBasketItems(basket, catalogue);

  // Calculate subtotal
  const subtotal = calculateSubtotal(lookedUpBasket);

  // Calculate total discount (implemented in test file)
  const discount = calculateTotalDiscount(lookedUpBasket);

  // Calculate total price
  const total = subtotal - discount;
  expect(subtotal).toBeCloseTo(5.07);
  expect(discount).toBeGreaterThanOrEqual(0);
  expect(total).toBe(5.07);
});

test("Basket Two: 2 Baked Beans, 1 Biscuit, 2 Sardines (25% Discount)", () => {
  const basket = shoppingBasketTwo;

  // Lookup basket items with actual catalogue
  const lookedUpBasket = lookupBasketItems(basket, catalogue);

  // Calculate subtotal
  const subtotal = calculateSubtotal(lookedUpBasket);

  // Calculate total discount (implemented in test file)
  const discount = calculateTotalDiscount(lookedUpBasket);

  // Calculate total price
  const total = subtotal - discount;

  // Assertions for expected results (considering discount on Sardines)
  expect(subtotal).toBeCloseTo(6.96); // (2 Beans * 0.99) + 1.20 + (2 Sardines * 1.89)
  expect(discount).toBeCloseTo(0.95); // 25% discount on 2 Sardines (0.47 per Sardine)
  expect(total).toBe(6.01); // Subtotal minus discount
});

test("Basket Three: 3 Large Shampoos, 1 Medium Shampoo, 2 Small Shampoos (Buy 3 Get 1 Free)", () => {
  const basket = shoppingBasketThree;

  // Lookup basket items with actual catalogue
  const lookedUpBasket = lookupBasketItems(basket, catalogue);

  // Calculate subtotal
  const subtotal = calculateSubtotal(lookedUpBasket);

  // Calculate total discount (implemented in test file)
  const discount = calculateTotalDiscount(lookedUpBasket);

  // Calculate total price
  const total = subtotal - discount;

  expect(total).toBe(11.5); // Subtotal minus discount
});
