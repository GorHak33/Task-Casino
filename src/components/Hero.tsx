import { Button, Container } from "@mui/material";
import styled, { css } from "styled-components";
import type { GeoCode } from "../types";
import { geoThemes } from "../constants/themes";
import logoImage from "../assets/royalCasinoLogo.png";
import slotIcon from "../assets/gameIcon.png";

const HeroSection = styled.section`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
  padding-bottom: 40px;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const LogoImage = styled.img`
  width: 220px;
  max-width: 80%;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 6px 16px rgba(0, 0, 0, 0.6));

  @media (max-width: 600px) {
    width: 180px;
  }
`;

const SlotIcon = styled.div`
  width: 220px;
  height: 140px;
  border-radius: 24px;

  background-image: url(${slotIcon});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const HeroButton = styled(Button)<{ $geo: GeoCode }>`
  && {
    padding-inline: 48px;
    padding-block: 8px;
    border-radius: 999px;
    font-weight: 600;
    font-size: 16px;
    text-transform: none;
    background: ${({ $geo }) => geoThemes[$geo].accent};
    color: #fff;
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.6);

    &:hover {
      background: ${({ $geo }) => css`
        ${geoThemes[$geo].accent}
      `};
      filter: brightness(1.05);
      box-shadow: 0 16px 40px rgba(0, 0, 0, 0.75);
    }
  }
`;

interface HeroProps {
  geo: GeoCode;
  openGameText: string;
  onOpenGame: () => void;
}

export const Hero = ({ geo, openGameText, onOpenGame }: HeroProps) => {
  return (
    <HeroSection>
      <Container maxWidth="lg">
        <HeroContent>
          <LogoWrapper>
            <LogoImage src={logoImage} alt="Casino Royale logo" />
            <SlotIcon />
          </LogoWrapper>

          <HeroButton $geo={geo} size="large" onClick={onOpenGame}>
            {openGameText}
          </HeroButton>
        </HeroContent>
      </Container>
    </HeroSection>
  );
};
