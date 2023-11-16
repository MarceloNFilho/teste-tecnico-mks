import styled from "styled-components";

export const ProductListContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 34px);
`;

export const ProductListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.875rem;
  max-width: 938px;
  margin: auto;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 1.125rem;
    margin-top: 1.125rem;
  }
`;
