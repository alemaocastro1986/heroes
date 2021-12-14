import React from "react";

import { Container } from "./HeroBiography.styles";
import { HeroInfo } from "../../../../shared/contexts/HeroesContext";
import HeroBiographyListItem from "./components/HeroBiographyListItem/HeroBiographyListItem";
import HeroBiographyList from "./components/HeroBiographyList/HeroBiographyList";

interface HeroBiographyProps
  extends Pick<HeroInfo, "biography" | "appearance" | "work"> {}

const HeroBiography = ({ appearance, biography, work }: HeroBiographyProps) => {
  const formattedBiograph = React.useMemo(() => {
    return Object.entries(biography).map(([key, value]) => ({
      key: key.toUpperCase(),
      value: String(value),
    }));
  }, [biography]);

  const formattedAppearance = React.useMemo(() => {
    return Object.entries(appearance).map(([key, value]) => ({
      key: key.toUpperCase(),
      value: String(value),
    }));
  }, [appearance]);

  const formattedWork = React.useMemo(() => {
    return Object.entries(work).map(([key, value]) => ({
      key: key.toUpperCase(),
      value: String(value),
    }));
  }, [work]);

  return (
    <Container>
      <HeroBiographyList title="Biography">
        {formattedBiograph.map((bio) => (
          <HeroBiographyListItem
            key={bio.key}
            title={bio.key}
            content={bio.value}
          />
        ))}
      </HeroBiographyList>

      <HeroBiographyList title="Appearance">
        {formattedAppearance.map((appearance) => (
          <HeroBiographyListItem
            key={appearance.key}
            title={appearance.key}
            content={appearance.value}
          />
        ))}
      </HeroBiographyList>

      <HeroBiographyList title="Work">
        {formattedWork.map((work) => (
          <HeroBiographyListItem
            key={work.key}
            title={work.key}
            content={work.value}
          />
        ))}
      </HeroBiographyList>
    </Container>
  );
};

export default HeroBiography;
