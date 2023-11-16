import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  height: 34px;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme["gray-100"]};

  p {
    font-size: 0.75rem;
    color: ${(props) => props.theme.black};
  }
`;
