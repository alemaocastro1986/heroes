import React from "react";

import SearchInput from "../../shared/components/SearchInput";

import { Container, PublishersLogos } from "./Home.styles";
import { HomePublisherLogo } from "./components/HomePubliserLogo";

import marvel_logo from "../../shared/assets/marvel_logo.png";
import dc_logo from "../../shared/assets/dc_logo.png";
import ic_logo from "../../shared/assets/image_comics_logo.png";
import dh_logo from "../../shared/assets/darkhorse_comics_logo.png";

export const HomePage: React.FC = () => {
  return (
    <Container>
      <main>
        <h1>
          Get your favorite <span>super hero</span> info.
        </h1>
        <SearchInput placeholder="what is your favorite super hero?" />

        <PublishersLogos>
          <HomePublisherLogo source={marvel_logo} alt="Marvel comics logo" />
          <HomePublisherLogo source={ic_logo} alt="Image comics logo" />
          <HomePublisherLogo source={dh_logo} alt="Dark horse comics logo" />
          <HomePublisherLogo source={dc_logo} alt="DC comics logo" />
        </PublishersLogos>
      </main>
    </Container>
  );
};
