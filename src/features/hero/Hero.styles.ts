import styled from "styled-components";

import bgHero from "../../shared/assets/bg_heroes.jpg";

export const WrapperContainer = styled.main`
  position: relative;
  height: auto;
  &::before {
    content: "";
    position: absolute;
    /* bottom: 0;
    left: 0; */
    width: 100%;
    margin-top: auto;
    min-height: calc(100vh - 80px);
    background-image: url(${bgHero});
    background-size: cover;
    background-position: bottom;
    opacity: 0.1;

    @media (max-width: 1080px), (max-width: 720px) {
      background: none;
    }
  }
`;

export const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 320px auto auto auto;
  grid-template-rows: 54px auto 1fr;
  grid-template-areas:
    "name name name name"
    "image ps ps ps"
    "image bio bio bio";
  grid-gap: 4px;

  width: 100%;
  max-width: 1120px;
  margin: 0 auto;

  height: calc(100vh - 80px);
  padding: 1rem 8px;

  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
`;

export const Name = styled.div`
  grid-area: "name";
  max-height: 60px;

  small {
    display: block;
    color: tomato;
    font-size: 12px;
    line-height: 12px;
  }
  strong {
    font-size: 2rem;
  }

  @media (max-width: 720px) {
    width: 100%;
  }
`;

export const Image = styled.div`
  grid-area: image;
  max-width: 320px;
  img {
    max-width: 320px;
  }

  @media (max-width: 720px) {
    img {
      width: 100%;
    }
  }
`;
