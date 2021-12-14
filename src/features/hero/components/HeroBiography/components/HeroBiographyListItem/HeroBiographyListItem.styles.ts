import styled from "styled-components";

export const Container = styled.li`
  strong {
    font-size: 10px;
    color: gray;

    &::before {
      content: "#";
      margin-right: 0.1rem;
    }
  }
  span {
    display: block;
    color: #131314;
    font-size: 0.875rem;
  }
`;
