import { render, screen } from "@testing-library/react";
import { ProductItem } from ".";
import CartProvider from "@/providers/cart";

const product = {
  id: 1,
  name: "Iphone 14 Pro Max",
  description:
    "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
  photo:
    "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MPTP3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1666124656436",
  price: 7500,
};

it("product item should show photo, name, price, description", async () => {
  render(
    <CartProvider>
      <ProductItem product={product} />
    </CartProvider>
  );

  expect(await screen.findByText("Iphone 14 Pro Max")).toBeInTheDocument();
  expect(await screen.findByText("R$7500")).toBeInTheDocument();
  expect(
    await screen.findByText(
      "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
    )
  ).toBeInTheDocument();
  const productImage = screen.getByAltText("Iphone 14 Pro Max");
  expect(productImage).toBeInTheDocument();
  expect(await screen.findByText("Comprar")).toBeInTheDocument();
});
