import { HeaderCartButton, HeaderContainer, StyledImage } from "./styles";
import cartIcon from "../../../public/cart-icon.svg";
import { useContext } from "react";
import { CartContext } from "@/providers/cart";

export function Header() {
  const { setCartIsOpen, products } = useContext(CartContext);

  return (
    <HeaderContainer>
      <p>
        MKS <span>Sistemas</span>
      </p>

      <HeaderCartButton
        data-testid="header-cart"
        onClick={() => setCartIsOpen(true)}
      >
        <StyledImage src={cartIcon} alt="" />

        <span>
          {products.reduce((acc, product) => {
            return acc + product.quantity;
          }, 0)}
        </span>
      </HeaderCartButton>
    </HeaderContainer>
  );
}
