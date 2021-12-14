import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  p {
    font-size: 12px;
    color: tomato;
  }

  div:first-child {
    display: flex;
    align-items: center;

    span {
      font-size: 12px;
      margin-left: auto;
    }
  }

  div:last-child {
    display: flex;
    align-items: center;

    progress[value] {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      height: 14px;
      min-width: 200px;
      flex: 1;
    }

    progress[value]::-webkit-progress-value {
      background-image: -webkit-linear-gradient(
          -45deg,
          transparent 33%,
          rgba(0, 0, 0, 0.1) 33%,
          rgba(0, 0, 0, 0.1) 66%,
          transparent 66%
        ),
        -webkit-linear-gradient(top, rgba(255, 255, 255, 0.25), rgba(0, 0, 0, 0.25)),
        -webkit-linear-gradient(left, #fffbaf, #fff200);

      border-radius: 2px;
      background-size: 35px 20px, 100% 100%, 100% 100%;
    }
  }
`;
