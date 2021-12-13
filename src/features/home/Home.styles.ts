import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 80px);

  display: flex;
  justify-content: center;
  align-items: center;

  main {
    margin-top: -80px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: 600px;

    h1 {
      font-size: 4rem;

      span {
        color: tomato;
      }
    }
  }
`;
