"use client";

import styled from "styled-components";

export const CartSheetContainer = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  box-shadow: -5px 0px 6px 0px rgba(0, 0, 0, 0.13);
  z-index: 1;
  width: 100%;
  max-width: 486px;
  height: 100%;
  background-color: ${(props) => props.theme.primary};

  @media (max-width: 768px) {
    max-width: 330px;
  }
`;

export const HeaderCartSheet = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2.25rem 3rem 0;

  h1 {
    display: flex;
    font-size: 1.75rem;
    flex-direction: column;
    color: ${(props) => props.theme.white};
  }

  @media (max-width: 768px) {
    padding: 1.5rem 2rem 0;
  }
`;

export const ButtonCLoseSheet = styled.button`
  display: flex;
  justify-content: center;
  font-size: 1.75rem;
  font-weight: 400;
  cursor: pointer;
  border: 0;
  width: 38px;
  height: 38px;
  border-radius: 100%;
  background-color: ${(props) => props.theme.black};
  color: ${(props) => props.theme.white};

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    color: ${(props) => props.theme.primary};
    font-size: 2.75rem;
    align-items: end;
  }
`;

export const ContentCartSheet = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: calc(4rem - 5px);
  flex: 1;
  gap: 1.75rem;
  padding: 0 3rem;
  overflow-y: scroll;
  height: 100%;
  max-height: 800px;
  padding-bottom: 206px;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    padding: 0 2rem;
    margin-top: 1.875rem;
    padding-bottom: 169px;
  }
`;

export const EmptyCart = styled.p`
  color: white;
  width: 100%;
  text-align: center;
`;

export const FooterCartSheet = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  z-index: 1;
  background-color: ${(props) => props.theme.primary};
  position: absolute;
  bottom: 0;
  width: 100%;

  button {
    display: flex;
    justify-content: center;
    padding: 2rem 0;
    background-color: ${(props) => props.theme.black};
    color: ${(props) => props.theme.white};
    font-weight: bold;
    font-size: 1.75rem;
    width: 100%;
    border: 0;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      opacity: 0.95;
    }

    @media (max-width: 768px) {
      font-size: 1.25rem;
    }
  }
`;

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 3rem 0;

  strong {
    color: ${(props) => props.theme.white};
    font-size: 1.75rem;
  }
`;
