import { Footer } from ".";
import { render, screen } from "@testing-library/react";

describe("Footer", () => {
  it("footer component should render correctly with product list", async () => {
    render(<Footer />);

    expect(
      screen.getByText("MKS sistemas © Todos os direitos reservados")
    ).toBeInTheDocument();
  });
});
