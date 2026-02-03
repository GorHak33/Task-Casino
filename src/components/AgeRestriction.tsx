import { Typography } from "@mui/material";
import styled from "styled-components";
import ageBadge from "../assets/18+logo.png";

const AgeRestrictionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: auto;
`;

const AgeBadgeImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
`;

interface AgeRestrictionProps {
  text: string;
}

export const AgeRestriction = ({ text }: AgeRestrictionProps) => {
  return (
    <AgeRestrictionContainer>
      <AgeBadgeImage src={ageBadge} alt="18+" />
      <Typography
        variant="body2"
        sx={{
          color: "rgba(255, 255, 255, 0.9)",
          fontWeight: 500,
          fontSize: "0.875rem",
        }}
      >
        {text}
      </Typography>
    </AgeRestrictionContainer>
  );
};
