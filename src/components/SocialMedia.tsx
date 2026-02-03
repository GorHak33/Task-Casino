import { Typography } from "@mui/material";
import styled from "styled-components";

const SocialIconsRow = styled.div`
  display: flex;
  gap: 8px;

  @media (max-width: 1200px) {
    justify-content: center;
  }
`;

const SocialIcon = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`;

interface SocialMediaProps {
  title: string;
}

const SocialMediaContainer = styled.div`
  width: auto;
  text-align: right;

  @media (max-width: 1200px) {
    width: 100%;
    text-align: center;
  }
`;

export const SocialMedia = ({ title }: SocialMediaProps) => {
  return (
    <SocialMediaContainer>
      <Typography variant="body2" sx={{ mb: 1, opacity: 0.8 }}>
        {title}
      </Typography>
      <SocialIconsRow>
        <SocialIcon>IG</SocialIcon>
        <SocialIcon>FB</SocialIcon>
        <SocialIcon>TG</SocialIcon>
        <SocialIcon>YT</SocialIcon>
      </SocialIconsRow>
    </SocialMediaContainer>
  );
};
