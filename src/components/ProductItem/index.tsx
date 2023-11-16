import BagIcon from "../../../public/shopping-bag.svg";

import Image from "next/image";
import { ProductItemContainer, ProductItemInfos, StyledImage } from "./styles";
import { useContext } from "react";
import { CartContext } from "@/providers/cart";

export interface Product {
  id: number;
  name: string;
  brand?: string;
  photo: string;
  description?: string;
  price: number;
}

interface ProductItemProps {
  product: Product;
  quantity?: number;
}

export function ProductItem({ product, quantity = 1 }: ProductItemProps) {
  const { AddProductToCart, setCartIsOpen } = useContext(CartContext);

  const HandleAddProductToCart = () => {
    AddProductToCart({ ...product, quantity });
    setCartIsOpen(true);
  };

  return (
    <ProductItemContainer>
      <ProductItemInfos>
        <StyledImage
          src={product.photo}
          alt={product.name}
          width={152}
          height={138}
          style={{ objectFit: "contain" }}
        />
        <div>
          <p>{product.name}</p>
          <strong>R${product.price}</strong>
        </div>

        <p>{product.description}</p>
      </ProductItemInfos>

      <button data-testid="buy-button" onClick={HandleAddProductToCart}>
        <Image src={BagIcon} alt="" />
        Comprar
      </button>
    </ProductItemContainer>
  );
}
