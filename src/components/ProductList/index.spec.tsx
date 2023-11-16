import CartProvider from "@/providers/cart";
import { ProductList } from "../ProductList";
import { render } from "@testing-library/react";
import { ProductItem } from "../ProductItem";

jest.mock("../ProductItem", () => ({
  ProductItem: jest.fn(),
}));

const products = [
  {
    id: 1,
    name: "Iphone 14 Pro Max",
    description:
      "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    photo:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MPTP3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1666124656436",
    price: 7500,
  },
];

it("ProductList should renders product items correctly", () => {
  render(
    <CartProvider>
      <ProductList products={products} />
    </CartProvider>
  );

  expect(ProductItem).toHaveBeenCalled();
});
