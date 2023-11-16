import { render, waitFor } from "@testing-library/react";
import Home from "@/app/(home)/page";
import CartProvider from "@/providers/cart";
import { ProductList } from "../../components/ProductList";
import { QueryClient, QueryClientProvider } from "react-query";

jest.mock("../../components/ProductList", () => ({
  ProductList: jest.fn(),
}));

const queryClient = new QueryClient();

describe("Home", () => {
  it("page home should render correctly with product list", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <Home />
        </CartProvider>
      </QueryClientProvider>
    );

    await waitFor(() => {
      expect(ProductList).toHaveBeenCalled();
    });
  });
});
