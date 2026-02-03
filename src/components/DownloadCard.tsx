import { Button, Typography } from "@mui/material";
import styled from "styled-components";
import type { GeoCode } from "../types";
import { geoThemes } from "../constants/themes";
import logoImage from "../assets/royalCasinoLogo.png";
import mascotImage from "../assets/personImg.png";

const DownloadCardWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
  min-width: 0;
  flex-wrap: nowrap;

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
`;

const MascotImage = styled.div`
  width: 260px;
  height: 235px;
  min-width: 260px;
  border-radius: 32px;
  flex-shrink: 0;
  background-image: url(${mascotImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 1200px) {
    display: none;
  }
`;

const LogoImageForCard = styled.img`
  width: 150px;
  max-width: 80%;
  height: auto;
  object-fit: contain;

  @media (max-width: 600px) {
    width: 180px;
  }
`;

const DownloadCardContainer = styled.div`
  padding: 24px 32px;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background:
    radial-gradient(circle at 0 0, rgba(255, 255, 255, 0.14), transparent 60%),
    rgba(0, 0, 0, 0.5);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.08);
  min-width: 280px;
  flex: 0 1 auto;
  width: auto;

  @media (max-width: 1200px) {
    width: 100%;
    max-width: 100%;
  }

  @media (max-width: 600px) {
    padding: 20px;
    min-width: auto;
  }
`;

const InstallButton = styled(Button)<{ $geo: GeoCode }>`
  && {
    margin-top: 16px;
    border-radius: 999px;
    padding-inline: 32px;
    text-transform: none;
    font-weight: 600;
    background: ${({ $geo }) => geoThemes[$geo].accent};
    color: #fff;
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.7);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    &:hover {
      filter: brightness(1.05);
      background: ${({ $geo }) => geoThemes[$geo].accent};
    }
  }
`;

interface DownloadCardProps {
  geo: GeoCode;
  title: string;
  subtitle: string;
  ctaText: string;
}

export const DownloadCard = ({
  geo,
  title,
  subtitle,
  ctaText,
}: DownloadCardProps) => {
  return (
    <DownloadCardWrapper>
      <MascotImage />
      <DownloadCardContainer>
        <LogoImageForCard src={logoImage} alt="Casino Royale logo" />
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            mb: 0.5,
            letterSpacing: 0.06,
            textTransform: "uppercase",
          }}
        >
          {title}
        </Typography>
        <Typography variant="body2" sx={{ opacity: 0.8 }}>
          {subtitle}
        </Typography>

        <InstallButton $geo={geo} variant="contained">
          {ctaText}
        </InstallButton>
      </DownloadCardContainer>
    </DownloadCardWrapper>
  );
};
