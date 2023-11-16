import styled from "styled-components";
import Image from "next/image";

export const ProductItemContainer = styled.div`
  position: relative;
  height: 322px;
  background-color: ${(props) => props.theme.white};
  border-radius: 8px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.25);

  @media (max-width: 768px) {
    max-width: 251px;
    max-height: 328px;
  }

  button {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0.5rem 0;
    border: 0;
    gap: 0.75rem;
    margin-top: 0.75rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.white};

    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      opacity: 0.9;
    }
  }
`;

export const StyledImage = styled(Image)`
  max-height: 8.625rem;
`;

export const ProductItemInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.125rem 0.75rem 0;

  div {
    margin-top: 0.875rem;
    display: flex;
    width: 100%;
    align-items: baseline;
    justify-content: space-between;

    p {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 7rem;
      font-size: 1rem;
      color: ${(props) => props.theme["gray-600"]};
      -webkit-line-clamp: 2;
    }

    strong {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${(props) => props.theme["gray-500"]};
      color: ${(props) => props.theme.white};
      font-weight: bold;
      font-size: 1rem;

      height: 1.625rem;
      border-radius: 5px;
      padding: 0.25rem 0.375rem;
    }
  }

  p {
    margin-top: 0.5rem;
    font-size: 0.625rem;
    font-weight: 300;
    color: ${(props) => props.theme["gray-600"]};
  }
`;
