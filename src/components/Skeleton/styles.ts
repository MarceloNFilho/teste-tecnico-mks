import styled, { keyframes } from "styled-components";

const pulse = keyframes`
    0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .5;
  }
`;

export const SkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 105px - 34px);
  animation: ${pulse} 2s linear infinite;
`;

export const SkeletonGrid = styled.div`
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
export const SkeletonItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme["gray-100"]};
  border-radius: 8px;
  width: 212px;
  height: 322px;
  padding: 1.75rem 0.75rem;
  gap: 0.75rem;

  p {
    width: 100%;
    height: 3rem;
    background-color: ${(props) => props.theme["gray-200"]};
    border-radius: 5px;
  }

  button {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2rem;
    border: 0;
    background-color: ${(props) => props.theme["gray-200"]};
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  @media (max-width: 768px) {
    width: 251px;
  }
`;

export const SkeletonImage = styled.div`
  width: 138px;
  height: 138px;
  background-color: ${(props) => props.theme["gray-200"]};
  border-radius: 8px;
`;

export const SkeletonNameAndPrice = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 0.5rem;

  p {
    width: 100%;
    height: 1.5rem;
    background-color: ${(props) => props.theme["gray-200"]};
    border-radius: 5px;
  }

  span {
    width: 100%;
    height: 1.5rem;
    background-color: ${(props) => props.theme["gray-200"]};
    border-radius: 5px;
  }
`;
