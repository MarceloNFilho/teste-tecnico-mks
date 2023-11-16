import { render, screen } from "@testing-library/react";
import { Header } from ".";
import CartProvider from "@/providers/cart";

it("header should render correctly", () => {
  render(
    <CartProvider>
      <Header />
    </CartProvider>
  );

  expect(screen.getByText("MKS")).toBeInTheDocument();
  expect(screen.getByText("Sistemas")).toBeInTheDocument();
  expect(screen.getByTestId("header-cart")).toBeInTheDocument();
});
