import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: calc(100vh - 80px);
  padding: 0 8px;

  main {
    max-width: 1120px;
    width: 100%;
    margin: 0 auto;
    padding: 8px;

    h1 {
      margin: 2rem 0;
      color: #999;
      font-weight: 300;

      span {
        font-weight: 900;
        color: tomato;
      }
    }
  }
`;

export const HeroesList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;
