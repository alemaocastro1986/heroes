import styled from "styled-components";

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.div<ContainerProps>`
  height: 44px;
  border-radius: 8px;
  background: #e7e7e7;

  display: flex;
  overflow: hidden;
  transition: all 0.3s;

  border: 2px solid ${(props) => (props.isFocused ? "tomato" : "white")};
  input {
    height: 44px;
    flex: 1;
    border: none;
    background: transparent;
    padding: 0 16px;

    font-size: 18px;

    &:focus {
      outline: 0;
    }
  }

  button {
    padding: 0 16px;
    border: 0;
    background: tomato;
    /* border-radius: 0 8px 8px 0; */

    cursor: pointer;
    color: white;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
