"use Client";

import Image from "next/image";
import styled from "styled-components";

export const ProductItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1.25rem;
  background-color: ${(props) => props.theme.white};
  border-radius: 8px;
  margin-top: 5px;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  .remove-item {
    position: absolute;
    background-color: ${(props) => props.theme.black};
    color: ${(props) => props.theme.white};
    display: flex;
    justify-content: center;
    font-size: 0.875rem;
    top: -5%;
    right: -1%;
    border-radius: 100%;
    width: 18px;
    height: 18px;
    cursor: pointer;
    border: 0;

    @media (max-width: 768px) {
      background-color: transparent;
      color: ${(props) => props.theme.black};
      font-size: 2.625rem;
      top: 0px;
      right: 14px;
    }
  }
`;

export const ProductInfos = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
  gap: 0.75rem;

  p {
    width: 7rem;
    color: ${(props) => props.theme["gray-600"]};
  }

  @media (max-width: 768px) {
    display: grid;
    width: 100%;
    justify-content: center;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(3, 3fr, 1fr, 2fr);
    gap: 0.625rem;

    p {
      font-size: 1rem;
      text-align: center;
      width: 100%;
    }
  }
`;

export const StyledImage = styled(Image)`
  object-fit: contain;
  width: min-content;
  height: 57px;

  @media (max-width: 768px) {
    height: 6rem;
  }
`;

export const ProductQuantity = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;

  p {
    width: 50px;
    font-size: 0.5rem;
    color: ${(props) => props.theme.black};
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    border: solid 1px #bfbfbf;
    border-radius: 4px;
    width: 50px;
    height: 20px;
  }

  span {
    font-size: 0.5rem;

    &::before {
      content: "|";
      margin: 0 2px;
      color: #bfbfbf;
    }

    &::after {
      content: "|";
      margin: 0 2px;
      color: #bfbfbf;
    }
  }

  button {
    font-size: 0.75rem;
    cursor: pointer;
    border: 0;
    width: 100%;
    background-color: ${(props) => props.theme.white};
  }

  @media (max-width: 768px) {
    height: 34.5px;
    align-items: start;

    div {
      width: 97.37px;
      height: 100%;
    }

    p {
      display: none;
    }

    span {
      font-size: 1.25rem;
    }

    button {
      font-size: 1.5rem;
    }
  }
`;

export const ProductTotalPrice = styled.strong`
  font-size: 0.875rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-self: end;
    background-color: ${(props) => props.theme["gray-500"]};
    color: ${(props) => props.theme.white};
    width: 84px;
    height: 34.5px;
    border-radius: 5px;
    padding: 0.75rem 1rem;
  }
`;

export const DesktopProductTotalPrice = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const QuantityAndPrice = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    grid-template-columns: repeat(1, 1fr);

    strong {
      display: none;
    }
  }
`;
