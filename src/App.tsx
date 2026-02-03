import { useMemo, useState } from "react";
import type { SelectChangeEvent } from "@mui/material";
import styled from "styled-components";
import backgroundImage from "./assets/appBackground.png";
import type { GeoCode } from "./types";
import { translations } from "./constants/translations";
import { Hero, BottomPanel, GameOverlay } from "./components";

import "./App.css";

const PageRoot = styled.div<{ $geo: GeoCode }>`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  color: #ffffff;

  background-image: url(${backgroundImage});

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const App = () => {
  const [geo, setGeo] = useState<GeoCode>("default");
  const [isGameOpen, setIsGameOpen] = useState(false);

  const t = useMemo(() => translations[geo], [geo]);

  const handleGeoChange = (event: SelectChangeEvent<GeoCode>) => {
    const value = event.target.value as GeoCode;
    setGeo(value);
  };

  const handleOpenGame = () => {
    setIsGameOpen(true);
  };

  const handleCloseGame = () => {
    setIsGameOpen(false);
  };

  const gameUrl =
    "https://gateway.eva-digital-playground.com/v0/casino/games/launch?gameId=n2-novomatic-book-of-ra-deluxe&channel=desktop&partnerKey=0wl&lobbyUrl=https://chinchincasino.com&mode=demo&language=en";

  return (
    <PageRoot $geo={geo}>
      <Hero
        geo={geo}
        openGameText={t.openGame}
        onOpenGame={handleOpenGame}
      />

      <BottomPanel
        geo={geo}
        translations={{
          downloadTitle: t.downloadTitle,
          downloadSubtitle: t.downloadSubtitle,
          downloadCta: t.downloadCta,
          ageRestriction: t.ageRestriction,
          certified: t.certified,
          languageLabel: t.languageLabel,
          socialTitle: t.socialTitle,
        }}
        onGeoChange={handleGeoChange}
      />

      {isGameOpen && (
        <GameOverlay gameUrl={gameUrl} onClose={handleCloseGame} />
      )}
    </PageRoot>
  );
};

export default App;
