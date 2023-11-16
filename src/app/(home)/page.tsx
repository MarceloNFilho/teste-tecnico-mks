"use client";

import { useContext } from "react";
import { Container } from "./styles";
import { CartSheet } from "@/components/Cart";
import { CartContext } from "@/providers/cart";
import { ProductList } from "../../components/ProductList";
import { useQuery } from "react-query";
import { api } from "@/lib/axios";
import { Skeleton } from "@/components/Skeleton";

export default function Home() {
  const { cartIsOpen } = useContext(CartContext);
  const { data, isLoading } = useQuery("products", async () => {
    const response = await api.get("/products", {
      params: {
        page: 1,
        rows: 8,
        sortBy: "id",
        orderBy: "DESC",
      },
    });
    return response.data;
  });

  if (isLoading) {
    return <Skeleton />;
  }

  return (
    <Container>
      {cartIsOpen && <CartSheet />}
      <ProductList products={data.products} />
    </Container>
  );
}
