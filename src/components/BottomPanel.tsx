import { Container } from "@mui/material";
import type { SelectChangeEvent } from "@mui/material";
import styled from "styled-components";
import type { GeoCode } from "../types";
import { geoThemes } from "../constants/themes";
import {
  DownloadCard,
  AgeRestriction,
  Certification,
  LanguageSelector,
  SocialMedia,
} from "./index";

const BottomPanelContainer = styled.footer<{ $geo: GeoCode }>`
  position: relative;
  background: ${({ $geo }) => geoThemes[$geo].footer};
  padding-block: 32px 24px;
  box-shadow: 0 -16px 32px rgba(0, 0, 0, 0.8);
`;

const BottomGrid = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  align-items: flex-start;
  width: 100%;

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  justify-content: flex-start;
  min-width: 0;

  & > * {
    max-width: 100%;
  }

  @media (max-width: 1200px) {
    flex: 1 1 100%;
    justify-content: center;
  }
`;

const MiddleColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  gap: 16px;
  flex: 1.6 1 0;
  min-width: 0;
  align-items: flex-start;

  & > * {
    width: auto;
    max-width: 360px;
  }

  @media (max-width: 1200px) {
    flex: 1 1 100%;
    align-items: center;

    & > * {
      width: 100%;
      max-width: 100%;
    }
  }
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1.2 1 0;
  min-width: 0;
  align-items: flex-end;

  & > * {
    width: auto;
  }

  @media (max-width: 1200px) {
    flex: 1 1 100%;
    align-items: center;

    & > * {
      width: 100%;
      max-width: 100%;
    }
  }
`;

interface BottomPanelProps {
  geo: GeoCode;
  translations: {
    downloadTitle: string;
    downloadSubtitle: string;
    downloadCta: string;
    ageRestriction: string;
    certified: string;
    languageLabel: string;
    socialTitle: string;
  };
  onGeoChange: (event: SelectChangeEvent<GeoCode>) => void;
}

export const BottomPanel = ({
  geo,
  translations,
  onGeoChange,
}: BottomPanelProps) => {
  return (
    <BottomPanelContainer $geo={geo}>
      <Container maxWidth="lg">
        <BottomGrid>
          <LeftColumn>
            <DownloadCard
              geo={geo}
              title={translations.downloadTitle}
              subtitle={translations.downloadSubtitle}
              ctaText={translations.downloadCta}
            />
          </LeftColumn>

          <MiddleColumn>
            <AgeRestriction text={translations.ageRestriction} />
            <Certification text={translations.certified} />
          </MiddleColumn>

          <RightColumn>
            <LanguageSelector
              geo={geo}
              label={translations.languageLabel}
              onChange={onGeoChange}
            />
            <SocialMedia title={translations.socialTitle} />
          </RightColumn>
        </BottomGrid>
      </Container>
    </BottomPanelContainer>
  );
};
