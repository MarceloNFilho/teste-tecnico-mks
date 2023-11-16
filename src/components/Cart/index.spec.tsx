import { render, fireEvent, screen } from "@testing-library/react";
import React from "react";
import { CartSheet } from ".";
import { ICartContext } from "@/providers/cart";

const mockContextValues: ICartContext = {
  setCartIsOpen: jest.fn(),
  products: [
    {
      id: 1,
      name: "Produto 1",
      photo: "fake-photo",
      price: 100,
      quantity: 1,
    },
    {
      id: 2,
      name: "Product 2",
      photo: "fake-photo",
      price: 200,
      quantity: 1,
    },
  ],
  total: 300,
  cartIsOpen: false,
  AddProductToCart: jest.fn(),
  decreaseProductQuantity: jest.fn(),
  increaseProductQuantity: jest.fn(),
  removeProductFromCart: jest.fn(),
};

jest.mock("react", async () => {
  const actualReact = await jest.requireActual("react");
  return {
    ...actualReact,
    useContext: jest.fn().mockReturnValue(mockContextValues),
  };
});

describe("CartSheet component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders CartSheet with products", () => {
    render(<CartSheet />);
    expect(screen.getByText("Carrinho de compras")).toBeInTheDocument();
    expect(screen.getByTestId("close-cart-button")).toBeInTheDocument();
    expect(screen.getAllByTestId("cart-item")).toHaveLength(2);
    expect(screen.getByText("Total:")).toBeInTheDocument();
    expect(screen.getByText("R$300")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Finalizar Compra" })
    ).toBeInTheDocument();
  });

  it("closes the cart when close button is clicked", () => {
    render(<CartSheet />);
    const closeButton = screen.getByTestId("close-cart-button");
    fireEvent.click(closeButton);
    expect(mockContextValues.setCartIsOpen).toHaveBeenCalledWith(false);
  });

  it("handles empty cart", () => {
    const emptyCartContext = { ...mockContextValues, products: [] };
    (React.useContext as jest.Mock).mockReturnValue(emptyCartContext);
    render(<CartSheet />);
    expect(screen.getByText("Carrinho vazio.")).toBeInTheDocument();
    expect(screen.queryByTestId("cart-item")).toBeNull();
    expect(screen.getByText("Total:")).toBeInTheDocument();
    expect(screen.getByText("R$0")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Finalizar Compra" })
    ).toBeInTheDocument();
  });
});
