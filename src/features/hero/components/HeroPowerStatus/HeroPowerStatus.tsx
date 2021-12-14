import React from "react";

import {
  Container,
  HeroPowerStatusList,
  Title,
} from "./HeroPowerStatus.styles";
import { HeroInfo } from "../../../../shared/contexts/HeroesContext";
import HeroPowerStatusItem from "../HeroPowerStatusItem/HeroPowerStatusItem";

interface HeroPowerStatusProps extends Pick<HeroInfo, "powerstats"> {}

const HeroPowerStatus: React.FC<HeroPowerStatusProps> = ({ powerstats }) => {
  const formattedPowerStatus = React.useMemo(() => {
    return Object.entries(powerstats).map(([key, value]) => ({
      key: key.toUpperCase(),
      value,
    }));
  }, [powerstats]);

  return (
    <Container>
      <Title>Power Status</Title>
      <HeroPowerStatusList>
        {formattedPowerStatus.map((power) => (
          <HeroPowerStatusItem
            key={power.key}
            powerName={power.key}
            powerValue={power.value}
          />
        ))}
      </HeroPowerStatusList>
    </Container>
  );
};

export default HeroPowerStatus;
