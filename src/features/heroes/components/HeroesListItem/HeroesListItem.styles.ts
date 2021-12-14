import styled, { css } from "styled-components";

interface ContainerProps {
  imgBg?: string;
  hovered?: boolean;
}

export const Container = styled.li<ContainerProps>`
  width: 200px;
  padding: 8px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;

  border: 1px solid #eee;
  cursor: pointer;

  div {
    width: 100%;
    height: 240px;
    border-radius: 8px;

    ${(props) =>
      props.imgBg &&
      css`
        background-image: url(${props.imgBg});
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        filter: grayscale(100%);
        opacity: 0.8;

        transition: all 0.3s;

        &:hover {
          filter: grayscale(0%);
          opacity: 1;
        }
      `}
  }

  strong {
    margin-top: 0.5rem;
    font-weight: 900;
    font-size: 18px;
  }

  small {
    color: tomato;
    font-weight: 400;
  }

  @media (max-width: 720px) {
    width: 100%;

    strong,
    small {
      width: 100%;
      text-align: center;
    }
  }
`;
