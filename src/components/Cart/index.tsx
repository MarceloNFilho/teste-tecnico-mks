import { useContext } from "react";
import { CartItem } from "./components/CartItem";
import {
  ButtonCLoseSheet,
  ContentCartSheet,
  EmptyCart,
  FooterCartSheet,
  HeaderCartSheet,
  CartSheetContainer,
  TotalPrice,
} from "./styles";
import { CartContext } from "@/providers/cart";

export function CartSheet() {
  const { setCartIsOpen, products, total } = useContext(CartContext);

  return (
    <CartSheetContainer>
      <HeaderCartSheet>
        <h1>
          Carrinho <span>de compras</span>
        </h1>

        <ButtonCLoseSheet
          data-testid="close-cart-button"
          onClick={() => setCartIsOpen(false)}
        >
          x
        </ButtonCLoseSheet>
      </HeaderCartSheet>

      <ContentCartSheet>
        {products.length > 0 ? (
          products.map((product) => {
            return (
              <CartItem
                data-test="cart-item"
                product={product}
                key={product.id}
              />
            );
          })
        ) : (
          <EmptyCart>Carrinho vazio.</EmptyCart>
        )}
      </ContentCartSheet>

      <FooterCartSheet>
        <TotalPrice>
          <strong>Total:</strong>
          <strong>R${total}</strong>
        </TotalPrice>

        <button>Finalizar Compra</button>
      </FooterCartSheet>
    </CartSheetContainer>
  );
}
