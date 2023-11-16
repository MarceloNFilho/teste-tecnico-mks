"use client";

import styled from "styled-components";
import Image from "next/image";

export const HeaderContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.primary};
  display: flex;
  align-items: center;
  padding: 1.75rem 4rem;
  justify-content: space-between;

  p {
    font-size: 2.5rem;
    color: ${(props) => props.theme.white};
    font-weight: 600;

    span {
      font-size: 1.25rem;
      font-weight: 200;
    }
  }
  @media (max-width: 768px) {
    padding: 0.625rem 1.25rem;

    p {
      font-size: 2rem;

      span {
        font-size: 1rem;
      }
    }
  }
`;

export const HeaderCartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5.625rem;
  height: 45px;
  gap: 1rem;
  background-color: ${(props) => props.theme.white};
  color: ${(props) => props.theme.black};
  border-radius: 8px;
  padding: 1rem;
  cursor: pointer;
  border: 0;
  transition: all 0.2s;

  &:hover {
    opacity: 0.9;
  }

  span {
    font-size: 1.125rem;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    width: 3.25rem;
    height: 1.625rem;

    span {
      font-size: 0.75rem;
    }
  }
`;

export const StyledImage = styled(Image)`
  width: 19px;
  height: 18px;

  @media (max-width: 768px) {
    width: 10.98px;
    height: 10.4px;
  }
`;
