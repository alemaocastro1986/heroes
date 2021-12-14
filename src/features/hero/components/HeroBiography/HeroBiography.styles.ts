import styled from "styled-components";

export const Container = styled.div`
  grid-area: bio;
  padding: 0 1rem;

  display: flex;
  gap: 1rem;
  height: fit-content;

  @media (max-width: 720px) {
    margin: 20px 0;
    flex-direction: column;
  }
`;
