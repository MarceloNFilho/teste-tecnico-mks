import { Product, ProductItem } from "../ProductItem";
import { ProductListContainer, ProductListWrapper } from "./styles";

interface ProductListProps {
  products: Product[];
}

export function ProductList({ products }: ProductListProps) {
  return (
    <ProductListContainer>
      <ProductListWrapper>
        {products.map((product) => {
          return <ProductItem key={product.id} product={product} />;
        })}
      </ProductListWrapper>
    </ProductListContainer>
  );
}
