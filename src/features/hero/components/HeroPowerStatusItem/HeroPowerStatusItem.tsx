import React from "react";

import { Container } from "./HeroPowerStatusItem.styles";

interface HeroPowerStatusItemProps {
  powerName: string;
  powerValue: number;
}

const HeroPowerStatusItem = ({
  powerName,
  powerValue,
}: HeroPowerStatusItemProps) => {
  return (
    <Container>
      <div>
        <p>{powerName}</p> <span>{powerValue}</span>
      </div>
      <div>
        <progress max="100" value={powerValue}></progress>
      </div>
    </Container>
  );
};

export default HeroPowerStatusItem;
