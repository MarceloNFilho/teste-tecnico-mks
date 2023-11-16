"use client";

import {
  DesktopProductTotalPrice,
  ProductInfos,
  ProductItem,
  ProductQuantity,
  ProductTotalPrice,
  QuantityAndPrice,
  StyledImage,
} from "./styles";
import { useContext } from "react";
import { CartContext, CartProduct } from "@/providers/cart";

interface CartItemProps {
  product: CartProduct;
}

export function CartItem({ product }: CartItemProps) {
  const {
    decreaseProductQuantity,
    increaseProductQuantity,
    removeProductFromCart,
  } = useContext(CartContext);

  const handleDecreaseProductQuantityClick = () => {
    decreaseProductQuantity(product.id);
  };

  const handleIncreaseProductQuantityClick = () => {
    increaseProductQuantity(product.id);
  };

  const handleRemoveProductFromCartClick = () => {
    removeProductFromCart(product.id);
  };

  return (
    <ProductItem>
      <button
        onClick={handleRemoveProductFromCartClick}
        className="remove-item"
      >
        x
      </button>
      <ProductInfos>
        <StyledImage
          src={product.photo}
          alt=""
          width={152}
          height={138}
          style={{ objectFit: "contain" }}
        />
        <p>{product.name}</p>

        <QuantityAndPrice>
          <ProductQuantity>
            <p>Qtd:</p>
            <div>
              <button onClick={handleDecreaseProductQuantityClick}>-</button>
              <span>{product.quantity}</span>
              <button onClick={handleIncreaseProductQuantityClick}>+</button>
            </div>
          </ProductQuantity>

          <ProductTotalPrice>
            <strong>R${product.price}</strong>
          </ProductTotalPrice>
        </QuantityAndPrice>

        <DesktopProductTotalPrice>
          <strong>R${product.price}</strong>
        </DesktopProductTotalPrice>
      </ProductInfos>
    </ProductItem>
  );
}
